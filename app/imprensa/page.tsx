import Link from 'next/link'

export default function Imprensa() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gla-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              GLA Advogados na Mídia
            </h1>
            <div className="h-1 w-40 bg-gla-red mb-8"></div>
            <p className="text-xl md:text-2xl">
              Nossa contribuição ao debate jurídico trabalhista nos principais veículos especializados.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-12">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gla-gray-600 mb-8">
              O sócio fundador Wagner Gusmão é referência em direito trabalhista empresarial, compartilhando regularmente sua expertise em publicações especializadas, entrevistas e eventos do setor jurídico.
            </p>
          </div>
        </div>
      </section>

      {/* Artigos e Entrevistas */}
      <section className="bg-gla-gray-50 py-16">
        <div className="container-section">
          <h2 className="heading-primary mb-12 text-center">Artigos e Entrevistas</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Artigo 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gla-blue p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-24 h-24 opacity-25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <p className="text-sm bg-gla-blue/10 text-gla-blue px-3 py-1 rounded-full">Artigo</p>
                  <p className="text-sm text-gla-gray-600 ml-auto">Janeiro 2024</p>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-3">
                  Impactos da Reforma Trabalhista nas Organizações de Grande Porte
                </h3>
                <p className="text-gla-gray-600 mb-4">
                  Análise aprofundada sobre como as mudanças legislativas afetaram especificamente empresas com estruturas organizacionais complexas e quadros de colaboradores numerosos.
                </p>
                <div className="flex items-center text-sm text-gla-gray-600">
                  <span className="font-medium">Publicado em:</span>
                  <span className="ml-2">Revista Jurídica Empresarial</span>
                </div>
              </div>
            </div>

            {/* Artigo 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gla-blue p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-24 h-24 opacity-25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <p className="text-sm bg-gla-blue/10 text-gla-blue px-3 py-1 rounded-full">Entrevista</p>
                  <p className="text-sm text-gla-gray-600 ml-auto">Outubro 2023</p>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-3">
                  Compliance Trabalhista como Diferencial Competitivo
                </h3>
                <p className="text-gla-gray-600 mb-4">
                  Entrevista exclusiva sobre como programas de conformidade trabalhista bem estruturados podem representar vantagem estratégica para empresas do setor industrial.
                </p>
                <div className="flex items-center text-sm text-gla-gray-600">
                  <span className="font-medium">Veiculado em:</span>
                  <span className="ml-2">Canal Corporativo</span>
                </div>
              </div>
            </div>

            {/* Artigo 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gla-blue p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-24 h-24 opacity-25">
                  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <p className="text-sm bg-gla-blue/10 text-gla-blue px-3 py-1 rounded-full">Podcast</p>
                  <p className="text-sm text-gla-gray-600 ml-auto">Janeiro 2024</p>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-3">
                  Estratégias para Redução de Passivos Trabalhistas
                </h3>
                <p className="text-gla-gray-600 mb-4">
                  Participação especial discutindo abordagens jurídicas e operacionais para mitigação de contingências trabalhistas em organizações complexas.
                </p>
                <div className="flex items-center text-sm text-gla-gray-600">
                  <span className="font-medium">Programa:</span>
                  <span className="ml-2">Podcast Direito & Negócios</span>
                </div>
              </div>
            </div>

            {/* Artigo 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gla-blue p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-24 h-24 opacity-25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <p className="text-sm bg-gla-blue/10 text-gla-blue px-3 py-1 rounded-full">Webinar</p>
                  <p className="text-sm text-gla-gray-600 ml-auto">Novembro 2023</p>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-3">
                  Due Diligence Trabalhista em Operações de M&A
                </h3>
                <p className="text-gla-gray-600 mb-4">
                  Apresentação sobre a importância da análise trabalhista em processos de fusão e aquisição, com foco na identificação de contingências e passivos ocultos.
                </p>
                <div className="flex items-center text-sm text-gla-gray-600">
                  <span className="font-medium">Promovido por:</span>
                  <span className="ml-2">Instituto Brasileiro de Direito Empresarial</span>
                </div>
              </div>
            </div>

            {/* Artigo 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gla-blue p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-24 h-24 opacity-25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <p className="text-sm bg-gla-blue/10 text-gla-blue px-3 py-1 rounded-full">Artigo</p>
                  <p className="text-sm text-gla-gray-600 ml-auto">Agosto 2023</p>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-3">
                  Teletrabalho e Segurança Jurídica para Empresas
                </h3>
                <p className="text-gla-gray-600 mb-4">
                  Análise das implicações legais e melhores práticas para empresas que adotam modelos de trabalho remoto ou híbrido em suas operações.
                </p>
                <div className="flex items-center text-sm text-gla-gray-600">
                  <span className="font-medium">Publicado em:</span>
                  <span className="ml-2">Jornal Econômico Brasil</span>
                </div>
              </div>
            </div>

            {/* Artigo 6 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gla-blue p-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-24 h-24 opacity-25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <p className="text-sm bg-gla-blue/10 text-gla-blue px-3 py-1 rounded-full">Entrevista</p>
                  <p className="text-sm text-gla-gray-600 ml-auto">Dezembro 2023</p>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-3">
                  Perspectivas para o Direito Trabalhista Empresarial em 2024
                </h3>
                <p className="text-gla-gray-600 mb-4">
                  Análise das tendências jurídicas, principais temas em discussão nos tribunais e recomendações estratégicas para empresas com operações de escala.
                </p>
                <div className="flex items-center text-sm text-gla-gray-600">
                  <span className="font-medium">Programa:</span>
                  <span className="ml-2">Rádio Jurídica Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos e Palestras */}
      <section className="bg-white py-16">
        <div className="container-section">
          <h2 className="heading-primary mb-12 text-center">Eventos e Palestras</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Evento 1 */}
            <div className="bg-gla-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <p className="text-sm bg-gla-blue text-white px-3 py-1 rounded-full">Congresso</p>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gla-blue mb-2">
                Congresso Brasileiro de Direito do Trabalho
              </h3>
              <p className="text-gla-gray-600 mb-4">
                Palestra: "Contingenciamento estratégico de passivos trabalhistas em organizações com operações de escala"
              </p>
              <div className="flex items-center text-sm text-gla-gray-600 mb-4">
                <span className="font-medium">Local:</span>
                <span className="ml-2">São Paulo, SP</span>
                <span className="mx-2">•</span>
                <span>Maio 2023</span>
              </div>
              <p className="text-gla-gray-600">
                Wagner Gusmão compartilhou metodologias desenvolvidas pela GLA Advogados para identificação, mensuração e redução estratégica de passivos trabalhistas em empresas com estruturas organizacionais complexas.
              </p>
            </div>

            {/* Evento 2 */}
            <div className="bg-gla-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <p className="text-sm bg-gla-blue text-white px-3 py-1 rounded-full">Fórum</p>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gla-blue mb-2">
                Fórum Jurídico do Setor Automotivo
              </h3>
              <p className="text-gla-gray-600 mb-4">
                Painel: "Desafios trabalhistas específicos da indústria automotiva e estratégias de mitigação"
              </p>
              <div className="flex items-center text-sm text-gla-gray-600 mb-4">
                <span className="font-medium">Local:</span>
                <span className="ml-2">Belo Horizonte, MG</span>
                <span className="mx-2">•</span>
                <span>Setembro 2023</span>
              </div>
              <p className="text-gla-gray-600">
                Participação em painel de especialistas debatendo questões específicas do setor automotivo, como terceirização, automação e gestão de turnos de trabalho sob a perspectiva do direito trabalhista empresarial.
              </p>
            </div>

            {/* Evento 3 */}
            <div className="bg-gla-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <p className="text-sm bg-gla-blue text-white px-3 py-1 rounded-full">Seminário</p>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gla-blue mb-2">
                Seminário de Compliance Corporativo
              </h3>
              <p className="text-gla-gray-600 mb-4">
                Workshop: "Implementação de programas de compliance trabalhista em instituições financeiras"
              </p>
              <div className="flex items-center text-sm text-gla-gray-600 mb-4">
                <span className="font-medium">Local:</span>
                <span className="ml-2">Rio de Janeiro, RJ</span>
                <span className="mx-2">•</span>
                <span>Novembro 2023</span>
              </div>
              <p className="text-gla-gray-600">
                Workshop conduzido pela sócia Larissa de Oliveira Lima, focado nas particularidades do setor financeiro e estratégias específicas para conformidade trabalhista em ambientes regulados.
              </p>
            </div>

            {/* Evento 4 */}
            <div className="bg-gla-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <p className="text-sm bg-gla-blue text-white px-3 py-1 rounded-full">Conferência</p>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gla-blue mb-2">
                Conferência Anual de Direito Empresarial
              </h3>
              <p className="text-gla-gray-600 mb-4">
                Palestra: "A interface entre ESG e gestão trabalhista: oportunidades e riscos jurídicos"
              </p>
              <div className="flex items-center text-sm text-gla-gray-600 mb-4">
                <span className="font-medium">Local:</span>
                <span className="ml-2">Brasília, DF</span>
                <span className="mx-2">•</span>
                <span>Fevereiro 2024</span>
              </div>
              <p className="text-gla-gray-600">
                Apresentação sobre como critérios ESG impactam a gestão trabalhista e como empresas podem integrar práticas sustentáveis às suas políticas de recursos humanos com segurança jurídica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gla-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Conheça nossa abordagem especializada para seu setor
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato para agendar uma reunião com nosso departamento jurídico e discutir soluções personalizadas para sua organização.
          </p>
          <Link href="/contato" className="btn-primary text-lg px-8 py-3">
            Solicitar Análise Jurídica
          </Link>
        </div>
      </section>
    </>
  )
}