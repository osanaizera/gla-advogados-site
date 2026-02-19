import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './components/ScrollReveal';
import { formatDate } from './utils/formatters';

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

async function getLatestPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/public/content?type=BLOG&limit=3`,
      {
        headers: { 'x-api-key': process.env.CMS_API_KEY || '' },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.data as BlogPost[];
  } catch {
    return [];
  }
}

export default async function Home() {
  const latestPosts = await getLatestPosts();
  return (
    <>
      {/* =====================================================
          SECTION 1 — CINEMATIC HERO (Ajustada para fit viewport)
          ===================================================== */}
      <section
        className="noise relative flex flex-col items-center justify-center"
        style={{ height: '100vh', maxHeight: '1000px', minHeight: '600px', overflow: 'hidden' }}
      >
        {/* Background photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* White overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.95) 100%)',
          }}
        />

        {/* Hero content — CENTRALIZADO E RESPONSIVO */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8" style={{ paddingTop: '0', paddingBottom: '120px' }}>
          <div style={{ maxWidth: '900px' }}>
            {/* Eyebrow with red line above */}
            <div
              className="hero-fade flex flex-col items-center gap-3 mb-8 md:mb-12"
              style={{ animationDelay: '0s' }}
            >
              <span style={{
                width: '40px',
                height: '2px',
                background: '#C0272D',
                display: 'block',
              }} />
              <span style={{
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.2em',
                color: '#656055',
              }}>
                Direito Trabalhista Empresarial
              </span>
            </div>

            {/* H1 — Atualizado com nova tipografia */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              fontWeight: 600,
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#0F0D0B',
              marginBottom: '0',
            }}>
              <span className="kinetic-word" style={{ animationDelay: '0.15s' }}>
                Cada decisão trabalhista
              </span>
              <span className="kinetic-word" style={{ animationDelay: '0.35s' }}>
                custa dinheiro. Nós garantimos
              </span>
              <span className="kinetic-word" style={{ animationDelay: '0.55s', fontStyle: 'italic' }}>
                que custem menos.
              </span>
            </h1>

            {/* Red line — centered */}
            <div className="hero-fade flex justify-center mt-8" style={{ animationDelay: '0.85s' }}>
              <div className="line-reveal-center" style={{ animationDelay: '0.85s' }} />
            </div>

            {/* Subtitle */}
            <p
              className="hero-fade"
              style={{
                animationDelay: '1.05s',
                fontSize: '1.15rem',
                lineHeight: 1.5,
                color: '#656055',
                maxWidth: '580px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '28px',
                fontWeight: 500,
                fontFamily: 'var(--font-source-serif), Georgia, serif',
              }}
            >
              Assessoria jurídica trabalhista para empresas com 100 a 5.000+ colaboradores. Do compliance preventivo à defesa em litígios complexos — com 95% de taxa de sucesso.
            </p>

            {/* CTAs — Atualizados */}
            <div className="hero-fade flex flex-wrap items-center justify-center gap-4 mt-10" style={{ animationDelay: '1.25s' }}>
              <Link href="/contato" className="btn-flora">
                Solicitar Análise Jurídica
                <span className="btn-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link href="/sobre" className="btn-outline">
                Conheça o escritório
              </Link>
            </div>
          </div>
        </div>

        {/* Floating glass metrics */}
        <div className="absolute -bottom-12 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 w-full px-4 sm:px-6" style={{ maxWidth: '900px' }}>
          <div className="hero-fade glass" style={{ animationDelay: '1.5s', padding: '24px 20px sm:28px sm:36px' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: '95%', label: 'Taxa de sucesso' },
                { value: '500+', label: 'Empresas assessoradas' },
                { value: '15+', label: 'Anos de atuação' },
                { value: '5+', label: 'Estados de atuação' },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <span style={{
                    display: 'block',
                    fontSize: 'clamp(24px, 4vw, 36px)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    letterSpacing: '-0.03em',
                    color: '#0F0D0B',
                    lineHeight: 1,
                  }}>
                    {metric.value}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                    color: '#656055',
                    marginTop: '8px',
                    display: 'block',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase' as const,
                  }}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — ABOUT
          ===================================================== */}
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0 100px', marginTop: '60px' }}>
        <div className="container-gla relative z-10">
          {/* Decorative oversized number */}
          <span
            className="hidden md:block absolute select-none pointer-events-none"
            style={{
              top: '-40px',
              right: '0',
              fontSize: '220px',
              fontWeight: 600,
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#0F0D0B',
              opacity: 0.03,
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
            aria-hidden="true"
          >
            01
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
            {/* Text: 3 of 5 cols */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <span className="label-section mb-8" style={{ display: 'flex' }}>Quem somos</span>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  color: '#0F0D0B',
                  marginBottom: '28px',
                  maxWidth: '520px',
                }}>
                  A gestão do seu passivo trabalhista{' '}
                  <em style={{ fontWeight: 600, fontStyle: 'italic' }}>não pode ser reativa</em>
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  color: '#656055',
                  maxWidth: '520px',
                  marginBottom: '40px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-source-serif), Georgia, serif',
                }}>
                  A GLA Advogados nasceu da experiência in-house. Antes de fundar o escritório, Wagner Gusmão atuou como gerente jurídico corporativo — e entendeu que empresas com quadros de 100 a 5.000 colaboradores precisam de assessoria que pense como departamento jurídico, não como escritório externo. Há mais de 15 anos, combinamos essa visão interna com a especialização exclusiva em Direito Trabalhista Empresarial.
                </p>

                {/* Bullet points */}
                <div className="space-y-4">
                  {[
                    'Atuação em 5+ estados brasileiros',
                    'Mais de 500 empresas dos setores automotivo, financeiro, serviços e construção',
                    'Presença constante na mídia como referência em legislação trabalhista',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-4">
                      <span style={{
                        width: '20px',
                        height: '2px',
                        background: '#C0272D',
                        flexShrink: 0,
                        display: 'block',
                      }} />
                      <span style={{ 
                        fontSize: '15px', 
                        fontWeight: 600, 
                        color: '#0F0D0B',
                        fontFamily: 'var(--font-source-serif), Georgia, serif', 
                      }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Image: 2 of 5 cols */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                    alt="Equipe GLA Advogados em reunião estratégica"
                    width={600}
                    height={700}
                    className="w-full object-cover"
                    style={{ aspectRatio: '3/4' }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — SERVIÇOS (Cards de serviço)
          ===================================================== */}
      <section className="noise" style={{ background: '#F8F8F8', padding: '100px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16" style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
              <span className="label-section mb-8 justify-center" style={{ display: 'flex' }}>Áreas de atuação</span>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 600,
                fontFamily: 'var(--font-playfair), Georgia, serif',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: '#0F0D0B',
              }}>
                Quatro frentes para reduzir{' '}
                <em style={{ fontWeight: 600, fontStyle: 'italic' }}>seu risco trabalhista</em>
              </h2>
            </div>
          </ScrollReveal>

          {/* Cards grid — ajustado para responsividade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                num: '01',
                title: 'Consultoria Preventiva',
                desc: 'Auditorias de compliance, revisão de contratos e treinamentos para gestores. Reduzimos o volume de novos processos antes que eles existam.',
                img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
              },
              {
                num: '02',
                title: 'Defesa em Processos',
                desc: 'Defesa estratégica em ações individuais e coletivas, do primeiro grau ao TST. Cada caso tem tese personalizada e acompanhamento em tempo real.',
                img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
              },
              {
                num: '03',
                title: 'Gestão de Passivo Trabalhista',
                desc: 'Diagnóstico completo de contingências, análise preditiva e dashboard de controle. Você toma decisões com dados, não com intuição.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
              },
              {
                num: '04',
                title: 'Due Diligence Trabalhista',
                desc: 'Mapeamento e quantificação de passivos ocultos em operações de M&A. Segurança jurídica para decisões que envolvem milhões.',
                img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
              },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link href="/servicos" className="block">
                  <div className="service-card-flora">
                    {/* Photo background */}
                    <div
                      className="service-card-flora__bg"
                      style={{ backgroundImage: `url(${service.img})` }}
                    />
                    {/* Gradient overlay */}
                    <div className="service-card-flora__overlay" />
                    {/* Content */}
                    <div className="service-card-flora__content">
                      <span className="service-card-flora__number">{service.num}</span>
                      <h3 className="service-card-flora__title">{service.title}</h3>
                      <p className="service-card-flora__desc">{service.desc}</p>
                      <span className="service-card-flora__link">
                        Saiba mais
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — DIFERENCIAIS
          ===================================================== */}
      <section className="noise" style={{ background: '#FFFFFF', padding: '100px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 600,
              fontFamily: 'var(--font-playfair), Georgia, serif',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#0F0D0B',
              marginBottom: '20px',
            }}>
              Não somos um{' '}
              <span className="text-outline">escritório externo.</span>
            </h2>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.5,
              color: '#656055',
              maxWidth: '640px',
              marginBottom: '60px',
              fontWeight: 500,
              fontFamily: 'var(--font-source-serif), Georgia, serif',
            }}>
              Funcionamos como o departamento jurídico trabalhista que sua empresa precisa — com a independência técnica que um departamento interno não tem.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {[
              {
                num: '01',
                title: 'Relatórios para a diretoria',
                desc: 'Sem juridiquês. Cada parecer é escrito para que CEOs, CFOs e diretores de RH tomem decisões em minutos — não em reuniões de duas horas.',
              },
              {
                num: '02',
                title: 'Resposta em até 4 horas úteis',
                desc: 'Atendimento presencial ou remoto, adaptado à rotina operacional da sua empresa. Urgências trabalhistas não esperam — nós também não.',
              },
              {
                num: '03',
                title: 'Visibilidade total do passivo',
                desc: 'Dashboard em tempo real e reports periódicos sobre cada processo e contingência. Sua diretoria sabe exatamente onde está e quanto custa.',
              },
              {
                num: '04',
                title: 'Mentalidade preventiva',
                desc: 'Investimos em evitar litígios. Empresas que trabalham conosco há 5+ anos reduziram o volume de novas ações em até 40%.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="diff-item">
                  <div className="flex items-start gap-6">
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-source-serif), Georgia, serif',
                      color: '#C0272D',
                      marginTop: '4px',
                      flexShrink: 0,
                      fontVariantNumeric: 'tabular-nums',
                      letterSpacing: '0.05em',
                    }}>
                      {item.num}
                    </span>
                    <div>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                        color: '#0F0D0B',
                        marginBottom: '10px',
                        letterSpacing: '-0.01em',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: '#656055',
                        fontWeight: 500,
                        fontFamily: 'var(--font-source-serif), Georgia, serif',
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — EQUIPE
          ===================================================== */}
      <section className="noise" style={{ background: '#F8F8F8', padding: '100px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <span className="label-section mb-8" style={{ display: 'flex' }}>Equipe</span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 600,
              fontFamily: 'var(--font-playfair), Georgia, serif',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#0F0D0B',
              marginBottom: '60px',
            }}>
              Quem cuida do seu{' '}
              <em style={{ fontWeight: 600, fontStyle: 'italic' }}>passivo trabalhista</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: 'Wagner Gusmão',
                role: 'Sócio Fundador',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
              },
              {
                name: 'Larissa de Oliveira Lima',
                role: 'Sócia — Compliance',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
              },
              {
                name: 'Marcella Marinho',
                role: 'Advogada — Contencioso',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
              },
              {
                name: 'Giselle',
                role: 'Advogada — Due Diligence',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
              },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '22px' }}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={533}
                      className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      style={{ aspectRatio: '3/4' }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    color: '#0F0D0B',
                    letterSpacing: '-0.01em',
                    marginBottom: '4px',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    color: '#C0272D',
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                  }}>
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — BLOG / NOTÍCIAS
          ===================================================== */}
      {latestPosts.length > 0 && (
        <section className="noise" style={{ background: '#FFFFFF', padding: '100px 0' }}>
          <div className="container-gla relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <span className="label-section mb-8" style={{ display: 'flex' }}>Blog</span>
                  <h2 style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    lineHeight: 1.1,
                    letterSpacing: '-0.025em',
                    color: '#0F0D0B',
                  }}>
                    Análises e{' '}
                    <em style={{ fontWeight: 600, fontStyle: 'italic' }}>tendências</em>
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 transition-all duration-500 hover:gap-3"
                  style={{ 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    color: '#C0272D', 
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                    flexShrink: 0 
                  }}
                >
                  Ver todos os artigos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {latestPosts.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 80}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div
                      className="h-full flex flex-col"
                      style={{
                        border: '1px solid #E7E5E4',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                    >
                      <div style={{ height: '200px', position: 'relative' }}>
                        <Image
                          src={post.seoImage || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1212'}
                          alt={post.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="flex flex-col flex-grow p-7">
                        <div className="flex items-center gap-3 mb-4">
                          <span style={{ 
                            fontSize: '12px', 
                            color: '#656055',
                            fontFamily: 'var(--font-source-serif), Georgia, serif',
                            fontWeight: 500,
                          }}>
                            {formatDate(post.publishedAt)}
                          </span>
                          {post.tags && post.tags.length > 0 && (
                            <span style={{
                              fontSize: '11px',
                              padding: '2px 8px',
                              borderRadius: '10px',
                              background: 'rgba(192,39,45,0.08)',
                              color: '#C0272D',
                              fontWeight: 600,
                              fontFamily: 'var(--font-source-serif), Georgia, serif',
                            }}>
                              {post.tags[0]}
                            </span>
                          )}
                        </div>
                        <h3 style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          fontFamily: 'var(--font-playfair), Georgia, serif',
                          lineHeight: 1.3,
                          color: '#0F0D0B',
                          letterSpacing: '-0.01em',
                          marginBottom: '10px',
                        }}>
                          {post.title}
                        </h3>
                        <p style={{
                          fontSize: '14px',
                          lineHeight: 1.6,
                          color: '#656055',
                          flex: 1,
                          fontFamily: 'var(--font-source-serif), Georgia, serif',
                          fontWeight: 500,
                        }}>
                          {post.excerpt && post.excerpt.length > 120 ? post.excerpt.slice(0, 120) + '...' : post.excerpt}
                        </p>
                        {post.authorName && (
                          <p style={{ 
                            fontSize: '13px', 
                            color: '#656055', 
                            fontFamily: 'var(--font-source-serif), Georgia, serif',
                            marginTop: '16px', 
                            paddingTop: '16px', 
                            borderTop: '1px solid #E7E5E4' 
                          }}>
                            Por <span style={{ color: '#0F0D0B', fontWeight: 600 }}>{post.authorName}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          SECTION 7 — CTA (dark)
          ===================================================== */}
      <section className="noise noise-dark" style={{ background: '#0F0D0B', padding: '100px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 600,
                fontFamily: 'var(--font-playfair), Georgia, serif',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                marginBottom: '24px',
              }}>
                Sua empresa cresce. Seu passivo trabalhista{' '}
                <em style={{ fontWeight: 600, fontStyle: 'italic' }}>não precisa crescer junto.</em>
              </h2>

              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '500px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '48px',
                fontWeight: 500,
                fontFamily: 'var(--font-source-serif), Georgia, serif',
              }}>
                Solicite uma análise do cenário jurídico trabalhista da sua organização. Retornamos em até 24 horas úteis.
              </p>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 text-left" style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div>
                  <p style={{ 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    textTransform: 'uppercase' as const, 
                    letterSpacing: '0.15em', 
                    color: 'rgba(255,255,255,0.4)', 
                    marginBottom: '8px',
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                  }}>Telefone</p>
                  <a href="tel:+552138835652" style={{ 
                    fontSize: '16px', 
                    color: 'rgba(255,255,255,0.85)', 
                    fontWeight: 500,
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                  }}>(21) 3883-5652</a>
                </div>
                <div>
                  <p style={{ 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    textTransform: 'uppercase' as const, 
                    letterSpacing: '0.15em', 
                    color: 'rgba(255,255,255,0.4)', 
                    marginBottom: '8px',
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                  }}>WhatsApp</p>
                  <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" style={{ 
                    fontSize: '16px', 
                    color: 'rgba(255,255,255,0.85)', 
                    fontWeight: 500,
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                  }}>(21) 99405-3121</a>
                </div>
                <div>
                  <p style={{ 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    textTransform: 'uppercase' as const, 
                    letterSpacing: '0.15em', 
                    color: 'rgba(255,255,255,0.4)', 
                    marginBottom: '8px',
                    fontFamily: 'var(--font-source-serif), Georgia, serif', 
                  }}>Email</p>
                  <a href="mailto:wagner.gusmao@glaadvogados.com.br" style={{ 
                    fontSize: '16px', 
                    color: 'rgba(255,255,255,0.85)', 
                    fontWeight: 500,
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                  }}>wagner.gusmao@glaadvogados.com.br</a>
                </div>
                <div>
                  <p style={{ 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    textTransform: 'uppercase' as const, 
                    letterSpacing: '0.15em', 
                    color: 'rgba(255,255,255,0.4)', 
                    marginBottom: '8px',
                    fontFamily: 'var(--font-source-serif), Georgia, serif', 
                  }}>Endereço</p>
                  <p style={{ 
                    fontSize: '16px', 
                    color: 'rgba(255,255,255,0.85)', 
                    lineHeight: 1.5, 
                    fontWeight: 500,
                    fontFamily: 'var(--font-source-serif), Georgia, serif', 
                  }}>Av. Franklin Roosevelt, 84 - GR 301<br />Centro, Rio de Janeiro</p>
                </div>
              </div>

              <Link href="/contato" className="btn-outline-white">
                Solicitar Análise Jurídica
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}