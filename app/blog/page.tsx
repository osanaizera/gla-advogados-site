import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../utils/formatters';

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  seoImage: string;
  publishedAt: string;
  tags: string[];
  authorName: string;
}

// Fetch blog posts
async function getBlogPosts() {
  const apiUrl = `${process.env.CMS_BASE_URL}/api/public/content?type=BLOG&limit=6`;
  
  try {
    const res = await fetch(apiUrl, {
      headers: {
        'x-api-key': process.env.CMS_API_KEY || '',
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const data = await res.json();
    return data.data as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export const metadata = {
  title: 'Blog | GLA Advogados',
  description: 'Confira nossos artigos, análises e novidades sobre Direito Trabalhista Empresarial.',
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section className="noise" style={{ background: '#F8F8F8', minHeight: '40vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="container-gla relative z-10" style={{ paddingBottom: '72px', paddingTop: '200px' }}>
          <span className="label-section mb-8" style={{ display: 'flex' }}>Blog</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: '#1A1714',
            maxWidth: '640px',
          }}>
            Artigos e{' '}
            <em style={{ fontWeight: 400, fontStyle: 'italic' }}>Análises</em>
          </h1>
          <div className="line-reveal mt-8" style={{ animationDelay: '0.3s' }} />
          <p style={{ marginTop: '24px', fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', maxWidth: '480px', fontWeight: 400 }}>
            Mantenha-se informado sobre as tendências e novidades do Direito Trabalhista Empresarial.
          </p>
        </div>
      </section>

      {/* ===== GRID DE BLOG POSTS ===== */}
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          {/* Decorative letter */}
          <span
            className="hidden md:block absolute select-none pointer-events-none"
            style={{ top: '-20px', right: '0', fontSize: '200px', fontWeight: 300, color: '#1A1714', opacity: 0.03, lineHeight: 1, letterSpacing: '-0.04em' }}
            aria-hidden="true"
          >
            B
          </span>

          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#78716C', marginBottom: '20px' }}>
                Nenhum artigo encontrado
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#78716C' }}>
                Novos conteúdos serão publicados em breve.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 60}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div
                      className="h-full flex flex-col service-card"
                      style={{
                        padding: '0',
                        border: '1px solid #E7E5E4',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                    >
                      {/* Featured Image */}
                      <div style={{ height: '220px', position: 'relative' }}>
                        <Image
                          src={post.seoImage || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1212'}
                          alt={post.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-grow p-8">
                        {/* Date & Tags */}
                        <div className="flex items-center gap-4 mb-4">
                          <span style={{ fontSize: '13px', color: '#78716C' }}>
                            {formatDate(post.publishedAt)}
                          </span>
                          {post.tags && post.tags.length > 0 && (
                            <span
                              style={{
                                fontSize: '12px',
                                padding: '2px 10px',
                                borderRadius: '12px',
                                background: 'rgba(192, 39, 45, 0.08)',
                                color: '#C0272D',
                              }}
                            >
                              {post.tags[0]}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            lineHeight: 1.3,
                            color: '#1A1714',
                            marginBottom: '12px',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p
                          style={{
                            fontSize: '15px',
                            lineHeight: 1.6,
                            color: '#78716C',
                            marginBottom: '24px',
                            flex: 1,
                          }}
                        >
                          {post.excerpt}
                        </p>

                        {/* Author */}
                        {post.authorName && (
                          <div className="mt-auto">
                            <p style={{ fontSize: '14px', color: '#78716C' }}>
                              Por <span style={{ color: '#1A1714' }}>{post.authorName}</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}