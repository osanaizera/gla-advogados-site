import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-off-white">
      <div className="text-center">
        <h1 className="font-playfair text-[10rem] font-bold leading-none text-navy-dark opacity-10">
          404
        </h1>
        <div className="gold-line mx-auto" />
        <h2 className="heading-md text-navy-dark mb-4 -mt-8">Página não encontrada</h2>
        <p className="text-text-secondary text-lg mb-10 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" className="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}