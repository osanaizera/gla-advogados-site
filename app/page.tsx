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
          SECTION 1 — CINEMATIC HERO (Casa Flora — centralizado)
          ===================================================== */}
      <section
        className="noise relative flex flex-col"
        style={{ height: '100svh', minHeight: '580px' }}
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

        {/* Hero content — flex-1 empurra métricas para baixo */}
        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center text-center" style={{ paddingTop: '80px', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ maxWidth: '900px' }}>
            {/* Eyebrow with red line above */}
            <div
              className="hero-fade flex flex-col items-center gap-2 mb-6"
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
                color: '#78716C',
              }}>
                Direito Trabalhista Empresarial
              </span>
            </div>

            {/* H1 — Casa Flora: font-weight 300, clamp, centered */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              fontWeight: 300,
              color: '#1A1714',
              marginBottom: '0',
            }}>
              <span className="kinetic-word" style={{ animationDelay: '0.15s' }}>
                Cada decisão trabalhista
              </span>
              <span className="kinetic-word" style={{ animationDelay: '0.35s' }}>
                custa dinheiro. Nós garantimos
              </span>
              <span className="kinetic-word" style={{ animationDelay: '0.55s', fontWeight: 400, fontStyle: 'italic' }}>
                que custem menos.
              </span>
            </h1>

            {/* Red line — centered */}
            <div className="hero-fade flex justify-center mt-6" style={{ animationDelay: '0.85s' }}>
              <div className="line-reveal-center" style={{ animationDelay: '0.85s' }} />
            </div>

            {/* Subtitle */}
            <p
              className="hero-fade"
              style={{
                animationDelay: '1.05s',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                lineHeight: 1.5,
                color: '#78716C',
                maxWidth: '560px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '20px',
                fontWeight: 400,
              }}
            >
              Assessoria jurídica trabalhista para empresas com 100 a 5.000+ colaboradores. Do compliance preventivo à defesa em litígios complexos — com 95% de taxa de sucesso.
            </p>

            {/* CTAs — Casa Flora style */}
            <div className="hero-fade flex flex-wrap items-center justify-center gap-4 mt-8" style={{ animationDelay: '1.25s' }}>
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

        {/* Glass metrics — dentro do fluxo, colado no bottom */}
        <div className="relative z-10 w-full px-6 pb-6 md:pb-10 flex justify-center">
          <div className="hero-fade glass w-full" style={{ animationDelay: '1.5s', padding: '24px 28px', maxWidth: '900px' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '95%', label: 'Taxa de sucesso' },
                { value: '500+', label: 'Empresas assessoradas' },
                { value: '15+', label: 'Anos de atuação' },
                { value: '5+', label: 'Estados de atuação' },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <span style={{
                    display: 'block',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    color: '#1A1714',
                    lineHeight: 1,
                  }}>
                    {metric.value}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#78716C',
                    marginTop: '8px',
                    display: 'block',
                    letterSpacing: '0.02em',
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
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          {/* Decorative oversized number */}
          <span
            className="hidden md:block absolute select-none pointer-events-none"
            style={{
              top: '-40px',
              right: '0',
              fontSize: '220px',
              fontWeight: 300,
              color: '#1A1714',
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
                  fontWeight: 300,
                  lineHeight: 1.08,
                  letterSpacing: '-0.025em',
                  color: '#1A1714',
                  marginBottom: '28px',
                  maxWidth: '520px',
                }}>
                  A gestão do seu passivo trabalhista{' '}
                  <em style={{ fontWeight: 400, fontStyle: 'italic' }}>não pode ser reativa</em>
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  color: '#78716C',
                  maxWidth: '520px',
                  marginBottom: '40px',
                  fontWeight: 400,
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
                        height: '1.5px',
                        background: '#C0272D',
                        flexShrink: 0,
                        display: 'block',
                      }} />
                      <span style={{ fontSize: '15px', fontWeight: 500, color: '#1A1714' }}>
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
                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.08)' }}>
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
          SECTION 3 — SERVIÇOS (Casa Flora photo cards)
          ===================================================== */}
      <section className="noise" style={{ background: '#F8F8F8', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16" style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
              <span className="label-section mb-8 justify-center" style={{ display: 'flex' }}>Áreas de atuação</span>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: '#1A1714',
              }}>
                Quatro frentes para reduzir{' '}
                <em style={{ fontWeight: 400, fontStyle: 'italic' }}>seu risco trabalhista</em>
              </h2>
            </div>
          </ScrollReveal>

          {/* Cards grid — Casa Flora photo bg */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: '#1A1714',
              marginBottom: '20px',
            }}>
              Não somos um{' '}
              <span className="text-outline">escritório externo.</span>
            </h2>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.55,
              color: '#78716C',
              maxWidth: '640px',
              marginBottom: '64px',
              fontWeight: 400,
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
                      fontSize: '13px',
                      fontWeight: 400,
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
                        fontSize: '17px',
                        fontWeight: 600,
                        color: '#1A1714',
                        marginBottom: '8px',
                        letterSpacing: '-0.01em',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#78716C',
                        fontWeight: 400,
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
      <section className="noise" style={{ background: '#F8F8F8', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <span className="label-section mb-8" style={{ display: 'flex' }}>Equipe</span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: '#1A1714',
              marginBottom: '64px',
            }}>
              Quem cuida do seu{' '}
              <em style={{ fontWeight: 400, fontStyle: 'italic' }}>passivo trabalhista</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '24px' }}>
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
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#1A1714',
                    letterSpacing: '-0.01em',
                    marginBottom: '4px',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#C0272D' }}>
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
        <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0' }}>
          <div className="container-gla relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <span className="label-section mb-8" style={{ display: 'flex' }}>Blog</span>
                  <h2 style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    fontWeight: 300,
                    lineHeight: 1.08,
                    letterSpacing: '-0.025em',
                    color: '#1A1714',
                  }}>
                    Análises e{' '}
                    <em style={{ fontWeight: 400, fontStyle: 'italic' }}>tendências</em>
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 transition-all duration-500 hover:gap-3"
                  style={{ fontSize: '14px', fontWeight: 600, color: '#C0272D', flexShrink: 0 }}
                >
                  Ver todos os artigos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 80}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div
                      className="h-full flex flex-col"
                      style={{
                        border: '1px solid #E7E5E4',
                        borderRadius: '20px',
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
                          <span style={{ fontSize: '12px', color: '#78716C' }}>
                            {formatDate(post.publishedAt)}
                          </span>
                          {post.tags && post.tags.length > 0 && (
                            <span style={{
                              fontSize: '11px',
                              padding: '2px 8px',
                              borderRadius: '10px',
                              background: 'rgba(192,39,45,0.08)',
                              color: '#C0272D',
                              fontWeight: 500,
                            }}>
                              {post.tags[0]}
                            </span>
                          )}
                        </div>
                        <h3 style={{
                          fontSize: '17px',
                          fontWeight: 600,
                          lineHeight: 1.3,
                          color: '#1A1714',
                          letterSpacing: '-0.01em',
                          marginBottom: '10px',
                        }}>
                          {post.title}
                        </h3>
                        <p style={{
                          fontSize: '14px',
                          lineHeight: 1.6,
                          color: '#78716C',
                          flex: 1,
                        }}>
                          {post.excerpt && post.excerpt.length > 120 ? post.excerpt.slice(0, 120) + '...' : post.excerpt}
                        </p>
                        {post.authorName && (
                          <p style={{ fontSize: '13px', color: '#78716C', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E7E5E4' }}>
                            Por <span style={{ color: '#1A1714', fontWeight: 500 }}>{post.authorName}</span>
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
      <section className="noise noise-dark" style={{ background: '#1A1714', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 300,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                marginBottom: '24px',
              }}>
                Sua empresa cresce. Seu passivo trabalhista{' '}
                <em style={{ fontWeight: 400, fontStyle: 'italic' }}>não precisa crescer junto.</em>
              </h2>

              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.45)',
                maxWidth: '500px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '48px',
                fontWeight: 400,
              }}>
                Solicite uma análise do cenário jurídico trabalhista da sua organização. Retornamos em até 24 horas úteis.
              </p>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 text-left" style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>Telefone</p>
                  <a href="tel:+552138835652" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>(21) 3883-5652</a>
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>WhatsApp</p>
                  <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>(21) 99405-3121</a>
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>Email</p>
                  <a href="mailto:wagner.gusmao@glaadvogados.com.br" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>wagner.gusmao@glaadvogados.com.br</a>
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>Endereço</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontWeight: 400 }}>Av. Franklin Roosevelt, 84 - GR 301<br />Centro, Rio de Janeiro</p>
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
