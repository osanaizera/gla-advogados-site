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
      setScrolled(window.scrollY > 60);
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
        backgroundColor: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        padding: scrolled ? '0.5rem 0' : '1rem 0',
      }}
    >
      <div className="container-main flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: '32px',
              color: '#C0272D',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            GLa
          </span>
          <span
            style={{
              color: '#C0272D',
              fontSize: '40px',
              fontWeight: 100,
              lineHeight: 1,
            }}
          >
            |
          </span>
          <span
            style={{
              fontSize: '11px',
              lineHeight: 1.3,
              fontWeight: 500,
              color: '#1a1a1a',
              letterSpacing: '0.01em',
            }}
            dangerouslySetInnerHTML={{ __html: 'gusmão<br>& lima<br>advogados' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium relative transition-colors duration-300"
              style={{
                color: pathname === link.href ? '#1A1A1A' : '#6B7280',
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className="absolute -bottom-1 left-0 w-full h-[2px]"
                  style={{ background: '#C0272D' }}
                />
              )}
            </Link>
          ))}
          <Link href="/contato" className="btn-red-sm ml-4">
            Solicitar Consulta →
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
              className="absolute left-0 w-6 h-[2px] transition-all duration-300"
              style={{
                background: mobileMenuOpen ? '#fff' : '#1A1A1A',
                top: mobileMenuOpen ? '50%' : '0',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(-50%)' : 'none',
              }}
            />
            <span
              className="absolute left-0 top-1/2 w-6 h-[2px] transition-all duration-300"
              style={{
                background: mobileMenuOpen ? '#fff' : '#1A1A1A',
                transform: 'translateY(-50%)',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute left-0 w-6 h-[2px] transition-all duration-300"
              style={{
                background: mobileMenuOpen ? '#fff' : '#1A1A1A',
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
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'rgba(26,26,26,0.97)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="flex flex-col justify-center h-full px-10">
            {/* Mobile Logo */}
            <div className="mb-12 flex items-center gap-2">
              <span style={{ fontWeight: 900, fontSize: '28px', color: '#C0272D' }}>GLa</span>
              <span style={{ color: '#C0272D', fontSize: '32px', fontWeight: 100 }}>|</span>
              <span style={{ fontSize: '10px', lineHeight: 1.3, fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
                dangerouslySetInnerHTML={{ __html: 'gusmão<br>& lima<br>advogados' }}
              />
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-bold transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: pathname === link.href ? '#C0272D' : '#FFFFFF',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <Link
                href="/contato"
                className="btn-red w-full text-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Consulta →
              </Link>
            </div>

            <div className="mt-10 space-y-3">
              <p className="text-white/30 text-sm">(21) 3883-5652</p>
              <p className="text-white/30 text-sm">wagner.gusmao@glaadvogados.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
