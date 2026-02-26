import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import ConsentBanner from './components/ConsentBanner'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'GLA Advogados | Direito Trabalhista Empresarial — Rio de Janeiro',
  description: 'Assessoria jurídica trabalhista empresarial para empresas de médio e grande porte. Consultoria executiva, contencioso estratégico e governança jurídica no Rio de Janeiro.',
  keywords: ['advocacia trabalhista', 'direito trabalhista empresarial', 'consultoria jurídica', 'compliance trabalhista', 'Rio de Janeiro', 'defesa de empresas', 'GLA Advogados'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL('https://gla-adv.vercel.app'),
  openGraph: {
    title: 'GLA Advogados | Direito Trabalhista Empresarial',
    description: 'Assessoria jurídica trabalhista empresarial para empresas de médio e grande porte no Rio de Janeiro.',
    url: 'https://gla-adv.vercel.app',
    siteName: 'GLA Advogados',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD structured data for SEO
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "GLA Advogados",
    "description": "Escritório de advocacia especializado em direito trabalhista empresarial, consultoria executiva, contencioso estratégico e governança jurídica para empresas no Rio de Janeiro.",
    "url": "https://gla-adv.vercel.app",
    "telephone": "+55-21-3883-5652",
    "email": "wagner.gusmao@glaadvogados.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Franklin Roosevelt, 84 - GR 301",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "postalCode": "20021-120",
      "addressCountry": "BR"
    },
    "areaServed": "Brasil",
    "priceRange": "$$$$",
    "foundingDate": "2010"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GLA Advogados",
    "url": "https://gla-adv.vercel.app",
    "logo": "https://gla-adv.vercel.app/logo-gla.png",
    "description": "Escritório de advocacia especializado em direito trabalhista empresarial no Rio de Janeiro",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Franklin Roosevelt, 84 - GR 301",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "postalCode": "20021-120",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-21-3883-5652",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GLA Advogados",
    "url": "https://gla-adv.vercel.app",
    "description": "Direito Trabalhista Empresarial — Rio de Janeiro",
    "inLanguage": "pt-BR"
  }

  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body className={`${manrope.className} min-h-screen flex flex-col antialiased`} style={{ background: '#FFFFFF', color: '#1A1714' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  )
}
