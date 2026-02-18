import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'consultoria',
    title: 'Consultoria Preventiva',
    desc: 'Nossa consultoria preventiva é focada em identificar e neutralizar potenciais riscos trabalhistas antes que se transformem em problemas concretos.',
    items: [
      'Avaliação de contratos e políticas',
      'Compliance trabalhista',
      'Auditorias preventivas',
      'Treinamentos para gestores',
      'Revisão de procedimentos internos',
      'Assessoria em negociações sindicais',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    cta: 'Solicitar consultoria',
  },
  {
    id: 'defesa',
    title: 'Defesa Processual',
    desc: 'Quando um litígio é inevitável, nossa equipe especializada atua com rigor técnico e estratégia personalizada para garantir a melhor defesa.',
    items: [
      'Defesa em processos individuais',
      'Defesa em ações coletivas',
      'Recursos nos tribunais superiores',
      'Negociação de acordos',
      'Defesa em procedimentos administrativos',
      'Acompanhamento de fiscalizações',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
    cta: 'Solicitar defesa jurídica',
  },
  {
    id: 'gestao',
    title: 'Gestão de Passivo',
    desc: 'Estratégias personalizadas para gestão eficiente do passivo trabalhista, utilizando análise de dados e inteligência jurídica.',
    items: [
      'Diagnóstico de contingências',
      'Análise preditiva de riscos',
      'Planos de redução de passivo',
      'Dashboard de controle processual',
      'Relatórios gerenciais',
      'Estratégias de encerramento',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    cta: 'Solicitar gestão de passivo',
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence Trabalhista',
    desc: 'Análises minuciosas para identificar contingências trabalhistas em fusões e aquisições, proporcionando segurança jurídica.',
    items: [
      'Avaliação de processos trabalhistas',
      'Identificação de passivos ocultos',
      'Análise de documentos e contratos',
      'Avaliação de procedimentos internos',
      'Quantificação de riscos',
      'Recomendações estratégicas',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    cta: 'Solicitar due diligence',
  },
];

export default function ServicosPage() {
  return (
    <>
      <Hero
        title="Serviços jurídicos especializados"
        subtitle="Conheça nossa abordagem personalizada para resolver questões trabalhistas complexas do ambiente corporativo."
        height="medium"
        showBadge={false}
        ctaText=""
      />

      {/* Intro */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <h2 className="heading-lg text-navy-dark mb-4">Nossa abordagem</h2>
                <span className="gold-line" />
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  Mais do que prestadores de serviços jurídicos, somos parceiros estratégicos. Nossa abordagem vai além da resolução de problemas imediatos, focando na construção de valor real e duradouro.
                </p>
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  Acreditamos que o melhor trabalho jurídico é aquele que previne litígios antes que ocorram. Investimos em conhecer profundamente o negócio de nossos clientes.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Nossa equipe multidisciplinar combina expertise jurídica, visão de negócios e tecnologia para soluções completas e eficientes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="premium-card p-3 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Documentos jurídicos"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-premium bg-off-white relative" id="servicos">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #0A1628 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Nossos serviços</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Soluções jurídicas completas em direito trabalhista empresarial.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {services.map((svc, idx) => (
              <div key={svc.id} id={svc.id}>
                <ScrollReveal>
                  <div className="glass-light p-8 md:p-10 overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-10">
                      <div className="lg:w-1/3">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                          style={{
                            background: 'linear-gradient(135deg, rgba(184,150,46,0.1) 0%, rgba(184,150,46,0.05) 100%)',
                            border: '1px solid rgba(184,150,46,0.15)',
                            color: '#B8962E',
                          }}
                        >
                          {svc.icon}
                        </div>
                        <h3 className="heading-md text-navy-dark mb-3">{svc.title}</h3>
                      </div>
                      <div className="lg:w-2/3">
                        <p className="text-text-secondary mb-6 leading-relaxed">{svc.desc}</p>

                        <h4 className="font-semibold text-navy-dark text-sm uppercase tracking-wider mb-4">
                          Serviços incluídos
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                          {svc.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#7B1535" className="w-4 h-4 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <Link href="/contato" className="btn-primary">
                          {svc.cta}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(22,32,64,0.9) 100%)' }}
        />
        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-white mb-6">Precisando de soluções jurídicas personalizadas?</h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed">
                Entre em contato para uma análise personalizada das necessidades jurídicas da sua empresa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contato" className="btn-gold">
                  Solicitar proposta
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}