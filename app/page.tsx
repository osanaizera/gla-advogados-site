import Link from 'next/link';
import Image from 'next/image';
import Hero from './components/Hero';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        title="Seu parceiro jurídico para os desafios trabalhistas que importam."
        subtitle="Consultoria e defesa trabalhista de alto nível para empresas que exigem excelência, estratégia e resultados concretos na gestão de risco jurídico."
        ctaText="Solicitar Análise Jurídica"
        ctaLink="/contato"
        ctaSecondaryText="Conheça nossos serviços"
        ctaSecondaryLink="/servicos"
      />

      {/* ===== NÚMEROS / CREDIBILIDADE STRIP ===== */}
      <section className="bg-navy-dark py-16 md:py-20 relative overflow-hidden">
        {/* Subtle gradient accent */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(123,21,53,0.15) 0%, transparent 60%)',
          }}
        />
        <div className="container-premium mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {[
              { number: '15+', label: 'Anos de atuação' },
              { number: '2.500+', label: 'Processos conduzidos' },
              { number: '500+', label: 'Empresas assessoradas' },
              { number: '20+', label: 'Setores atendidos' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div
                  className="text-center relative"
                  style={{
                    borderRight:
                      i < 3
                        ? '1px solid rgba(255,255,255,0.06)'
                        : 'none',
                  }}
                >
                  <span
                    className="block text-4xl md:text-5xl font-bold font-playfair mb-2"
                    style={{ color: '#B8962E' }}
                  >
                    {item.number}
                  </span>
                  <span className="text-white/60 text-sm font-medium tracking-wide uppercase">
                    {item.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PILARES DE ATUAÇÃO ===== */}
      <section className="section-premium bg-off-white relative">
        {/* Subtle texture */}
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
              <h2 className="heading-lg text-navy-dark mb-4">Pilares da nossa atuação</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Rigor técnico, visão estratégica e compromisso com resultados definem nossa abordagem na gestão de risco jurídico do seu quadro de colaboradores.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                num: '01',
                title: 'Compliance Trabalhista',
                desc: 'Desenvolvemos protocolos e políticas internas que garantem conformidade legal e minimizam riscos trabalhistas para empresas de médio e grande porte.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'Gestão de Passivo',
                desc: 'Análise preditiva e estratégias personalizadas para redução do passivo trabalhista, otimizando recursos e protegendo o resultado financeiro da sua empresa.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Defesa Estratégica',
                desc: 'Representação em todas as instâncias com excelência técnica, estratégia personalizada e foco em resultados concretos para a defesa dos interesses corporativos.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="glass-light p-10 h-full relative overflow-hidden group">
                  {/* Decorative number */}
                  <span
                    className="absolute -right-4 -top-6 font-playfair text-[140px] font-bold leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(10,22,40,0.04)' }}
                  >
                    {card.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(184,150,46,0.1) 0%, rgba(184,150,46,0.05) 100%)',
                      border: '1px solid rgba(184,150,46,0.15)',
                      color: '#B8962E',
                    }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="heading-sm text-navy-dark mb-3 relative z-10">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6 relative z-10">
                    {card.desc}
                  </p>
                  <Link
                    href="/servicos"
                    className="inline-flex items-center gap-2 text-navy-light font-medium text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POR QUE GLA — Split Layout ===== */}
      <section className="section-premium bg-navy-dark relative overflow-hidden">
        {/* Accent gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 80% 20%, rgba(30,58,110,0.3) 0%, transparent 50%)',
          }}
        />
        <div className="container-premium mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ transform: 'rotate(-2deg)' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Análise de contratos e documentos jurídicos"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 60%, rgba(10,22,40,0.3) 100%)',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal>
                <h2 className="heading-lg text-white mb-4">
                  Por que escolher a GLA Advogados
                </h2>
                <p className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed">
                  Combinamos expertise jurídica e visão de negócios para entregar resultados que impactam a gestão de risco trabalhista da sua organização.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                {[
                  {
                    title: 'Expertise Setorial',
                    desc: 'Conhecimento profundo das particularidades trabalhistas de mais de 20 segmentos econômicos.',
                  },
                  {
                    title: 'Advocacia Preventiva',
                    desc: 'Protocolos jurídicos que minimizam riscos e geram economia real no passivo trabalhista.',
                  },
                  {
                    title: 'Tecnologia Jurídica',
                    desc: 'Ferramentas avançadas para gestão processual, análise preditiva e acompanhamento em tempo real.',
                  },
                  {
                    title: 'Resultados Comprovados',
                    desc: 'Histórico de redução significativa de passivos trabalhistas para empresas de médio e grande porte.',
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 150}>
                    <div className="flex gap-4 items-start">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(184,150,46,0.15)', border: '1px solid rgba(184,150,46,0.3)' }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#B8962E" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-white/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SÓCIOS ===== */}
      <section className="section-premium bg-off-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Nossos sócios fundadores</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Experiência consolidada e liderança reconhecida no direito trabalhista empresarial.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                name: 'Wagner Gusmão',
                role: 'Sócio-fundador',
                desc: 'Mais de 20 anos de experiência em direito trabalhista empresarial. Especialista em negociações sindicais e gestão de crises. Presença constante na mídia como referência em legislação trabalhista.',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
              },
              {
                name: 'Larissa de Oliveira Lima',
                role: 'Sócia-fundadora',
                desc: 'Especialista em consultoria preventiva e compliance trabalhista. Desenvolveu metodologia própria para redução de passivos trabalhistas em empresas com grande quadro de colaboradores.',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
              },
            ].map((socio, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="premium-card overflow-hidden group">
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <Image
                      src={socio.img}
                      alt={socio.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                    />
                    {/* Gradient overlay on photo */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, transparent 50%, rgba(10,22,40,0.15) 100%)',
                      }}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="heading-sm text-navy-dark mb-1">{socio.name}</h3>
                    <p className="text-wine italic mb-4 font-medium">{socio.role}</p>
                    <p className="text-text-secondary leading-relaxed mb-5">{socio.desc}</p>
                    <Link
                      href="/sobre"
                      className="inline-flex items-center gap-2 text-navy-light font-medium text-sm hover:gap-3 transition-all duration-300"
                    >
                      Ver perfil completo
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MÍDIA ===== */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Na mídia</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Nossa expertise reconhecida pelos principais veículos de comunicação do país.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: 'Reforma trabalhista: especialistas analisam impactos na gestão de passivo das empresas',
                source: 'Valor Econômico',
                date: 'Jan 2024',
              },
              {
                title: 'GLA Advogados lança programa de compliance trabalhista para empresas de médio e grande porte',
                source: 'Portal Jurídico',
                date: 'Mar 2024',
              },
              {
                title: 'Home office permanente: implicações no quadro de colaboradores e riscos jurídicos',
                source: 'Exame',
                date: 'Mai 2024',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="media-card p-6 md:p-8 bg-white premium-card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="heading-sm text-navy-dark mb-2">{item.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm px-3 py-1 rounded-full font-medium" style={{ background: 'rgba(123,21,53,0.08)', color: '#7B1535' }}>
                        {item.source}
                      </span>
                      <span className="text-text-secondary text-sm">{item.date}</span>
                    </div>
                  </div>
                  <Link
                    href="/imprensa"
                    className="text-wine font-medium text-sm hover:text-navy-light transition-colors whitespace-nowrap inline-flex items-center gap-2"
                  >
                    Ler matéria
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative overflow-hidden py-24 md:py-36">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(22,32,64,0.9) 100%)',
          }}
        />

        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-white mb-6">
                Transforme a gestão jurídica trabalhista da sua empresa
              </h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed">
                Solicite uma análise personalizada e descubra como reduzir seu passivo trabalhista com estratégia e excelência técnica.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contato" className="btn-gold">
                  Solicitar Análise Jurídica
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link href="/servicos" className="btn-outline">
                  Nossos serviços
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}