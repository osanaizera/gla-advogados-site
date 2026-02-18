import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';

export default function ImprensaPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Reforma trabalhista: especialistas analisam impactos na gestão de passivo das empresas',
      excerpt: 'Wagner Gusmão foi convidado a analisar os efeitos da reforma trabalhista no cenário corporativo atual, destacando pontos sobre segurança jurídica e gestão de risco para empresas de médio e grande porte.',
      date: '15 de Janeiro, 2024',
      source: 'Valor Econômico',
      category: 'Artigo',
      link: '#',
    },
    {
      id: 2,
      title: 'GLA Advogados lança programa de compliance trabalhista para empresas de grande porte',
      excerpt: 'O escritório desenvolveu metodologia exclusiva para implementação de programas de compliance trabalhista, reduzindo riscos jurídicos e otimizando a gestão do quadro de colaboradores.',
      date: '22 de Março, 2024',
      source: 'Portal Jurídico',
      category: 'Notícia',
      link: '#',
    },
    {
      id: 3,
      title: 'Home office permanente: implicações jurídicas no quadro de colaboradores',
      excerpt: 'Larissa de Oliveira Lima foi entrevistada sobre os aspectos jurídicos do trabalho remoto permanente e compartilhou insights sobre os principais pontos de atenção para gestão de risco trabalhista.',
      date: '05 de Maio, 2024',
      source: 'Exame',
      category: 'Entrevista',
      link: '#',
    },
    {
      id: 4,
      title: 'ESG e passivo trabalhista: o impacto nas relações de trabalho corporativas',
      excerpt: 'Wagner Gusmão participou de webinar sobre como as práticas ESG estão transformando o direito trabalhista e criando novos desafios para departamentos jurídicos de grandes empresas.',
      date: '18 de Junho, 2024',
      source: 'Webinar GLA',
      category: 'Evento',
      link: '#',
    },
    {
      id: 5,
      title: 'Inteligência artificial e automação: desafios legais para o futuro do trabalho',
      excerpt: 'Larissa de Oliveira Lima publicou artigo sobre as implicações jurídicas da implementação de IA nos ambientes corporativos e os desafios para compliance trabalhista.',
      date: '09 de Agosto, 2024',
      source: 'Revista Jurídica Empresarial',
      category: 'Artigo',
      link: '#',
    },
    {
      id: 6,
      title: 'GLA Advogados amplia atuação com novo núcleo de direito digital do trabalho',
      excerpt: 'Escritório inaugurou departamento especializado em questões trabalhistas relacionadas à transformação digital e gestão de colaboradores em modelos híbridos de trabalho.',
      date: '23 de Outubro, 2024',
      source: 'Conjur',
      category: 'Notícia',
      link: '#',
    },
  ];

  return (
    <>
      <Hero
        title="GLA na mídia"
        subtitle="Acompanhe nossa participação nos principais veículos de comunicação, eventos e publicações sobre direito trabalhista empresarial."
        height="medium"
        showBadge={false}
        ctaText=""
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
      />

      {/* Imprensa Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Notícias e Publicações</h2>
              <p className="text-text-secondary text-xl leading-relaxed">
                Nossa expertise em direito trabalhista empresarial reconhecida pelos principais veículos de comunicação do país.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {newsItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
                <div className="media-card p-8 premium-card bg-white h-full">
                  <div className="flex items-start gap-2 mb-4">
                    <span
                      className="text-sm px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(123,21,53,0.08)', color: '#7B1535' }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="text-sm px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(10,22,40,0.06)', color: '#0A1628' }}
                    >
                      {item.source}
                    </span>
                  </div>

                  <h3 className="heading-sm text-navy-dark mb-3">{item.title}</h3>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">{item.date}</span>
                    <Link href={item.link} className="text-wine font-medium hover:text-navy-light transition-colors inline-flex items-center gap-1.5 text-sm">
                      Ler matéria
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
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
              <h2 className="heading-lg text-navy-dark mb-4">Artigos Científicos</h2>
              <p className="text-text-secondary text-xl leading-relaxed">
                Contribuições acadêmicas e técnicas dos nossos sócios para o desenvolvimento do direito trabalhista empresarial no Brasil.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'A eficácia dos programas de compliance trabalhista na redução do passivo judicial',
                desc: 'Artigo publicado na Revista de Direito do Trabalho, analisando a efetividade dos programas de compliance como ferramenta preventiva.',
                author: 'Wagner Gusmão',
              },
              {
                title: 'Desafios jurídicos do trabalho remoto: análise do impacto no quadro de colaboradores',
                desc: 'Estudo sobre os impactos jurídicos do trabalho remoto e as questões legais suscitadas pela adoção massiva desta modalidade nas empresas.',
                author: 'Larissa de Oliveira Lima',
              },
              {
                title: 'Inteligência artificial e relações de trabalho: implicações para gestão de risco',
                desc: 'Pesquisa sobre os impactos da IA nas relações trabalhistas e os desafios de compliance no cenário de transformação digital.',
                author: 'Wagner e Larissa',
              },
            ].map((pub, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="premium-card p-8 h-full flex flex-col">
                  <div
                    className="p-4 rounded-2xl mb-6 w-fit"
                    style={{
                      background: 'linear-gradient(135deg, rgba(10,22,40,0.06) 0%, rgba(10,22,40,0.02) 100%)',
                      border: '1px solid rgba(10,22,40,0.08)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-navy-dark">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-navy-dark heading-sm mb-3">{pub.title}</h3>
                  <p className="text-text-secondary mb-6 flex-grow leading-relaxed">{pub.desc}</p>
                  <div className="flex justify-between items-center mt-auto pt-4" style={{ borderTop: '1px solid rgba(10,22,40,0.06)' }}>
                    <span className="text-sm text-text-secondary">{pub.author}</span>
                    <Link href="#" className="text-wine font-medium hover:text-navy-light transition-colors text-sm">
                      Baixar PDF
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Eventos e Palestras</h2>
              <p className="text-text-secondary text-xl leading-relaxed">
                Acompanhe os próximos eventos, webinars e palestras dos nossos especialistas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                day: '25',
                month: 'Março',
                type: 'Webinar',
                title: 'Reforma Trabalhista 2.0: O que esperar das novas propostas legislativas',
                desc: 'Webinar com Wagner Gusmão sobre as novas propostas de alteração da legislação trabalhista e impactos no passivo das empresas.',
              },
              {
                day: '12',
                month: 'Abril',
                type: 'Presencial',
                title: 'Workshop: Compliance Trabalhista na Prática',
                desc: 'Workshop conduzido por Larissa de Oliveira Lima sobre implementação de programas de compliance para empresas com grande quadro de colaboradores.',
              },
              {
                day: '08',
                month: 'Maio',
                type: 'Congresso',
                title: '3º Congresso de Direito Trabalhista Empresarial',
                desc: 'Evento anual organizado pela GLA Advogados reunindo especialistas para discutir tendências em gestão de risco jurídico trabalhista.',
              },
            ].map((event, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="premium-card overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 bg-navy-dark flex items-center justify-center">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 50%, rgba(30,58,110,0.4) 0%, transparent 70%)',
                      }}
                    />
                    <div className="text-center relative z-10">
                      <span className="text-5xl font-bold text-white font-playfair">{event.day}</span>
                      <span className="block text-white/70 text-lg mt-1">{event.month}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span
                        className="text-sm px-3 py-1 rounded-full font-medium"
                        style={{ background: 'rgba(123,21,53,0.08)', color: '#7B1535' }}
                      >
                        {event.type}
                      </span>
                    </div>
                    <h3 className="heading-sm text-navy-dark mb-3">{event.title}</h3>
                    <p className="text-text-secondary mb-6 flex-grow leading-relaxed">{event.desc}</p>
                    <div className="mt-auto">
                      <Link href="/contato" className="btn-primary">
                        Inscreva-se
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="section-premium bg-off-white">
        <div className="container-premium mx-auto">
          <div className="premium-card p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="heading-lg text-navy-dark mb-4">Contato para Imprensa</h2>
                  <span className="gold-line"></span>
                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    Se você é jornalista e deseja entrar em contato com nossos especialistas para entrevistas, artigos ou comentários sobre direito trabalhista empresarial, utilize os canais abaixo.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div
                        className="p-4 rounded-2xl mr-6 flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(184,150,46,0.1) 0%, rgba(184,150,46,0.05) 100%)',
                          border: '1px solid rgba(184,150,46,0.15)',
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-navy-dark font-semibold text-xl mb-2">Email para imprensa</h3>
                        <p className="text-text-secondary">imprensa@glaadvogados.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className="p-4 rounded-2xl mr-6 flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(184,150,46,0.1) 0%, rgba(184,150,46,0.05) 100%)',
                          border: '1px solid rgba(184,150,46,0.15)',
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-navy-dark font-semibold text-xl mb-2">Assessoria de Imprensa</h3>
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
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(22,32,64,0.9) 100%)',
          }}
        />

        <div className="container-premium mx-auto relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-white mb-6">Inscreva-se em nossa newsletter</h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed">
                Receba nossos artigos, análises e notícias sobre gestão de risco jurídico trabalhista diretamente no seu email.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Seu email corporativo"
                  className="flex-grow px-6 py-4 rounded-lg focus:outline-none text-navy-dark"
                  style={{ border: '1px solid rgba(10,22,40,0.1)' }}
                />
                <button className="btn-gold whitespace-nowrap">
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