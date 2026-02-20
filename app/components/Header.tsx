'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        backgroundColor: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.04)' : '1px solid transparent',
        padding: scrolled ? '0.625rem 0' : '1.25rem 0',
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <div className="container-gla flex justify-between items-center">
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo-gla.jpg"
            alt="GLA | Gusmão & Lima Advogados"
            width={scrolled ? 140 : 160}
            height={scrolled ? 69 : 79}
            style={{
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            priority
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
                fontWeight: 500,
                letterSpacing: '0.01em',
                color: pathname === link.href ? '#1A1714' : '#78716C',
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
                background: mobileMenuOpen ? '#FFFFFF' : '#1A1714',
                top: mobileMenuOpen ? '50%' : '0',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(-50%)' : 'none',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
            <span
              className="absolute left-0 top-1/2 w-6 h-[1.5px]"
              style={{
                background: mobileMenuOpen ? '#FFFFFF' : '#1A1714',
                transform: 'translateY(-50%)',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />
            <span
              className="absolute left-0 w-6 h-[1.5px]"
              style={{
                background: mobileMenuOpen ? '#FFFFFF' : '#1A1714',
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
          style={{ background: 'rgba(26,23,20,0.5)' }}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'rgba(26,23,20,0.97)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className="flex flex-col justify-center h-full px-10">
            {/* Mobile Logo */}
            <div className="mb-14">
              <Image
                src="/logo-gla.jpg"
                alt="GLA | Gusmão & Lima Advogados"
                width={140}
                height={69}
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>

            <nav className="flex flex-col gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '28px',
                    fontWeight: 300,
                    letterSpacing: '-0.025em',
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
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', fontWeight: 400 }}>(21) 3883-5652</p>
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', fontWeight: 400 }}>wagner.gusmao@glaadvogados.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
