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
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
            opacity: 0.5,
          }}>
            |
          </span>
          <span
            style={{
              fontSize: '10.5px',
              lineHeight: 1.4,
              fontWeight: 600,
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              color: '#0F0D0B',
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
              className="relative"
              style={{
                fontSize: '13px',
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontWeight: 600,
                letterSpacing: '0.01em',
                color: pathname === link.href ? '#0F0D0B' : '#656055',
                transition: 'color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
            Análise Jurídica
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
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
              className="absolute left-0 w-6 h-[1.5px]"
              style={{
                background: mobileMenuOpen ? '#FFFFFF' : '#0F0D0B',
                top: mobileMenuOpen ? '50%' : '0',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(-50%)' : 'none',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
            <span
              className="absolute left-0 top-1/2 w-6 h-[1.5px]"
              style={{
                background: mobileMenuOpen ? '#FFFFFF' : '#0F0D0B',
                transform: 'translateY(-50%)',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
            <span
              className="absolute left-0 w-6 h-[1.5px]"
              style={{
                background: mobileMenuOpen ? '#FFFFFF' : '#0F0D0B',
                bottom: mobileMenuOpen ? 'auto' : '0',
                top: mobileMenuOpen ? '50%' : 'auto',
                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-50%)' : 'none',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(15,13,11,0.5)' }}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'rgba(15,13,11,0.97)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className="flex flex-col justify-center h-full px-10">
            {/* Mobile Logo */}
            <div className="mb-14 flex items-center gap-3">
              <span style={{ fontWeight: 900, fontSize: '28px', color: '#C0272D', letterSpacing: '-0.03em' }}>GLa</span>
              <span style={{ color: '#C0272D', fontSize: '34px', fontWeight: 100, opacity: 0.5 }}>|</span>
              <span
                style={{ 
                  fontSize: '9.5px', 
                  lineHeight: 1.4, 
                  fontWeight: 600, 
                  fontFamily: 'var(--font-source-serif), Georgia, serif',
                  color: 'rgba(255,255,255,0.7)', 
                  letterSpacing: '0.03em' 
                }}
                dangerouslySetInnerHTML={{ __html: 'gusmão<br/>& lima<br/>advogados' }}
              />
            </div>

            <nav className="flex flex-col gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '24px',
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    color: pathname === link.href ? '#C0272D' : '#FFFFFF',
                    transition: 'color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <Link
                href="/contato"
                className="btn-flora w-full text-center justify-center"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Análise Jurídica
                <span className="btn-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="mt-10 space-y-3">
              <p style={{ 
                color: 'rgba(255,255,255,0.5)', 
                fontSize: '13px', 
                fontWeight: 500,
                fontFamily: 'var(--font-source-serif), Georgia, serif'
              }}>
                (21) 3883-5652
              </p>
              <p style={{ 
                color: 'rgba(255,255,255,0.5)', 
                fontSize: '13px', 
                fontWeight: 500,
                fontFamily: 'var(--font-source-serif), Georgia, serif'
              }}>
                wagner.gusmao@glaadvogados.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}