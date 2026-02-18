import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <>
      {/* ===== HERO INTERNO — Branco overlay ===== */}
      <section
        className="relative flex items-end overflow-hidden"
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
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.9) 100%)',
          }}
        />
        <div className="container-main relative z-10 pb-16 pt-40">
          <span className="label-section mb-4 block">Sobre Nós</span>
          <h1
            className="font-extrabold max-w-3xl"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#1A1A1A',
            }}
          >
            Sobre a GLA Advogados
          </h1>
          <div className="mt-4" style={{ width: '60px', height: '3px', background: '#C0272D', borderRadius: '2px' }} />
        </div>
      </section>

      {/* ===== HISTÓRIA ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="label-section mb-4 block">Nossa História</span>
                <h2
                  className="font-extrabold mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#1A1A1A',
                  }}
                >
                  Uma trajetória construída com resultados
                </h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    Fundada por Wagner Gusmão e Larissa de Oliveira Lima, a GLA Advogados nasceu da necessidade de
                    um escritório que entendesse profundamente os desafios de compliance trabalhista das organizações
                    no Rio de Janeiro e em todo o Brasil.
                  </p>
                  <p>
                    Com mais de 15 anos de atuação exclusiva em Direito Trabalhista Empresarial, consolidamos nossa
                    posição como referência na defesa de empresas, combinando rigor técnico com visão de negócios.
                  </p>
                  <p>
                    Cada estratégia é desenhada para proteger o patrimônio da empresa e otimizar a gestão do
                    quadro de colaboradores, sempre com transparência e resultados mensuráveis.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden" style={{ borderRadius: '20px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                  alt="Equipe em reunião"
                  width={600}
                  height={400}
                  className="w-full h-[350px] md:h-[420px] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MISSÃO, VISÃO, VALORES — Glass cards ===== */}
      <section className="section-gradient">
        {/* Decorative blobs */}
        <div
          className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(192,39,45,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(192,39,45,0.05) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="label-section mb-4 block">Valores</span>
              <h2
                className="font-extrabold"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#1A1A1A',
                }}
              >
                Princípios que nos guiam
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Excelência Técnica',
                desc: 'Buscamos a excelência em todas as nossas ações, desde a análise de compliance até a representação em audiências e tribunais.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                ),
              },
              {
                title: 'Parceria Estratégica',
                desc: 'Trabalhamos em conjunto com nossos clientes, construindo relações de parceria baseadas em comunicação clara e resultados.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
              {
                title: 'Ética e Transparência',
                desc: 'Atuamos com integridade, mantendo os mais altos padrões éticos e deontológicos da advocacia em todas as nossas relações.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
              },
            ].map((valor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card p-8 h-full">
                  <div className="mb-5" style={{ color: '#C0272D' }}>
                    {valor.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#1A1A1A', letterSpacing: '-0.01em' }}>
                    {valor.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {valor.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SÓCIOS EXPANDIDOS ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-4 block">Liderança</span>
            <h2
              className="font-extrabold mb-16 max-w-2xl"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#1A1A1A',
              }}
            >
              Conheça nossos sócios
            </h2>
          </ScrollReveal>

          {/* Wagner */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative overflow-hidden" style={{ borderRadius: '20px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Wagner Gusmão"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-1" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                  Wagner Gusmão
                </h3>
                <p className="text-sm font-semibold mb-6" style={{ color: '#C0272D' }}>Sócio Fundador</p>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    Especialista em Direito do Trabalho com mais de 20 anos de experiência em advocacia
                    trabalhista empresarial. Atua na defesa de empresas de médio e grande porte em
                    processos trabalhistas de alta complexidade.
                  </p>
                  <p>
                    Antes de fundar a GLA, atuou como gerente jurídico em empresas de grande porte.
                    Presença constante na mídia como referência em legislação trabalhista e gestão de risco jurídico.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Larissa */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-extrabold mb-1" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                  Larissa de Oliveira Lima
                </h3>
                <p className="text-sm font-semibold mb-6" style={{ color: '#C0272D' }}>Sócia</p>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    Especialista em consultoria trabalhista preventiva e compliance para grandes organizações.
                    Desenvolveu metodologia própria para implementação de protocolos de conformidade
                    adaptados à realidade do quadro de colaboradores de cada setor econômico.
                  </p>
                  <p>
                    Atua como palestrante em congressos nacionais sobre direito trabalhista empresarial
                    e gestão estratégica do departamento jurídico.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden order-1 md:order-2" style={{ borderRadius: '20px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Larissa de Oliveira Lima"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Marcella & Giselle */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative overflow-hidden" style={{ borderRadius: '20px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
                  alt="Marcella Marinho"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-1" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                  Marcella Marinho
                </h3>
                <p className="text-sm font-semibold mb-6" style={{ color: '#C0272D' }}>Advogada</p>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    Especialista em defesa processual trabalhista, com atuação em todas as instâncias judiciais.
                    Responsável por estratégias de litígio de alta complexidade para empresas de diversos setores.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-extrabold mb-1" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                  Giselle
                </h3>
                <p className="text-sm font-semibold mb-6" style={{ color: '#C0272D' }}>Advogada</p>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    Atua em due diligence trabalhista e gestão de passivo, com foco na identificação
                    de contingências e quantificação de riscos para operações corporativas.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden order-1 md:order-2" style={{ borderRadius: '20px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Giselle"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ background: '#C0272D', padding: '80px 0' }}>
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2
                className="font-extrabold mb-6 text-white"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Conheça pessoalmente nossa equipe
              </h2>
              <p className="text-base mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Agende uma visita ao nosso escritório no Centro do Rio de Janeiro e descubra como podemos
                auxiliar sua empresa na gestão de risco jurídico trabalhista.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contato" className="btn-white">
                  Solicitar Análise Jurídica →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
