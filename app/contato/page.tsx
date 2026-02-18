'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cargo: '',
    colaboradores: '',
    mensagem: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ nome: '', email: '', empresa: '', cargo: '', colaboradores: '', mensagem: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '40vh', background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 50%, #F0F0F3 100%)' }}
      >
        <div className="container-main relative z-10 pb-16 pt-40">
          <span className="label-section mb-4 block">Contato</span>
          <h1
            className="font-extrabold max-w-3xl"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#1A1A1A',
            }}
          >
            Solicitar Análise Jurídica
          </h1>
          <div className="mt-4" style={{ width: '60px', height: '3px', background: '#C0272D', borderRadius: '2px' }} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: '#6B7280' }}>
            Estamos à disposição para entender as necessidades jurídicas específicas da sua empresa.
          </p>
        </div>
      </section>

      {/* ===== FORM + CONTATO ===== */}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="glass-card p-8 md:p-12">
                  <h2 className="text-xl font-extrabold mb-2" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                    Solicitar Análise Jurídica
                  </h2>
                  <p className="text-sm mb-10" style={{ color: '#6B7280' }}>
                    Preencha os dados abaixo e retornaremos em até 24h úteis.
                  </p>

                  {formSubmitted ? (
                    <div className="rounded-2xl p-8 text-center" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#22c55e" className="w-12 h-12 mx-auto mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A1A1A' }}>Solicitação recebida!</h3>
                      <p className="text-sm" style={{ color: '#6B7280' }}>
                        Recebemos sua solicitação. Nossa equipe entrará em contato em breve.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Nome completo"
                          required
                          className="form-field"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email corporativo"
                          required
                          className="form-field"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <input
                          type="text"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Empresa"
                          required
                          className="form-field"
                        />
                        <input
                          type="text"
                          name="cargo"
                          value={formData.cargo}
                          onChange={handleChange}
                          placeholder="Cargo"
                          required
                          className="form-field"
                        />
                      </div>

                      <div>
                        <select
                          name="colaboradores"
                          value={formData.colaboradores}
                          onChange={handleChange}
                          required
                          className="form-field"
                        >
                          <option value="" disabled>Nº de colaboradores</option>
                          <option value="50-100">50 a 100 colaboradores</option>
                          <option value="100-500">100 a 500 colaboradores</option>
                          <option value="500-2000">500 a 2.000 colaboradores</option>
                          <option value="2000+">Acima de 2.000 colaboradores</option>
                        </select>
                      </div>

                      <div>
                        <textarea
                          name="mensagem"
                          rows={4}
                          value={formData.mensagem}
                          onChange={handleChange}
                          placeholder="Descreva sua necessidade jurídica"
                          required
                          className="form-field"
                          style={{ resize: 'none' }}
                        />
                      </div>

                      <button
                        type="submit"
                        className={`btn-red w-full justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          'Solicitar Análise Jurídica →'
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar de contato */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="glass-card p-8 mb-6">
                  <h3 className="text-base font-bold mb-6" style={{ color: '#1A1A1A' }}>Dados de Contato</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#C0272D" className="w-5 h-5 mt-0.5 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: '#1A1A1A' }}>Endereço</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                          Av. Franklin Roosevelt, 84 - GR 301<br />
                          Centro, Rio de Janeiro - 20021-120
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#C0272D" className="w-5 h-5 mt-0.5 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: '#1A1A1A' }}>Telefone</p>
                        <a href="tel:+552138835652" className="text-sm" style={{ color: '#6B7280' }}>(21) 3883-5652</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#C0272D" className="w-5 h-5 mt-0.5 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: '#1A1A1A' }}>WhatsApp</p>
                        <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: '#6B7280' }}>
                          (21) 99405-3121
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#C0272D" className="w-5 h-5 mt-0.5 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: '#1A1A1A' }}>Email</p>
                        <a href="mailto:wagner.gusmao@glaadvogados.com.br" className="text-sm break-all" style={{ color: '#6B7280' }}>
                          wagner.gusmao@glaadvogados.com.br
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Google Maps */}
              <ScrollReveal>
                <div className="glass-card overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356!2d-43.1755!3d-22.9068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e3b3bfc8f%3A0x0!2sAv.+Franklin+Roosevelt%2C+84+-+Centro%2C+Rio+de+Janeiro+-+RJ%2C+20021-120!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '20px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização GLA Advogados"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
