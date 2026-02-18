import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '50vh', borderRadius: '0 0 24px 24px' }}
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
          style={{ background: 'linear-gradient(to bottom, rgba(12,18,32,0.5) 0%, rgba(12,18,32,0.85) 100%)' }}
        />
        <div className="container-main relative z-10 pb-16 pt-40">
          <span className="text-sm font-medium uppercase tracking-widest mb-4 block" style={{ color: '#B8962E', letterSpacing: '0.08em' }}>
            Sobre Nós
          </span>
          <h1
            className="text-white font-extrabold max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
          >
            Sobre a GLA Advogados
          </h1>
        </div>
      </section>

      {/* ===== HISTÓRIA — Timeline vertical ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-4 block">Nossa História.</span>
            <h2
              className="font-extrabold mb-16 max-w-2xl"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0C1220' }}
            >
              Uma trajetória construída com resultados
            </h2>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px"
              style={{ background: '#E5E7EB', transform: 'translateX(-50%)' }}
            />

            {[
              {
                year: '2010',
                title: 'Fundação',
                desc: 'Wagner Gusmão e Larissa de Oliveira Lima fundam a GLA Advogados com foco exclusivo em direito trabalhista empresarial.',
              },
              {
                year: '2014',
                title: 'Expansão regional',
                desc: 'Abertura de escritórios em 3 estados, atingindo 100 empresas clientes e consolidando presença no sudeste.',
              },
              {
                year: '2018',
                title: 'Inovação tecnológica',
                desc: 'Implementação de dashboard processual e ferramentas de análise preditiva para gestão de passivo trabalhista.',
              },
              {
                year: '2022',
                title: 'Referência nacional',
                desc: 'Reconhecimento como referência em compliance trabalhista. Marca de 500+ empresas assessoradas com taxa de sucesso de 95%.',
              },
              {
                year: '2024',
                title: 'Novo patamar',
                desc: 'Lançamento do núcleo de direito digital do trabalho e expansão para 50+ advogados especializados em 5+ estados.',
              },
            ].map((event, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full z-10"
                    style={{ background: '#7B1535', transform: 'translate(-50%, 6px)' }}
                  />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="text-2xl font-extrabold block mb-2" style={{ color: '#B8962E', letterSpacing: '-0.02em' }}>
                      {event.year}
                    </span>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#0C1220' }}>{event.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#5C6B84' }}>{event.desc}</p>
                  </div>
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
            <span className="label-section mb-4 block">Liderança.</span>
            <h2
              className="font-extrabold mb-16 max-w-2xl"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0C1220' }}
            >
              Nossos sócios fundadores
            </h2>
          </ScrollReveal>

          {/* Wagner */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Wagner Gusmão"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-1" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                  Wagner Gusmão
                </h3>
                <p className="text-sm font-medium mb-6" style={{ color: '#7B1535' }}>Sócio-fundador</p>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#5C6B84' }}>
                  <p>
                    Graduado em Direito pela USP com especialização em Direito do Trabalho pela FGV. Mais de
                    20 anos de experiência em advocacia trabalhista empresarial.
                  </p>
                  <p>
                    Antes de fundar a GLA, atuou como gerente jurídico em grandes multinacionais. Presença
                    constante na mídia como referência em legislação trabalhista e gestão de risco jurídico.
                  </p>
                  <p>
                    Autor do livro &ldquo;Compliance Trabalhista: Prevenção e Gestão de Riscos&rdquo; e
                    palestrante frequente em congressos sobre direito empresarial.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Larissa */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-extrabold mb-1" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                  Larissa de Oliveira Lima
                </h3>
                <p className="text-sm font-medium mb-6" style={{ color: '#7B1535' }}>Sócia-fundadora</p>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#5C6B84' }}>
                  <p>
                    Formada em Direito pela USP com mestrado em Direito do Trabalho. Especialista em
                    consultoria preventiva e compliance trabalhista para grandes organizações.
                  </p>
                  <p>
                    Desenvolveu metodologia própria para implementação de protocolos de conformidade
                    adaptados à realidade do quadro de colaboradores de cada setor econômico.
                  </p>
                  <p>
                    Coautora da obra &ldquo;Gestão Estratégica do Departamento Jurídico nas Organizações&rdquo;.
                    Palestrante regular em congressos nacionais e internacionais.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden order-1 md:order-2" style={{ borderRadius: '16px' }}>
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
        </div>
      </section>

      {/* ===== VALORES (3 cards) ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <span className="label-section mb-4 block">Valores.</span>
            <h2
              className="font-extrabold mb-12 md:mb-16"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0C1220' }}
            >
              Princípios que nos guiam
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Excelência',
                desc: 'Buscamos a excelência em todas as nossas ações, desde a análise de compliance até a representação em audiências.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                ),
              },
              {
                title: 'Colaboração',
                desc: 'Trabalhamos em conjunto com nossos clientes, construindo relações de parceria baseadas em comunicação clara.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
              {
                title: 'Ética',
                desc: 'Atuamos com integridade e transparência, mantendo os mais altos padrões éticos e deontológicos da advocacia.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
              },
            ].map((valor, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div
                  className="p-8 h-full"
                  style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB' }}
                >
                  <div className="mb-6" style={{ color: '#0C1220' }}>
                    {valor.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#0C1220', letterSpacing: '-0.01em' }}>
                    {valor.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5C6B84' }}>
                    {valor.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <div
              className="text-center py-16 px-8 md:px-16"
              style={{ background: '#0C1220', borderRadius: '20px' }}
            >
              <h2
                className="text-white font-extrabold mb-6"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                Conheça pessoalmente nossa equipe
              </h2>
              <p className="text-base mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Agende uma visita ao nosso escritório e descubra como podemos auxiliar sua empresa
                na gestão de risco jurídico trabalhista.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contato" className="btn-wine">
                  Solicitar Análise Jurídica →
                </Link>
                <Link href="/servicos" className="btn-outline-light">
                  Nossos Serviços
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
