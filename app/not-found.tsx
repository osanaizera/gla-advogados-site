import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center">
        <h1 className="text-gla-blue text-9xl font-serif font-bold">404</h1>
        <div className="h-1 w-20 bg-gla-red mx-auto my-6"></div>
        <h2 className="text-3xl font-serif font-semibold text-gla-gray-900 mb-4">Página não encontrada</h2>
        <p className="text-lg text-gla-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}