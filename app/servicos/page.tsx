import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Consultoria Trabalhista Preventiva',
    desc: 'Nossa consultoria preventiva é focada em identificar e neutralizar potenciais riscos trabalhistas antes que se transformem em problemas concretos. Desenvolvemos protocolos, políticas e procedimentos de compliance adaptados à realidade da sua empresa.',
    items: [
      'Avaliação de contratos e políticas',
      'Compliance trabalhista',
      'Auditorias preventivas',
      'Treinamentos para gestores',
      'Revisão de procedimentos internos',
      'Assessoria em negociações sindicais',
    ],
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    imgAlt: 'Consultoria Preventiva',
    cta: 'Solicitar Consultoria',
  },
  {
    num: '02',
    title: 'Defesa em Processos Trabalhistas',
    desc: 'Quando um litígio é inevitável, nossa equipe de contencioso atua com rigor técnico e estratégia personalizada para garantir a melhor defesa dos interesses da sua empresa em todas as instâncias — do primeiro grau ao TST.',
    items: [
      'Defesa em processos individuais',
      'Defesa em ações coletivas',
      'Recursos nos tribunais superiores',
      'Negociação de acordos',
      'Procedimentos administrativos',
      'Acompanhamento de fiscalizações',
    ],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    imgAlt: 'Defesa Processual',
    cta: 'Solicitar Defesa',
  },
  {
    num: '03',
    title: 'Gestão de Passivo Trabalhista',
    desc: 'Estratégias personalizadas para gestão eficiente do passivo trabalhista utilizando ferramentas de análise de dados e inteligência jurídica para otimizar resultados e reduzir custos de forma consistente.',
    items: [
      'Diagnóstico de contingências',
      'Análise preditiva de riscos',
      'Planos de redução de passivo',
      'Dashboard de controle processual',
      'Relatórios gerenciais',
      'Estratégias de encerramento',
    ],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    imgAlt: 'Gestão de Passivo',
    cta: 'Solicitar Gestão',
  },
  {
    num: '04',
    title: 'Due Diligence Trabalhista',
    desc: 'Análises minuciosas para identificar contingências trabalhistas em operações de fusões e aquisições, proporcionando segurança jurídica e clareza para tomada de decisões em transações corporativas.',
    items: [
      'Avaliação de processos trabalhistas',
      'Identificação de passivos ocultos',
      'Análise de documentos e contratos',
      'Avaliação de procedimentos internos',
      'Quantificação de riscos',
      'Recomendações estratégicas',
    ],
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    imgAlt: 'Due Diligence',
    cta: 'Solicitar Due Diligence',
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section
        className="noise relative flex items-end"
        style={{ minHeight: '50vh' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
          alt="Tribunal de Justiça"
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
          <span className="label-section mb-8" style={{ display: 'flex' }}>Nossos Serviços</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: '#1A1714',
            maxWidth: '640px',
          }}>
            Proteção jurídica sob medida para{' '}
            <em style={{ fontWeight: 400, fontStyle: 'italic' }}>sua empresa</em>
          </h1>
          <div className="line-reveal mt-8" style={{ animationDelay: '0.3s' }} />
        </div>
      </section>

      {/* ===== SERVIÇOS DETALHADOS ===== */}
      <section className="noise" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla relative z-10">
          {services.map((service, i) => {
            const isEven = i % 2 === 1;
            return (
              <ScrollReveal key={service.num}>
                <div
                  className="service-card mb-12 last:mb-0"
                  style={{ padding: '48px 40px', borderRadius: '20px' }}
                >
                  {/* Oversized decorative number */}
                  <span
                    className="card-number absolute select-none pointer-events-none hidden md:block"
                    style={{
                      top: '20px',
                      right: '32px',
                      fontSize: '160px',
                      fontWeight: 300,
                      color: '#1A1714',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                    }}
                    aria-hidden="true"
                  >
                    {service.num}
                  </span>

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? 'md:direction-rtl' : ''}`}>
                    <div className={isEven ? 'md:order-2' : ''} style={{ borderRadius: '16px', overflow: 'hidden' }}>
                      <Image
                        src={service.img}
                        alt={service.imgAlt}
                        width={600}
                        height={400}
                        className="w-full object-cover"
                        style={{ height: '340px' }}
                      />
                    </div>
                    <div className={isEven ? 'md:order-1' : ''} style={{ position: 'relative', zIndex: 2 }}>
                      <span style={{ fontSize: '13px', fontWeight: 400, color: '#C0272D', display: 'block', marginBottom: '16px', letterSpacing: '0.05em' }}>
                        {service.num}
                      </span>
                      <h2 style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontWeight: 300,
                        color: '#1A1714',
                        letterSpacing: '-0.025em',
                        marginBottom: '18px',
                        lineHeight: 1.15,
                      }}>
                        {service.title}
                      </h2>
                      <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#78716C', marginBottom: '28px', fontWeight: 400 }}>
                        {service.desc}
                      </p>

                      {/* Items grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                        {service.items.map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C0272D', flexShrink: 0, display: 'block', opacity: 0.5 }} />
                            <span style={{ fontSize: '13px', color: '#78716C', fontWeight: 400 }}>{item}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/contato" className="btn-red-sm">
                        {service.cta}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
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
                Precisando de soluções{' '}
                <em style={{ fontWeight: 400, fontStyle: 'italic' }}>personalizadas?</em>
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', marginBottom: '40px', fontWeight: 400 }}>
                Solicite uma análise personalizada das necessidades jurídicas da sua organização.
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
