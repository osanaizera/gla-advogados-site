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
    title: 'Contencioso Trabalhista Estratégico',
    description:
      'Defesa de temas críticos em ações individuais, coletivas e casos com potencial de precedente, com leitura de impacto financeiro e reputacional.',
  },
  {
    title: 'Consultoria Executiva e Compliance',
    description:
      'Suporte jurídico contínuo para presidência, RH e lideranças em rotinas trabalhistas, reestruturações e revisão de políticas internas.',
  },
  {
    title: 'Due Diligence e Operações Societárias',
    description:
      'Mapeamento de passivos e desenho de mitigação em aquisições, integrações e projetos de expansão com alta exposição trabalhista.',
  },
];

const methodSteps = [
  {
    title: 'Diagnóstico preciso',
    description:
      'Levantamento técnico e executivo do cenário trabalhista para estabelecer prioridades reais de risco.',
  },
  {
    title: 'Estratégia de governança',
    description:
      'Definição de plano jurídico conectado aos objetivos de negócio, com critérios claros para tomada de decisão.',
  },
  {
    title: 'Execução com previsibilidade',
    description:
      'Acompanhamento contínuo, comunicação objetiva e revisão periódica de teses e protocolos conforme evolução do contexto.',
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

        <div className="container-gla relative z-10 pt-40 pb-20 md:pt-48 md:pb-24">
          <div className="min-h-[calc(100svh-8.5rem)] flex items-center justify-center">
            <ScrollReveal className="w-full">
              <div className="max-w-4xl mx-auto text-center">
                <Image
                  src="/logo-gla.png"
                  alt="GLA Advogados"
                  width={280}
                  height={138}
                  className="mx-auto hero-logo"
                  priority
                />
                <p className="hero-eyebrow mt-8">Direito Trabalhista Empresarial</p>
                <h1 className="display-title max-w-3xl mx-auto mt-6">
                  Decisões jurídicas com critério, discrição e clareza para empresas de grande porte.
                </h1>
                <p className="lead-copy max-w-2xl mx-auto mt-8">
                  Atuação estratégica ao lado da liderança executiva para proteger operações,
                  reputação e continuidade do negócio em temas trabalhistas sensíveis.
                </p>

                <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contato" className="btn-red">
                    Agendar reunião estratégica
                  </Link>
                  <Link href="/sobre" className="btn-outline">
                    Conhecer o escritório
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="noise section-space bg-white">
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="label-section">Frentes de atuação</span>
              <h2 className="section-title mt-7">
                Mandatos jurídicos alinhados à governança de negócios complexos.
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
                  Jurídico trabalhista orientado por contexto, prioridade e execução disciplinada.
                </h2>
                <p className="section-body mt-8">
                  Nossa atuação combina visão estratégica de negócio com profundidade técnica para
                  oferecer respostas sólidas em temas recorrentes e extraordinários.
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
                <h2 className="section-title mt-7">Atuação junto a lideranças de negócios que operam em escala.</h2>
                <p className="section-body mt-8">
                  A GLA representa empresas com alta intensidade de relações de trabalho e demandas
                  que exigem segurança jurídica contínua em múltiplas frentes operacionais.
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
              <h2 className="section-title mt-7">Liderança acessível e envolvida nos temas críticos de cada cliente.</h2>
              <p className="section-body mt-8">
                Trabalho próximo, comunicação objetiva e participação ativa da equipe sênior na condução dos casos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
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
                Conversas objetivas para decisões jurídicas relevantes.
              </h2>
              <p className="section-body mt-8" style={{ color: 'rgba(255,255,255,0.66)' }}>
                Se sua organização precisa rever estratégia trabalhista, estruturar governança ou conduzir um caso sensível,
                fale com a equipe da GLA.
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
