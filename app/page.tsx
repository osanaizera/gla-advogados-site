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

const expertiseItems = [
  {
    title: 'Contencioso Trabalhista de Alta Complexidade',
    description:
      'Defesa técnica rigorosa em ações individuais, coletivas e de alto impacto para empresas com grandes quadros de funcionários e operações em múltiplas regiões.',
  },
  {
    title: 'Inteligência Preventiva e Compliance',
    description:
      'Atuação antecipada junto a RH, lideranças e diretorias para prevenir passivos, estruturar políticas internas e reduzir exposição trabalhista antes que vire litígio.',
  },
  {
    title: 'Due Diligence e Operações Societárias',
    description:
      'Mapeamento de riscos trabalhistas em aquisições, fusões e projetos de expansão, com planos de mitigação sob medida para operações de grande porte.',
  },
];

const methodSteps = [
  {
    title: 'Diagnóstico de riscos',
    description:
      'Mapeamento completo do cenário trabalhista da operação, identificando passivos reais e potenciais em cada frente do negócio.',
  },
  {
    title: 'Estratégia preventiva',
    description:
      'Plano de ação jurídico desenhado para antecipar problemas, reduzir litígios e proteger a empresa antes que o risco se materialize.',
  },
  {
    title: 'Execução e acompanhamento',
    description:
      'Gestão contínua do contencioso e das rotinas preventivas, com comunicação direta e revisão constante conforme a operação evolui.',
  },
];

const sectors = [
  'Indústria e operação fabril',
  'Serviços financeiros e tecnologia',
  'Construção e infraestrutura',
  'Varejo e logística',
  'Saúde e serviços intensivos em mão de obra',
  'Empresas com atuação multirregional',
];

const teamMembers = [
  {
    name: 'Wagner Gusmão',
    role: 'Sócio Fundador',
    img: '/equipe/wagner.jpg',
  },
  {
    name: 'Larissa de Oliveira Lima',
    role: 'Sócia',
    img: '/equipe/larissa.jpg',
  },
  {
    name: 'Giselle Tavares',
    role: 'Advogada',
    img: '/equipe/giselle.jpg',
  },
  {
    name: 'Marcella Marinho',
    role: 'Advogada',
    img: '/equipe/marcellaMarinho.jpg',
  },
];

