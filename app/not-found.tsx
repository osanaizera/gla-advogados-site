import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#FAFAFA' }}>
      <div className="text-center">
        <h1 className="text-9xl font-extrabold" style={{ color: '#E5E7EB', letterSpacing: '-0.04em' }}>404</h1>
        <div className="h-[2px] w-16 mx-auto my-6" style={{ background: '#7B1535' }} />
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: '#0C1220', letterSpacing: '-0.02em' }}>
          Página não encontrada
        </h2>
        <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#5C6B84' }}>
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" className="btn-wine">
          ← Voltar para Home
        </Link>
      </div>
    </div>
  );
}
