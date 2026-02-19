import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'NR-1 e saúde mental no trabalho: o que muda para empresas com 100+ colaboradores',
    excerpt: 'Wagner Gusmão analisa os impactos da atualização da NR-1 nas obrigações de compliance trabalhista e os riscos de inação para empresas de médio e grande porte.',
    date: '10 Jan 2026',
    source: 'Valor Econômico',
    category: 'Artigo',
  },
  {
    id: 2,
    title: 'Cotas PCD: por que empresas ainda erram — e como corrigir antes da fiscalização',
    excerpt: 'Larissa de Oliveira Lima explica os erros mais comuns no cumprimento de cotas PCD e apresenta a metodologia preventiva desenvolvida pela GLA Advogados.',
    date: '28 Nov 2025',
    source: 'Exame',
    category: 'Entrevista',
  },
  {
    id: 3,
    title: 'Reforma trabalhista: 8 anos depois, o passivo que ninguém previu',
    excerpt: 'Wagner Gusmão avalia os efeitos de longo prazo da reforma trabalhista na gestão de passivo de empresas dos setores automotivo e financeiro.',
    date: '15 Set 2025',
    source: 'Conjur',
    category: 'Análise',
  },
  {
    id: 4,
    title: 'Gestão de passivo trabalhista para empresas em expansão: estratégias para 2026',
    excerpt: 'Webinar exclusivo com a equipe GLA sobre como empresas em crescimento podem escalar operações sem multiplicar riscos trabalhistas.',
    date: '05 Ago 2025',
    source: 'Webinar GLA',
    category: 'Evento',
  },
  {
    id: 5,
    title: 'Compliance trabalhista e ESG: a convergência que o conselho precisa entender',
    excerpt: 'Larissa de Oliveira Lima analisa como as exigências ESG estão transformando o compliance trabalhista em tema de governança corporativa.',
    date: '20 Jun 2025',
    source: 'JOTA',
    category: 'Artigo',
  },
  {
    id: 6,
    title: 'Trabalho remoto e controle de jornada: os riscos invisíveis do modelo híbrido',
    excerpt: 'GLA Advogados identifica os principais passivos trabalhistas gerados pelo modelo híbrido e recomenda práticas preventivas para empresas com operações distribuídas.',
    date: '12 Abr 2025',
    source: 'Folha de S.Paulo',
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
            Análises que pautam{' '}
            <em style={{ fontWeight: 400, fontStyle: 'italic' }}>o mercado</em>
          </h1>
          <div className="line-reveal mt-8" style={{ animationDelay: '0.3s' }} />
          <p style={{ marginTop: '24px', fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', maxWidth: '480px', fontWeight: 400 }}>
            Wagner Gusmão e a equipe GLA são fonte frequente dos principais veículos jurídicos
            e de negócios do Brasil em temas de compliance trabalhista e gestão de risco.
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
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#C0272D' }}>
                      Em breve
                    </span>
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
              <em style={{ fontWeight: 400, fontStyle: 'italic' }}>referência</em>
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
                title: 'Programas de compliance trabalhista e redução do passivo judicial: estudo de eficácia em empresas de 100 a 2.000 colaboradores',
                author: 'Wagner Gusmão',
              },
              {
                title: 'Teletrabalho pós-pandemia: análise das contingências trabalhistas e recomendações de compliance para o modelo híbrido',
                author: 'Larissa de Oliveira Lima',
              },
              {
                title: 'Inteligência artificial e relações de trabalho: implicações jurídicas e regulatórias para empresas em transformação digital',
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
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#C0272D' }}>
                      Em breve
                    </span>
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
                Análises de risco trabalhista{' '}
                <em style={{ fontWeight: 400, fontStyle: 'italic' }}>na sua caixa de entrada</em>
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', marginBottom: '36px', fontWeight: 400 }}>
                Receba mensalmente análises sobre compliance trabalhista, jurisprudência relevante
                e tendências regulatórias que impactam empresas com 100+ colaboradores.
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
