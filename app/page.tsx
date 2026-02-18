import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* =====================================================
          SECTION 1 — CINEMATIC HERO (100vh)
          ===================================================== */}
      <section
        className="noise relative flex flex-col justify-center"
        style={{ minHeight: '100vh' }}
      >
        {/* Parallax background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.65) 40%, rgba(26,23,20,0.35) 100%)',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 w-full" style={{ paddingLeft: '8%', paddingRight: '6%', paddingTop: '160px', paddingBottom: '180px' }}>
          <div style={{ maxWidth: '780px' }}>
            {/* Eyebrow */}
            <div
              className="hero-fade flex items-center gap-3 mb-10"
              style={{ animationDelay: '0s' }}
            >
              <span style={{
                width: '3px',
                height: '20px',
                background: '#C0272D',
                borderRadius: '2px',
                display: 'block',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.2em',
                color: '#78716C',
              }}>
                Direito Trabalhista Empresarial
              </span>
            </div>

            {/* H1 — Kinetic typography */}
            <h1 style={{
              fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: '#1A1714',
              marginBottom: '0',
            }}>
              <span className="kinetic-word" style={{ animationDelay: '0.15s' }}>
                Onde a precisão
              </span>
              <span className="kinetic-word" style={{ animationDelay: '0.35s' }}>
                jurídica encontra
              </span>
              <span className="kinetic-word" style={{ animationDelay: '0.55s', color: '#C0272D' }}>
                a visão estratégica.
              </span>
            </h1>

            {/* Red line */}
            <div className="line-reveal mt-8" style={{ animationDelay: '0.85s' }} />

            {/* Subtitle */}
            <p
              className="hero-fade mt-8"
              style={{
                animationDelay: '1.05s',
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#78716C',
                maxWidth: '540px',
              }}
            >
              Protegemos o patrimônio de empresas como a sua há mais de 15 anos.
              Do compliance à defesa em litígios complexos.
            </p>

            {/* CTAs */}
            <div className="hero-fade flex flex-wrap items-center gap-4 mt-10" style={{ animationDelay: '1.25s' }}>
              <Link href="/contato" className="btn-red">
                Solicitar Análise →
              </Link>
              <Link href="/sobre" className="btn-outline">
                Conheça o escritório
              </Link>
            </div>
          </div>
        </div>

        {/* Floating glass metrics */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 w-full px-4" style={{ maxWidth: '960px' }}>
          <div className="hero-fade glass" style={{ animationDelay: '1.5s', padding: '24px 32px' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                { value: '95%', label: 'Taxa de sucesso' },
                { value: '500+', label: 'Empresas assessoradas' },
                { value: '15+', label: 'Anos de atuação' },
                { value: '4', label: 'Setores especializados' },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <span style={{
                    display: 'block',
                    fontSize: '36px',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: '#1A1714',
                    lineHeight: 1,
                  }}>
                    {metric.value}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#78716C',
                    marginTop: '6px',
                    display: 'block',
                    letterSpacing: '0.01em',
                  }}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — ABOUT
          ===================================================== */}
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0 100px' }}>
        <div className="container-gla relative z-10">
          {/* Decorative oversized number */}
          <span
            className="hidden md:block absolute select-none pointer-events-none"
            style={{
              top: '-40px',
              right: '0',
              fontSize: '220px',
              fontWeight: 800,
              color: '#1A1714',
              opacity: 0.03,
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
            aria-hidden="true"
          >
            01
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            {/* Text: 3 of 5 cols */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <span className="label-section mb-6" style={{ display: 'flex' }}>Sobre nós</span>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: '#1A1714',
                  marginBottom: '24px',
                  maxWidth: '520px',
                }}>
                  Redefinimos o que significa proteger empresas
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: '#78716C',
                  maxWidth: '520px',
                  marginBottom: '32px',
                }}>
                  Fundada por Wagner Gusmão e Larissa de Oliveira Lima, a GLA Advogados nasceu
                  da necessidade de um escritório que compreendesse profundamente os desafios de
                  compliance trabalhista das organizações. Combinamos rigor técnico com visão
                  estratégica de negócios para proteger o que você construiu.
                </p>

                {/* Bullet points */}
                <div className="space-y-3">
                  {[
                    'Atuação em 5+ estados brasileiros',
                    'Mais de 500 empresas atendidas',
                    'Clientes como NISSAN e grandes corporações',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <span style={{
                        width: '16px',
                        height: '2px',
                        background: '#C0272D',
                        flexShrink: 0,
                        display: 'block',
                      }} />
                      <span style={{ fontSize: '15px', fontWeight: 500, color: '#1A1714' }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Image: 2 of 5 cols */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.08)' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                    alt="Equipe GLA Advogados em reunião estratégica"
                    width={600}
                    height={700}
                    className="w-full object-cover"
                    style={{ aspectRatio: '3/4' }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — SERVIÇOS (horizontal scroll)
          ===================================================== */}
      <section className="noise" style={{ background: '#FAFAF9', padding: '120px 0' }}>
        <div className="relative z-10">
          <div className="container-gla mb-12">
            <ScrollReveal>
              <span className="label-section mb-6" style={{ display: 'flex' }}>Nossos Serviços</span>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#1A1714',
              }}>
                Proteção jurídica sob medida
              </h2>
            </ScrollReveal>
          </div>

          {/* Horizontal scroll cards */}
          <div className="horizontal-scroll" style={{ paddingLeft: 'max(1.5rem, 8%)', paddingRight: '1.5rem' }}>
            {[
              {
                num: '01',
                title: 'Consultoria Preventiva',
                desc: 'Estratégias de compliance que neutralizam riscos antes que se tornem litígios. Protocolos personalizados para empresas com grandes quadros.',
              },
              {
                num: '02',
                title: 'Defesa em Processos',
                desc: 'Equipe especializada em contencioso trabalhista com rigor técnico e estratégia em todas as instâncias — do primeiro grau ao TST.',
              },
              {
                num: '03',
                title: 'Gestão de Passivo',
                desc: 'Inteligência jurídica e análise preditiva para otimizar resultados, reduzir custos e criar dashboards de controle processual.',
              },
              {
                num: '04',
                title: 'Due Diligence Trabalhista',
                desc: 'Análises minuciosas para operações de M&A com quantificação precisa de contingências e riscos trabalhistas.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="service-card"
                style={{ minWidth: '340px', maxWidth: '420px', width: '85vw' }}
              >
                {/* Oversized number */}
                <span
                  className="card-number absolute select-none pointer-events-none"
                  style={{
                    top: '24px',
                    right: '28px',
                    fontSize: '140px',
                    fontWeight: 800,
                    color: '#1A1714',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                  aria-hidden="true"
                >
                  {service.num}
                </span>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#C0272D',
                    display: 'block',
                    marginBottom: '20px',
                    letterSpacing: '0.01em',
                  }}>
                    {service.num}
                  </span>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#1A1714',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    lineHeight: 1.2,
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#78716C',
                    marginBottom: '32px',
                  }}>
                    {service.desc}
                  </p>
                  <Link
                    href="/servicos"
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
                    style={{ fontSize: '14px', fontWeight: 600, color: '#C0272D' }}
                  >
                    Saiba mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — DIFERENCIAIS
          ===================================================== */}
      <section style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla">
          <ScrollReveal>
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#1A1714',
              marginBottom: '16px',
            }}>
              Não somos apenas advogados.
            </h2>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              lineHeight: 1.5,
              color: '#78716C',
              maxWidth: '640px',
              marginBottom: '64px',
            }}>
              Somos o departamento jurídico que sua empresa precisa — sem o custo fixo.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {[
              {
                num: '01',
                title: 'Comunicação direta',
                desc: 'Sem juridiquês desnecessário. Relatórios claros e linguagem objetiva para a sua diretoria tomar decisões rápidas.',
              },
              {
                num: '02',
                title: 'Disponibilidade total',
                desc: 'Atendimento presencial ou remoto, adaptado à rotina da sua empresa. Respostas em até 4 horas úteis.',
              },
              {
                num: '03',
                title: 'Acompanhamento detalhado',
                desc: 'Dashboard em tempo real e reports periódicos sobre cada processo. Você sabe exatamente onde está.',
              },
              {
                num: '04',
                title: 'Mentalidade preventiva',
                desc: 'Investimos em evitar litígios. Reduzimos seu passivo trabalhista antes que ele se forme — poupando tempo e dinheiro.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="diff-item">
                  <div className="flex items-start gap-5">
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#C0272D',
                      marginTop: '3px',
                      flexShrink: 0,
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {item.num}
                    </span>
                    <div>
                      <h3 style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#1A1714',
                        marginBottom: '6px',
                        letterSpacing: '-0.01em',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#78716C',
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — EQUIPE
          ===================================================== */}
      <section className="noise" style={{ background: '#FAFAF9', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <span className="label-section mb-6" style={{ display: 'flex' }}>Equipe</span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#1A1714',
              marginBottom: '56px',
            }}>
              Quem protege sua empresa
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Wagner Gusmão',
                role: 'Sócio Fundador',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
              },
              {
                name: 'Larissa de Oliveira Lima',
                role: 'Sócia',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
              },
              {
                name: 'Marcella Marinho',
                role: 'Advogada',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
              },
              {
                name: 'Giselle',
                role: 'Advogada',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
              },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={533}
                      className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      style={{ aspectRatio: '3/4' }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#1A1714',
                    letterSpacing: '-0.01em',
                    marginBottom: '4px',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#C0272D' }}>
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — CTA (dark)
          ===================================================== */}
      <section className="noise noise-dark" style={{ background: '#1A1714', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div style={{ maxWidth: '720px' }}>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '40px',
              }}>
                Sua empresa merece proteção jurídica à altura do seu crescimento.
              </h2>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Telefone</p>
                  <a href="tel:+552138835652" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>(21) 3883-5652</a>
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>WhatsApp</p>
                  <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>(21) 99405-3121</a>
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Email</p>
                  <a href="mailto:wagner.gusmao@glaadvogados.com.br" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>wagner.gusmao@glaadvogados.com.br</a>
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Endereço</p>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>Av. Franklin Roosevelt, 84 - GR 301<br />Centro, Rio de Janeiro</p>
                </div>
              </div>

              <Link href="/contato" className="btn-outline-white">
                Solicitar Análise →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
