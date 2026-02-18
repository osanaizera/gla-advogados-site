import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicosPage() {
  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '50vh' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85"
          alt="Tribunal de Justiça"
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
          <span className="label-section mb-4 block">Nossos Serviços</span>
          <h1
            className="font-extrabold max-w-3xl"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#1A1A1A',
            }}
          >
            Serviços jurídicos especializados para sua empresa
          </h1>
          <div className="mt-4" style={{ width: '60px', height: '3px', background: '#C0272D', borderRadius: '2px' }} />
        </div>
      </section>

      {/* ===== 4 SERVIÇOS EM GLASS CARDS ===== */}
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
          {/* Serviço 1 */}
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative overflow-hidden" style={{ borderRadius: '16px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                    alt="Consultoria Preventiva"
                    width={600}
                    height={400}
                    className="w-full h-[280px] md:h-[340px] object-cover"
                  />
                </div>
                <div>
                  <span className="text-5xl font-extralight block mb-4" style={{ color: 'rgba(192,39,45,0.15)', letterSpacing: '-0.04em' }}>01.</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                    Consultoria Trabalhista Preventiva
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                    Nossa consultoria preventiva é focada em identificar e neutralizar potenciais riscos trabalhistas
                    antes que se transformem em problemas concretos. Desenvolvemos protocolos, políticas e
                    procedimentos de compliance adaptados à realidade da sua empresa e seu quadro de colaboradores.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Avaliação de contratos e políticas',
                      'Compliance trabalhista',
                      'Auditorias preventivas',
                      'Treinamentos para gestores',
                      'Revisão de procedimentos internos',
                      'Assessoria em negociações sindicais',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C0272D' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/contato" className="btn-red-sm">
                    Solicitar Consultoria →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Serviço 2 */}
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-5xl font-extralight block mb-4" style={{ color: 'rgba(192,39,45,0.15)', letterSpacing: '-0.04em' }}>02.</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                    Defesa em Processos Trabalhistas
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                    Quando um litígio é inevitável, nossa equipe especializada em contencioso trabalhista atua com
                    rigor técnico e estratégia personalizada para garantir a melhor defesa dos interesses da sua
                    empresa em todas as instâncias.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Defesa em processos individuais',
                      'Defesa em ações coletivas',
                      'Recursos nos tribunais superiores',
                      'Negociação de acordos',
                      'Procedimentos administrativos',
                      'Acompanhamento de fiscalizações',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C0272D' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/contato" className="btn-red-sm">
                    Solicitar Defesa →
                  </Link>
                </div>
                <div className="relative overflow-hidden order-1 md:order-2" style={{ borderRadius: '16px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                    alt="Defesa Processual"
                    width={600}
                    height={400}
                    className="w-full h-[280px] md:h-[340px] object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Serviço 3 */}
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative overflow-hidden" style={{ borderRadius: '16px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                    alt="Gestão de Passivo"
                    width={600}
                    height={400}
                    className="w-full h-[280px] md:h-[340px] object-cover"
                  />
                </div>
                <div>
                  <span className="text-5xl font-extralight block mb-4" style={{ color: 'rgba(192,39,45,0.15)', letterSpacing: '-0.04em' }}>03.</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                    Gestão de Passivo Trabalhista
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                    Desenvolvemos estratégias personalizadas para gestão eficiente do passivo trabalhista da
                    sua empresa, utilizando ferramentas de análise de dados e inteligência jurídica para otimizar
                    resultados e reduzir custos.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Diagnóstico de contingências',
                      'Análise preditiva de riscos',
                      'Planos de redução de passivo',
                      'Dashboard de controle processual',
                      'Relatórios gerenciais',
                      'Estratégias de encerramento',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C0272D' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/contato" className="btn-red-sm">
                    Solicitar Gestão →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Serviço 4 */}
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-5xl font-extralight block mb-4" style={{ color: 'rgba(192,39,45,0.15)', letterSpacing: '-0.04em' }}>04.</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                    Due Diligence Trabalhista
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                    Realizamos análises minuciosas para identificar contingências trabalhistas em operações de
                    fusões e aquisições, proporcionando segurança jurídica e clareza para tomada de decisões
                    em transações corporativas.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Avaliação de processos trabalhistas',
                      'Identificação de passivos ocultos',
                      'Análise de documentos e contratos',
                      'Avaliação de procedimentos internos',
                      'Quantificação de riscos',
                      'Recomendações estratégicas',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C0272D' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/contato" className="btn-red-sm">
                    Solicitar Due Diligence →
                  </Link>
                </div>
                <div className="relative overflow-hidden order-1 md:order-2" style={{ borderRadius: '16px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                    alt="Due Diligence"
                    width={600}
                    height={400}
                    className="w-full h-[280px] md:h-[340px] object-cover"
                  />
                </div>
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
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Precisando de soluções personalizadas?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Solicite uma análise personalizada das necessidades jurídicas da sua organização e descubra
                como otimizar a gestão de risco trabalhista.
              </p>
              <Link href="/contato" className="btn-white">
                Solicitar Análise Jurídica →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
