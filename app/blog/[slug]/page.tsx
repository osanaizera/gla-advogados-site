import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import ScrollReveal from '../../components/ScrollReveal';

// Define BlogPost type
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  jsonLd: any;
  seoTitle: string;
  seoDescription: string;
  seoImage: string;
  publishedAt: string;
  authorName: string;
}

// Function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

// Fetch the blog post
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const apiUrl = `${process.env.CMS_BASE_URL}/api/public/content/${slug}`;
  
  try {
    const res = await fetch(apiUrl, {
      headers: {
        'x-api-key': process.env.CMS_API_KEY || '',
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      return null;
    }
    
    const data = await res.json();
    return data.data as BlogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Artigo não encontrado | GLA Advogados',
    };
  }
  
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription,
      images: [post.seoImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return (
      <section className="container-gla" style={{ paddingTop: '240px', paddingBottom: '120px', minHeight: '80vh' }}>
        <div className="text-center">
          <h1 style={{ fontSize: '2rem', color: '#1A1714', marginBottom: '24px' }}>Artigo não encontrado</h1>
          <p style={{ fontSize: '1.1rem', color: '#78716C', marginBottom: '32px' }}>
            O artigo que você está procurando pode ter sido removido ou está temporariamente indisponível.
          </p>
          <Link href="/blog" className="btn-outline">
            Voltar para o Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.jsonLd || {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.seoImage,
            "datePublished": post.publishedAt,
            "author": {
              "@type": "Person",
              "name": post.authorName
            }
          })
        }}
      />
      
      {/* Hero */}
      <section
        className="noise relative flex items-end"
        style={{ minHeight: '60vh' }}
      >
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src={post.seoImage || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1212'}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.95) 100%)',
            }}
          />
        </div>
        
        <div className="container-gla relative z-10" style={{ paddingBottom: '72px', paddingTop: '200px', width: '100%' }}>
          <ScrollReveal>
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#78716C',
                marginBottom: '24px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7 7M5 12l7-7" />
              </svg>
              Voltar para o Blog
            </Link>
            
            <div style={{ maxWidth: '800px' }}>
              <h1 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: '#1A1714',
                marginBottom: '24px',
              }}>
                {post.title}
              </h1>
              
              <div className="flex items-center flex-wrap gap-x-6 gap-y-4">
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: '14px', color: '#78716C', fontWeight: 500 }}>
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
                
                {post.authorName && (
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: '14px', color: '#78716C' }}>
                      por <span style={{ color: '#1A1714', fontWeight: 500 }}>{post.authorName}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Content */}
      <section style={{ background: '#FFFFFF', paddingTop: '72px', paddingBottom: '120px' }}>
        <div className="container-gla">
          <ScrollReveal>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div
                className="blog-content"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: '#1A1714',
                }}
              >
                <ReactMarkdown>
                  {post.content}
                </ReactMarkdown>
              </div>
              
              <div
                style={{
                  marginTop: '64px',
                  padding: '32px',
                  borderRadius: '20px',
                  background: '#F8F8F8',
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1A1714', marginBottom: '16px' }}>
                  Precisa de orientação jurídica especializada?
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#78716C', marginBottom: '24px' }}>
                  Solicite uma análise do cenário jurídico trabalhista da sua organização.
                </p>
                <Link href="/contato" className="btn-red">
                  Solicitar Análise Jurídica
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

// Add CSS for the blog content
export const blogContentStyles = `
.blog-content h2 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1A1714;
  letter-spacing: -0.02em;
}

.blog-content h3 {
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 1.8rem;
  margin-bottom: 0.8rem;
  color: #1A1714;
  letter-spacing: -0.01em;
}

.blog-content p {
  margin-bottom: 1.5rem;
  color: #1A1714;
}

.blog-content ul, .blog-content ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.blog-content li {
  margin-bottom: 0.5rem;
}

.blog-content a {
  color: #C0272D;
  text-decoration: underline;
}

.blog-content blockquote {
  border-left: 4px solid #C0272D;
  padding-left: 1rem;
  font-style: italic;
  margin: 1.5rem 0;
  color: #78716C;
}

.blog-content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 2rem 0;
}

.blog-content pre {
  background: #F8F8F8;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.blog-content code {
  background: #F8F8F8;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
`;