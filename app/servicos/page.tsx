import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicosPage() {
  return (
    <>
      <Hero
        title="Serviços jurídicos especializados"
        subtitle="Abordagem personalizada para resolver questões trabalhistas complexas do ambiente corporativo e proteger seu quadro de colaboradores."
        height="medium"
        showBadge={false}
        ctaText=""
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
      />

      {/* Intro Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="heading-lg text-navy-dark mb-4">Nossa abordagem</h2>
                <span className="gold-line"></span>
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  Mais do que prestadores de serviços jurídicos, somos parceiros estratégicos das empresas que assessoramos. Nossa abordagem vai além da resolução de problemas imediatos, focando na construção de relações de longo prazo e na criação de valor real para nossos clientes.
                </p>
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  Acreditamos que o melhor trabalho jurídico é aquele que previne litígios antes que eles ocorram. Por isso, investimos em conhecer profundamente o negócio de nossos clientes, seus processos internos e gestão do quadro de colaboradores.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Nossa equipe multidisciplinar trabalha de forma integrada, combinando expertise jurídica, visão de negócios e tecnologia para oferecer soluções completas em compliance trabalhista e gestão de passivo.
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
              <h2 className="heading-lg text-navy-dark mb-4">Nossos serviços</h2>
              <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
                Soluções jurídicas completas em direito trabalhista empresarial, da prevenção à representação em todas as instâncias.
              </p>
            </div>
          </ScrollReveal>

          {/* Serviço 1 - Consultoria */}
          <div className="mb-16" id="consultoria">
            <ScrollReveal>
              <div className="premium-card p-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(184,150,46,0.15) 0%, rgba(184,150,46,0.05) 100%)',
                        border: '1px solid rgba(184,150,46,0.2)',
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                    </div>
                    <h3 className="text-navy-dark heading-md mb-4">Consultoria Preventiva</h3>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      Nossa consultoria preventiva é focada em identificar e neutralizar potenciais riscos trabalhistas antes que se transformem em problemas concretos. Desenvolvemos protocolos, políticas e procedimentos de compliance adaptados à realidade da sua empresa e seu quadro de colaboradores.
                    </p>

                    <h4 className="font-medium text-navy-dark text-lg mb-3">Serviços incluídos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        'Avaliação de contratos e políticas',
                        'Compliance trabalhista',
                        'Auditorias preventivas',
                        'Treinamentos para gestores',
                        'Revisão de procedimentos internos',
                        'Assessoria em negociações sindicais',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {item}
                        </li>
                      ))}
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
          <div className="mb-16" id="defesa">
            <ScrollReveal>
              <div className="premium-card p-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(184,150,46,0.15) 0%, rgba(184,150,46,0.05) 100%)',
                        border: '1px solid rgba(184,150,46,0.2)',
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                      </svg>
                    </div>
                    <h3 className="text-navy-dark heading-md mb-4">Defesa Processual</h3>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      Quando um litígio é inevitável, nossa equipe especializada em contencioso trabalhista atua com rigor técnico e estratégia personalizada para garantir a melhor defesa dos interesses da sua empresa em todas as instâncias.
                    </p>

                    <h4 className="font-medium text-navy-dark text-lg mb-3">Serviços incluídos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        'Defesa em processos individuais',
                        'Defesa em ações coletivas',
                        'Recursos nos tribunais superiores',
                        'Negociação de acordos',
                        'Defesa em procedimentos administrativos',
                        'Acompanhamento de fiscalizações',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {item}
                        </li>
                      ))}
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
          <div className="mb-16" id="gestao">
            <ScrollReveal>
              <div className="premium-card p-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(184,150,46,0.15) 0%, rgba(184,150,46,0.05) 100%)',
                        border: '1px solid rgba(184,150,46,0.2)',
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                      </svg>
                    </div>
                    <h3 className="text-navy-dark heading-md mb-4">Gestão de Passivo</h3>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      Desenvolvemos estratégias personalizadas para gestão eficiente do passivo trabalhista da sua empresa, utilizando ferramentas de análise de dados e inteligência jurídica para otimizar resultados e reduzir custos.
                    </p>

                    <h4 className="font-medium text-navy-dark text-lg mb-3">Serviços incluídos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        'Diagnóstico de contingências',
                        'Análise preditiva de riscos',
                        'Planos de redução de passivo',
                        'Dashboard de controle processual',
                        'Relatórios gerenciais',
                        'Estratégias de encerramento',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {item}
                        </li>
                      ))}
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
              <div className="premium-card p-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(184,150,46,0.15) 0%, rgba(184,150,46,0.05) 100%)',
                        border: '1px solid rgba(184,150,46,0.2)',
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </div>
                    <h3 className="text-navy-dark heading-md mb-4">Due Diligence Trabalhista</h3>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      Realizamos análises minuciosas para identificar contingências trabalhistas em operações de fusões e aquisições, proporcionando segurança jurídica e clareza para tomada de decisões em transações corporativas.
                    </p>

                    <h4 className="font-medium text-navy-dark text-lg mb-3">Serviços incluídos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        'Avaliação de processos trabalhistas',
                        'Identificação de passivos ocultos',
                        'Análise de documentos e contratos',
                        'Avaliação de procedimentos internos',
                        'Quantificação de riscos',
                        'Recomendações estratégicas',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-wine mr-2 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {item}
                        </li>
                      ))}
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
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(22,32,64,0.9) 100%)',
          }}
        />

        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-white mb-6">Precisando de soluções jurídicas personalizadas?</h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed">
                Solicite uma análise personalizada das necessidades jurídicas da sua organização e descubra como otimizar a gestão de risco trabalhista.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contato" className="btn-gold">
                  Solicitar Análise Jurídica
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link href="/contato" className="btn-outline">
                  Fale conosco
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}