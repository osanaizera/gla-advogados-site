import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center px-6">
        <span className="text-8xl font-extrabold block mb-4" style={{ color: '#C0272D', letterSpacing: '-0.04em' }}>
          404
        </span>
        <h1 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
          Página não encontrada
        </h1>
        <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#6B7280' }}>
          A página que você procura não existe ou foi movida. Volte para a página inicial.
        </p>
        <Link href="/" className="btn-red">
          Voltar ao início →
        </Link>
      </div>
    </section>
  );
}
