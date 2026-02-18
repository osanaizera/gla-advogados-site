import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Subtle accent */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 10% 90%, rgba(123,21,53,0.15) 0%, transparent 50%)',
        }}
      />

      <div className="container-premium mx-auto relative z-10 py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:w-1/3">
            <div className="flex items-baseline gap-1.5 mb-6">
              <span className="font-playfair text-3xl font-bold" style={{ color: '#B8962E' }}>
                GLA
              </span>
              <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
                Advogados
              </span>
            </div>
            <p className="text-white/50 text-base max-w-sm mb-8 leading-relaxed">
              Excelência em direito trabalhista empresarial. Assessoria jurídica estratégica para empresas que buscam gestão de risco, compliance e defesa processual de alto nível.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-white/70">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.45c-.979 0-1.775.8-1.775 1.774v20.451c0 .975.796 1.774 1.774 1.774h20.451c.979 0 1.778-.799 1.778-1.774v-20.451c0-.974-.8-1.774-1.778-1.774z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-white/70">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:w-2/3">
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-6 text-white">
                Navegação
              </h4>
              <ul className="space-y-3.5">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/sobre', label: 'Sobre' },
                  { href: '/servicos', label: 'Serviços' },
                  { href: '/imprensa', label: 'Imprensa' },
                  { href: '/contato', label: 'Contato' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-semibold text-lg mb-6 text-white">
                Serviços
              </h4>
              <ul className="space-y-3.5">
                {[
                  { href: '/servicos#consultoria', label: 'Consultoria Preventiva' },
                  { href: '/servicos#defesa', label: 'Defesa Processual' },
                  { href: '/servicos#gestao', label: 'Gestão de Passivo' },
                  { href: '/servicos#due-diligence', label: 'Due Diligence' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-semibold text-lg mb-6 text-white">
                Contato
              </h4>
              <div className="space-y-3 text-white/40 text-sm">
                <p>Av. Paulista, 1000, Cj. 401</p>
                <p>São Paulo, SP — CEP 01310-100</p>
                <p className="pt-2">(11) 3000-5000</p>
                <p>contato@glaadvogados.com.br</p>
              </div>
              <Link
                href="/contato"
                className="inline-block mt-6 text-sm font-medium transition-colors duration-300"
                style={{
                  color: '#B8962E',
                  borderBottom: '1px solid rgba(184,150,46,0.3)',
                  paddingBottom: '2px',
                }}
              >
                Solicitar Análise Jurídica →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 text-white/25 text-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} GLA Advogados. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white/50 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-white/50 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}