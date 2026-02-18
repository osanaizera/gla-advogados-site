import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GLA Advogados | Direito Trabalhista Empresarial — Rio de Janeiro',
  description: 'Escritório de advocacia especializado na defesa de empresas em processos trabalhistas, consultoria preventiva e gestão de passivo trabalhista. Mais de 15 anos de experiência no Rio de Janeiro.',
  keywords: ['advocacia trabalhista', 'direito trabalhista empresarial', 'consultoria jurídica', 'compliance trabalhista', 'Rio de Janeiro', 'defesa de empresas'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gla-bg antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
