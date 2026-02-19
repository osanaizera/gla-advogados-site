import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'Reforma trabalhista: especialistas analisam impactos na gestão de passivo das empresas',
    excerpt: 'Wagner Gusmão foi convidado a analisar os efeitos da reforma trabalhista no cenário corporativo, destacando pontos sobre segurança jurídica e gestão de risco.',
    date: '15 Jan 2024',
    source: 'Valor Econômico',
    category: 'Artigo',
  },
  {
    id: 2,
    title: 'GLA Advogados lança programa de compliance trabalhista para empresas de grande porte',
    excerpt: 'O escritório desenvolveu metodologia exclusiva para programas de compliance trabalhista, reduzindo riscos jurídicos e otimizando a gestão do quadro de colaboradores.',
    date: '22 Mar 2024',
    source: 'Portal Jurídico',
    category: 'Notícia',
  },
  {
    id: 3,
    title: 'Home office permanente: implicações jurídicas no quadro de colaboradores',
    excerpt: 'Larissa de Oliveira Lima compartilhou insights sobre os aspectos jurídicos do trabalho remoto permanente e os principais pontos de atenção.',
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
    excerpt: 'Larissa de Oliveira Lima publicou artigo sobre as implicações jurídicas da IA nos ambientes corporativos e os desafios para compliance.',
    date: '09 Ago 2024',
    source: 'Revista Jurídica',
    category: 'Artigo',
  },
  {
    id: 6,
    title: 'GLA Advogados amplia atuação com novo núcleo de direito digital do trabalho',
    excerpt: 'Escritório inaugurou departamento especializado em questões trabalhistas relacionadas à transformação digital e modelos híbridos.',
    date: '23 Out 2024',
    source: 'Conjur',
    category: 'Notícia',
  },
];

export default function ImprensaPage() {
  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section className="noise" style={{ background: '#F8F8F8', minHeight: '40vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="container-gla relative z-10" style={{ paddingBottom: '72px', paddingTop: '200px' }}>
          <span className="label-section mb-8" style={{ display: 'flex' }}>Imprensa</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: '#1A1714',
            maxWidth: '480px',
          }}>
            GLA na{' '}
            <em style={{ fontWeight: 400, fontStyle: 'italic' }}>mídia</em>
          </h1>
          <div className="line-reveal mt-8" style={{ animationDelay: '0.3s' }} />
          <p style={{ marginTop: '24px', fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', maxWidth: '480px', fontWeight: 400 }}>
            Acompanhe nossa participação nos principais veículos de comunicação.
          </p>
        </div>
      </section>

      {/* ===== GRID DE ARTIGOS ===== */}
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          {/* Decorative letter */}
          <span
            className="hidden md:block absolute select-none pointer-events-none"
            style={{ top: '-20px', right: '0', fontSize: '200px', fontWeight: 300, color: '#1A1714', opacity: 0.03, lineHeight: 1, letterSpacing: '-0.04em' }}
            aria-hidden="true"
          >
            N
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 60}>
                <div
                  className="h-full flex flex-col"
                  style={{
                    padding: '40px',
                    border: '1px solid #E7E5E4',
                    borderRadius: '20px',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#C0272D' }}>
                      {item.category}
                    </span>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#E7E5E4', display: 'block' }} />
                    <span style={{ fontSize: '11px', fontWeight: 500, color: '#78716C' }}>
                      {item.source}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1A1714', lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '14px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#78716C', flexGrow: 1, marginBottom: '24px', fontWeight: 400 }}>
                    {item.excerpt}
                  </p>

                  <div className="flex justify-between items-center" style={{ paddingTop: '18px', borderTop: '1px solid #E7E5E4' }}>
                    <span style={{ fontSize: '12px', fontWeight: 500, color: '#78716C' }}>{item.date}</span>
                    <Link href="#" className="inline-flex items-center gap-1.5 transition-all duration-500 hover:gap-2.5" style={{ fontSize: '13px', fontWeight: 600, color: '#C0272D' }}>
                      Ler matéria →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VEÍCULOS ===== */}
      <section className="noise" style={{ background: '#F8F8F8', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <span className="label-section mb-8" style={{ display: 'flex' }}>Aparições</span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#1A1714',
              marginBottom: '56px',
            }}>
              Onde somos{' '}
              <em style={{ fontWeight: 400, fontStyle: 'italic' }}>citados</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                'Valor Econômico',
                'Exame',
                'Conjur',
                'Folha de S.Paulo',
                'O Globo',
                'Portal Jurídico',
                'Revista Jurídica',
                'JOTA',
              ].map((outlet) => (
                <div
                  key={outlet}
                  className="flex items-center justify-center"
                  style={{
                    padding: '28px 16px',
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E7E5E4',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#78716C', letterSpacing: '-0.01em' }}>{outlet}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRODUÇÃO ACADÊMICA ===== */}
      <section style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla">
          <ScrollReveal>
            <span className="label-section mb-8" style={{ display: 'flex' }}>Produção Acadêmica</span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#1A1714',
              marginBottom: '56px',
            }}>
              Artigos{' '}
              <em style={{ fontWeight: 400, fontStyle: 'italic' }}>científicos</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                author: 'Wagner Gusmão e Larissa de O. Lima',
              },
            ].map((pub, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div
                  className="h-full flex flex-col"
                  style={{ padding: '40px', border: '1px solid #E7E5E4', borderRadius: '20px' }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(192,39,45,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '28px',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C0272D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1A1714', lineHeight: 1.4, letterSpacing: '-0.01em', flexGrow: 1, marginBottom: '24px' }}>
                    {pub.title}
                  </h3>
                  <div className="flex justify-between items-center" style={{ paddingTop: '18px', borderTop: '1px solid #E7E5E4' }}>
                    <span style={{ fontSize: '12px', fontWeight: 500, color: '#78716C' }}>{pub.author}</span>
                    <Link href="#" style={{ fontSize: '13px', fontWeight: 600, color: '#C0272D' }}>
                      Baixar PDF
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="noise noise-dark" style={{ background: '#1A1714', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: '520px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                fontWeight: 300,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                marginBottom: '18px',
              }}>
                Inscreva-se em nossa{' '}
                <em style={{ fontWeight: 400, fontStyle: 'italic' }}>newsletter</em>
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', marginBottom: '36px', fontWeight: 400 }}>
                Receba artigos e análises sobre gestão de risco jurídico trabalhista.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu email corporativo"
                  style={{
                    flexGrow: 1,
                    padding: '16px 22px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none',
                    fontWeight: 400,
                  }}
                />
                <button className="btn-flora" style={{ whiteSpace: 'nowrap', background: 'rgba(255,255,255,0.12)' }}>
                  Inscrever-se
                  <span className="btn-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
