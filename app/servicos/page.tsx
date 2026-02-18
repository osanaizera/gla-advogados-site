import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicosPage() {
  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '50vh', borderRadius: '0 0 24px 24px' }}
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
          style={{ background: 'linear-gradient(to bottom, rgba(12,18,32,0.5) 0%, rgba(12,18,32,0.85) 100%)' }}
        />
        <div className="container-main relative z-10 pb-16 pt-40">
          <span className="text-sm font-medium uppercase tracking-widest mb-4 block" style={{ color: '#B8962E', letterSpacing: '0.08em' }}>
            Nossos Serviços
          </span>
          <h1
            className="text-white font-extrabold max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
          >
            Serviços jurídicos especializados para sua empresa
          </h1>
        </div>
      </section>

      {/* ===== SERVIÇO 1 — foto esquerda ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                  alt="Consultoria Preventiva"
                  width={600}
                  height={400}
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
              <div>
                <span className="text-6xl font-extralight block mb-4" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>01.</span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                  Consultoria Trabalhista Preventiva
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#5C6B84' }}>
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
                    <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#5C6B84' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#7B1535' }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contato" className="btn-wine-sm">
                  Solicitar Consultoria →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVIÇO 2 — foto direita ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="order-2 md:order-1">
                <span className="text-6xl font-extralight block mb-4" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>02.</span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                  Defesa em Processos Trabalhistas
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#5C6B84' }}>
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
                    <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#5C6B84' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#7B1535' }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contato" className="btn-wine-sm">
                  Solicitar Defesa →
                </Link>
              </div>
              <div className="relative overflow-hidden order-1 md:order-2" style={{ borderRadius: '16px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                  alt="Defesa Processual"
                  width={600}
                  height={400}
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVIÇO 3 — foto esquerda ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                  alt="Gestão de Passivo"
                  width={600}
                  height={400}
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
              <div>
                <span className="text-6xl font-extralight block mb-4" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>03.</span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                  Gestão de Passivo Trabalhista
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#5C6B84' }}>
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
                    <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#5C6B84' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#7B1535' }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contato" className="btn-wine-sm">
                  Solicitar Gestão →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVIÇO 4 — foto direita ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="order-2 md:order-1">
                <span className="text-6xl font-extralight block mb-4" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>04.</span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                  Due Diligence Trabalhista
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#5C6B84' }}>
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
                    <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#5C6B84' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#7B1535' }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contato" className="btn-wine-sm">
                  Solicitar Due Diligence →
                </Link>
              </div>
              <div className="relative overflow-hidden order-1 md:order-2" style={{ borderRadius: '16px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                  alt="Due Diligence"
                  width={600}
                  height={400}
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-light">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ borderRadius: '20px' }}>
              <div className="flex flex-col justify-center p-10 md:p-16" style={{ background: '#7B1535' }}>
                <h2
                  className="font-extrabold mb-6 text-white"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  Precisando de soluções personalizadas?
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Solicite uma análise personalizada das necessidades jurídicas da sua organização e descubra
                  como otimizar a gestão de risco trabalhista.
                </p>
                <div>
                  <Link href="/contato" className="btn-white">
                    Solicitar Análise Jurídica →
                  </Link>
                </div>
              </div>
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
    </>
  );
}
