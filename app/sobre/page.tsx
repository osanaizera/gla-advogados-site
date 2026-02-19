import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section
        className="noise relative flex items-end"
        style={{ minHeight: '50vh' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Escritório GLA Advogados"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.95) 100%)',
          }}
        />
        <div className="container-gla relative z-10" style={{ paddingBottom: '72px', paddingTop: '200px' }}>
          <span className="label-section mb-8" style={{ display: 'flex' }}>Sobre nós</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: '#1A1714',
            maxWidth: '640px',
          }}>
            Nascemos dentro de empresas.{' '}
            <em style={{ fontWeight: 400, fontStyle: 'italic' }}>Voltamos para protegê-las.</em>
          </h1>
          <div className="line-reveal mt-8" style={{ animationDelay: '0.3s' }} />
        </div>
      </section>

      {/* ===== HISTÓRIA ===== */}
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          {/* Decorative number */}
          <span
            className="hidden md:block absolute select-none pointer-events-none"
            style={{ top: '-20px', right: '0', fontSize: '200px', fontWeight: 300, color: '#1A1714', opacity: 0.03, lineHeight: 1, letterSpacing: '-0.04em' }}
            aria-hidden="true"
          >
            01
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <span className="label-section mb-8" style={{ display: 'flex' }}>Nossa história</span>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  color: '#1A1714',
                  marginBottom: '28px',
                }}>
                  15 anos entre o departamento jurídico{' '}
                  <em style={{ fontWeight: 400, fontStyle: 'italic' }}>e o tribunal</em>
                </h2>
                <div className="space-y-6" style={{ maxWidth: '520px' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', fontWeight: 400 }}>
                    A GLA Advogados foi fundada por Wagner Gusmão e Larissa de Oliveira Lima com uma premissa
                    simples: empresas precisam de advogados trabalhistas que pensem como gestores.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', fontWeight: 400 }}>
                    Antes de abrir o escritório, Wagner atuou como gerente jurídico corporativo em empresas
                    de grande porte. Essa experiência in-house moldou o DNA da GLA: entendemos prazos de
                    diretoria, pressão de auditoria e o impacto real do passivo trabalhista no balanço.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', fontWeight: 400 }}>
                    Hoje, assessoramos mais de 500 empresas dos setores automotivo, financeiro, de serviços
                    e construção civil em 5+ estados brasileiros. Com 95% de taxa de sucesso em litígios,
                    somos referência em compliance trabalhista preventivo e defesa de alta complexidade.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.08)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                  alt="Equipe em reunião estratégica"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                  style={{ height: '420px' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VALORES ===== */}
      <section className="noise" style={{ background: '#F8F8F8', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="label-section mb-8 justify-center" style={{ display: 'flex' }}>Como trabalhamos</span>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: '#1A1714',
              }}>
                Três compromissos com cada{' '}
                <em style={{ fontWeight: 400, fontStyle: 'italic' }}>cliente</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Rigor técnico com visão de negócio',
                desc: 'Cada tese é construída com dois critérios: robustez jurídica e impacto financeiro. Não ganhamos apenas processos — protegemos o resultado da sua operação.',
              },
              {
                num: '02',
                title: 'Transparência radical',
                desc: 'Você acompanha cada processo em tempo real, com relatórios claros e projeções de risco atualizadas. Sem surpresas na provisão contábil.',
              },
              {
                num: '03',
                title: 'Relacionamento de longo prazo',
                desc: 'Nosso cliente médio está conosco há 7 anos. Não somos acionados por demanda — fazemos parte da estratégia jurídica permanente da empresa.',
              },
            ].map((valor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="service-card" style={{ padding: '44px 36px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 400, color: '#C0272D', display: 'block', marginBottom: '28px', letterSpacing: '0.05em' }}>
                    {valor.num}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1A1714', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                    {valor.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#78716C', fontWeight: 400 }}>
                    {valor.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EQUIPE EXPANDIDA ===== */}
      <section style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla">
          <ScrollReveal>
            <span className="label-section mb-8" style={{ display: 'flex' }}>Liderança</span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#1A1714',
              marginBottom: '64px',
            }}>
              Conheça nossos{' '}
              <em style={{ fontWeight: 400, fontStyle: 'italic' }}>sócios</em>
            </h2>
          </ScrollReveal>

          {/* Wagner */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
              <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Wagner Gusmão"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                  style={{ height: '420px' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '28px', fontWeight: 300, color: '#1A1714', letterSpacing: '-0.025em', marginBottom: '4px' }}>
                  Wagner Gusmão
                </h3>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#C0272D', marginBottom: '28px' }}>Sócio Fundador</p>
                <div className="space-y-5">
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', fontWeight: 400 }}>
                    Especialista em Direito do Trabalho com mais de 20 anos de atuação na defesa de empresas
                    com quadros de 100 a 5.000+ colaboradores. Antes de fundar a GLA, foi gerente jurídico
                    corporativo — experiência que trouxe para o escritório a visão de quem senta do lado
                    do cliente na mesa de decisão.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', fontWeight: 400 }}>
                    Referência na mídia em temas como reforma trabalhista, NR-1 e saúde mental no trabalho,
                    e cotas PCD. Citado frequentemente por Valor Econômico, Exame e Conjur como fonte
                    especializada em gestão de risco trabalhista corporativo.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Larissa */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
              <div className="order-2 md:order-1">
                <h3 style={{ fontSize: '28px', fontWeight: 300, color: '#1A1714', letterSpacing: '-0.025em', marginBottom: '4px' }}>
                  Larissa de Oliveira Lima
                </h3>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#C0272D', marginBottom: '28px' }}>Sócia — Compliance</p>
                <div className="space-y-5">
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', fontWeight: 400 }}>
                    Especialista em consultoria trabalhista preventiva e compliance para empresas de médio
                    e grande porte. Desenvolveu metodologia própria para implementação de programas de
                    conformidade trabalhista que reduziram o volume de novas ações em clientes dos setores
                    financeiro e de serviços.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', fontWeight: 400 }}>
                    Palestrante em congressos nacionais sobre compliance trabalhista, com foco em adequação
                    à NR-1, gestão de riscos psicossociais e políticas de inclusão PCD. Atua na linha de
                    frente entre o jurídico e o RH estratégico.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Larissa de Oliveira Lima"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                  style={{ height: '420px' }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Marcella & Giselle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            <ScrollReveal>
              <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '24px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
                  alt="Marcella Marinho"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  style={{ height: '360px' }}
                />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 300, color: '#1A1714', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                Marcella Marinho
              </h3>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#C0272D', marginBottom: '14px' }}>Advogada — Contencioso</p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#78716C', fontWeight: 400 }}>
                Responsável pelo contencioso trabalhista de alta complexidade. Atua em todas as instâncias
                — do primeiro grau ao TST — com foco em ações coletivas, processos de grande valor e
                recursos estratégicos. Especialista em defesa de empresas dos setores automotivo e de construção.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '24px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Giselle"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  style={{ height: '360px' }}
                />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 300, color: '#1A1714', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                Giselle
              </h3>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#C0272D', marginBottom: '14px' }}>Advogada — Due Diligence</p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#78716C', fontWeight: 400 }}>
                Atua em due diligence trabalhista e gestão de passivo. Especialista em mapeamento de
                contingências, quantificação de riscos para operações de M&A e elaboração de relatórios
                de exposição para conselhos de administração e investidores.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="noise noise-dark" style={{ background: '#1A1714', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="text-center" style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 300,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                marginBottom: '20px',
              }}>
                O passivo trabalhista da sua empresa merece{' '}
                <em style={{ fontWeight: 400, fontStyle: 'italic' }}>atenção especializada</em>
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', marginBottom: '40px', fontWeight: 400 }}>
                Solicite uma análise do cenário jurídico trabalhista da sua organização.
              </p>
              <Link href="/contato" className="btn-outline-white">
                Solicitar Análise Jurídica
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
