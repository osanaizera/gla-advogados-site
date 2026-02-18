import Link from 'next/link';
import Hero from './components/Hero';
import ScrollReveal from './components/ScrollReveal';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero 
        title="Soluções jurídicas sofisticadas para ambientes empresariais complexos"
        subtitle="Consultoria trabalhista especializada para empresas que buscam mitigar riscos e otimizar resultados em cenários de alta complexidade."
        ctaText="Agende uma Consultoria"
        ctaLink="/contato"
      />

      {/* Pilares Section */}
      <section className="section-premium bg-off-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="heading-lg text-navy mb-4">Pilares da nossa atuação</h2>
              <p className="text-text-secondary text-xl max-w-3xl mx-auto">
                Nossa abordagem combina rigor técnico e estratégia jurídica para entregar resultados consistentes para nossos clientes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 01 */}
            <ScrollReveal delay={200}>
              <div className="glass premium-card p-10 h-full overflow-hidden relative">
                <span className="absolute -right-6 top-0 font-playfair text-[120px] opacity-5 font-bold">01</span>
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L12 4.971 5.25 5.49Z" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-4 relative z-10">Análise Jurídica Precisa</h3>
                <p className="text-text-secondary">
                  Avaliamos cada caso com extremo rigor técnico, mapeando riscos e identificando as melhores estratégias jurídicas para o contexto específico da sua empresa.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 02 */}
            <ScrollReveal delay={400}>
              <div className="glass premium-card p-10 h-full overflow-hidden relative">
                <span className="absolute -right-6 top-0 font-playfair text-[120px] opacity-5 font-bold">02</span>
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-4 relative z-10">Prevenção Estratégica</h3>
                <p className="text-text-secondary">
                  Desenvolvemos protocolos e políticas internas que minimizam o risco de litígios trabalhistas e fortalecem a posição jurídica da sua organização.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 03 */}
            <ScrollReveal delay={600}>
              <div className="glass premium-card p-10 h-full overflow-hidden relative">
                <span className="absolute -right-6 top-0 font-playfair text-[120px] opacity-5 font-bold">03</span>
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-4 relative z-10">Representação Eficiente</h3>
                <p className="text-text-secondary">
                  Defendemos seus interesses com excelência técnica e estratégia personalizada, garantindo os melhores resultados em processos administrativos e judiciais.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Por que GLA Section */}
      <section className="section-premium bg-navy text-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="heading-lg text-white mb-4">Por que escolher a GLA Advogados</h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Combinamos expertise jurídica e visão de negócios para entregar soluções que agregam valor real à sua organização.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Item 1 */}
            <ScrollReveal delay={200}>
              <div className="flex">
                <div className="mr-6">
                  <span className="text-gold text-4xl font-playfair font-bold">01</span>
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Expertise Setorial</h3>
                  <div className="h-0.5 w-12 bg-wine mb-6"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Nossa equipe possui profundo conhecimento das particularidades dos diversos segmentos econômicos, permitindo abordagens jurídicas precisamente alinhadas às necessidades específicas do seu setor.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal delay={300}>
              <div className="flex">
                <div className="mr-6">
                  <span className="text-gold text-4xl font-playfair font-bold">02</span>
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Advocacia Preventiva</h3>
                  <div className="h-0.5 w-12 bg-wine mb-6"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Criamos e implementamos protocolos jurídicos preventivos que minimizam riscos e evitam contingências, gerando economia de recursos e proteção ao patrimônio empresarial.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal delay={400}>
              <div className="flex">
                <div className="mr-6">
                  <span className="text-gold text-4xl font-playfair font-bold">03</span>
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Tecnologia Jurídica</h3>
                  <div className="h-0.5 w-12 bg-wine mb-6"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Utilizamos ferramentas tecnológicas avançadas para gestão de processos, análise preditiva e acompanhamento em tempo real, garantindo eficiência e controle total das demandas jurídicas.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 4 */}
            <ScrollReveal delay={500}>
              <div className="flex">
                <div className="mr-6">
                  <span className="text-gold text-4xl font-playfair font-bold">04</span>
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Resultados Comprovados</h3>
                  <div className="h-0.5 w-12 bg-wine mb-6"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Nosso histórico de sucesso é respaldado por um portfólio de casos emblemáticos e clientes satisfeitos, com redução significativa de passivos trabalhistas e otimização de recursos.
                  </p>
                </div>
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
              <h2 className="heading-lg text-navy mb-4">Nossos sócios fundadores</h2>
              <p className="text-text-secondary text-xl max-w-3xl mx-auto">
                Uma equipe com experiência consolidada nas mais diversas áreas do direito trabalhista empresarial.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sócio 1 */}
            <ScrollReveal delay={200}>
              <div className="premium-card flex flex-col md:flex-row gap-8 p-8">
                <div className="md:w-1/3">
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
                <div className="md:w-2/3">
                  <h3 className="text-navy heading-sm mb-1">Wagner Oliveira</h3>
                  <p className="text-wine italic mb-4">Sócio-fundador</p>
                  <p className="text-text-secondary mb-6">
                    Advogado com mais de 20 anos de experiência em direito trabalhista empresarial. Especialista em negociações sindicais e gestão de crises. Pós-graduado pela FGV e professor convidado em diversas instituições de ensino.
                  </p>
                  <Link href="/sobre" className="text-navy font-medium hover:text-wine transition-colors">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Sócio 2 */}
            <ScrollReveal delay={400}>
              <div className="premium-card flex flex-col md:flex-row gap-8 p-8">
                <div className="md:w-1/3">
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
                <div className="md:w-2/3">
                  <h3 className="text-navy heading-sm mb-1">Larissa Mendes</h3>
                  <p className="text-wine italic mb-4">Sócia-fundadora</p>
                  <p className="text-text-secondary mb-6">
                    Especialista em consultoria preventiva e compliance trabalhista. Formada pela USP com mestrado em Direito do Trabalho. Autora de diversos artigos científicos e palestrante em congressos nacionais e internacionais.
                  </p>
                  <Link href="/sobre" className="text-navy font-medium hover:text-wine transition-colors">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Imprensa Section */}
      <section className="section-premium bg-off-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="heading-lg text-navy mb-4">Na mídia</h2>
              <p className="text-text-secondary text-xl max-w-3xl mx-auto">
                Nossa expertise reconhecida pelos principais veículos de comunicação do país.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8">
            {/* Item 1 */}
            <ScrollReveal delay={200}>
              <div className="media-card p-6 bg-white premium-card">
                <div className="flex items-start gap-6">
                  <div className="text-navy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm text-navy mb-2">Reforma trabalhista: especialistas analisam impactos após 5 anos</h3>
                    <p className="text-text-secondary mb-4">
                      Nossos sócios foram convidados a analisar os efeitos da reforma trabalhista de 2017 no cenário atual. Wagner Oliveira destacou pontos importantes sobre segurança jurídica e novos desafios.
                    </p>
                    <Link href="/imprensa" className="text-wine font-medium hover:text-navy-light transition-colors">
                      Ler matéria completa
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal delay={300}>
              <div className="media-card p-6 bg-white premium-card">
                <div className="flex items-start gap-6">
                  <div className="text-navy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 11.25v1.5m3-1.5v1.5m-1.5-15-1.5 5.25h-4.5L9 1.5M21 16.5h-2.25m-4.5-15L13.5 6H9L6 1.5h10.5Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm text-navy mb-2">GLA Advogados lança programa de compliance trabalhista para empresas</h3>
                    <p className="text-text-secondary mb-4">
                      Nosso escritório desenvolveu metodologia exclusiva para implementação de programas de compliance trabalhista, reduzindo riscos jurídicos e otimizando a gestão de recursos humanos.
                    </p>
                    <Link href="/imprensa" className="text-wine font-medium hover:text-navy-light transition-colors">
                      Ler matéria completa
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal delay={400}>
              <div className="media-card p-6 bg-white premium-card">
                <div className="flex items-start gap-6">
                  <div className="text-navy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm text-navy mb-2">Home office permanente: implicações jurídicas do novo modelo de trabalho</h3>
                    <p className="text-text-secondary mb-4">
                      Larissa Mendes foi entrevistada sobre os aspectos jurídicos do trabalho remoto permanente e compartilhou insights sobre os principais pontos de atenção para empresas que adotam este modelo.
                    </p>
                    <Link href="/imprensa" className="text-wine font-medium hover:text-navy-light transition-colors">
                      Ler matéria completa
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
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
              <h2 className="heading-lg text-white mb-6">Transforme a gestão jurídica trabalhista da sua empresa</h2>
              <p className="text-gray-200 text-xl mb-12">
                Entre em contato para uma análise personalizada das necessidades jurídicas da sua organização.
              </p>
              <Link href="/contato" className="btn-secondary text-lg px-8 py-4">
                Agendar uma consulta
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}