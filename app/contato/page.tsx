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
      <section className="noise" style={{ background: '#FAFAF9', minHeight: '40vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="container-gla relative z-10" style={{ paddingBottom: '64px', paddingTop: '200px' }}>
          <span className="label-section mb-6" style={{ display: 'flex' }}>Contato</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#1A1714',
            maxWidth: '640px',
          }}>
            Solicitar Análise Jurídica
          </h1>
          <div className="line-reveal mt-6" style={{ animationDelay: '0.3s' }} />
          <p style={{ marginTop: '20px', fontSize: '17px', lineHeight: 1.7, color: '#78716C', maxWidth: '480px' }}>
            Estamos à disposição para entender as necessidades jurídicas específicas da sua empresa.
          </p>
        </div>
      </section>

      {/* ===== FORM + CONTATO ===== */}
      <section style={{ background: '#FFFFFF', padding: '100px 0' }}>
        <div className="container-gla">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div style={{ maxWidth: '640px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1A1714', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    Solicitar Análise Jurídica
                  </h2>
                  <p style={{ fontSize: '14px', color: '#78716C', marginBottom: '48px' }}>
                    Preencha os dados abaixo e retornaremos em até 24h úteis.
                  </p>

                  {formSubmitted ? (
                    <div style={{ padding: '48px', textAlign: 'center', border: '1px solid #E7E5E4', borderRadius: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1714', marginBottom: '8px' }}>Solicitação recebida!</h3>
                      <p style={{ fontSize: '14px', color: '#78716C' }}>Nossa equipe entrará em contato em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome completo" required className="form-field" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email corporativo" required className="form-field" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Empresa" required className="form-field" />
                        <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} placeholder="Cargo" required className="form-field" />
                      </div>

                      <select name="colaboradores" value={formData.colaboradores} onChange={handleChange} required className="form-field">
                        <option value="" disabled>Nº de colaboradores</option>
                        <option value="50-100">50 a 100 colaboradores</option>
                        <option value="100-500">100 a 500 colaboradores</option>
                        <option value="500-2000">500 a 2.000 colaboradores</option>
                        <option value="2000+">Acima de 2.000 colaboradores</option>
                      </select>

                      <textarea name="mensagem" rows={4} value={formData.mensagem} onChange={handleChange} placeholder="Descreva sua necessidade jurídica" required className="form-field" style={{ resize: 'none' }} />

                      <button
                        type="submit"
                        className={`btn-red w-full justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : 'Solicitar Análise Jurídica →'}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={100}>
                <div style={{ border: '1px solid #E7E5E4', borderRadius: '16px', padding: '36px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1A1714', marginBottom: '28px' }}>Dados de Contato</h3>

                  <div className="space-y-7">
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#78716C', marginBottom: '6px' }}>Endereço</p>
                      <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#1A1714' }}>
                        Av. Franklin Roosevelt, 84 - GR 301<br />
                        Centro, Rio de Janeiro - 20021-120
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#78716C', marginBottom: '6px' }}>Telefone</p>
                      <a href="tel:+552138835652" style={{ fontSize: '14px', color: '#1A1714' }}>(21) 3883-5652</a>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#78716C', marginBottom: '6px' }}>WhatsApp</p>
                      <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#1A1714' }}>(21) 99405-3121</a>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#78716C', marginBottom: '6px' }}>Email</p>
                      <a href="mailto:wagner.gusmao@glaadvogados.com.br" style={{ fontSize: '14px', color: '#1A1714', wordBreak: 'break-all' }}>wagner.gusmao@glaadvogados.com.br</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Google Maps */}
              <ScrollReveal delay={200}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E7E5E4' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356!2d-43.1755!3d-22.9068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e3b3bfc8f%3A0x0!2sAv.+Franklin+Roosevelt%2C+84+-+Centro%2C+Rio+de+Janeiro+-+RJ%2C+20021-120!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="250"
                    style={{ border: 0, display: 'block' }}
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
