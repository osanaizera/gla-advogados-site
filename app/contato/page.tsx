'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    tamanho: '',
    assunto: '',
    mensagem: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset do formulário
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        tamanho: '',
        assunto: '',
        mensagem: '',
      });
      
      // Esconder a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Hero 
        title="Entre em contato"
        subtitle="Estamos à disposição para entender as necessidades jurídicas específicas da sua empresa."
        height="medium"
        showBadge={false}
      />

      <section className="section-premium bg-white">
        <div className="container-premium mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Informações de Contato */}
            <ScrollReveal>
              <div>
                <h2 className="heading-lg text-navy mb-4">Como podemos ajudar?</h2>
                <span className="gold-line"></span>
                
                <div className="mt-12 space-y-8">
                  <div className="flex items-start">
                    <div className="bg-gold/10 p-4 rounded-full mr-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy font-semibold text-xl mb-2">Localização</h3>
                      <p className="text-text-secondary">
                        Av. Paulista, 1000, Conj. 401<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold/10 p-4 rounded-full mr-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy font-semibold text-xl mb-2">Telefone</h3>
                      <p className="text-text-secondary">(11) 3000-5000</p>
                      <p className="text-text-secondary">(11) 99000-5000 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold/10 p-4 rounded-full mr-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy font-semibold text-xl mb-2">Email</h3>
                      <p className="text-text-secondary">contato@glaadvogados.com.br</p>
                      <p className="text-text-secondary">atendimento@glaadvogados.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold/10 p-4 rounded-full mr-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy font-semibold text-xl mb-2">Horário de Atendimento</h3>
                      <p className="text-text-secondary">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábados: Somente com agendamento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Formulário de Contato */}
            <ScrollReveal delay={300}>
              <div className="glass premium-card p-10">
                <h2 className="heading-md text-navy mb-8">Envie uma mensagem</h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-600 mx-auto mb-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 className="text-xl text-green-800 font-medium mb-2">Mensagem enviada!</h3>
                    <p className="text-green-700">
                      Recebemos sua mensagem e retornaremos em breve. Obrigado pelo contato.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="form-control">
                        <input 
                          type="text" 
                          id="nome" 
                          name="nome" 
                          value={formData.nome} 
                          onChange={handleChange} 
                          placeholder=" " 
                          required 
                        />
                        <label htmlFor="nome">Nome completo</label>
                      </div>
                      
                      <div className="form-control">
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder=" " 
                          required 
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="form-control">
                        <input 
                          type="text" 
                          id="empresa" 
                          name="empresa" 
                          value={formData.empresa} 
                          onChange={handleChange} 
                          placeholder=" " 
                          required 
                        />
                        <label htmlFor="empresa">Empresa</label>
                      </div>
                      
                      <div className="form-control">
                        <input 
                          type="tel" 
                          id="telefone" 
                          name="telefone" 
                          value={formData.telefone} 
                          onChange={handleChange} 
                          placeholder=" " 
                          required 
                        />
                        <label htmlFor="telefone">Telefone</label>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="form-control">
                        <select 
                          id="tamanho" 
                          name="tamanho" 
                          value={formData.tamanho} 
                          onChange={handleChange} 
                          required
                          className="border-gray-warm"
                        >
                          <option value="" disabled>Selecione o porte da empresa</option>
                          <option value="pequena">Até 50 funcionários</option>
                          <option value="media">De 51 a 500 funcionários</option>
                          <option value="grande">Acima de 500 funcionários</option>
                        </select>
                        <label htmlFor="tamanho" className={formData.tamanho ? "top-[-20px] text-[0.75rem] text-wine" : ""}>Porte da empresa</label>
                      </div>
                      
                      <div className="form-control">
                        <input 
                          type="text" 
                          id="assunto" 
                          name="assunto" 
                          value={formData.assunto} 
                          onChange={handleChange} 
                          placeholder=" " 
                          required 
                        />
                        <label htmlFor="assunto">Assunto</label>
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <textarea 
                        id="mensagem" 
                        name="mensagem" 
                        rows={5}
                        value={formData.mensagem} 
                        onChange={handleChange} 
                        placeholder=" " 
                        required 
                      ></textarea>
                      <label htmlFor="mensagem">Mensagem</label>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="section-premium bg-off-white pt-0">
        <div className="container-premium mx-auto">
          <ScrollReveal>
            <div className="premium-card p-4 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976468987456!2d-46.65499792374856!3d-23.564059260711754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1708286612161!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}