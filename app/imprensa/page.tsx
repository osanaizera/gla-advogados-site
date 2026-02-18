import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';

export default function ImprensaPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Reforma trabalhista: especialistas analisam impactos após 5 anos',
      excerpt: 'Nossos sócios foram convidados a analisar os efeitos da reforma trabalhista de 2017 no cenário atual. Wagner Oliveira destacou pontos importantes sobre segurança jurídica e novos desafios.',
      date: '15 de Janeiro, 2023',
      source: 'Valor Econômico',
      category: 'Artigo',
      link: '#'
    },
    {
      id: 2,
      title: 'GLA Advogados lança programa de compliance trabalhista para empresas',
      excerpt: 'Nosso escritório desenvolveu metodologia exclusiva para implementação de programas de compliance trabalhista, reduzindo riscos jurídicos e otimizando a gestão de recursos humanos.',
      date: '22 de Março, 2023',
      source: 'Portal Jurídico',
      category: 'Notícia',
      link: '#'
    },
    {
      id: 3,
      title: 'Home office permanente: implicações jurídicas do novo modelo de trabalho',
      excerpt: 'Larissa Mendes foi entrevistada sobre os aspectos jurídicos do trabalho remoto permanente e compartilhou insights sobre os principais pontos de atenção para empresas que adotam este modelo.',
      date: '05 de Maio, 2023',
      source: 'Exame',
      category: 'Entrevista',
      link: '#'
    },
    {
      id: 4,
      title: 'ESG e direito trabalhista: o impacto nas relações de trabalho',
      excerpt: 'Wagner Oliveira participou de webinar sobre como as práticas ESG estão transformando o direito trabalhista e criando novos desafios e oportunidades para departamentos jurídicos.',
      date: '18 de Junho, 2023',
      source: 'Webinar GLA',
      category: 'Evento',
      link: '#'
    },
    {
      id: 5,
      title: 'Inteligência artificial e automação: desafios legais para o futuro do trabalho',
      excerpt: 'Larissa Mendes publicou artigo sobre as implicações jurídicas da implementação de sistemas de IA e automação nos ambientes corporativos e os desafios regulatórios emergentes.',
      date: '09 de Agosto, 2023',
      source: 'Revista Jurídica Empresarial',
      category: 'Artigo',
      link: '#'
    },
    {
      id: 6,
      title: 'GLA Advogados amplia atuação com novo núcleo de direito digital',
      excerpt: 'Escritório inaugurou departamento especializado em questões trabalhistas relacionadas à tecnologia e transformação digital, liderado pela nova sócia Ana Carolina Peixoto.',
      date: '23 de Outubro, 2023',
      source: 'Conjur',
      category: 'Notícia',
      link: '#'
    }
  ];

  return (
    <>
      <Hero 
        title="GLA na mídia"
        subtitle="Acompanhe nossa participação nos principais veículos de comunicação, eventos e publicações especializadas."
        height="medium"
        showBadge={false}
      />

      {/* Imprensa Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="heading-lg text-navy mb-4">Notícias e Publicações</h2>
              <p className="text-text-secondary text-xl">
                Nossa expertise em direito trabalhista empresarial reconhecida pelos principais veículos de comunicação e publicações especializadas do país.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {newsItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
                <div className="media-card p-8 premium-card bg-white h-full">
                  <div className="flex items-start gap-2 mb-4">
                    <span className="text-sm px-3 py-1 bg-wine/10 text-wine rounded-full font-medium">
                      {item.category}
                    </span>
                    <span className="text-sm px-3 py-1 bg-navy/10 text-navy rounded-full font-medium">
                      {item.source}
                    </span>
                  </div>
                  
                  <h3 className="heading-sm text-navy mb-3">{item.title}</h3>
                  
                  <p className="text-text-secondary mb-6">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">{item.date}</span>
                    <Link href={item.link} className="text-wine font-medium hover:text-navy transition-colors">
                      Ler matéria completa
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section-premium bg-off-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="heading-lg text-navy mb-4">Artigos Científicos</h2>
              <p className="text-text-secondary text-xl">
                Conheça as contribuições acadêmicas e técnicas dos nossos sócios para o desenvolvimento do direito trabalhista no Brasil.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Publication 1 */}
            <ScrollReveal delay={100}>
              <div className="glass premium-card p-8 h-full flex flex-col">
                <div className="bg-navy/5 p-4 rounded-xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-navy mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-3 text-center">A eficácia dos programas de compliance trabalhista na redução do passivo judicial</h3>
                <p className="text-text-secondary mb-6 text-center flex-grow">
                  Artigo publicado na Revista de Direito do Trabalho, analisando a efetividade dos programas de compliance como ferramenta preventiva.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-text-secondary">Wagner Oliveira</span>
                  <Link href="#" className="text-wine font-medium hover:text-navy transition-colors">
                    Baixar PDF
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Publication 2 */}
            <ScrollReveal delay={200}>
              <div className="glass premium-card p-8 h-full flex flex-col">
                <div className="bg-navy/5 p-4 rounded-xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-navy mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-3 text-center">Desafios jurídicos do trabalho remoto: análise após a pandemia</h3>
                <p className="text-text-secondary mb-6 text-center flex-grow">
                  Estudo sobre os impactos jurídicos do trabalho remoto e as novas questões legais suscitadas pela adoção massiva desta modalidade pós-pandemia.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-text-secondary">Larissa Mendes</span>
                  <Link href="#" className="text-wine font-medium hover:text-navy transition-colors">
                    Baixar PDF
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Publication 3 */}
            <ScrollReveal delay={300}>
              <div className="glass premium-card p-8 h-full flex flex-col">
                <div className="bg-navy/5 p-4 rounded-xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-navy mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-navy heading-sm mb-3 text-center">Inteligência artificial e relações de trabalho: implicações jurídicas</h3>
                <p className="text-text-secondary mb-6 text-center flex-grow">
                  Pesquisa sobre os impactos da IA nas relações trabalhistas e os desafios para a regulamentação deste novo cenário tecnológico.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-text-secondary">Wagner e Larissa</span>
                  <Link href="#" className="text-wine font-medium hover:text-navy transition-colors">
                    Baixar PDF
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="heading-lg text-navy mb-4">Eventos e Palestras</h2>
              <p className="text-text-secondary text-xl">
                Acompanhe os próximos eventos, webinars e palestras dos nossos especialistas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Event 1 */}
            <ScrollReveal delay={100}>
              <div className="premium-card overflow-hidden flex flex-col h-full">
                <div className="relative h-48 bg-navy">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-white">25</span>
                      <span className="block text-white/80">Março</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-sm px-3 py-1 bg-wine/10 text-wine rounded-full font-medium">
                      Webinar
                    </span>
                  </div>
                  <h3 className="heading-sm text-navy mb-3">Reforma Trabalhista 2.0: O que esperar das novas propostas legislativas</h3>
                  <p className="text-text-secondary mb-6 flex-grow">
                    Webinar com Wagner Oliveira sobre as novas propostas de alteração da legislação trabalhista e seus possíveis impactos para empresas.
                  </p>
                  <div className="mt-auto">
                    <Link href="#" className="btn-primary inline-block">
                      Inscreva-se
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Event 2 */}
            <ScrollReveal delay={200}>
              <div className="premium-card overflow-hidden flex flex-col h-full">
                <div className="relative h-48 bg-navy">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-white">12</span>
                      <span className="block text-white/80">Abril</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-sm px-3 py-1 bg-wine/10 text-wine rounded-full font-medium">
                      Presencial
                    </span>
                  </div>
                  <h3 className="heading-sm text-navy mb-3">Workshop: Compliance Trabalhista na Prática</h3>
                  <p className="text-text-secondary mb-6 flex-grow">
                    Workshop presencial conduzido por Larissa Mendes sobre implementação de programas de compliance trabalhista em empresas de médio e grande porte.
                  </p>
                  <div className="mt-auto">
                    <Link href="#" className="btn-primary inline-block">
                      Inscreva-se
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Event 3 */}
            <ScrollReveal delay={300}>
              <div className="premium-card overflow-hidden flex flex-col h-full">
                <div className="relative h-48 bg-navy">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-white">08</span>
                      <span className="block text-white/80">Maio</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-sm px-3 py-1 bg-wine/10 text-wine rounded-full font-medium">
                      Congresso
                    </span>
                  </div>
                  <h3 className="heading-sm text-navy mb-3">3º Congresso de Direito Trabalhista Empresarial</h3>
                  <p className="text-text-secondary mb-6 flex-grow">
                    Evento anual organizado pela GLA Advogados reunindo especialistas nacionais e internacionais para discutir tendências e desafios do direito trabalhista.
                  </p>
                  <div className="mt-auto">
                    <Link href="#" className="btn-primary inline-block">
                      Inscreva-se
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="section-premium bg-off-white">
        <div className="container-premium mx-auto">
          <div className="glass premium-card p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="heading-lg text-navy mb-4">Contato para Imprensa</h2>
                  <span className="gold-line"></span>
                  <p className="text-text-secondary text-lg mb-8">
                    Se você é jornalista ou trabalha em um veículo de comunicação e deseja entrar em contato com nossos especialistas para entrevistas, artigos ou comentários sobre temas jurídicos, utilize os canais abaixo.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-4 rounded-full mr-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-navy font-semibold text-xl mb-2">Email para imprensa</h3>
                        <p className="text-text-secondary">imprensa@glaadvogados.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-gold/10 p-4 rounded-full mr-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-navy font-semibold text-xl mb-2">Telefone para imprensa</h3>
                        <p className="text-text-secondary">(11) 3000-5001</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-gold/10 p-4 rounded-full mr-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-navy font-semibold text-xl mb-2">Assessoria de Imprensa</h3>
                        <p className="text-text-secondary">Mariana Santos</p>
                        <p className="text-text-secondary">Coordenadora de Comunicação</p>
                      </div>
                    </div>
                  </div>
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
              <h2 className="heading-lg text-white mb-6">Inscreva-se em nossa newsletter</h2>
              <p className="text-gray-200 text-xl mb-12">
                Receba nossos artigos, análises e notícias sobre o mundo jurídico trabalhista diretamente em seu email.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="flex-grow px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button className="btn-secondary whitespace-nowrap">
                  Inscrever-se
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}