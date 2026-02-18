import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gla-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Proteção jurídica especializada para a gestão estratégica do capital humano
            </h1>
            <div className="h-1 w-40 bg-gla-red mb-8"></div>
            <p className="text-xl md:text-2xl mb-10">
              Assessoria e defesa trabalhista com foco exclusivo em organizações com estruturas organizacionais complexas e operações em expansão.
            </p>
            <Link href="/contato" className="btn-primary text-lg px-8 py-3">
              Solicitar Análise Jurídica
            </Link>
          </div>
        </div>
      </section>

      {/* Pilares de Atuação */}
      <section className="bg-white py-16">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-3">Pilares de Atuação</h2>
            <p className="text-lg text-gla-gray-600 max-w-3xl mx-auto">
              Nossa abordagem multidisciplinar oferece proteção abrangente para a gestão estratégica do capital humano em sua organização.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="section-card">
              <div className="h-16 w-16 bg-gla-blue rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Consultoria Preventiva</h3>
              <p className="text-gla-gray-600 mb-4">
                Estratégias proativas de compliance trabalhista para mitigar riscos antes que se materializem em litígios, preservando o patrimônio organizacional.
              </p>
              <Link href="/servicos#consultoria" className="text-gla-blue font-semibold hover:text-gla-blue-light inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="section-card">
              <div className="h-16 w-16 bg-gla-blue rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Defesa em Processos</h3>
              <p className="text-gla-gray-600 mb-4">
                Representação jurídica estratégica em litígios trabalhistas, com abordagem técnica e foco na proteção patrimonial para empresas de médio e grande porte.
              </p>
              <Link href="/servicos#defesa" className="text-gla-blue font-semibold hover:text-gla-blue-light inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="section-card">
              <div className="h-16 w-16 bg-gla-blue rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Gestão de Passivo</h3>
              <p className="text-gla-gray-600 mb-4">
                Análise, mapeamento e gestão estratégica do passivo trabalhista para organizações com operações de escala, visando a redução gradativa e sustentável de contingências.
              </p>
              <Link href="/servicos#gestao" className="text-gla-blue font-semibold hover:text-gla-blue-light inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por que GLA */}
      <section className="bg-gla-gray-50 py-16">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-3">Por Que Escolher a GLA Advogados</h2>
            <p className="text-lg text-gla-gray-600 max-w-3xl mx-auto">
              Soluções jurídicas personalizadas para empresas que valorizam a segurança jurídica na gestão de seus recursos humanos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-gla-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Especialização Exclusiva</h3>
              <p className="text-gla-gray-600">
                Foco específico em direito trabalhista empresarial para organizações com quadros de colaboradores numerosos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-gla-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Gestão Estratégica de Risco</h3>
              <p className="text-gla-gray-600">
                Metodologia própria para identificação, mitigação e gerenciamento contínuo de riscos trabalhistas corporativos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-gla-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Equipe Dedicada</h3>
              <p className="text-gla-gray-600">
                Atendimento personalizado por advogados especializados em cada segmento empresarial, com conhecimento das particularidades setoriais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-gla-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Tecnologia e Inovação</h3>
              <p className="text-gla-gray-600">
                Soluções digitais para monitoramento de processos, análise de jurisprudência e gestão de compliance em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mídia Section */}
      <section className="bg-white py-16">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-3">Presença na Mídia</h2>
            <p className="text-lg text-gla-gray-600 max-w-3xl mx-auto">
              O Dr. Wagner Gusmão é frequentemente convidado para comentar sobre questões trabalhistas em veículos especializados, consolidando a posição da GLA Advogados como referência no setor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gla-gray-50 p-6 rounded-lg">
              <div className="text-gla-blue mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Jornal Econômico Brasil</h3>
              <p className="text-gla-gray-600 mb-4">
                "Impactos da reforma trabalhista nas organizações de grande porte" - Artigo de Wagner Gusmão.
              </p>
              <p className="text-sm text-gla-gray-600">Julho 2023</p>
            </div>

            <div className="bg-gla-gray-50 p-6 rounded-lg">
              <div className="text-gla-blue mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Canal Corporativo</h3>
              <p className="text-gla-gray-600 mb-4">
                Entrevista sobre "Compliance trabalhista como diferencial competitivo para empresas do setor industrial".
              </p>
              <p className="text-sm text-gla-gray-600">Outubro 2023</p>
            </div>

            <div className="bg-gla-gray-50 p-6 rounded-lg">
              <div className="text-gla-blue mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Podcast Direito & Negócios</h3>
              <p className="text-gla-gray-600 mb-4">
                Participação especial discutindo "Estratégias jurídicas para a redução de passivos trabalhistas em organizações complexas".
              </p>
              <p className="text-sm text-gla-gray-600">Janeiro 2024</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/imprensa" className="btn-secondary">
              Ver Mais Destaques na Mídia
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gla-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Proteja sua organização com especialistas em direito trabalhista empresarial
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato com nosso departamento jurídico para uma análise personalizada das necessidades específicas da sua empresa.
          </p>
          <Link href="/contato" className="btn-primary text-lg px-8 py-3">
            Solicitar Análise Jurídica
          </Link>
        </div>
      </section>
    </>
  )
}