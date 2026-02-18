import Link from 'next/link';
import Image from 'next/image';
import Hero from './components/Hero';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* ===== HERO: H1 left + Photo right ===== */}
      <Hero
        title="Proteção jurídica para quem constrói negócios"
        subtitle="Consultoria e defesa trabalhista de alto nível para empresas que exigem excelência, estratégia e resultados concretos na gestão de risco jurídico."
        ctaText="Solicitar Análise Jurídica"
        ctaLink="/contato"
        ctaSecondaryText="Conheça nossos serviços"
        ctaSecondaryLink="/servicos"
        pillText="Direito Trabalhista Empresarial"
        heroImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
      />

      {/* ===== BENTO GRID — Seção principal ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="mb-12">
              <span className="label-tag mb-3 block">O que fazemos</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Soluções jurídicas completas
              </h2>
            </div>
          </ScrollReveal>

          {/* Row 1: 3 cards, 1/3 each */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Card 1 — Lista de serviços */}
            <ScrollReveal>
              <div className="bento-card h-full">
                <h3 className="text-lg font-bold mb-6 tracking-tight" style={{ color: '#0C1220' }}>
                  Nossas áreas
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'Consultoria Preventiva',
                    'Defesa em Processos',
                    'Gestão de Passivo',
                    'Due Diligence Trabalhista',
                    'Compliance',
                    'Treinamentos Corporativos',
                    'Auditorias',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#4B5563' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#7B1535' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/servicos" className="btn-wine-sm">
                  Conheça todos
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2 — Serviço destaque */}
            <ScrollReveal delay={100}>
              <div className="bento-card h-full flex flex-col">
                <span className="label-tag mb-4" style={{ color: '#7B1535' }}>Destaque</span>
                <h3 className="text-xl font-bold mb-4 tracking-tight" style={{ color: '#0C1220' }}>
                  Consultoria Preventiva
                </h3>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: '#6B7280' }}>
                  Estratégias de compliance trabalhista que mitigam riscos antes que se tornem litígios, protegendo o patrimônio da sua organização e otimizando a gestão do quadro de colaboradores.
                </p>
                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-2 text-sm font-semibold mt-6 transition-all duration-300 hover:gap-3"
                  style={{ color: '#7B1535' }}
                >
                  Saiba mais
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 3 — CTA com foto */}
            <ScrollReveal delay={200}>
              <div className="photo-card relative h-full min-h-[340px]">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                  alt="Equipe em reunião estratégica"
                  fill
                  className="object-cover"
                  style={{ borderRadius: '20px' }}
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    borderRadius: '20px',
                    background: 'linear-gradient(180deg, rgba(12,18,32,0.3) 0%, rgba(12,18,32,0.85) 100%)',
                  }}
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <p className="text-white text-lg font-bold mb-4 leading-snug">
                    Proteja sua empresa com quem entende os desafios do seu setor
                  </p>
                  <Link href="/contato" className="btn-wine-sm">
                    Solicitar Análise
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: 2/3 + 1/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 4 — Métricas (2/3) */}
            <ScrollReveal className="md:col-span-2">
              <div className="bento-card h-full">
                <span className="label-tag mb-6 block" style={{ color: '#7B1535' }}>Resultados comprovados</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { number: '15+', label: 'Anos de atuação' },
                    { number: '500+', label: 'Empresas assessoradas' },
                    { number: '98%', label: 'Satisfação dos clientes' },
                    { number: '12+', label: 'Setores atendidos' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <span
                        className="block text-3xl md:text-4xl font-bold mb-1"
                        style={{ color: '#B8962E', letterSpacing: '-0.02em' }}
                      >
                        {stat.number}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#6B7280' }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Card 5 — Prova social / Mídia (1/3, vinho) */}
            <ScrollReveal delay={100}>
              <div className="bento-card-wine h-full flex flex-col justify-between">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-6 text-white/40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                  <p className="text-white text-lg font-semibold leading-snug mb-4">
                    &ldquo;O Dr. Wagner Gusmão é referência em direito trabalhista empresarial&rdquo;
                  </p>
                  <p className="text-white/50 text-sm">
                    — Jornal Econômico Brasil
                  </p>
                </div>
                <Link
                  href="/imprensa"
                  className="inline-flex items-center gap-2 text-sm font-semibold mt-6 transition-all duration-300 hover:gap-3"
                  style={{ color: '#B8962E' }}
                >
                  Ver na mídia
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== POR QUE GLA — Bento continuation ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="mb-12">
              <span className="label-tag mb-3 block">Diferenciais</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Por que escolher a GLA
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Expertise Setorial',
                desc: 'Conhecimento profundo das particularidades trabalhistas de mais de 20 segmentos econômicos, do varejo à indústria.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: 'Advocacia Preventiva',
                desc: 'Protocolos jurídicos que minimizam riscos e geram economia real no passivo trabalhista antes que litígios surjam.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                ),
              },
              {
                title: 'Tecnologia Jurídica',
                desc: 'Ferramentas avançadas para gestão processual, análise preditiva e acompanhamento em tempo real dos seus processos.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bento-card h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: 'rgba(123,21,53,0.08)',
                      color: '#7B1535',
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: '#0C1220' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EQUIPE — Avatares redondos ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-tag mb-3 block">Liderança</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Nossa Equipe
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: 'Wagner Gusmão',
                role: 'Sócio-fundador',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
              },
              {
                name: 'Larissa de O. Lima',
                role: 'Sócia-fundadora',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
              },
              {
                name: 'Ricardo Mendes',
                role: 'Advogado Sênior',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
              },
              {
                name: 'Ana Carolina Silva',
                role: 'Advogada Sênior',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
              },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link href="/sobre" className="group block text-center">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(184,150,46,0.3)' }} />
                  </div>
                  <h3 className="text-white text-sm font-semibold mb-0.5">{member.name}</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{member.role}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="bento-card-dark text-center py-16 px-8 md:px-16 relative overflow-hidden">
              {/* Accent gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(123,21,53,0.15) 0%, transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                  Transforme a gestão jurídica trabalhista da sua empresa
                </h2>
                <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Solicite uma análise personalizada e descubra como reduzir seu passivo trabalhista com estratégia e excelência técnica.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contato" className="btn-wine">
                    Solicitar Análise Jurídica
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link href="/servicos" className="btn-outline-light">
                    Nossos serviços
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
