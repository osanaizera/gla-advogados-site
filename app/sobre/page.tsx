import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <>
      <Hero
        title="Quem somos"
        subtitle="Conheça a história e a equipe por trás da GLA Advogados, referência em direito trabalhista empresarial."
        height="medium"
        variant="centered"
        ctaText=""
        pillText="Sobre a GLA"
      />

      {/* ===== BENTO GRID: História + Valores ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          {/* Row 1: História (2/3) + Foto (1/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            <ScrollReveal className="md:col-span-2">
              <div className="bento-card h-full">
                <span className="label-tag mb-4 block" style={{ color: '#7B1535' }}>Nossa história</span>
                <h3 className="text-2xl font-bold mb-6 tracking-tight" style={{ color: '#0C1220' }}>
                  Fundada em 2010
                </h3>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    A GLA Advogados foi fundada pelos advogados Wagner Gusmão e Larissa de Oliveira Lima, que identificaram a necessidade de um escritório especializado em direito trabalhista com abordagem empresarial estratégica.
                  </p>
                  <p>
                    Desde então, construímos uma sólida reputação baseada em resultados consistentes e abordagem inovadora, combinando rigor técnico e visão de negócios para oferecer soluções jurídicas que realmente atendem às necessidades das empresas na gestão de risco trabalhista.
                  </p>
                  <p>
                    Atualmente, nossa equipe conta com 30 profissionais altamente qualificados que compartilham nossa missão de oferecer serviços jurídicos de excelência, consolidando nossa posição como referência nacional em compliance trabalhista e defesa empresarial.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="photo-card h-full min-h-[300px] relative">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                  alt="Time GLA Advogados"
                  fill
                  className="object-cover"
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: 3 Valores */}
          <ScrollReveal>
            <div className="mb-12 mt-16">
              <span className="label-tag mb-3 block">Nossos valores</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Princípios que nos guiam
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {[
              {
                title: 'Excelência',
                desc: 'Buscamos a excelência em todas as nossas ações, desde a análise de compliance até a representação em audiências.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                ),
              },
              {
                title: 'Colaboração',
                desc: 'Trabalhamos em conjunto com nossos clientes, construindo relações de parceria baseadas em comunicação clara.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
              {
                title: 'Ética',
                desc: 'Atuamos com integridade e transparência, mantendo os mais altos padrões éticos e deontológicos da advocacia.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
              },
            ].map((valor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bento-card h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(184,150,46,0.1)', color: '#B8962E' }}
                  >
                    {valor.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: '#0C1220' }}>
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

      {/* ===== EQUIPE EXPANDIDA ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="mb-12">
              <span className="label-tag mb-3 block">Liderança</span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Nossos sócios fundadores
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Wagner */}
            <ScrollReveal>
              <div className="bento-card h-full">
                <div className="flex gap-5 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                      alt="Wagner Gusmão"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight" style={{ color: '#0C1220' }}>Wagner Gusmão</h3>
                    <p className="text-sm font-medium" style={{ color: '#7B1535' }}>Sócio-fundador</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    Graduado em Direito pela USP com especialização em Direito do Trabalho pela FGV. Mais de 20 anos de experiência em advocacia trabalhista empresarial.
                  </p>
                  <p>
                    Antes de fundar a GLA, atuou como gerente jurídico em grandes multinacionais. Presença constante na mídia como referência em legislação trabalhista e gestão de risco jurídico.
                  </p>
                  <p>
                    Autor do livro &ldquo;Compliance Trabalhista: Prevenção e Gestão de Riscos&rdquo; e palestrante frequente em congressos sobre direito empresarial.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Larissa */}
            <ScrollReveal delay={100}>
              <div className="bento-card h-full">
                <div className="flex gap-5 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                      alt="Larissa de Oliveira Lima"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight" style={{ color: '#0C1220' }}>Larissa de Oliveira Lima</h3>
                    <p className="text-sm font-medium" style={{ color: '#7B1535' }}>Sócia-fundadora</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  <p>
                    Formada em Direito pela USP com mestrado em Direito do Trabalho. Especialista em consultoria preventiva e compliance trabalhista.
                  </p>
                  <p>
                    Desenvolveu metodologia própria para implementação de protocolos de conformidade adaptados à realidade do quadro de colaboradores de cada setor econômico.
                  </p>
                  <p>
                    Coautora da obra &ldquo;Gestão Estratégica do Departamento Jurídico nas Organizações&rdquo;. Palestrante regular em congressos nacionais e internacionais.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <ScrollReveal>
            <div className="bento-card-dark text-center py-16 px-8 md:px-16 relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(123,21,53,0.15) 0%, transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                  Conheça pessoalmente nossa equipe
                </h2>
                <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Agende uma visita ao nosso escritório e descubra como podemos auxiliar sua empresa na gestão de risco jurídico trabalhista.
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
