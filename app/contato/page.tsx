'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
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
      <Hero
        title="Solicitar Análise Jurídica"
        subtitle="Estamos à disposição para entender as necessidades jurídicas específicas da sua empresa e propor soluções estratégicas."
        height="medium"
        variant="centered"
        ctaText=""
        pillText="Contato"
      />

      {/* ===== FORM em card branco centralizado no fundo dark ===== */}
      <section className="section-gap bg-dark">
        <div className="container-bento">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Info lateral */}
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-5">
                {/* Contact info cards */}
                <div className="bento-card-dark">
                  <h3 className="text-white font-bold text-lg mb-4 tracking-tight">Como podemos ajudar?</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Preencha o formulário com as informações da sua empresa e nossa equipe entrará em contato para agendar uma análise jurídica personalizada.
                  </p>
                </div>

                <div className="bento-card-dark">
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,150,46,0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">Localização</h4>
                        <p className="text-white/40 text-sm">Av. Paulista, 1000, Conj. 401<br />São Paulo — SP</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,150,46,0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">Telefone</h4>
                        <p className="text-white/40 text-sm">(11) 3000-5000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,150,46,0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                        <p className="text-white/40 text-sm">contato@glaadvogados.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,150,46,0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B8962E" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">Horário</h4>
                        <p className="text-white/40 text-sm">Seg–Sex: 9h às 18h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form card branco */}
            <ScrollReveal delay={200} className="lg:col-span-3">
              <div className="bento-card">
                <h2 className="text-xl font-bold mb-2 tracking-tight" style={{ color: '#0C1220' }}>
                  Solicitar Análise Jurídica
                </h2>
                <p className="text-sm mb-8" style={{ color: '#6B7280' }}>
                  Preencha os dados abaixo e retornaremos em até 24h úteis.
                </p>

                {formSubmitted ? (
                  <div className="rounded-2xl p-8 text-center" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#22c55e" className="w-12 h-12 mx-auto mb-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#0C1220' }}>Solicitação recebida!</h3>
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                      Recebemos sua solicitação. Nossa equipe entrará em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className={`btn-wine w-full justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
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
                        'Solicitar Análise Jurídica'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-dark pb-20">
        <div className="container-bento">
          <ScrollReveal>
            <div className="overflow-hidden" style={{ borderRadius: '20px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976468987456!2d-46.65499792374856!3d-23.564059260711754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1708286612161!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
