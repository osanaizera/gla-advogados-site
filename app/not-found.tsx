import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center">
        <h1 className="text-navy-light text-9xl font-playfair font-bold">404</h1>
        <div className="h-[3px] w-20 mx-auto my-6" style={{ background: 'linear-gradient(90deg, #B8962E, #D4B04A)' }}></div>
        <h2 className="text-3xl font-playfair font-semibold text-navy-dark mb-4">Página não encontrada</h2>
        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}