import Link from 'next/link'

export default function Contato() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gla-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Entre em Contato
            </h1>
            <div className="h-1 w-40 bg-gla-red mb-8"></div>
            <p className="text-xl md:text-2xl">
              Nossa equipe especializada está pronta para atender às demandas jurídicas de sua organização.
            </p>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="bg-white py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Column */}
            <div>
              <h2 className="heading-secondary mb-6">Fale com nosso departamento jurídico</h2>
              <p className="text-gla-gray-600 mb-8">
                Preencha o formulário abaixo para solicitar uma análise jurídica ou agendar uma reunião com nossos especialistas em direito trabalhista empresarial.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gla-gray-900 mb-2">Nome Completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cargo" className="block text-sm font-medium text-gla-gray-900 mb-2">Cargo *</label>
                    <input 
                      type="text" 
                      id="cargo" 
                      className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                      placeholder="Seu cargo na empresa"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gla-gray-900 mb-2">Empresa *</label>
                    <input 
                      type="text" 
                      id="empresa" 
                      className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                      placeholder="Nome da sua empresa"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="setor" className="block text-sm font-medium text-gla-gray-900 mb-2">Setor de Atuação *</label>
                    <select 
                      id="setor" 
                      className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                      required
                    >
                      <option value="">Selecione o setor</option>
                      <option value="automotivo">Indústria Automotiva</option>
                      <option value="financeiro">Financeiro</option>
                      <option value="servicos">Serviços</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="industrial">Indústria (outros segmentos)</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gla-gray-900 mb-2">E-mail Corporativo *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                    placeholder="seu.email@empresa.com.br"
                    required
                  />
                  <p className="text-sm text-gla-gray-600 mt-1">Utilizamos apenas e-mails corporativos para contato inicial.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gla-gray-900 mb-2">Telefone *</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="colaboradores" className="block text-sm font-medium text-gla-gray-900 mb-2">Número de Colaboradores *</label>
                    <select 
                      id="colaboradores" 
                      className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                      required
                    >
                      <option value="">Selecione o número</option>
                      <option value="50-100">50-100 colaboradores</option>
                      <option value="100-500">100-500 colaboradores</option>
                      <option value="500-2000">500-2000 colaboradores</option>
                      <option value="2000+">Mais de 2000 colaboradores</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gla-gray-900 mb-2">Assunto de Interesse *</label>
                  <select 
                    id="assunto" 
                    className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                    required
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="consultoria">Consultoria Trabalhista Preventiva</option>
                    <option value="defesa">Defesa em Processos Trabalhistas</option>
                    <option value="passivo">Gestão de Passivo Trabalhista</option>
                    <option value="due-diligence">Due Diligence Trabalhista</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gla-gray-900 mb-2">Mensagem *</label>
                  <textarea 
                    id="mensagem" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gla-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gla-blue"
                    placeholder="Descreva brevemente sua demanda jurídica ou questionamento"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="politica" 
                    className="mt-1"
                    required
                  />
                  <label htmlFor="politica" className="ml-2 text-sm text-gla-gray-600">
                    Concordo com a <a href="#" className="text-gla-blue hover:underline">Política de Privacidade</a> e autorizo o contato por parte da GLA Advogados.
                  </label>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="btn-primary w-full md:w-auto px-8 py-3"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            </div>

            {/* Info Column */}
            <div>
              <div className="bg-gla-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-serif font-semibold text-gla-blue mb-4">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-gla-blue mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gla-blue">Endereço</h4>
                      <p className="text-gla-gray-600">Av. Paulista, 1000, 15º andar</p>
                      <p className="text-gla-gray-600">Bela Vista, São Paulo - SP, 01310-100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-gla-blue mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gla-blue">Telefone</h4>
                      <p className="text-gla-gray-600">+55 (11) 3000-0000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-gla-blue mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gla-blue">E-mail</h4>
                      <p className="text-gla-gray-600">contato@glaadvogados.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-gla-blue mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gla-blue">Horário de Atendimento</h4>
                      <p className="text-gla-gray-600">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gla-blue text-white p-8 rounded-lg">
                <h3 className="text-xl font-serif font-semibold mb-4">Atendimento Personalizado</h3>
                <p className="mb-6">
                  A GLA Advogados oferece atendimento especializado para empresas de médio e grande porte, com foco em soluções jurídicas personalizadas para cada segmento de atuação.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                      </svg>
                    </div>
                    <p className="ml-2">Atendimento prioritário para situações emergenciais</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                      </svg>
                    </div>
                    <p className="ml-2">Advogados especializados por segmento empresarial</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                      </svg>
                    </div>
                    <p className="ml-2">Relatórios personalizados de acompanhamento processual</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                      </svg>
                    </div>
                    <p className="ml-2">Acesso exclusivo à plataforma online de gestão de processos</p>
                  </div>
                </div>
                
                <div>
                  <a 
                    href="https://api.whatsapp.com/send?phone=5511900000000&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20GLA%20Advogados."
                    className="inline-flex items-center bg-white text-gla-blue font-medium px-4 py-2 rounded hover:bg-gla-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6.8 2.4 1.5 3.18.71.8 1.57 1.67 2.4 2.6 2.2 2.45 3.75 4.23 5 5.03.9.58.02.01.03.02.46.27.97.42 1.46.43.51.02 1.04-.14 1.49-.41 1.28-.76 2.82-2.53 5.02-5 .83-.93 1.7-1.8 2.4-2.6.7-.78 1.5-1.69 1.5-3.17 0-3.32-2.68-6-6-6s-6 2.68-6 6z" />
                    </svg>
                    Falar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="bg-gla-gray-50 py-16">
        <div className="container-section">
          <div className="bg-gla-blue h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-white p-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 opacity-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <h3 className="text-xl font-serif font-semibold mb-2">Localização Estratégica</h3>
              <p>
                Nossa sede está localizada em região privilegiada de São Paulo, com fácil acesso a tribunais e centros empresariais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}