'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

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
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    
    try {
      const response = await fetch('https://sdcms-web.vercel.app/api/lead-magnets/q51vJz7N5JcU/capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields: formData })
      });
      
      const data = await response.json();
      
      if (response.ok && data.ok) {
        setFormSubmitted(true);
        setFormData({ nome: '', email: '', empresa: '', cargo: '', colaboradores: '', mensagem: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        throw new Error(data.message || 'Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente ou entre em contato por telefone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ===== HERO INTERNO ===== */}
      <section className="noise" style={{ background: '#F8F8F8', minHeight: '40vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="container-gla relative z-10" style={{ paddingBottom: '72px', paddingTop: '200px' }}>
          <span className="label-section mb-8" style={{ display: 'flex' }}>Contato</span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: '#1A1714',
            maxWidth: '640px',
          }}>
            Solicitar Análise{' '}
            <em style={{ fontWeight: 400, fontStyle: 'italic' }}>Jurídica</em>
          </h1>
          <div className="line-reveal mt-8" style={{ animationDelay: '0.3s' }} />
          <p style={{ marginTop: '24px', fontSize: '1.1rem', lineHeight: 1.6, color: '#78716C', maxWidth: '480px', fontWeight: 400 }}>
            Estamos à disposição para entender as necessidades jurídicas específicas da sua empresa.
          </p>
        </div>
      </section>

      {/* ===== FORM + CONTATO ===== */}
      <section style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="container-gla">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div style={{ maxWidth: '640px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 300, color: '#1A1714', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    Solicitar Análise Jurídica
                  </h2>
                  <p style={{ fontSize: '14px', color: '#78716C', marginBottom: '56px', fontWeight: 400 }}>
                    Preencha os dados abaixo e retornaremos em até 24h úteis.
                  </p>

                  {formSubmitted ? (
                    <div style={{ padding: '56px', textAlign: 'center', border: '1px solid #E7E5E4', borderRadius: '20px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1A1714', marginBottom: '8px' }}>Solicitação recebida!</h3>
                      <p style={{ fontSize: '14px', color: '#78716C', fontWeight: 400 }}>Nossa equipe entrará em contato em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-12">
                      <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome completo" required className="form-field" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email corporativo" required className="form-field" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

                      {formError && (
                        <div style={{ 
                          padding: '12px', 
                          borderRadius: '8px', 
                          background: 'rgba(220, 38, 38, 0.08)', 
                          color: '#dc2626', 
                          marginBottom: '20px',
                          fontSize: '14px'
                        }}>
                          {formError}
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        className={`btn-flora w-full justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : 'Solicitar Análise Jurídica'}
                        {!isSubmitting && (
                          <span className="btn-arrow">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={100}>
                <div style={{ border: '1px solid #E7E5E4', borderRadius: '20px', padding: '40px', marginBottom: '28px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1A1714', marginBottom: '32px' }}>Dados de Contato</h3>

                  <div className="space-y-8">
                    <div>
                      <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#78716C', marginBottom: '8px' }}>Endereço</p>
                      <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#1A1714', fontWeight: 400 }}>
                        Av. Franklin Roosevelt, 84 - GR 301<br />
                        Centro, Rio de Janeiro - 20021-120
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#78716C', marginBottom: '8px' }}>Telefone</p>
                      <a href="tel:+552138835652" style={{ fontSize: '14px', color: '#1A1714', fontWeight: 400 }}>(21) 3883-5652</a>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#78716C', marginBottom: '8px' }}>WhatsApp</p>
                      <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#1A1714', fontWeight: 400 }}>(21) 99405-3121</a>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.15em', color: '#78716C', marginBottom: '8px' }}>Email</p>
                      <a href="mailto:wagner.gusmao@glaadvogados.com.br" style={{ fontSize: '14px', color: '#1A1714', wordBreak: 'break-all', fontWeight: 400 }}>wagner.gusmao@glaadvogados.com.br</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Google Maps */}
              <ScrollReveal delay={200}>
                <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #E7E5E4' }}>
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
