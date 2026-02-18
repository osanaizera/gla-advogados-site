import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-dark">
      <div className="text-center">
        <h1 className="text-9xl font-bold" style={{ color: '#B8962E', letterSpacing: '-0.03em' }}>404</h1>
        <div className="h-[2px] w-16 mx-auto my-6" style={{ background: '#7B1535' }} />
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Página não encontrada</h2>
        <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" className="btn-wine">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
