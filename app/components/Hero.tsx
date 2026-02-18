import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  showBadge?: boolean;
  showEyebrow?: boolean;
  eyebrowText?: string;
  height?: 'full' | 'large' | 'medium';
  badgeText?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Solicitar Análise Jurídica',
  ctaLink = '/contato',
  ctaSecondaryText,
  ctaSecondaryLink,
  showBadge = true,
  showEyebrow = true,
  eyebrowText = 'Direito Trabalhista Empresarial',
  height = 'full',
  badgeText = '15 anos de atuação  ·  +500 empresas assessoradas',
  backgroundImage = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85&fit=crop',
}: HeroProps) {
  const heightClass =
    height === 'full'
      ? 'min-h-svh'
      : height === 'large'
      ? 'min-h-[80vh]'
      : 'min-h-[60vh]';

  return (
    <section
      className={`relative flex items-center ${heightClass} overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.82) 50%, rgba(123,21,53,0.35) 100%)',
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="container-premium mx-auto relative z-10 pt-28 pb-20">
        <div className="max-w-[700px]">
          {/* Eyebrow */}
          {showEyebrow && (
            <div className="glass-dark inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: '#B8962E' }}
              />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                {eyebrowText}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="heading-xl text-white mb-0">{title}</h1>

          {/* Gold line animated */}
          <span className="gold-line-animated" />

          {/* Subtitle */}
          {subtitle && (
            <p className="text-gray-300 text-lg md:text-xl max-w-[520px] mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            {ctaText && (
              <Link href={ctaLink} className="btn-primary">
                {ctaText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            )}
            {ctaSecondaryText && ctaSecondaryLink && (
              <Link href={ctaSecondaryLink} className="btn-outline">
                {ctaSecondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Badge - glassmorphism */}
      {showBadge && (
        <div
          className="absolute bottom-12 right-6 md:right-16 lg:right-24 glass-dark py-4 px-6 z-20 hidden md:block"
          style={{ borderRadius: '14px' }}
        >
          <p className="text-white/90 text-sm font-medium tracking-wide">
            {badgeText}
          </p>
        </div>
      )}
    </section>
  );
}