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
      {/* ===== HERO INTERNO ===== */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '40vh', borderRadius: '0 0 24px 24px', background: '#0C1220' }}
      >
        <div className="container-main relative z-10 pb-16 pt-40">
          <span className="text-sm font-medium uppercase tracking-widest mb-4 block" style={{ color: '#B8962E', letterSpacing: '0.08em' }}>
            Imprensa
          </span>
          <h1
            className="text-white font-extrabold max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
          >
            GLA na mídia
          </h1>
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.6 }}>
            Acompanhe nossa participação nos principais veículos de comunicação sobre direito trabalhista empresarial.
          </p>
        </div>
      </section>

      {/* ===== GRID DE ARTIGOS ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-4 block">Notícias e publicações.</span>
            <h2
              className="font-extrabold mb-12 md:mb-16"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0C1220' }}
            >
              Reconhecimento na mídia
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <div
                  className="p-8 h-full flex flex-col"
                  style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ background: 'rgba(123,21,53,0.08)', color: '#7B1535' }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(12,18,32,0.04)', color: '#5C6B84' }}
                    >
                      {item.source}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: '#0C1220', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed flex-grow mb-4" style={{ color: '#5C6B84' }}>
                    {item.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
                    <span className="text-xs font-medium" style={{ color: '#9CA3AF' }}>{item.date}</span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:gap-2.5"
                      style={{ color: '#7B1535' }}
                    >
                      Ler matéria →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APARIÇÕES NA MÍDIA ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-4 block">Aparições na Mídia.</span>
            <h2
              className="font-extrabold mb-12 md:mb-16"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0C1220' }}
            >
              Onde somos citados
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Valor Econômico',
              'Exame',
              'Conjur',
              'Folha de S.Paulo',
              'O Globo',
              'Portal Jurídico',
              'Revista Jurídica',
              'JOTA',
            ].map((outlet, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  className="flex items-center justify-center p-6 h-20"
                  style={{ background: '#FAFAFA', borderRadius: '12px', border: '1px solid #E5E7EB' }}
                >
                  <span className="text-sm font-bold" style={{ color: '#5C6B84' }}>{outlet}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARTIGOS CIENTÍFICOS ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-4 block">Produção Acadêmica.</span>
            <h2
              className="font-extrabold mb-12 md:mb-16"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0C1220' }}
            >
              Artigos científicos
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div
                  className="p-8 h-full flex flex-col"
                  style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(12,18,32,0.04)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#0C1220" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold mb-4 leading-snug flex-grow" style={{ color: '#0C1220', letterSpacing: '-0.01em' }}>
                    {pub.title}
                  </h3>
                  <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
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
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <div
              className="text-center py-16 px-8 md:px-16"
              style={{ background: '#0C1220', borderRadius: '20px' }}
            >
              <h2
                className="text-white font-extrabold mb-4"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                Inscreva-se em nossa newsletter
              </h2>
              <p className="text-sm mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Receba nossos artigos, análises e notícias sobre gestão de risco jurídico trabalhista diretamente no seu email.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu email corporativo"
                  className="flex-grow px-5 py-3 rounded-xl text-sm focus:outline-none"
                  style={{ background: '#FFFFFF', color: '#0C1220' }}
                />
                <button className="btn-wine whitespace-nowrap text-sm">
                  Inscrever-se →
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
