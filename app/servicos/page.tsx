import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Consultoria Trabalhista Preventiva',
    desc: 'Identificamos e neutralizamos riscos trabalhistas antes que se tornem processos. Desenvolvemos programas de compliance, revisamos contratos e treinamos gestores para que suas decisões de RH estejam juridicamente blindadas. O resultado: menos processos, menor provisão contábil e um quadro de colaboradores mais seguro.',
    items: [
      'Programas de compliance trabalhista → adequação à legislação vigente e NR-1',
      'Auditoria de contratos e políticas internas → identificação de gaps antes da fiscalização',
      'Treinamentos para gestores e RH → redução de passivos originados por decisões operacionais',
      'Adequação a cotas PCD e aprendiz → conformidade sem impacto na operação',
      'Revisão de procedimentos de admissão e demissão → proteção contra reclamatórias comuns',
      'Assessoria em negociações sindicais → acordos que protegem a empresa e mantêm a produtividade',
    ],
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    imgAlt: 'Consultoria Preventiva',
    cta: 'Solicitar Análise Preventiva',
  },
  {
    num: '02',
    title: 'Defesa em Processos Trabalhistas',
    desc: 'Quando o litígio é inevitável, cada detalhe da tese importa. Nossa equipe de contencioso atua com estratégia personalizada em todas as instâncias — do primeiro grau ao TST — com foco em redução de condenações e construção de jurisprudência favorável. Acompanhamento em tempo real e relatórios gerenciais para sua diretoria.',
    items: [
      'Defesa em reclamatórias individuais → teses customizadas por tipo de pedido e segmento',
      'Defesa em ações coletivas e ACPs → estratégia coordenada com a operação da empresa',
      'Recursos estratégicos até o TST → busca de precedentes e teses de impacto sistêmico',
      'Negociação de acordos → análise custo-benefício com projeção de risco real',
      'Defesa em procedimentos do MPT → atuação preventiva em inquéritos e TACs',
      'Acompanhamento de fiscalizações → preparação e presença em auditorias do MTE',
    ],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    imgAlt: 'Defesa Processual',
    cta: 'Solicitar Análise do Contencioso',
  },
  {
    num: '03',
    title: 'Gestão de Passivo Trabalhista',
    desc: 'Transformamos seu passivo trabalhista de incógnita contábil em variável controlada. Utilizamos análise de dados e inteligência jurídica para diagnosticar contingências, projetar cenários e implementar estratégias de redução que impactam diretamente o balanço da sua empresa. Ideal para organizações com 50+ processos ativos.',
    items: [
      'Diagnóstico completo de contingências → classificação por risco (provável, possível, remoto)',
      'Análise preditiva com base em jurisprudência → projeções de resultado por vara e região',
      'Planos de redução de passivo → estratégias de acordo, encerramento e prevenção',
      'Dashboard de controle processual → visibilidade em tempo real para jurídico e diretoria',
      'Relatórios gerenciais periódicos → dados prontos para auditoria e conselho de administração',
      'Estratégias de encerramento prioritário → foco nos processos de maior impacto financeiro',
    ],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    imgAlt: 'Gestão de Passivo',
    cta: 'Solicitar Diagnóstico de Passivo',
  },
  {
    num: '04',
    title: 'Due Diligence Trabalhista',
    desc: 'Em operações de M&A, o passivo trabalhista é frequentemente a maior contingência não mapeada. Fazemos o levantamento completo — processos ativos, riscos de compliance, passivos ocultos em contratos e práticas — com quantificação precisa para que sua decisão de investimento esteja fundamentada em dados reais.',
    items: [
      'Levantamento de processos trabalhistas ativos → status, risco e projeção de resultado',
      'Identificação de passivos ocultos → práticas não conformes que ainda não geraram litígio',
      'Análise de contratos e políticas → gaps de compliance com potencial de reclamatória futura',
      'Avaliação de procedimentos internos → aderência à legislação vigente e normas regulamentadoras',
      'Quantificação precisa de contingências → números para a mesa de negociação do deal',
      'Relatório executivo com recomendações → documento pronto para investidores e advisors',
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
            Quatro frentes para reduzir o risco trabalhista da{' '}
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
                Cada processo trabalhista custa mais do que{' '}
                <em style={{ fontWeight: 400, fontStyle: 'italic' }}>a condenação.</em>
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', marginBottom: '40px', fontWeight: 400 }}>
                Solicite uma análise jurídica e saiba exatamente onde estão os riscos trabalhistas da sua operação.
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
