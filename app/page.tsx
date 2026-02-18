import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* ===== 1. HERO — Branco overlay ===== */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85"
          alt="Tribunal de Justiça"
          fill
          className="object-cover"
          priority
        />
        {/* White overlay from left */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
          }}
        />

        {/* Hero content */}
        <div className="container-main relative z-10 pt-32 pb-40 w-full">
          <div className="max-w-2xl">
            {/* Pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                border: '1px solid rgba(192,39,45,0.2)',
                background: 'rgba(192,39,45,0.04)',
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: '#C0272D' }} />
              <span className="text-sm font-medium" style={{ color: '#C0272D' }}>
                Direito Trabalhista Empresarial
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-extrabold mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#1A1A1A',
              }}
            >
              Advocacia de precisão para quem constrói negócios
            </h1>

            {/* Red line */}
            <div className="mb-6" style={{ width: '60px', height: '3px', background: '#C0272D', borderRadius: '2px' }} />

            {/* Subtitle */}
            <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: '#6B7280' }}>
              Proteção jurídica estratégica para empresas que precisam de segurança em compliance trabalhista,
              gestão de passivo e defesa processual com excelência técnica.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contato" className="btn-red">
                Solicitar Análise →
              </Link>
              <Link href="/sobre" className="btn-outline-dark">
                Conheça o escritório
              </Link>
            </div>
          </div>
        </div>

        {/* Floating metrics glass card */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-4xl px-4">
          <div
            className="glass-card px-6 py-5 md:px-10 md:py-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: '95%', label: 'Taxa de sucesso' },
                { value: '500+', label: 'Empresas assessoradas' },
                { value: '15+', label: 'Anos de experiência' },
                { value: 'RJ', label: 'Rio de Janeiro' },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <span className="block text-2xl md:text-3xl font-extrabold" style={{ color: '#C0272D', letterSpacing: '-0.02em' }}>
                    {metric.value}
                  </span>
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#6B7280' }}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. SERVIÇOS — Glass cards ===== */}
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
            <span className="label-section mb-4 block">Nossos Serviços</span>
            <h2
              className="font-extrabold mb-12 md:mb-16 max-w-2xl"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#1A1A1A',
              }}
            >
              Serviços jurídicos abrangentes para sua empresa
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Consultoria Trabalhista Preventiva',
                desc: 'Estratégias de compliance que mitigam riscos antes que se tornem litígios. Protocolos personalizados para empresas com grandes quadros de colaboradores.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: 'Defesa em Processos Trabalhistas',
                desc: 'Equipe especializada em contencioso trabalhista com rigor técnico e estratégia personalizada para defesa em todas as instâncias judiciais.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
              },
              {
                title: 'Gestão de Passivo Trabalhista',
                desc: 'Análise preditiva e ferramentas de inteligência jurídica para otimizar resultados, reduzir custos e criar dashboards de controle processual.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
              },
              {
                title: 'Due Diligence Trabalhista',
                desc: 'Análises minuciosas para identificar contingências em operações de M&A, com quantificação precisa de riscos para decisões corporativas.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                ),
              },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="glass-card p-8 md:p-10 h-full">
                  <div className="mb-5" style={{ color: '#C0272D' }}>
                    {service.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: '#1A1A1A', letterSpacing: '-0.01em' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                    {service.desc}
                  </p>
                  <Link
                    href="/servicos"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ color: '#C0272D' }}
                  >
                    Saiba mais →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. DIFERENCIAIS — Split ===== */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <div>
                <span className="label-section mb-4 block">Diferenciais</span>
                <h2
                  className="font-extrabold mb-10"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                    color: '#1A1A1A',
                  }}
                >
                  Não somos apenas advogados. Somos seu guia na complexidade trabalhista.
                </h2>

                {[
                  {
                    num: '01',
                    title: 'Comunicação direta e acessível',
                    desc: 'Sem juridiquês desnecessário. Relatórios claros e linguagem objetiva para sua diretoria.',
                  },
                  {
                    num: '02',
                    title: 'Sempre disponíveis — presencial ou online',
                    desc: 'Atendimento ágil em qualquer formato, adaptado à rotina da sua empresa.',
                  },
                  {
                    num: '03',
                    title: 'Acompanhamento passo a passo',
                    desc: 'Dashboard em tempo real e reports periódicos sobre cada processo do seu contencioso.',
                  },
                  {
                    num: '04',
                    title: 'Mentalidade preventiva',
                    desc: 'Investimos em evitar litígios, reduzindo seu passivo trabalhista antes que ele se forme.',
                  },
                ].map((item) => (
                  <div key={item.num} className="diff-item">
                    <div className="flex items-start gap-4">
                      <span
                        className="text-sm font-semibold mt-1 flex-shrink-0"
                        style={{ color: '#C0272D', fontVariantNumeric: 'tabular-nums' }}
                      >
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-base font-bold mb-1" style={{ color: '#1A1A1A' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative overflow-hidden" style={{ borderRadius: '20px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Reunião empresarial"
                  width={600}
                  height={700}
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 4. EQUIPE — Glass cards ===== */}
      <section className="section-gradient">
        {/* Decorative blobs */}
        <div
          className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(192,39,45,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(192,39,45,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="label-section mb-4 block">Nossa Equipe</span>
              <h2
                className="font-extrabold"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#1A1A1A',
                }}
              >
                Profissionais especializados ao seu lado
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Wagner Gusmão',
                role: 'Sócio Fundador',
                specialty: 'Contencioso Trabalhista',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
              },
              {
                name: 'Larissa de Oliveira Lima',
                role: 'Sócia',
                specialty: 'Compliance & Preventivo',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
              },
              {
                name: 'Marcella Marinho',
                role: 'Advogada',
                specialty: 'Defesa Processual',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
              },
              {
                name: 'Giselle',
                role: 'Advogada',
                specialty: 'Due Diligence',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
              },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card overflow-hidden h-full">
                  <div className="relative h-[260px] overflow-hidden" style={{ borderRadius: '20px 20px 0 0' }}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold mb-0.5" style={{ color: '#1A1A1A' }}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium mb-1" style={{ color: '#C0272D' }}>
                      {member.role}
                    </p>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. MÍDIA / PROVA SOCIAL ===== */}
      <section className="section-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              {/* Quote */}
              <div className="relative max-w-3xl mx-auto">
                {/* Decorative quotes */}
                <span
                  className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'rgba(192,39,45,0.12)' }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote
                  className="text-xl md:text-2xl font-semibold leading-snug relative z-10"
                  style={{ color: '#1A1A1A', letterSpacing: '-0.01em' }}
                >
                  A GLA Advogados transformou completamente nossa gestão de risco trabalhista. Com mais de 500 colaboradores, precisávamos de um parceiro que entendesse a complexidade do nosso setor.
                </blockquote>
                <span
                  className="absolute -bottom-10 -right-4 md:-right-8 text-6xl md:text-8xl font-bold leading-none select-none"
                  style={{ color: 'rgba(192,39,45,0.12)' }}
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
              </div>
              <p className="mt-8 text-sm font-medium" style={{ color: '#9CA3AF' }}>
                — Diretor Jurídico, Empresa do setor industrial • Rio de Janeiro
              </p>
            </div>
          </ScrollReveal>

          {/* Media cards */}
          <ScrollReveal>
            <span className="label-section mb-6 block">Na Mídia</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  source: 'Valor Econômico',
                  title: 'Especialistas analisam impactos da reforma trabalhista na gestão de passivo',
                  date: 'Jan 2024',
                },
                {
                  source: 'Exame',
                  title: 'Home office permanente: implicações jurídicas no quadro de colaboradores',
                  date: 'Mai 2024',
                },
                {
                  source: 'Conjur',
                  title: 'GLA Advogados amplia atuação com núcleo de direito digital do trabalho',
                  date: 'Out 2024',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    borderLeft: '3px solid #C0272D',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: '#C0272D' }}>
                    {item.source}
                  </span>
                  <h4 className="text-sm font-bold leading-snug mb-3" style={{ color: '#1A1A1A' }}>
                    {item.title}
                  </h4>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>{item.date}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 6. CTA FINAL — Fundo vermelho ===== */}
      <section style={{ background: '#C0272D', padding: '80px 0' }}>
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2
                className="font-extrabold mb-6 text-white"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Proteja sua empresa com quem entende seu setor
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Agende uma consulta gratuita e descubra como reduzir seu passivo trabalhista com estratégia e excelência técnica.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link href="/contato" className="btn-white">
                  Agendar Consulta Gratuita →
                </Link>
              </div>

              {/* Contact data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Telefone</p>
                  <a href="tel:+552138835652" className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>(21) 3883-5652</a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">WhatsApp</p>
                  <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>(21) 99405-3121</a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Email</p>
                  <a href="mailto:wagner.gusmao@glaadvogados.com.br" className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>wagner.gusmao@gla...</a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Endereço</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Av. Franklin Roosevelt, 84<br />Centro, Rio de Janeiro</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
