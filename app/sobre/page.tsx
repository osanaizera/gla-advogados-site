import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Image from 'next/image';

export default function SobrePage() {
  return (
    <>
      <Hero 
        title="Quem somos"
        subtitle="Conheça a história e a equipe por trás da GLA Advogados, referência em direito trabalhista empresarial."
        height="medium"
        showBadge={false}
      />

      {/* História Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="heading-lg text-navy mb-4">Nossa história</h2>
                <span className="gold-line"></span>
                <p className="text-text-secondary text-lg mb-6">
                  A GLA Advogados foi fundada em 2010 pelos advogados Wagner Oliveira e Larissa Mendes, que identificaram a necessidade de um escritório especializado em direito trabalhista com abordagem empresarial estratégica.
                </p>
                <p className="text-text-secondary text-lg mb-6">
                  Desde então, construímos uma sólida reputação baseada em resultados consistentes e abordagem inovadora, combinando rigor técnico e visão de negócios para oferecer soluções jurídicas que realmente atendem às necessidades das empresas.
                </p>
                <p className="text-text-secondary text-lg">
                  Atualmente, nossa equipe conta com 30 profissionais altamente qualificados que compartilham nossa missão de oferecer serviços jurídicos de excelência, consolidando nossa posição como referência nacional em direito trabalhista empresarial.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="premium-card p-4 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                  alt="Time GLA Advogados"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="section-premium bg-off-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="heading-lg text-navy mb-4">Nossos valores</h2>
              <p className="text-text-secondary text-xl max-w-3xl mx-auto">
                Os princípios que orientam nossa atuação e definem nosso compromisso com clientes e colaboradores.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Valor 01 */}
            <ScrollReveal delay={200}>
              <div className="glass premium-card p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-4">Excelência</h3>
                <p className="text-text-secondary">
                  Buscamos a excelência em todas as nossas ações, desde a elaboração de documentos jurídicos até a representação em audiências, garantindo o mais alto padrão de qualidade em todos os serviços prestados.
                </p>
              </div>
            </ScrollReveal>

            {/* Valor 02 */}
            <ScrollReveal delay={400}>
              <div className="glass premium-card p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-4">Colaboração</h3>
                <p className="text-text-secondary">
                  Trabalhamos em conjunto com nossos clientes, construindo relações de parceria baseadas em comunicação clara e objetiva, colaborando ativamente para o desenvolvimento de estratégias jurídicas personalizadas.
                </p>
              </div>
            </ScrollReveal>

            {/* Valor 03 */}
            <ScrollReveal delay={600}>
              <div className="glass premium-card p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-1.187c-1.717-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-4">Ética</h3>
                <p className="text-text-secondary">
                  Atuamos com integridade e transparência em todos os aspectos de nossa prática jurídica, mantendo os mais altos padrões éticos e respeitando os princípios deontológicos da advocacia.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sócios Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="heading-lg text-navy mb-4">Nossa equipe</h2>
              <p className="text-text-secondary text-xl max-w-3xl mx-auto">
                Conheça os profissionais que lideram a GLA Advogados com expertise e dedicação.
              </p>
            </div>
          </ScrollReveal>

          {/* Sócio 1 */}
          <ScrollReveal>
            <div className="mb-20">
              <div className="premium-card flex flex-col lg:flex-row gap-12 p-10">
                <div className="lg:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                      alt="Wagner Oliveira"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="heading-md text-navy mb-1">Wagner Oliveira</h3>
                  <p className="text-wine italic mb-6 text-xl">Sócio-fundador</p>
                  
                  <p className="text-text-secondary mb-6">
                    Graduado em Direito pela Universidade de São Paulo (USP) com especialização em Direito do Trabalho pela Fundação Getúlio Vargas (FGV). Com mais de 20 anos de experiência em advocacia trabalhista empresarial, Wagner construiu uma carreira de destaque no cenário jurídico nacional.
                  </p>
                  
                  <p className="text-text-secondary mb-6">
                    Antes de fundar a GLA Advogados, atuou como gerente jurídico em grandes empresas multinacionais, experiência que lhe proporcionou uma visão estratégica do direito trabalhista aplicado às necessidades reais do ambiente corporativo.
                  </p>
                  
                  <p className="text-text-secondary mb-6">
                    É autor do livro "Compliance Trabalhista: Prevenção e Gestão de Riscos" e palestrante frequente em congressos e eventos sobre direito empresarial. Também atua como professor convidado em cursos de pós-graduação em diversas instituições de ensino.
                  </p>
                  
                  <div className="flex space-x-4">
                    <a href="#" aria-label="LinkedIn" className="text-navy hover:text-wine transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Email" className="text-navy hover:text-wine transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Sócio 2 */}
          <ScrollReveal delay={300}>
            <div>
              <div className="premium-card flex flex-col lg:flex-row gap-12 p-10">
                <div className="lg:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                      alt="Larissa Mendes"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="heading-md text-navy mb-1">Larissa Mendes</h3>
                  <p className="text-wine italic mb-6 text-xl">Sócia-fundadora</p>
                  
                  <p className="text-text-secondary mb-6">
                    Formada em Direito pela Universidade de São Paulo (USP) com mestrado em Direito do Trabalho pela mesma instituição. Especialista em consultoria preventiva e compliance trabalhista, com foco em empresas de médio e grande porte.
                  </p>
                  
                  <p className="text-text-secondary mb-6">
                    Sua atuação é marcada pelo desenvolvimento de políticas internas e programas de compliance que reduzem significativamente o passivo trabalhista das empresas que assessora. Desenvolveu metodologia própria para implementação de protocolos de conformidade legal adaptados à realidade de cada setor econômico.
                  </p>
                  
                  <p className="text-text-secondary mb-6">
                    Autora de diversos artigos científicos publicados em revistas especializadas e coautora da obra "Gestão Estratégica do Departamento Jurídico nas Organizações". Palestrante regular em congressos nacionais e internacionais sobre temas relacionados ao direito empresarial.
                  </p>
                  
                  <div className="flex space-x-4">
                    <a href="#" aria-label="LinkedIn" className="text-navy hover:text-wine transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Email" className="text-navy hover:text-wine transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final Section */}
      <section 
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-navy"
          style={{ opacity: 0.9 }}
        ></div>
        
        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-white mb-6">Conheça pessoalmente nossa equipe</h2>
              <p className="text-gray-200 text-xl mb-12">
                Agende uma visita ao nosso escritório e conheça mais sobre como podemos auxiliar sua empresa.
              </p>
              <a href="/contato" className="btn-secondary text-lg px-8 py-4">
                Agendar uma reunião
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}