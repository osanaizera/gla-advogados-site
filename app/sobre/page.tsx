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
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0.92) 100%)',
          }}
        />
        <div className="container-gla relative z-10" style={{ paddingBottom: '64px', paddingTop: '200px' }}>
          <span className="label-section mb-6" style={{ display: 'flex' }}>Sobre nós</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#1A1714',
            maxWidth: '640px',
          }}>
            Uma trajetória construída com resultados
          </h1>
          <div className="line-reveal mt-6" style={{ animationDelay: '0.3s' }} />
        </div>
      </section>

      {/* ===== HISTÓRIA ===== */}
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          {/* Decorative number */}
          <span
            className="hidden md:block absolute select-none pointer-events-none"
            style={{ top: '-20px', right: '0', fontSize: '200px', fontWeight: 800, color: '#1A1714', opacity: 0.03, lineHeight: 1, letterSpacing: '-0.04em' }}
            aria-hidden="true"
          >
            01
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="label-section mb-6" style={{ display: 'flex' }}>Nossa história</span>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#1A1714',
                  marginBottom: '24px',
                }}>
                  15+ anos redefinindo a advocacia empresarial
                </h2>
                <div className="space-y-5" style={{ maxWidth: '520px' }}>
                  <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#78716C' }}>
                    Fundada por Wagner Gusmão e Larissa de Oliveira Lima, a GLA Advogados nasceu da
                    necessidade de um escritório que entendesse profundamente os desafios de compliance
                    trabalhista das organizações no Rio de Janeiro e em todo o Brasil.
                  </p>
                  <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#78716C' }}>
                    Com mais de 15 anos de atuação exclusiva em Direito Trabalhista Empresarial,
                    consolidamos nossa posição como referência na defesa de empresas, atendendo
                    clientes como a NISSAN e combinando rigor técnico com visão de negócios.
                  </p>
                  <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#78716C' }}>
                    Cada estratégia é desenhada para proteger o patrimônio da empresa e otimizar a
                    gestão do quadro de colaboradores, sempre com transparência e resultados mensuráveis.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.08)' }}>
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
      <section className="noise" style={{ background: '#FAFAF9', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="label-section mb-6 justify-center" style={{ display: 'flex' }}>Valores</span>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#1A1714',
              }}>
                Princípios que nos guiam
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Excelência Técnica',
                desc: 'Buscamos a excelência em cada ação — da análise de compliance à representação em tribunais superiores.',
              },
              {
                num: '02',
                title: 'Parceria Estratégica',
                desc: 'Construímos relações de longo prazo baseadas em comunicação clara e resultados concretos.',
              },
              {
                num: '03',
                title: 'Ética e Transparência',
                desc: 'Atuamos com integridade, mantendo os mais altos padrões éticos e deontológicos da advocacia.',
              },
            ].map((valor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="service-card" style={{ padding: '40px 36px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#C0272D', display: 'block', marginBottom: '24px' }}>
                    {valor.num}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1714', letterSpacing: '-0.02em', marginBottom: '12px' }}>
                    {valor.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#78716C' }}>
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
            <span className="label-section mb-6" style={{ display: 'flex' }}>Liderança</span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#1A1714',
              marginBottom: '64px',
            }}>
              Conheça nossos sócios
            </h2>
          </ScrollReveal>

          {/* Wagner */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
              <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
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
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#1A1714', letterSpacing: '-0.03em', marginBottom: '4px' }}>
                  Wagner Gusmão
                </h3>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#C0272D', marginBottom: '24px' }}>Sócio Fundador</p>
                <div className="space-y-4">
                  <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#78716C' }}>
                    Especialista em Direito do Trabalho com mais de 20 anos de experiência na
                    defesa de empresas de médio e grande porte em processos de alta complexidade.
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#78716C' }}>
                    Antes de fundar a GLA, atuou como gerente jurídico em empresas de grande porte.
                    Presença constante na mídia como referência em legislação trabalhista e gestão de risco.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Larissa */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
              <div className="order-2 md:order-1">
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#1A1714', letterSpacing: '-0.03em', marginBottom: '4px' }}>
                  Larissa de Oliveira Lima
                </h3>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#C0272D', marginBottom: '24px' }}>Sócia</p>
                <div className="space-y-4">
                  <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#78716C' }}>
                    Especialista em consultoria trabalhista preventiva e compliance para grandes organizações.
                    Desenvolveu metodologia própria para implementação de protocolos de conformidade.
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#78716C' }}>
                    Atua como palestrante em congressos nacionais sobre direito trabalhista empresarial
                    e gestão estratégica do departamento jurídico.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2" style={{ borderRadius: '16px', overflow: 'hidden' }}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
                  alt="Marcella Marinho"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  style={{ height: '360px' }}
                />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1714', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                Marcella Marinho
              </h3>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#C0272D', marginBottom: '12px' }}>Advogada</p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#78716C' }}>
                Especialista em defesa processual trabalhista, com atuação em todas as instâncias judiciais.
                Responsável por estratégias de litígio de alta complexidade.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Giselle"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  style={{ height: '360px' }}
                />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1714', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                Giselle
              </h3>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#C0272D', marginBottom: '12px' }}>Advogada</p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#78716C' }}>
                Atua em due diligence trabalhista e gestão de passivo, com foco na identificação
                de contingências e quantificação de riscos para operações corporativas.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="noise noise-dark" style={{ background: '#1A1714', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          <ScrollReveal>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '20px',
              }}>
                Conheça pessoalmente nossa equipe
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: '40px' }}>
                Agende uma visita ao nosso escritório no Centro do Rio de Janeiro.
              </p>
              <Link href="/contato" className="btn-outline-white">
                Solicitar Análise Jurídica →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
