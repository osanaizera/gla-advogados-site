import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Source_Serif_Pro } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

// Fonte para títulos: Playfair Display (serif elegante e autoritativo)
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
})

// Fonte para corpo de texto: Source Serif Pro (legível e formal)
const sourceSerif = Source_Serif_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-source-serif',
})

export const metadata: Metadata = {
  title: 'GLA Advogados | Direito Trabalhista Empresarial — Rio de Janeiro',
  description: 'Escritório de advocacia especializado na defesa de empresas em processos trabalhistas, consultoria preventiva e gestão de passivo trabalhista. Mais de 15 anos protegendo o patrimônio de empresas de médio e grande porte.',
  keywords: ['advocacia trabalhista', 'direito trabalhista empresarial', 'consultoria jurídica', 'compliance trabalhista', 'Rio de Janeiro', 'defesa de empresas', 'GLA Advogados'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <body className={`${sourceSerif.className} min-h-screen flex flex-col antialiased`} style={{ background: '#FFFFFF', color: '#0F0D0B' }}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}