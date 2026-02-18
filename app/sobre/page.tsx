import Link from 'next/link'

export default function Sobre() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gla-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Sobre a GLA Advogados
            </h1>
            <div className="h-1 w-40 bg-gla-red mb-8"></div>
            <p className="text-xl md:text-2xl">
              Excelência jurídica e especialização em direito trabalhista empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação do Escritório */}
      <section className="bg-white py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Nossa Trajetória</h2>
              <p className="text-gla-gray-600 mb-4">
                Fundada em 2012 pelo advogado Wagner Gusmão, a GLA Advogados nasceu com o propósito de oferecer serviços jurídicos especializados em direito trabalhista para empresas que buscam excelência na gestão de suas relações laborais.
              </p>
              <p className="text-gla-gray-600 mb-4">
                Com a incorporação da sócia Larissa de Oliveira Lima em 2015, ampliamos nossa capacidade de atendimento a organizações de médio e grande porte dos setores automotivo, financeiro e de serviços, consolidando nossa posição como referência em consultoria preventiva e defesa processual trabalhista.
              </p>
              <p className="text-gla-gray-600">
                Nossa estrutura operacional foi desenhada para atender às demandas específicas de empresas com quadros de colaboradores numerosos e estruturas organizacionais complexas, oferecendo soluções jurídicas que alinham compliance trabalhista e objetivos estratégicos corporativos.
              </p>
            </div>
            <div className="bg-gla-gray-50 p-10 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-gla-blue mb-6">Nossos Valores</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-gla-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif font-semibold text-gla-blue mb-1">Excelência Técnica</h4>
                    <p className="text-gla-gray-600">Rigor analítico e atualização constante para oferecer as soluções jurídicas mais eficazes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-gla-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif font-semibold text-gla-blue mb-1">Agilidade Estratégica</h4>
                    <p className="text-gla-gray-600">Respostas rápidas e eficientes às demandas jurídicas em um cenário trabalhista em constante evolução.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-gla-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif font-semibold text-gla-blue mb-1">Gestão de Valor</h4>
                    <p className="text-gla-gray-600">Foco em resultados que preservam o patrimônio empresarial e otimizam recursos organizacionais.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-gla-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif font-semibold text-gla-blue mb-1">Relacionamento Confiável</h4>
                    <p className="text-gla-gray-600">Parceria de longo prazo baseada em transparência e alinhamento estratégico com os objetivos do cliente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sócios Section */}
      <section className="bg-gla-gray-50 py-16">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-3">Sócios Fundadores</h2>
            <p className="text-lg text-gla-gray-600 max-w-3xl mx-auto">
              Conheça os especialistas que lideram a GLA Advogados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-48 bg-gla-gray-100 mb-6 rounded overflow-hidden">
                {/* Placeholder para foto de Wagner */}
                <div className="h-full w-full flex items-center justify-center bg-gla-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gla-blue mb-2">Wagner Gusmão</h3>
              <p className="text-gla-red font-medium mb-4">Sócio Fundador</p>
              <p className="text-gla-gray-600 mb-4">
                Com mais de 20 anos de experiência em direito trabalhista, Wagner Gusmão é reconhecido por sua atuação estratégica na defesa de empresas de médio e grande porte. Especialista em gestão de passivos trabalhistas e compliance corporativo, é presença constante em veículos especializados comentando temas relacionados ao direito do trabalho empresarial.
              </p>
              <div className="pt-4 border-t border-gla-gray-100">
                <p className="text-gla-gray-600"><span className="font-medium">Formação:</span> Bacharel em Direito pela USP, Especialista em Direito do Trabalho pela PUC-SP, MBA em Gestão Empresarial pela FGV.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-48 bg-gla-gray-100 mb-6 rounded overflow-hidden">
                {/* Placeholder para foto de Larissa */}
                <div className="h-full w-full flex items-center justify-center bg-gla-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gla-blue mb-2">Larissa de Oliveira Lima</h3>
              <p className="text-gla-red font-medium mb-4">Sócia</p>
              <p className="text-gla-gray-600 mb-4">
                Especialista em consultoria trabalhista preventiva, Larissa de Oliveira Lima se destaca pela implementação de programas de compliance e mitigação de riscos para organizações complexas. Com vasta experiência no setor financeiro, lidera o núcleo de consultoria da GLA, desenvolvendo soluções customizadas para empresas em fase de expansão.
              </p>
              <div className="pt-4 border-t border-gla-gray-100">
                <p className="text-gla-gray-600"><span className="font-medium">Formação:</span> Bacharel em Direito pela PUC-RJ, Mestre em Direito do Trabalho pela USP, Especialista em Compliance pela FGV.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="bg-white py-16">
        <div className="container-section">
          <div className="bg-gla-blue text-white p-8 md:p-12 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Nossa Missão</h2>
              <p className="text-xl mb-6 text-center">
                Proteger empresas de passivos trabalhistas através de estratégias jurídicas preventivas e defesa processual especializada, promovendo segurança jurídica e conformidade nas relações de trabalho corporativas.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1A2B5E" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">Visão Estratégica</h3>
                  <p className="text-white/80">
                    Antecipar cenários jurídicos para proteção proativa do patrimônio organizacional.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1A2B5E" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">Rigor Técnico</h3>
                  <p className="text-white/80">
                    Atuação baseada em profundo conhecimento jurídico e interpretações atualizadas da legislação.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1A2B5E" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">Resultados Mensuráveis</h3>
                  <p className="text-white/80">
                    Compromisso com redução efetiva de contingências e otimização de recursos corporativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gla-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gla-blue mb-6">
            Conheça nossa abordagem especializada para seu segmento
          </h2>
          <p className="text-xl text-gla-gray-600 mb-8 max-w-3xl mx-auto">
            Agende uma reunião com nosso departamento jurídico para discutir os desafios específicos de sua organização.
          </p>
          <Link href="/contato" className="btn-primary text-lg px-8 py-3">
            Solicitar Análise Jurídica
          </Link>
        </div>
      </section>
    </>
  )
}