export default async function Home() {
  const latestPosts = await getLatestPosts();

  return (
    <>
      <section className="hero-premium noise">
        <div className="hero-premium__backdrop" aria-hidden="true" />

        <div className="container-gla relative z-10">
          <div className="hero-premium__content">
            <div className="hero-premium__text">
              <p className="hero-eyebrow">Direito Trabalhista Empresarial</p>

              <h1 className="hero-display">
                <span className="hero-line-wrap">
                  <span className="hero-line"><strong>Excelência jurídica</strong></span>
                </span>
                <span className="hero-line-wrap">
                  <span className="hero-line">na gestão de riscos e</span>
                </span>
                <span className="hero-line-wrap">
                  <span className="hero-line"><em>contencioso trabalhista</em></span>
                </span>
                <span className="hero-line-wrap">
                  <span className="hero-line">de alta complexidade.</span>
                </span>
              </h1>

              <p className="lead-copy mx-auto max-w-2xl mt-8 hero-lead">
                Soluções estratégicas para empresas com grandes quadros de funcionários.
                Unimos defesa técnica rigorosa e inteligência preventiva para garantir
                estabilidade à sua operação.
              </p>

              <div className="hero-cta-group">
                <Link href="/contato" className="btn-red">
                  Agendar reunião estratégica
                </Link>
                <a
                  href="https://wa.me/552138835652?text=Olá%2C%20gostaria%20de%20falar%20sobre%20assessoria%20jurídica%20trabalhista."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="noise section-space bg-white">
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="label-section">Frentes de atuação</span>
              <h2 className="section-title mt-7">
                Defesa técnica e prevenção de riscos para operações de grande porte.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
            {expertiseItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 90}>
                <article className="practice-card h-full">
                  <p className="practice-card__index">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="practice-card__title">{item.title}</h3>
                  <p className="practice-card__text">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="noise section-space" style={{ background: '#F7F6F4' }}>
        <div className="container-gla relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <span className="label-section">Método de trabalho</span>
                <h2 className="section-title mt-7">
                  Prevenção primeiro, contencioso com rigor quando necessário.
                </h2>
                <p className="section-body mt-8">
                  Nossa experiência com empresas de diversos setores nos permite antecipar riscos
                  e conduzir litígios complexos com a profundidade técnica que operações de grande porte exigem.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              {methodSteps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 100}>
                  <article className="method-row">
                    <span className="method-row__number">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="method-row__title">{step.title}</h3>
                      <p className="method-row__text">{step.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="noise section-space bg-white">
        <div className="container-gla relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <span className="label-section">Perfil de clientes</span>
                <h2 className="section-title mt-7">Empresas com grandes quadros de funcionários e operações complexas.</h2>
                <p className="section-body mt-8">
                  Atendemos organizações de diversos setores que precisam de segurança jurídica
                  contínua, gestão de passivos em escala e uma equipe que entende a realidade de quem opera com milhares de colaboradores.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  {sectors.map((sector) => (
                    <span key={sector} className="sector-chip">
                      {sector}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal delay={120}>
                <div className="rounded-[20px] overflow-hidden max-w-[60%] mx-auto">
                  <Image
                    src="/equipe/wagneresc.jpg"
                    alt="Equipe GLA em reunião de estratégia jurídica"
                    width={800}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="noise section-space" style={{ background: '#F7F6F4' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="label-section">Equipe</span>
              <h2 className="section-title mt-7">Advogados experientes com acesso direto e envolvimento real nos casos.</h2>
              <p className="section-body mt-8">
                Comunicação objetiva, proximidade com o cliente e participação ativa de toda a equipe na condução das demandas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 80}>
                <article className="team-card">
                  <div className="team-card__image">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={520}
                      height={680}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="team-card__content">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="noise section-space bg-white">
          <div className="container-gla relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <div className="max-w-2xl">
                  <span className="label-section">Publicações</span>
                  <h2 className="section-title mt-7">Análises sobre legislação, jurisprudência e gestão trabalhista.</h2>
                </div>
                <Link href="/blog" className="text-link-inline">
                  Ver todos os artigos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {latestPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 80}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article className="insight-card h-full">
                      <div className="insight-card__image-wrap">
                        <Image
                          src={post.seoImage || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1212'}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="insight-card__content">
                        <p className="insight-card__meta">{formatDate(post.publishedAt)}</p>
                        <h3>{post.title}</h3>
                        <p className="insight-card__excerpt">
                          {post.excerpt && post.excerpt.length > 130
                            ? `${post.excerpt.slice(0, 130)}...`
                            : post.excerpt}
                        </p>
                        {post.authorName && (
                          <p className="insight-card__author">
                            Por <span>{post.authorName}</span>
                          </p>
                        )}
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="noise noise-dark section-space" style={{ background: '#1A1714' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="label-section label-section--dark">Contato institucional</span>
              <h2 className="section-title mt-7" style={{ color: '#FFFFFF' }}>
                Sua operação precisa de segurança jurídica trabalhista?
              </h2>
              <p className="section-body mt-8" style={{ color: 'rgba(255,255,255,0.66)' }}>
                Se sua empresa enfrenta passivos relevantes, precisa de estratégia preventiva ou busca um escritório
                que entenda operações de grande porte, fale com a GLA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-12 mb-14 max-w-3xl">
              <div className="contact-item-dark">
                <span>Telefone</span>
                <a href="tel:+552138835652">(21) 3883-5652</a>
              </div>
              <div className="contact-item-dark">
                <span>E-mail</span>
                <a href="mailto:wagner.gusmao@glaadvogados.com.br">wagner.gusmao@glaadvogados.com.br</a>
              </div>
            </div>

            <Link href="/contato" className="btn-outline-white">
              Falar com a GLA
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
