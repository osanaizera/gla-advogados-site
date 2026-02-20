import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

import { verifySdcmsSignature } from "@/lib/sdcms-webhook";

const WebhookSchema = z.object({
  event: z.enum(["content.published", "content.updated", "content.unpublished", "content.deleted"]),
  emittedAt: z.string(),
  clientId: z.string(),
  siteId: z.string(),
  post: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    type: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
    seoTitle: z.string().nullable(),
    seoDescription: z.string().nullable(),
    seoImage: z.string().nullable(),
    canonicalUrl: z.string().nullable(),
  }),
  previousSlug: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const secret = process.env.CMS_WEBHOOK_SECRET ?? "";
  if (!secret) {
    return NextResponse.json({ ok: false, error: "Missing CMS_WEBHOOK_SECRET" }, { status: 500 });
  }

  const timestamp = req.headers.get("x-sdcms-timestamp") ?? "";
  const signature = req.headers.get("x-sdcms-signature") ?? "";
  if (!timestamp || !signature) {
    return NextResponse.json({ ok: false, error: "Missing signature headers" }, { status: 400 });
  }

  // Basic replay protection: reject old timestamps (10 min window)
  const ts = Number(timestamp);
  if (!Number.isFinite(ts)) {
    return NextResponse.json({ ok: false, error: "Invalid timestamp" }, { status: 400 });
  }
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - ts) > 10 * 60) {
    return NextResponse.json({ ok: false, error: "Stale timestamp" }, { status: 401 });
  }

  const body = await req.text();
  const ok = verifySdcmsSignature({ secret, signatureHex: signature, timestamp, body });
  if (!ok) {
    return NextResponse.json({ ok: false, error: "Invalid signature" }, { status: 401 });
  }

  let json: unknown;
  try {
    json = JSON.parse(body);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = WebhookSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const payload = parsed.data;

  // Invalidate CMS fetch cache
  revalidateTag("cms-posts", { expire: 0 });

  // Public pages that depend on CMS posts
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${payload.post.slug}`);
  if (payload.previousSlug) revalidatePath(`/blog/${payload.previousSlug}`);

  return NextResponse.json({ ok: true, event: payload.event, slug: payload.post.slug });
}
