'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/imprensa', label: 'Imprensa' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.04)' : '1px solid transparent',
        padding: scrolled ? '0.625rem 0' : '1.25rem 0',
      }}
    >
      <div className="container-gla flex justify-between items-center">
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <span style={{
            fontWeight: 900,
            fontSize: '36px',
            color: '#C0272D',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}>
            GLa
          </span>
          <span style={{
            color: '#C0272D',
            fontSize: '44px',
            fontWeight: 100,
            lineHeight: 1,
            opacity: 0.6,
          }}>
            |
          </span>
          <span
            style={{
              fontSize: '10.5px',
              lineHeight: 1.4,
              fontWeight: 600,
              color: scrolled ? '#1A1714' : '#1A1714',
              textTransform: 'lowercase' as const,
              letterSpacing: '0.03em',
            }}
            dangerouslySetInnerHTML={{ __html: 'gusmão<br/>& lima<br/>advogados' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-colors duration-300"
              style={{
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.01em',
                color: pathname === link.href ? '#1A1714' : '#78716C',
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className="absolute -bottom-1.5 left-0 right-0 h-[1.5px]"
                  style={{ background: '#C0272D' }}
                />
              )}
            </Link>
          ))}
          <Link href="/contato" className="btn-red-sm" style={{ marginLeft: '8px' }}>
            Consulta →
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden z-[60] relative w-8 h-8 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="relative w-6 h-5">
            <span
              className="absolute left-0 w-6 h-[1.5px] transition-all duration-300"
              style={{
                background: mobileMenuOpen ? '#FAFAF9' : '#1A1714',
                top: mobileMenuOpen ? '50%' : '0',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(-50%)' : 'none',
              }}
            />
            <span
              className="absolute left-0 top-1/2 w-6 h-[1.5px] transition-all duration-300"
              style={{
                background: mobileMenuOpen ? '#FAFAF9' : '#1A1714',
                transform: 'translateY(-50%)',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute left-0 w-6 h-[1.5px] transition-all duration-300"
              style={{
                background: mobileMenuOpen ? '#FAFAF9' : '#1A1714',
                bottom: mobileMenuOpen ? 'auto' : '0',
                top: mobileMenuOpen ? '50%' : 'auto',
                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-50%)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(26,23,20,0.5)' }}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'rgba(26,23,20,0.97)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex flex-col justify-center h-full px-10">
            {/* Mobile Logo */}
            <div className="mb-14 flex items-center gap-3">
              <span style={{ fontWeight: 900, fontSize: '28px', color: '#C0272D', letterSpacing: '-0.03em' }}>GLa</span>
              <span style={{ color: '#C0272D', fontSize: '34px', fontWeight: 100, opacity: 0.6 }}>|</span>
              <span
                style={{ fontSize: '9.5px', lineHeight: 1.4, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em' }}
                dangerouslySetInnerHTML={{ __html: 'gusmão<br/>& lima<br/>advogados' }}
              />
            </div>

            <nav className="flex flex-col gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: pathname === link.href ? '#C0272D' : '#FFFFFF',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <Link
                href="/contato"
                className="btn-red w-full text-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Consulta →
              </Link>
            </div>

            <div className="mt-10 space-y-3">
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>(21) 3883-5652</p>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>wagner.gusmao@glaadvogados.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
