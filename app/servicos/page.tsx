import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

export default function ServicosPage() {
  const servicos = [
    {
      id: 'consultoria',
      title: 'Consultoria Preventiva',
      desc: 'Nossa consultoria preventiva é focada em identificar e neutralizar potenciais riscos trabalhistas antes que se transformem em problemas concretos. Desenvolvemos protocolos, políticas e procedimentos de compliance adaptados à realidade da sua empresa e seu quadro de colaboradores.',
      items: [
        'Avaliação de contratos e políticas',
        'Compliance trabalhista',
        'Auditorias preventivas',
        'Treinamentos para gestores',
        'Revisão de procedimentos internos',
        'Assessoria em negociações sindicais',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
    },
    {
      id: 'defesa',
      title: 'Defesa Processual',
      desc: 'Quando um litígio é inevitável, nossa equipe especializada em contencioso trabalhista atua com rigor técnico e estratégia personalizada para garantir a melhor defesa dos interesses da sua empresa em todas as instâncias.',
      items: [
        'Defesa em processos individuais',
        'Defesa em ações coletivas',
        'Recursos nos tribunais superiores',
        'Negociação de acordos',
        'Defesa em procedimentos administrativos',
        'Acompanhamento de fiscalizações',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
        </svg>
      ),
    },
    {
      id: 'gestao',
      title: 'Gestão de Passivo',
      desc: 'Desenvolvemos estratégias personalizadas para gestão eficiente do passivo trabalhista da sua empresa, utilizando ferramentas de análise de dados e inteligência jurídica para otimizar resultados e reduzir custos.',
      items: [
        'Diagnóstico de contingências',
        'Análise preditiva de riscos',
        'Planos de redução de passivo',
        'Dashboard de controle processual',
        'Relatórios gerenciais',
        'Estratégias de encerramento',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
    },
    {
      id: 'due-diligence',
      title: 'Due Diligence Trabalhista',
      desc: 'Realizamos análises minuciosas para identificar contingências trabalhistas em operações de fusões e aquisições, proporcionando segurança jurídica e clareza para tomada de decisões em transações corporativas.',
      items: [
        'Avaliação de processos trabalhistas',
        'Identificação de passivos ocultos',
        'Análise de documentos e contratos',
        'Avaliação de procedimentos internos',
        'Quantificação de riscos',
        'Recomendações estratégicas',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Serviços jurídicos especializados"
        subtitle="Abordagem personalizada para resolver questões trabalhistas complexas do ambiente corporativo e proteger seu quadro de colaboradores."
        height="medium"
        variant="centered"
        ctaText=""
        pillText="Nossos serviços"
      />

      {/* ===== SERVIÇOS — Bento cards grandes ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="mb-12">
              <span className="label-tag mb-3 block">Áreas de atuação</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Soluções completas em direito trabalhista
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {servicos.map((servico, i) => (
              <ScrollReveal key={servico.id} delay={i * 100}>
                <div className="bento-card" id={servico.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: icon + title */}
                    <div>
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: 'rgba(184,150,46,0.1)', color: '#B8962E' }}
                      >
                        {servico.icon}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight" style={{ color: '#0C1220' }}>
                        {servico.title}
                      </h3>
                    </div>

                    {/* Right: description + items */}
                    <div className="lg:col-span-2">
                      <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                        {servico.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {servico.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#7B1535" className="w-4 h-4 flex-shrink-0">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            {item}
                          </div>
                        ))}
                      </div>

                      <Link href="/contato" className="btn-wine-sm">
                        Solicitar {servico.title.toLowerCase()}
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABORDAGEM ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal>
              <div className="bento-card h-full">
                <span className="label-tag mb-4 block" style={{ color: '#7B1535' }}>Nossa abordagem</span>
                <h3 className="text-xl font-bold mb-4 tracking-tight" style={{ color: '#0C1220' }}>
                  Parceiros estratégicos
                </h3>
                <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    Mais do que prestadores de serviços jurídicos, somos parceiros estratégicos das empresas que assessoramos. Nossa abordagem vai além da resolução de problemas imediatos.
                  </p>
                  <p>
                    Acreditamos que o melhor trabalho jurídico é aquele que previne litígios antes que eles ocorram. Por isso, investimos em conhecer profundamente o negócio de nossos clientes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bento-card-wine h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight text-white">
                    Precisando de soluções personalizadas?
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Solicite uma análise personalizada das necessidades jurídicas da sua organização e descubra como otimizar a gestão de risco trabalhista.
                  </p>
                </div>
                <Link href="/contato" className="btn-gold w-fit">
                  Solicitar Análise Jurídica
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
