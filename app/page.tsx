import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* ===== 1. HERO — Ref 3 (tribunal fullwidth) ===== */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{
          minHeight: '90vh',
          borderRadius: '0 0 24px 24px',
        }}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85"
          alt="Tribunal de Justiça"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(12,18,32,0.6) 0%, rgba(12,18,32,0.85) 100%)',
          }}
        />

        {/* Hero content */}
        <div className="container-main relative z-10 pb-16 pt-32 md:pt-40 md:pb-20 w-full">
          {/* Metrics top-left */}
          <div className="flex flex-wrap gap-8 mb-12 md:mb-16">
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-white" style={{ letterSpacing: '-0.03em' }}>
                95%
              </span>
              <span className="text-white/60 text-sm font-medium">Taxa de sucesso</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-white" style={{ letterSpacing: '-0.03em' }}>
                500+
              </span>
              <span className="text-white/60 text-sm font-medium">Empresas assessoradas</span>
            </div>
          </div>

          {/* H1 */}
          <h1
            className="text-white font-extrabold max-w-4xl mb-8"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Advocacia de Precisão para os Desafios Trabalhistas Modernos
          </h1>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link href="/contato" className="btn-wine">
              Encontrar um Especialista →
            </Link>
            <Link href="/servicos" className="btn-outline-light">
              Nossos Serviços
            </Link>
          </div>

          {/* Badge bottom */}
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: '#B8962E' }} />
            <span className="text-white/70 text-sm font-medium">Atendendo empresas desde 2010</span>
          </div>
        </div>
      </section>

      {/* ===== 2. TIPOGRAFIA GIGANTE — Valerón Ref 4 (TEXT MASK) ===== */}
      <section className="section-light overflow-hidden">
        <div className="container-main">
          <ScrollReveal>
            {/* Giant text with photo inside */}
            <div className="mb-16 md:mb-20 text-center">
              <div
                className="text-mask select-none"
                aria-hidden="true"
              >
                DIREITO
              </div>
            </div>
          </ScrollReveal>

          {/* Two columns below */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="label-section mb-6 block">Quem Somos</span>
                <h2
                  className="font-extrabold mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#0C1220',
                  }}
                >
                  Redefinindo a advocacia trabalhista empresarial no Brasil
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#5C6B84' }}>
                  Desde 2010, a GLA Advogados combina rigor técnico e visão de negócios para proteger
                  empresas com mais de 100 colaboradores. Atuamos na prevenção de passivos trabalhistas
                  e na defesa estratégica de organizações que exigem excelência.
                </p>
                <Link href="/sobre" className="btn-outline-dark">
                  Saiba mais →
                </Link>
              </div>
              <div className="relative overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                  alt="Escritório moderno GLA Advogados"
                  width={600}
                  height={400}
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 3. ABOUT — Ref 3 (3 colunas) ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-10 block">Sobre Nós.</span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Left column: photo + stat */}
            <ScrollReveal>
              <div className="flex flex-col items-start">
                <div className="relative overflow-hidden w-full mb-4" style={{ borderRadius: '12px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                    alt="Equipe em reunião"
                    width={300}
                    height={200}
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                <span className="text-3xl font-extrabold" style={{ color: '#B8962E', letterSpacing: '-0.02em' }}>5+</span>
                <span className="text-sm font-medium" style={{ color: '#5C6B84' }}>Estados de atuação</span>
              </div>
            </ScrollReveal>

            {/* Center column: long text (2/4) */}
            <ScrollReveal className="md:col-span-2">
              <div>
                <h2
                  className="font-extrabold mb-6"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    color: '#0C1220',
                  }}
                >
                  Desde 2010, redefinimos o que significa oferecer assessoria trabalhista para empresas
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#5C6B84' }}>
                  Fundada por Wagner Gusmão e Larissa de Oliveira Lima, a GLA Advogados nasceu da necessidade de
                  um escritório que entendesse profundamente os desafios de compliance trabalhista das grandes
                  organizações. Nosso diferencial está na combinação de expertise jurídica com visão empresarial
                  — cada estratégia é desenhada para proteger o patrimônio da empresa e otimizar a gestão do
                  quadro de colaboradores.
                </p>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#5C6B84' }}>
                  Com mais de 500 empresas assessoradas e uma taxa de sucesso de 95%, consolidamos nossa posição
                  como referência nacional em direito trabalhista empresarial.
                </p>
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                  style={{ color: '#7B1535' }}
                >
                  Saiba mais →
                </Link>
              </div>
            </ScrollReveal>

            {/* Right column: photo + stat */}
            <ScrollReveal>
              <div className="flex flex-col items-start">
                <div className="relative overflow-hidden w-full mb-4" style={{ borderRadius: '12px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                    alt="Profissional assinando documentos"
                    width={300}
                    height={200}
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                <span className="text-3xl font-extrabold" style={{ color: '#B8962E', letterSpacing: '-0.02em' }}>50+</span>
                <span className="text-sm font-medium" style={{ color: '#5C6B84' }}>Advogados especializados</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 4. SERVIÇOS — Ref 3 (numerados com fotos) ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-4 block">Nossos Serviços.</span>
            <h2
              className="font-extrabold mb-12 md:mb-16 max-w-2xl"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#0C1220',
              }}
            >
              Serviços Jurídicos Abrangentes para sua Empresa
            </h2>
          </ScrollReveal>

          {/* Service 01 */}
          <ScrollReveal>
            <div className="service-item">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <div className="relative overflow-hidden" style={{ borderRadius: '12px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                      alt="Consultoria Trabalhista Preventiva"
                      width={400}
                      height={280}
                      className="w-full h-[220px] md:h-[260px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl md:text-6xl font-extralight" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>01.</span>
                    <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                      Consultoria Trabalhista Preventiva
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed mb-6 max-w-xl" style={{ color: '#5C6B84' }}>
                    Estratégias de compliance trabalhista que mitigam riscos antes que se tornem litígios,
                    protegendo o patrimônio da sua organização e otimizando a gestão de risco jurídico.
                    Protocolos personalizados para empresas com grandes quadros de colaboradores.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Wagner" width={32} height={32} className="w-8 h-8 rounded-full object-cover" style={{ border: '2px solid #fff' }} />
                      <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Larissa" width={32} height={32} className="w-8 h-8 rounded-full object-cover" style={{ border: '2px solid #fff' }} />
                    </div>
                    <span className="text-xs font-medium" style={{ color: '#5C6B84' }}>Wagner Gusmão, Larissa de O. Lima</span>
                  </div>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ color: '#7B1535' }}
                  >
                    Solicitar Análise →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 02 */}
          <ScrollReveal>
            <div className="service-item">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <div className="relative overflow-hidden" style={{ borderRadius: '12px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                      alt="Defesa em Processos Trabalhistas"
                      width={400}
                      height={280}
                      className="w-full h-[220px] md:h-[260px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl md:text-6xl font-extralight" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>02.</span>
                    <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                      Defesa em Processos Trabalhistas
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed mb-6 max-w-xl" style={{ color: '#5C6B84' }}>
                    Equipe especializada em contencioso trabalhista com rigor técnico e estratégia
                    personalizada para garantir a melhor defesa em todas as instâncias — de ações individuais
                    a ações coletivas e recursos superiores.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Advogado" width={32} height={32} className="w-8 h-8 rounded-full object-cover" style={{ border: '2px solid #fff' }} />
                      <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Advogada" width={32} height={32} className="w-8 h-8 rounded-full object-cover" style={{ border: '2px solid #fff' }} />
                    </div>
                    <span className="text-xs font-medium" style={{ color: '#5C6B84' }}>Ricardo Mendes, Ana Carolina Silva</span>
                  </div>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ color: '#7B1535' }}
                  >
                    Solicitar Análise →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 03 */}
          <ScrollReveal>
            <div className="service-item">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <div className="relative overflow-hidden" style={{ borderRadius: '12px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                      alt="Gestão de Passivo Trabalhista"
                      width={400}
                      height={280}
                      className="w-full h-[220px] md:h-[260px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl md:text-6xl font-extralight" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>03.</span>
                    <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                      Gestão de Passivo Trabalhista
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed mb-6 max-w-xl" style={{ color: '#5C6B84' }}>
                    Análise preditiva e ferramentas avançadas de inteligência jurídica para otimizar
                    resultados, reduzir custos e criar dashboards de controle processual com relatórios
                    gerenciais para sua diretoria.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Wagner" width={32} height={32} className="w-8 h-8 rounded-full object-cover" style={{ border: '2px solid #fff' }} />
                    </div>
                    <span className="text-xs font-medium" style={{ color: '#5C6B84' }}>Wagner Gusmão</span>
                  </div>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ color: '#7B1535' }}
                  >
                    Solicitar Análise →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 04 */}
          <ScrollReveal>
            <div className="service-item">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <div className="relative overflow-hidden" style={{ borderRadius: '12px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                      alt="Due Diligence Trabalhista"
                      width={400}
                      height={280}
                      className="w-full h-[220px] md:h-[260px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl md:text-6xl font-extralight" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>04.</span>
                    <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                      Due Diligence Trabalhista
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed mb-6 max-w-xl" style={{ color: '#5C6B84' }}>
                    Análises minuciosas para identificar contingências trabalhistas em operações de M&A,
                    proporcionando segurança jurídica e quantificação precisa de riscos para tomada de
                    decisões corporativas.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Larissa" width={32} height={32} className="w-8 h-8 rounded-full object-cover" style={{ border: '2px solid #fff' }} />
                    </div>
                    <span className="text-xs font-medium" style={{ color: '#5C6B84' }}>Larissa de O. Lima</span>
                  </div>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ color: '#7B1535' }}
                  >
                    Solicitar Análise →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 5. DIFERENCIAIS — Valerón Ref 4 ===== */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <ScrollReveal>
              <h2
                className="font-extrabold"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: '#0C1220',
                }}
              >
                Não somos apenas advogados. Somos seu guia através da complexidade trabalhista.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                {[
                  {
                    num: '01',
                    title: 'Comunicação direta e acessível',
                    desc: 'Sem juridiquês desnecessário. Relatórios claros e linguagem objetiva para sua diretoria.',
                  },
                  {
                    num: '02',
                    title: 'Sempre disponíveis — presencial ou online',
                    desc: 'Atendimento ágil em qualquer formato, adaptado à rotina da sua empresa.',
                  },
                  {
                    num: '03',
                    title: 'Acompanhamento passo a passo',
                    desc: 'Dashboard em tempo real e reports periódicos sobre cada processo do seu contencioso.',
                  },
                  {
                    num: '04',
                    title: 'Mentalidade preventiva — não apenas reparadora',
                    desc: 'Investimos em evitar litígios, reduzindo seu passivo trabalhista antes que ele se forme.',
                  },
                ].map((item) => (
                  <div key={item.num} className="diff-item">
                    <div className="flex items-start gap-4">
                      <span
                        className="text-sm font-medium mt-1 flex-shrink-0"
                        style={{ color: '#B8962E', fontVariantNumeric: 'tabular-nums' }}
                      >
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-base font-bold mb-1" style={{ color: '#0C1220' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#5C6B84' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 6. CARDS DE ATUAÇÃO — Valerón (4 cards minimalistas) ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-4 block">Áreas de Atuação.</span>
            <h2
              className="font-extrabold mb-12 md:mb-16 max-w-2xl"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#0C1220',
              }}
            >
              Sua equipe jurídica interna — sem o custo fixo
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Contratos & Compliance',
                desc: 'Revisão, elaboração e gestão de contratos trabalhistas, políticas internas e programas de compliance.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                  </svg>
                ),
              },
              {
                title: 'Pessoas & RH',
                desc: 'Assessoria jurídica para departamentos de RH em admissões, demissões, jornada e benefícios.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                ),
              },
              {
                title: 'Processos & Recursos',
                desc: 'Defesa completa em todas as instâncias, incluindo TST e STF, com estratégia personalizada.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
              },
              {
                title: 'Auditorias & Due Diligence',
                desc: 'Identificação de passivos ocultos, quantificação de riscos e recomendações para M&A.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div
                  className="p-8 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                  }}
                >
                  <div className="mb-6" style={{ color: '#0C1220' }}>
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold mb-3" style={{ color: '#0C1220', letterSpacing: '-0.01em' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5C6B84' }}>
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. CTA — Valerón (split com foto) ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ borderRadius: '20px' }}>
              {/* Left: content */}
              <div
                className="flex flex-col justify-center p-10 md:p-16"
                style={{ background: '#0C1220' }}
              >
                <span className="text-sm font-medium uppercase tracking-widest mb-6" style={{ color: '#B8962E', letterSpacing: '0.08em' }}>
                  Consulta gratuita
                </span>
                <h2
                  className="font-extrabold mb-6 text-white"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Análise jurídica gratuita de 30 minutos
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Solicite uma análise personalizada e descubra como reduzir seu passivo trabalhista
                  com estratégia e excelência técnica. Sem compromisso.
                </p>
                <div>
                  <Link href="/contato" className="btn-wine">
                    Agendar consulta →
                  </Link>
                </div>
              </div>
              {/* Right: photo */}
              <div className="relative min-h-[300px] md:min-h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                  alt="Reunião profissional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 8. EQUIPE (avatares) ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="label-section mb-4 block">Liderança.</span>
              <h2
                className="font-extrabold"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#0C1220',
                }}
              >
                Nossa Equipe
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: 'Wagner Gusmão',
                role: 'Sócio-fundador',
                specialty: 'Contencioso Trabalhista',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
              },
              {
                name: 'Larissa de O. Lima',
                role: 'Sócia-fundadora',
                specialty: 'Compliance & Preventivo',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
              },
              {
                name: 'Ricardo Mendes',
                role: 'Advogado Sênior',
                specialty: 'Defesa Processual',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
              },
              {
                name: 'Ana Carolina Silva',
                role: 'Advogada Sênior',
                specialty: 'Due Diligence',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
              },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link href="/sobre" className="group block text-center">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold mb-0.5" style={{ color: '#0C1220' }}>{member.name}</h3>
                  <p className="text-xs font-medium mb-0.5" style={{ color: '#7B1535' }}>{member.role}</p>
                  <p className="text-xs" style={{ color: '#5C6B84' }}>{member.specialty}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
