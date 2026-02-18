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
    { href: '/', label: 'Home' },
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
        backgroundColor: scrolled ? 'rgba(250,250,250,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(12,18,32,0.06)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container-main flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1.5 group">
          <span
            className="text-2xl font-extrabold tracking-tight transition-colors duration-300"
            style={{ color: '#0C1220' }}
          >
            GLA
          </span>
          <span
            className="text-sm font-light tracking-widest uppercase transition-opacity duration-300"
            style={{ color: '#5C6B84' }}
          >
            Advogados
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium relative transition-colors duration-300"
              style={{
                color: pathname === link.href ? '#0C1220' : '#5C6B84',
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className="absolute -bottom-1 left-0 w-full h-[2px]"
                  style={{ background: '#7B1535' }}
                />
              )}
            </Link>
          ))}
          <Link href="/contato" className="btn-wine-sm ml-4">
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
                background: mobileMenuOpen ? '#fff' : '#0C1220',
                top: mobileMenuOpen ? '50%' : '0',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(-50%)' : 'none',
              }}
            />
            <span
              className="absolute left-0 top-1/2 w-6 h-[2px] transition-all duration-300"
              style={{
                background: mobileMenuOpen ? '#fff' : '#0C1220',
                transform: 'translateY(-50%)',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute left-0 w-6 h-[2px] transition-all duration-300"
              style={{
                background: mobileMenuOpen ? '#fff' : '#0C1220',
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
            background: 'rgba(12,18,32,0.97)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="flex flex-col justify-center h-full px-10">
            <div className="mb-12">
              <span className="text-2xl font-extrabold text-white">GLA</span>
              <span className="text-white/40 text-xs font-light tracking-widest uppercase ml-2">
                Advogados
              </span>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-bold transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: pathname === link.href ? '#B8962E' : '#FFFFFF',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <Link
                href="/contato"
                className="btn-wine w-full text-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Consulta →
              </Link>
            </div>

            <div className="mt-10 space-y-3">
              <p className="text-white/30 text-sm">(11) 3000-5000</p>
              <p className="text-white/30 text-sm">contato@glaadvogados.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
