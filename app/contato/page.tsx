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
        style={{ minHeight: '40vh', borderRadius: '0 0 24px 24px', background: '#0C1220' }}
      >
        <div className="container-main relative z-10 pb-16 pt-40">
          <span className="text-sm font-medium uppercase tracking-widest mb-4 block" style={{ color: '#B8962E', letterSpacing: '0.08em' }}>
            Contato
          </span>
          <h1
            className="text-white font-extrabold max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
          >
            Solicitar Análise Jurídica
          </h1>
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.6 }}>
            Estamos à disposição para entender as necessidades jurídicas específicas da sua empresa.
          </p>
        </div>
      </section>

      {/* ===== FORM — Card branco centralizado no off-white ===== */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div
                className="p-8 md:p-12"
                style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E5E7EB' }}
              >
                <h2 className="text-xl font-extrabold mb-2" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
                  Solicitar Análise Jurídica
                </h2>
                <p className="text-sm mb-10" style={{ color: '#5C6B84' }}>
                  Preencha os dados abaixo e retornaremos em até 24h úteis.
                </p>

                {formSubmitted ? (
                  <div className="rounded-2xl p-8 text-center" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#22c55e" className="w-12 h-12 mx-auto mb-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#0C1220' }}>Solicitação recebida!</h3>
                    <p className="text-sm" style={{ color: '#5C6B84' }}>
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
                        'Solicitar Análise Jurídica →'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact info below form */}
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6" style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#7B1535" className="w-6 h-6 mx-auto mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p className="text-xs font-bold mb-1" style={{ color: '#0C1220' }}>Localização</p>
                  <p className="text-xs" style={{ color: '#5C6B84' }}>Av. Paulista, 1000<br />São Paulo — SP</p>
                </div>
                <div className="text-center p-6" style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#7B1535" className="w-6 h-6 mx-auto mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p className="text-xs font-bold mb-1" style={{ color: '#0C1220' }}>Telefone</p>
                  <p className="text-xs" style={{ color: '#5C6B84' }}>(11) 3000-5000</p>
                </div>
                <div className="text-center p-6" style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#7B1535" className="w-6 h-6 mx-auto mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <p className="text-xs font-bold mb-1" style={{ color: '#0C1220' }}>Email</p>
                  <p className="text-xs" style={{ color: '#5C6B84' }}>contato@glaadvogados.com.br</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
