import type { MetadataRoute } from 'next'
import { getSDCMSMetadata } from '../lib/sdcms'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gla-adv.vercel.app'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { 
      url: baseUrl, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/sobre`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/servicos`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/imprensa`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.6 
    },
    { 
      url: `${baseUrl}/blog`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/contato`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.7 
    },
  ]
  
  // Dynamic blog posts from SDCMS
  try {
    const metadata = await getSDCMSMetadata()
    const blogPosts = (metadata.posts || []).map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
    return [...staticPages, ...blogPosts]
  } catch (error) {
    console.error('Failed to fetch SDCMS posts for sitemap:', error)
    return staticPages
  }
}
