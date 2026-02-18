import Link from 'next/link'

export default function Servicos() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gla-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Nossos Serviços
            </h1>
            <div className="h-1 w-40 bg-gla-red mb-8"></div>
            <p className="text-xl md:text-2xl">
              Soluções jurídicas especializadas para proteção e compliance trabalhista corporativo.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-12">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gla-gray-600 mb-8">
              A GLA Advogados oferece um portfólio completo de serviços jurídicos trabalhistas, desenhados para atender às necessidades específicas de empresas com estruturas organizacionais complexas e quadros de colaboradores numerosos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gla-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gla-blue">Indústria Automotiva</p>
              </div>
              <div className="bg-gla-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gla-blue">Setor Financeiro</p>
              </div>
              <div className="bg-gla-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gla-blue">Serviços Corporativos</p>
              </div>
              <div className="bg-gla-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gla-blue">Tecnologia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria Preventiva */}
      <section id="consultoria" className="bg-gla-gray-50 py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gla-blue text-white px-4 py-1 rounded mb-4">
                <span className="text-sm font-medium">Serviço Especializado</span>
              </div>
              <h2 className="heading-secondary mb-6">Consultoria Trabalhista Preventiva</h2>
              <p className="text-gla-gray-600 mb-4">
                Desenvolvemos estratégias proativas de compliance trabalhista para mitigar riscos jurídicos antes que se materializem em litígios, preservando o patrimônio organizacional e garantindo conformidade legal em todas as operações.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Auditorias Trabalhistas:</span> Identificação sistemática de vulnerabilidades jurídicas nos processos de gestão de capital humano.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Compliance Trabalhista:</span> Implementação de programas de conformidade legal alinhados à cultura organizacional da empresa.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Treinamentos Corporativos:</span> Capacitação de gestores e equipes de RH sobre melhores práticas e atualizações legislativas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Revisão de Políticas Internas:</span> Análise e adequação de normas, contratos e documentações às exigências legais e jurisprudenciais.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6 text-gla-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gla-blue mb-4">Por que investir em consultoria preventiva?</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gla-gray-50 p-4 rounded-lg">
                  <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Redução de 68%</span> na incidência de novos processos trabalhistas após implementação de programas de compliance.</p>
                </div>
                
                <div className="bg-gla-gray-50 p-4 rounded-lg">
                  <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Economia média de 45%</span> em custos com indenizações e honorários advocatícios de sucumbência.</p>
                </div>
                
                <div className="bg-gla-gray-50 p-4 rounded-lg">
                  <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Mitigação proativa de riscos</span> associados a mudanças na legislação e jurisprudência trabalhista.</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gla-gray-100">
                <p className="text-gla-gray-900 font-medium">Soluções customizadas para seu setor</p>
                <p className="text-gla-gray-600 mt-2 mb-4">
                  Desenvolvemos estratégias específicas para os desafios trabalhistas de cada segmento empresarial.
                </p>
                <Link href="/contato" className="btn-primary">
                  Solicitar Diagnóstico Preventivo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defesa em Processos */}
      <section id="defesa" className="bg-white py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gla-gray-50 p-8 rounded-lg shadow-sm">
                <div className="mb-6 text-gla-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-4">Nossa abordagem de defesa</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gla-blue mb-2">1. Análise Preliminar Estratégica</h4>
                    <p className="text-gla-gray-600">
                      Avaliação técnica completa do caso com identificação de pontos críticos, riscos e oportunidades de defesa.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gla-blue mb-2">2. Planejamento Processual</h4>
                    <p className="text-gla-gray-600">
                      Definição da estratégia jurídica adequada ao perfil do caso, considerando jurisprudência atual e particularidades setoriais.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gla-blue mb-2">3. Defesa Técnica Especializada</h4>
                    <p className="text-gla-gray-600">
                      Elaboração de teses defensivas robustas, amparadas em profundo conhecimento jurídico e precedentes favoráveis.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gla-blue mb-2">4. Monitoramento e Adaptação</h4>
                    <p className="text-gla-gray-600">
                      Acompanhamento integral do processo com ajustes estratégicos conforme sua evolução e decisões intermediárias.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gla-gray-100">
                  <Link href="/contato" className="btn-primary">
                    Consulta de Caso Específico
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-block bg-gla-blue text-white px-4 py-1 rounded mb-4">
                <span className="text-sm font-medium">Serviço Especializado</span>
              </div>
              <h2 className="heading-secondary mb-6">Defesa em Processos Trabalhistas</h2>
              <p className="text-gla-gray-600 mb-4">
                Representamos juridicamente empresas em litígios trabalhistas com estratégias defensivas personalizadas e tecnicamente robustas, minimizando riscos financeiros e protegendo a reputação corporativa.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Reclamações Trabalhistas:</span> Defesa técnica em processos individuais e coletivos, com atuação em todas as instâncias da Justiça do Trabalho.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Recursos Estratégicos:</span> Elaboração e acompanhamento de recursos junto aos Tribunais Regionais e Tribunal Superior do Trabalho.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Ações Coletivas:</span> Defesa em dissídios coletivos e ações civis públicas, com foco na proteção patrimonial corporativa.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Negociações e Acordos:</span> Condução estratégica de conciliações visando a redução de passivos e solução eficiente de litígios.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gestão de Passivo */}
      <section id="gestao" className="bg-gla-gray-50 py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gla-blue text-white px-4 py-1 rounded mb-4">
                <span className="text-sm font-medium">Serviço Especializado</span>
              </div>
              <h2 className="heading-secondary mb-6">Gestão de Passivo Trabalhista</h2>
              <p className="text-gla-gray-600 mb-4">
                Desenvolvemos metodologias específicas para mapear, analisar e gerenciar estrategicamente o passivo trabalhista de organizações com operações de escala, identificando padrões de vulnerabilidade e implementando soluções para redução gradativa e sustentável de contingências.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Diagnóstico de Contingências:</span> Mapeamento completo do passivo trabalhista atual com classificação por risco, tema e unidade organizacional.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Análise de Causas-Raiz:</span> Identificação dos fatores geradores de passivo com abordagem por segmento operacional.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Estratégia de Redução:</span> Plano estruturado com ações jurídicas e operacionais para mitigação progressiva de contingências.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Monitoramento Contínuo:</span> Dashboard analítico para acompanhamento da evolução do passivo e eficácia das ações implementadas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6 text-gla-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gla-blue mb-4">Benefícios da Gestão Estratégica</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gla-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-serif font-bold text-gla-blue mb-2">32%</p>
                  <p className="text-gla-gray-600 text-sm">Redução média no valor de contingências em 12 meses</p>
                </div>
                
                <div className="bg-gla-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-serif font-bold text-gla-blue mb-2">47%</p>
                  <p className="text-gla-gray-600 text-sm">Diminuição na entrada de novos processos</p>
                </div>
                
                <div className="bg-gla-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-serif font-bold text-gla-blue mb-2">58%</p>
                  <p className="text-gla-gray-600 text-sm">Aumento em acordos com condições favoráveis</p>
                </div>
                
                <div className="bg-gla-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-serif font-bold text-gla-blue mb-2">25%</p>
                  <p className="text-gla-gray-600 text-sm">Melhoria na precisão de provisões contábeis</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gla-gray-100">
                <p className="text-gla-gray-900 font-medium">Análise Personalizada de Passivo</p>
                <p className="text-gla-gray-600 mt-2 mb-4">
                  Solicite um diagnóstico preliminar da situação atual do passivo trabalhista de sua organização.
                </p>
                <Link href="/contato" className="btn-primary">
                  Agendar Diagnóstico de Passivo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence */}
      <section id="due-diligence" className="bg-white py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gla-gray-50 p-8 rounded-lg shadow-sm">
                <div className="mb-6 text-gla-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-4">Quando realizar uma Due Diligence Trabalhista?</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gla-blue/10 p-4 rounded-lg">
                    <h4 className="font-medium text-gla-blue mb-1">Fusões e Aquisições (M&A)</h4>
                    <p className="text-gla-gray-600 text-sm">
                      Avaliação de potenciais contingências trabalhistas que possam impactar o valor da transação ou gerar passivos ocultos.
                    </p>
                  </div>
                  
                  <div className="bg-gla-blue/10 p-4 rounded-lg">
                    <h4 className="font-medium text-gla-blue mb-1">Reestruturações Organizacionais</h4>
                    <p className="text-gla-gray-600 text-sm">
                      Análise de implicações trabalhistas em processos de downsizing, mudanças estruturais ou reorganização corporativa.
                    </p>
                  </div>
                  
                  <div className="bg-gla-blue/10 p-4 rounded-lg">
                    <h4 className="font-medium text-gla-blue mb-1">Expansão de Operações</h4>
                    <p className="text-gla-gray-600 text-sm">
                      Identificação preventiva de riscos em novos mercados ou regiões com diferentes características regulatórias.
                    </p>
                  </div>
                  
                  <div className="bg-gla-blue/10 p-4 rounded-lg">
                    <h4 className="font-medium text-gla-blue mb-1">Mudanças Legislativas</h4>
                    <p className="text-gla-gray-600 text-sm">
                      Avaliação de conformidade frente a alterações significativas na legislação trabalhista ou em normas regulatórias.
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gla-gray-100">
                  <Link href="/contato" className="btn-primary">
                    Solicitar Proposta Personalizada
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-block bg-gla-blue text-white px-4 py-1 rounded mb-4">
                <span className="text-sm font-medium">Serviço Especializado</span>
              </div>
              <h2 className="heading-secondary mb-6">Due Diligence Trabalhista</h2>
              <p className="text-gla-gray-600 mb-4">
                Conduzimos processos estruturados de auditoria trabalhista para operações societárias, expansões e reestruturações organizacionais, oferecendo um mapeamento detalhado de riscos, contingências e oportunidades de adequação.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Auditoria Documental:</span> Análise meticulosa de contratos, políticas internas e documentação trabalhista para identificação de vulnerabilidades.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Avaliação de Passivo:</span> Mensuração técnica de contingências existentes e potenciais com impacto em transações corporativas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Relatório de Conformidade:</span> Diagnóstico detalhado de práticas operacionais e alinhamento com exigências regulatórias trabalhistas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gla-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gla-gray-600"><span className="font-medium text-gla-blue">Plano de Adequação:</span> Recomendações estratégicas para mitigação de riscos identificados e adequação de processos internos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gla-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Solicite uma análise jurídica personalizada
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para desenvolver estratégias jurídicas alinhadas às necessidades específicas de sua organização.
          </p>
          <Link href="/contato" className="btn-primary text-lg px-8 py-3">
            Fale com nosso departamento jurídico
          </Link>
        </div>
      </section>
    </>
  )
}