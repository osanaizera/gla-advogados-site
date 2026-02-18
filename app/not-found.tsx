import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center px-6">
        <span
          className="block select-none"
          style={{
            fontSize: 'clamp(80px, 15vw, 160px)',
            fontWeight: 300,
            color: '#C0272D',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            opacity: 0.12,
            marginBottom: '16px',
          }}
          aria-hidden="true"
        >
          404
        </span>
        <h1 style={{ fontSize: '24px', fontWeight: 300, color: '#1A1714', marginBottom: '14px', letterSpacing: '-0.025em' }}>
          Página não encontrada
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#78716C', marginBottom: '36px', maxWidth: '360px', margin: '0 auto 36px', fontWeight: 400, lineHeight: 1.6 }}>
          A página que você procura não existe ou foi movida.
        </p>
        <Link href="/" className="btn-flora">
          Voltar ao início
          <span className="btn-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
