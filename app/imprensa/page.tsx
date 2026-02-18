import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';

const newsItems = [
  {
    id: 1,
    title: 'Reforma trabalhista: especialistas analisam impactos após 5 anos',
    excerpt: 'Nossos sócios analisaram os efeitos da reforma trabalhista de 2017 no cenário atual, com destaque para segurança jurídica e novos desafios.',
    date: '15 Jan 2023',
    source: 'Valor Econômico',
    category: 'Artigo',
  },
  {
    id: 2,
    title: 'GLA Advogados lança programa de compliance trabalhista para empresas',
    excerpt: 'Metodologia exclusiva para implementação de programas de compliance trabalhista, reduzindo riscos e otimizando a gestão de RH.',
    date: '22 Mar 2023',
    source: 'Portal Jurídico',
    category: 'Notícia',
  },
  {
    id: 3,
    title: 'Home office permanente: implicações jurídicas do novo modelo',
    excerpt: 'Larissa Mendes compartilhou insights sobre os principais pontos de atenção para empresas que adotam o modelo remoto permanente.',
    date: '05 Mai 2023',
    source: 'Exame',
    category: 'Entrevista',
  },
  {
    id: 4,
    title: 'ESG e direito trabalhista: o impacto nas relações de trabalho',
    excerpt: 'Wagner Oliveira participou de webinar sobre como as práticas ESG estão transformando o direito trabalhista e criando novas oportunidades.',
    date: '18 Jun 2023',
    source: 'Webinar GLA',
    category: 'Evento',
  },
  {
    id: 5,
    title: 'Inteligência artificial e automação: desafios legais para o futuro',
    excerpt: 'Artigo sobre as implicações jurídicas da IA e automação nos ambientes corporativos e os desafios regulatórios emergentes.',
    date: '09 Ago 2023',
    source: 'Revista Jurídica',
    category: 'Artigo',
  },
  {
    id: 6,
    title: 'GLA amplia atuação com novo núcleo de direito digital',
    excerpt: 'Escritório inaugurou departamento especializado em questões trabalhistas relacionadas à tecnologia e transformação digital.',
    date: '23 Out 2023',
    source: 'Conjur',
    category: 'Notícia',
  },
];

export default function ImprensaPage() {
  return (
    <>
      <Hero
        title="GLA na mídia"
        subtitle="Acompanhe nossa participação nos principais veículos de comunicação, eventos e publicações especializadas."
        height="medium"
        showBadge={false}
        ctaText=""
      />

      {/* News */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Notícias e Publicações</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Nossa expertise reconhecida pelos principais veículos de comunicação e publicações especializadas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 80}>
                <div className="media-card p-6 md:p-8 premium-card bg-white h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(123,21,53,0.08)', color: '#7B1535' }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(10,22,40,0.05)', color: '#0A1628' }}
                    >
                      {item.source}
                    </span>
                  </div>

                  <h3 className="heading-sm text-navy-dark mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{item.excerpt}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-text-secondary">{item.date}</span>
                    <Link
                      href="#"
                      className="text-wine font-medium text-sm hover:text-navy-light transition-colors inline-flex items-center gap-1.5"
                    >
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

      {/* Publications */}
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
              <h2 className="heading-lg text-navy-dark mb-4">Artigos Científicos</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Contribuições acadêmicas e técnicas para o desenvolvimento do direito trabalhista.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'A eficácia dos programas de compliance trabalhista na redução do passivo judicial',
                author: 'Wagner Oliveira',
                journal: 'Revista de Direito do Trabalho',
              },
              {
                title: 'Desafios jurídicos do trabalho remoto: análise após a pandemia',
                author: 'Larissa Mendes',
                journal: 'Revista Brasileira de Direito',
              },
              {
                title: 'Inteligência artificial e relações de trabalho: implicações jurídicas',
                author: 'Wagner e Larissa',
                journal: 'Revista Jurídica Empresarial',
              },
            ].map((pub, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="glass-light p-8 h-full flex flex-col">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: 'rgba(10,22,40,0.04)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-navy-dark">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="heading-sm text-navy-dark mb-2">{pub.title}</h3>
                  <p className="text-text-secondary text-sm mb-6 flex-grow">{pub.journal}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-text-secondary">{pub.author}</span>
                    <Link href="#" className="text-wine font-medium text-sm hover:text-navy-light transition-colors">
                      Baixar PDF
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="heading-lg text-navy-dark mb-4">Eventos e Palestras</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Acompanhe os próximos eventos, webinars e palestras dos nossos especialistas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                day: '25',
                month: 'Março',
                type: 'Webinar',
                title: 'Reforma Trabalhista 2.0: O que esperar das novas propostas',
                desc: 'Webinar com Wagner Oliveira sobre as novas propostas de alteração da legislação trabalhista.',
              },
              {
                day: '12',
                month: 'Abril',
                type: 'Presencial',
                title: 'Workshop: Compliance Trabalhista na Prática',
                desc: 'Workshop presencial conduzido por Larissa Mendes sobre compliance em empresas de médio e grande porte.',
              },
              {
                day: '08',
                month: 'Maio',
                type: 'Congresso',
                title: '3º Congresso de Direito Trabalhista Empresarial',
                desc: 'Evento anual reunindo especialistas nacionais e internacionais sobre tendências e desafios.',
              },
            ].map((evt, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="premium-card overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 bg-navy-dark flex items-center justify-center">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(30,58,110,0.4) 0%, transparent 70%)',
                      }}
                    />
                    <div className="text-center relative z-10">
                      <span className="block text-4xl font-bold text-white font-playfair">{evt.day}</span>
                      <span className="text-white/60 text-sm">{evt.month}</span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <span
                      className="inline-block text-xs px-3 py-1 rounded-full font-medium mb-4 self-start"
                      style={{ background: 'rgba(123,21,53,0.08)', color: '#7B1535' }}
                    >
                      {evt.type}
                    </span>
                    <h3 className="heading-sm text-navy-dark mb-3">{evt.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{evt.desc}</p>
                    <Link href="#" className="btn-primary text-center">
                      Inscreva-se
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="section-premium bg-off-white">
        <div className="container-premium mx-auto">
          <div className="glass-light p-8 lg:p-14" style={{ borderRadius: '24px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="heading-lg text-navy-dark mb-4">Contato para Imprensa</h2>
                  <span className="gold-line" />
                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    Jornalistas e veículos de comunicação podem entrar em contato conosco para entrevistas, artigos e comentários.
                  </p>
                  <div className="space-y-5">
                    {[
                      { label: 'Email para imprensa', value: 'imprensa@glaadvogados.com.br' },
                      { label: 'Telefone para imprensa', value: '(11) 3000-5001' },
                      { label: 'Assessoria de Imprensa', value: 'Mariana Santos — Coord. de Comunicação' },
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="text-navy-dark font-semibold text-sm">{item.label}</p>
                        <p className="text-text-secondary text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>
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
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80")',
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
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg text-white mb-6">Inscreva-se em nossa newsletter</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Receba artigos, análises e notícias sobre o mundo jurídico trabalhista.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-grow px-5 py-3.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-white/10 text-white placeholder-white/40 border border-white/10"
                />
                <button className="btn-gold whitespace-nowrap">Inscrever-se</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}