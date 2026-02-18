import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center px-6">
        <span
          className="block select-none"
          style={{
            fontSize: 'clamp(80px, 15vw, 160px)',
            fontWeight: 800,
            color: '#C0272D',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            opacity: 0.15,
            marginBottom: '16px',
          }}
          aria-hidden="true"
        >
          404
        </span>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#1A1714', marginBottom: '12px', letterSpacing: '-0.02em' }}>
          Página não encontrada
        </h1>
        <p style={{ fontSize: '16px', color: '#78716C', marginBottom: '32px', maxWidth: '360px', margin: '0 auto 32px' }}>
          A página que você procura não existe ou foi movida.
        </p>
        <Link href="/" className="btn-red">
          Voltar ao início →
        </Link>
      </div>
    </section>
  );
}
