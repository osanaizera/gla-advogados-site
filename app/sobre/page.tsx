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
        showBadge={false}
        ctaText=""
      />

      {/* História Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <h2 className="heading-lg text-navy-dark mb-4">Nossa história</h2>
                <span className="gold-line" />
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  A GLA Advogados foi fundada em 2010 pelos advogados Wagner Oliveira e Larissa Mendes, que identificaram a necessidade de um escritório especializado em direito trabalhista com abordagem empresarial estratégica.
                </p>
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  Desde então, construímos uma sólida reputação baseada em resultados consistentes e abordagem inovadora, combinando rigor técnico e visão de negócios para oferecer soluções jurídicas que realmente atendem às necessidades das empresas.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Atualmente, nossa equipe conta com 30 profissionais altamente qualificados, consolidando nossa posição como referência nacional em direito trabalhista empresarial.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="premium-card p-3 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                  alt="Time GLA Advogados"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="section-premium bg-off-white relative">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #0A1628 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Nossos valores</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Os princípios que orientam nossa atuação e definem nosso compromisso.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'Excelência',
                desc: 'Buscamos a excelência em todas as nossas ações, garantindo o mais alto padrão de qualidade em todos os serviços prestados.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                ),
              },
              {
                title: 'Colaboração',
                desc: 'Construímos relações de parceria com comunicação clara, colaborando para estratégias jurídicas personalizadas.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
              {
                title: 'Ética',
                desc: 'Atuamos com integridade e transparência, mantendo os mais altos padrões éticos e respeitando os princípios deontológicos da advocacia.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
            ].map((valor, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="glass-light p-10 h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(184,150,46,0.1) 0%, rgba(184,150,46,0.05) 100%)',
                      border: '1px solid rgba(184,150,46,0.15)',
                      color: '#B8962E',
                    }}
                  >
                    {valor.icon}
                  </div>
                  <h3 className="heading-sm text-navy-dark mb-4">{valor.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{valor.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sócios Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Nossa equipe</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Conheça os profissionais que lideram a GLA Advogados com expertise e dedicação.
              </p>
            </div>
          </ScrollReveal>

          {/* Sócio 1 */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="premium-card flex flex-col lg:flex-row gap-10 p-8 lg:p-10">
                <div className="lg:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                      alt="Wagner Oliveira"
                      width={600}
                      height={750}
                      className="object-cover w-full h-full"
                      style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                    />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="heading-md text-navy-dark mb-1">Wagner Oliveira</h3>
                  <p className="text-wine italic mb-6 text-lg font-medium">Sócio-fundador</p>
                  <p className="text-text-secondary mb-5 leading-relaxed">
                    Graduado em Direito pela Universidade de São Paulo (USP) com especialização em Direito do Trabalho pela Fundação Getúlio Vargas (FGV). Com mais de 20 anos de experiência em advocacia trabalhista empresarial, Wagner construiu uma carreira de destaque no cenário jurídico nacional.
                  </p>
                  <p className="text-text-secondary mb-5 leading-relaxed">
                    Antes de fundar a GLA Advogados, atuou como gerente jurídico em grandes empresas multinacionais, experiência que lhe proporcionou uma visão estratégica do direito trabalhista aplicado às necessidades reais do ambiente corporativo.
                  </p>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    É autor do livro &ldquo;Compliance Trabalhista: Prevenção e Gestão de Riscos&rdquo; e palestrante frequente em congressos e eventos sobre direito empresarial.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: 'rgba(10,22,40,0.05)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-navy-dark">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="Email"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: 'rgba(10,22,40,0.05)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-navy-dark">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Sócio 2 */}
          <ScrollReveal delay={200}>
            <div>
              <div className="premium-card flex flex-col lg:flex-row gap-10 p-8 lg:p-10">
                <div className="lg:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                      alt="Larissa Mendes"
                      width={600}
                      height={750}
                      className="object-cover w-full h-full"
                      style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                    />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="heading-md text-navy-dark mb-1">Larissa Mendes</h3>
                  <p className="text-wine italic mb-6 text-lg font-medium">Sócia-fundadora</p>
                  <p className="text-text-secondary mb-5 leading-relaxed">
                    Formada em Direito pela Universidade de São Paulo (USP) com mestrado em Direito do Trabalho pela mesma instituição. Especialista em consultoria preventiva e compliance trabalhista, com foco em empresas de médio e grande porte.
                  </p>
                  <p className="text-text-secondary mb-5 leading-relaxed">
                    Sua atuação é marcada pelo desenvolvimento de políticas internas e programas de compliance que reduzem significativamente o passivo trabalhista das empresas que assessora.
                  </p>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    Autora de diversos artigos científicos e coautora da obra &ldquo;Gestão Estratégica do Departamento Jurídico nas Organizações&rdquo;. Palestrante regular em congressos nacionais e internacionais.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: 'rgba(10,22,40,0.05)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-navy-dark">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="Email"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: 'rgba(10,22,40,0.05)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-navy-dark">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(22,32,64,0.9) 100%)' }}
        />
        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-white mb-6">Conheça pessoalmente nossa equipe</h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed">
                Agende uma visita ao nosso escritório e conheça como podemos auxiliar sua empresa.
              </p>
              <Link href="/contato" className="btn-gold">
                Agendar uma reunião
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}