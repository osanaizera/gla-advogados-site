import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  pillText?: string;
  heroImage?: string;
  height?: 'full' | 'large' | 'medium';
  variant?: 'split' | 'centered';
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Solicitar Análise Jurídica',
  ctaLink = '/contato',
  ctaSecondaryText,
  ctaSecondaryLink,
  pillText = 'Direito Trabalhista Empresarial',
  heroImage = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  height = 'full',
  variant = 'split',
}: HeroProps) {
  const heightClass =
    height === 'full'
      ? 'min-h-svh'
      : height === 'large'
      ? 'min-h-[80vh]'
      : 'min-h-[60vh]';

  if (variant === 'centered') {
    return (
      <section className={`relative flex items-center ${heightClass} overflow-hidden bg-dark`}>
        {/* Subtle gradient accent */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(123,21,53,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="container-bento relative z-10 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            {pillText && (
              <div className="pill pill-wine mb-8 mx-auto w-fit">
                <span className="w-2 h-2 rounded-full" style={{ background: '#7B1535' }} />
                {pillText}
              </div>
            )}

            <h1
              className="text-white mb-6 font-bold leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.025em' }}
            >
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                {subtitle}
              </p>
            )}

            {ctaText && (
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={ctaLink} className="btn-wine">
                  {ctaText}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                {ctaSecondaryText && ctaSecondaryLink && (
                  <Link href={ctaSecondaryLink} className="btn-outline-light">
                    {ctaSecondaryText}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Default: split layout — H1 left + photo right
  return (
    <section className={`relative flex items-center ${heightClass} overflow-hidden bg-dark`}>
      {/* Subtle gradient accent */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(123,21,53,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(184,150,46,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="container-bento relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {pillText && (
              <div className="pill pill-wine mb-8">
                <span className="w-2 h-2 rounded-full" style={{ background: '#7B1535' }} />
                {pillText}
              </div>
            )}

            <h1
              className="text-white mb-6 font-bold leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/50 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              {ctaText && (
                <Link href={ctaLink} className="btn-wine">
                  {ctaText}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
              {ctaSecondaryText && ctaSecondaryLink && (
                <Link href={ctaSecondaryLink} className="btn-outline-light">
                  {ctaSecondaryText}
                </Link>
              )}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden" style={{ borderRadius: '24px' }}>
              <Image
                src={heroImage}
                alt="GLA Advogados — Advocacia Trabalhista Empresarial"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 60%, rgba(12,18,32,0.4) 100%)',
                }}
              />
            </div>
            {/* Floating badge on photo */}
            <div
              className="absolute -bottom-4 -left-4 py-4 px-6 z-20"
              style={{
                background: 'rgba(12,18,32,0.9)',
                backdropFilter: 'blur(16px)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="text-white/90 text-sm font-medium">
                <span style={{ color: '#B8962E' }}>15+ anos</span> · 500+ empresas assessoradas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
