import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  showBadge?: boolean;
  height?: 'full' | 'large' | 'medium';
  backgroundPosition?: string;
  overlayOpacity?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Solicitar Consulta',
  ctaLink = '/contato',
  showBadge = true,
  height = 'full',
  backgroundPosition = 'center',
  overlayOpacity = 'rgba(13,27,62,0.75)'
}: HeroProps) {
  let heightClass = 'min-h-screen';
  
  if (height === 'large') {
    heightClass = 'min-h-[80vh]';
  } else if (height === 'medium') {
    heightClass = 'min-h-[60vh]';
  }

  return (
    <div 
      className={`relative flex items-center ${heightClass}`}
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `linear-gradient(135deg, rgba(13,27,62,0.92) 0%, rgba(13,27,62,0.75) 60%, rgba(139,26,42,0.4) 100%)`
        }}
      ></div>
      
      {/* Content */}
      <div className="container-premium mx-auto relative z-10 pt-24">
        <div className="max-w-4xl">
          <h1 className="text-white heading-xl font-playfair">
            {title}
          </h1>
          
          <span className="gold-line"></span>
          
          {subtitle && (
            <p className="text-gray-200 text-xl md:text-2xl max-w-2xl mb-12">
              {subtitle}
            </p>
          )}
          
          {ctaText && (
            <Link href={ctaLink} className="btn-primary">
              {ctaText}
            </Link>
          )}
        </div>
      </div>
      
      {/* Floating badge */}
      {showBadge && (
        <div className="absolute bottom-16 right-10 md:right-20 glass py-4 px-6 max-w-xs z-20 transform hover:translate-y-[-4px] transition-all duration-300">
          <p className="text-navy text-lg font-medium">
            Especialistas em Direito Trabalhista Empresarial
          </p>
        </div>
      )}
    </div>
  );
}