import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

export default function ImprensaPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Reforma trabalhista: especialistas analisam impactos na gestão de passivo das empresas',
      excerpt: 'Wagner Gusmão foi convidado a analisar os efeitos da reforma trabalhista no cenário corporativo atual, destacando pontos sobre segurança jurídica e gestão de risco.',
      date: '15 Jan 2024',
      source: 'Valor Econômico',
      category: 'Artigo',
    },
    {
      id: 2,
      title: 'GLA Advogados lança programa de compliance trabalhista para empresas de grande porte',
      excerpt: 'O escritório desenvolveu metodologia exclusiva para implementação de programas de compliance trabalhista, reduzindo riscos jurídicos e otimizando a gestão do quadro de colaboradores.',
      date: '22 Mar 2024',
      source: 'Portal Jurídico',
      category: 'Notícia',
    },
    {
      id: 3,
      title: 'Home office permanente: implicações jurídicas no quadro de colaboradores',
      excerpt: 'Larissa de Oliveira Lima foi entrevistada sobre os aspectos jurídicos do trabalho remoto permanente e compartilhou insights sobre os principais pontos de atenção.',
      date: '05 Mai 2024',
      source: 'Exame',
      category: 'Entrevista',
    },
    {
      id: 4,
      title: 'ESG e passivo trabalhista: o impacto nas relações de trabalho corporativas',
      excerpt: 'Wagner Gusmão participou de webinar sobre como as práticas ESG estão transformando o direito trabalhista e criando novos desafios para departamentos jurídicos.',
      date: '18 Jun 2024',
      source: 'Webinar GLA',
      category: 'Evento',
    },
    {
      id: 5,
      title: 'Inteligência artificial e automação: desafios legais para o futuro do trabalho',
      excerpt: 'Larissa de Oliveira Lima publicou artigo sobre as implicações jurídicas da implementação de IA nos ambientes corporativos e os desafios para compliance trabalhista.',
      date: '09 Ago 2024',
      source: 'Revista Jurídica',
      category: 'Artigo',
    },
    {
      id: 6,
      title: 'GLA Advogados amplia atuação com novo núcleo de direito digital do trabalho',
      excerpt: 'Escritório inaugurou departamento especializado em questões trabalhistas relacionadas à transformação digital e gestão de colaboradores em modelos híbridos.',
      date: '23 Out 2024',
      source: 'Conjur',
      category: 'Notícia',
    },
  ];

  return (
    <>
      <Hero
        title="GLA na mídia"
        subtitle="Acompanhe nossa participação nos principais veículos de comunicação, eventos e publicações sobre direito trabalhista empresarial."
        height="medium"
        variant="centered"
        ctaText=""
        pillText="Imprensa"
      />

      {/* ===== GRID DE ARTIGOS — Bento cards ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="mb-12">
              <span className="label-tag mb-3 block">Notícias e publicações</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Reconhecimento na mídia
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {newsItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <div className="bento-card h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ background: 'rgba(123,21,53,0.08)', color: '#7B1535' }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(12,18,32,0.05)', color: '#6B7280' }}
                    >
                      {item.source}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 tracking-tight leading-snug" style={{ color: '#0C1220' }}>
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed flex-grow mb-4" style={{ color: '#6B7280' }}>
                    {item.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid rgba(12,18,32,0.06)' }}>
                    <span className="text-xs font-medium" style={{ color: '#9CA3AF' }}>{item.date}</span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:gap-2.5"
                      style={{ color: '#7B1535' }}
                    >
                      Ler matéria
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARTIGOS CIENTÍFICOS ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="mb-12">
              <span className="label-tag mb-3 block">Produção acadêmica</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Artigos científicos
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'A eficácia dos programas de compliance trabalhista na redução do passivo judicial',
                author: 'Wagner Gusmão',
              },
              {
                title: 'Desafios jurídicos do trabalho remoto: análise do impacto no quadro de colaboradores',
                author: 'Larissa de Oliveira Lima',
              },
              {
                title: 'Inteligência artificial e relações de trabalho: implicações para gestão de risco',
                author: 'Wagner e Larissa',
              },
            ].map((pub, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bento-card h-full flex flex-col">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(12,18,32,0.05)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0C1220" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold mb-4 tracking-tight leading-snug flex-grow" style={{ color: '#0C1220' }}>
                    {pub.title}
                  </h3>
                  <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid rgba(12,18,32,0.06)' }}>
                    <span className="text-xs font-medium" style={{ color: '#9CA3AF' }}>{pub.author}</span>
                    <Link href="#" className="text-sm font-semibold" style={{ color: '#7B1535' }}>
                      Baixar PDF
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="bento-card-wine text-center py-16 px-8 md:px-16 relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,150,46,0.1) 0%, transparent 60%)' }}
              />
              <div className="relative z-10">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                  Inscreva-se em nossa newsletter
                </h2>
                <p className="text-white/50 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
                  Receba nossos artigos, análises e notícias sobre gestão de risco jurídico trabalhista diretamente no seu email.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu email corporativo"
                    className="flex-grow px-5 py-3 rounded-xl text-sm focus:outline-none"
                    style={{ background: '#FFFFFF', color: '#0C1220' }}
                  />
                  <button className="btn-gold whitespace-nowrap text-sm">
                    Inscrever-se
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
