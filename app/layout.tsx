import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'GLA Advogados | Especialistas em Direito Trabalhista Empresarial',
  description: 'Escritório de advocacia especializado na defesa de empresas em processos trabalhistas e consultoria preventiva para organizações de médio e grande porte.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="font-serif text-gla-blue text-2xl font-bold">
            GLA Advogados
            <div className="h-1 w-20 bg-gla-red mt-0.5"></div>
          </a>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gla-blue font-medium hover:text-gla-blue-light">Home</a>
          <a href="/sobre" className="text-gla-blue font-medium hover:text-gla-blue-light">Sobre</a>
          <a href="/servicos" className="text-gla-blue font-medium hover:text-gla-blue-light">Serviços</a>
          <a href="/imprensa" className="text-gla-blue font-medium hover:text-gla-blue-light">Imprensa</a>
          <a href="/contato" className="text-gla-blue font-medium hover:text-gla-blue-light">Contato</a>
        </nav>

        <div className="hidden md:block">
          <a href="/contato" className="btn-primary">Solicitar Análise Jurídica</a>
        </div>

        <div className="md:hidden">
          {/* Mobile menu button (simplified for this project) */}
          <button className="text-gla-blue">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gla-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-bold mb-3">GLA Advogados</h3>
            <p className="mb-4 max-w-sm">Especialistas em direito trabalhista empresarial, oferecendo soluções jurídicas para organizações de médio e grande porte.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-serif font-semibold text-lg mb-3">Navegação</h4>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-gla-gray-100">Home</a></li>
                <li><a href="/sobre" className="hover:text-gla-gray-100">Sobre</a></li>
                <li><a href="/servicos" className="hover:text-gla-gray-100">Serviços</a></li>
                <li><a href="/imprensa" className="hover:text-gla-gray-100">Imprensa</a></li>
                <li><a href="/contato" className="hover:text-gla-gray-100">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg mb-3">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="/servicos#consultoria" className="hover:text-gla-gray-100">Consultoria Preventiva</a></li>
                <li><a href="/servicos#defesa" className="hover:text-gla-gray-100">Defesa Processual</a></li>
                <li><a href="/servicos#gestao" className="hover:text-gla-gray-100">Gestão de Passivo</a></li>
                <li><a href="/servicos#due-diligence" className="hover:text-gla-gray-100">Due Diligence</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-serif font-semibold text-lg mb-3">Contato</h4>
              <p className="mb-2">São Paulo, SP</p>
              <p className="mb-4">contato@glaadvogados.com.br</p>
              <a href="/contato" className="btn-primary">Fale com nosso departamento jurídico</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-sm">
          <p>&copy; {new Date().getFullYear()} GLA Advogados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}