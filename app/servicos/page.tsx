import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicosPage() {
  return (
    <>
      <Hero 
        title="Serviços jurídicos especializados"
        subtitle="Conheça nossa abordagem personalizada para resolver questões trabalhistas complexas do ambiente corporativo."
        height="medium"
        showBadge={false}
      />

      {/* Intro Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="heading-lg text-navy mb-4">Nossa abordagem</h2>
                <span className="gold-line"></span>
                <p className="text-text-secondary text-lg mb-6">
                  Mais do que simples prestadores de serviços jurídicos, somos parceiros estratégicos das empresas que assessoramos. Nossa abordagem vai além da resolução de problemas imediatos, focando na construção de relações de longo prazo e na criação de valor real para nossos clientes.
                </p>
                <p className="text-text-secondary text-lg mb-6">
                  Acreditamos que o melhor trabalho jurídico é aquele que previne litígios antes que eles ocorram. Por isso, investimos em conhecer profundamente o negócio de nossos clientes, seus processos internos e cultura organizacional.
                </p>
                <p className="text-text-secondary text-lg">
                  Nossa equipe multidisciplinar trabalha de forma integrada, combinando expertise jurídica, visão de negócios e tecnologia para oferecer soluções completas e eficientes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="premium-card p-4 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Documentos jurídicos"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="section-premium bg-off-white" id="servicos">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="heading-lg text-navy mb-4">Nossos serviços</h2>
              <p className="text-text-secondary text-xl max-w-3xl mx-auto">
                Oferecemos soluções jurídicas completas em direito trabalhista empresarial, desde a prevenção até a representação em processos judiciais.
              </p>
            </div>
          </ScrollReveal>

          {/* Serviço 1 - Consultoria */}
          <div className="mb-24" id="consultoria">
            <ScrollReveal>
              <div className="glass premium-card p-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                      </svg>
                    </div>
                    <h3 className="text-navy heading-md mb-4">Consultoria Preventiva</h3>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-text-secondary mb-6">
                      Nossa consultoria preventiva é focada em identificar e neutralizar potenciais riscos trabalhistas antes que se transformem em problemas concretos. Desenvolvemos protocolos, políticas e procedimentos adaptados à realidade da sua empresa.
                    </p>
                    
                    <h4 className="font-medium text-navy text-lg mb-3">Serviços incluídos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Avaliação de contratos e políticas
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Compliance trabalhista
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Auditorias preventivas
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Treinamentos para gestores
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Revisão de procedimentos internos
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Assessoria em negociações sindicais
                      </li>
                    </ul>
                    
                    <Link href="/contato" className="btn-primary">
                      Solicitar consultoria
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Serviço 2 - Defesa */}
          <div className="mb-24" id="defesa">
            <ScrollReveal>
              <div className="glass premium-card p-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                    </div>
                    <h3 className="text-navy heading-md mb-4">Defesa Processual</h3>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-text-secondary mb-6">
                      Quando um litígio é inevitável, nossa equipe especializada em contencioso trabalhista atua com rigor técnico e estratégia personalizada para garantir a melhor defesa dos interesses da sua empresa em todas as instâncias.
                    </p>
                    
                    <h4 className="font-medium text-navy text-lg mb-3">Serviços incluídos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Defesa em processos individuais
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Defesa em ações coletivas
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Recursos nos tribunais superiores
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Negociação de acordos
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Defesa em procedimentos administrativos
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Acompanhamento de fiscalizações
                      </li>
                    </ul>
                    
                    <Link href="/contato" className="btn-primary">
                      Solicitar defesa jurídica
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Serviço 3 - Gestão */}
          <div className="mb-24" id="gestao">
            <ScrollReveal>
              <div className="glass premium-card p-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                      </svg>
                    </div>
                    <h3 className="text-navy heading-md mb-4">Gestão de Passivo</h3>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-text-secondary mb-6">
                      Desenvolvemos estratégias personalizadas para gestão eficiente do passivo trabalhista da sua empresa, utilizando ferramentas de análise de dados e inteligência jurídica para otimizar resultados e reduzir custos.
                    </p>
                    
                    <h4 className="font-medium text-navy text-lg mb-3">Serviços incluídos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Diagnóstico de contingências
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Análise preditiva de riscos
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Planos de redução de passivo
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Dashboard de controle processual
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Relatórios gerenciais
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Estratégias de encerramento de processos
                      </li>
                    </ul>
                    
                    <Link href="/contato" className="btn-primary">
                      Solicitar gestão de passivo
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Serviço 4 - Due Diligence */}
          <div id="due-diligence">
            <ScrollReveal>
              <div className="glass premium-card p-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                      </svg>
                    </div>
                    <h3 className="text-navy heading-md mb-4">Due Diligence Trabalhista</h3>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-text-secondary mb-6">
                      Realizamos análises minuciosas para identificar contingências trabalhistas em operações de fusões e aquisições, proporcionando segurança jurídica e clareza para tomada de decisões em transações corporativas.
                    </p>
                    
                    <h4 className="font-medium text-navy text-lg mb-3">Serviços incluídos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Avaliação de processos trabalhistas
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Identificação de passivos ocultos
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Análise de documentos e contratos
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Avaliação de procedimentos internos
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Quantificação de riscos
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Recomendações estratégicas
                      </li>
                    </ul>
                    
                    <Link href="/contato" className="btn-primary">
                      Solicitar due diligence
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section 
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-navy"
          style={{ opacity: 0.9 }}
        ></div>
        
        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-white mb-6">Precisando de soluções jurídicas personalizadas?</h2>
              <p className="text-gray-200 text-xl mb-12">
                Entre em contato para uma análise personalizada das necessidades jurídicas da sua empresa.
              </p>
              <Link href="/contato" className="btn-secondary text-lg px-8 py-4">
                Solicitar proposta
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}