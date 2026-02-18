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
  title: 'GLA Advogados | Direito Trabalhista Empresarial',
  description: 'Escritório de advocacia especializado na defesa de empresas em processos trabalhistas e consultoria preventiva para organizações de médio e grande porte.',
  keywords: ['advocacia trabalhista', 'direito empresarial', 'consultoria jurídica', 'compliance trabalhista', 'São Paulo'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-off-white antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
