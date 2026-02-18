import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-20">
      <div className="container-premium mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:w-1/3">
            <h3 className="text-3xl font-playfair font-bold text-gold mb-6">GLA Advogados</h3>
            <p className="mb-8 text-lg text-gray-200 max-w-md">
              Excelência jurídica para empresas que buscam soluções eficientes e personalizadas em direito trabalhista empresarial.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.45c-.979 0-1.775.8-1.775 1.774v20.451c0 .975.796 1.774 1.774 1.774h20.451c.979 0 1.778-.799 1.778-1.774v-20.451c0-.974-.8-1.774-1.778-1.774z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:w-2/3">
            <div>
              <h4 className="font-playfair font-semibold text-xl mb-6 text-white">Navegação</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="text-gray-300 hover:text-gold transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="text-gray-300 hover:text-gold transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/imprensa" className="text-gray-300 hover:text-gold transition-colors">
                    Imprensa
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-gray-300 hover:text-gold transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-semibold text-xl mb-6 text-white">Serviços</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/servicos#consultoria" className="text-gray-300 hover:text-gold transition-colors">
                    Consultoria Preventiva
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#defesa" className="text-gray-300 hover:text-gold transition-colors">
                    Defesa Processual
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#gestao" className="text-gray-300 hover:text-gold transition-colors">
                    Gestão de Passivo
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#due-diligence" className="text-gray-300 hover:text-gold transition-colors">
                    Due Diligence
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-semibold text-xl mb-6 text-white">Contato</h4>
              <p className="text-gray-300 mb-2">Av. Paulista, 1000, Cj. 401</p>
              <p className="text-gray-300 mb-2">São Paulo, SP</p>
              <p className="text-gray-300 mb-6">(11) 3000-5000</p>
              <Link href="/contato" className="text-gold hover:text-white border-b border-gold hover:border-white pb-1 transition-colors">
                Agende uma consulta
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} GLA Advogados. Todos os direitos reservados.</p>
            <div className="flex mt-4 md:mt-0 gap-8">
              <Link href="/politica-de-privacidade" className="hover:text-gold transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-gold transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}