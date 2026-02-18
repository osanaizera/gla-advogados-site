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
      setScrolled(window.scrollY > 80);
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

  // Close mobile menu on route change
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
        backgroundColor: scrolled ? 'rgba(10,22,40,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container-premium mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1.5 group">
          <span
            className="font-playfair text-3xl font-bold tracking-tight transition-colors duration-300"
            style={{ color: '#B8962E' }}
          >
            GLA
          </span>
          <span className="text-white text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Advogados
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium relative group transition-colors duration-300"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, #B8962E, #D4B04A)',
                  width: pathname === link.href ? '100%' : '0%',
                }}
              />
              <span
                className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ background: 'linear-gradient(90deg, #B8962E, #D4B04A)' }}
              />
            </Link>
          ))}
          <Link
            href="/contato"
            className="ml-4 text-sm font-semibold text-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-[1.02]"
            style={{
              border: '1.5px solid rgba(184,150,46,0.5)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(184,150,46,0.15)';
              e.currentTarget.style.borderColor = 'rgba(184,150,46,0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(184,150,46,0.5)';
            }}
          >
            Solicitar Análise Jurídica
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white z-[60] relative w-8 h-8 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="relative w-6 h-5">
            <span
              className="absolute left-0 w-6 h-[2px] bg-white transition-all duration-300"
              style={{
                top: mobileMenuOpen ? '50%' : '0',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(-50%)' : 'none',
              }}
            />
            <span
              className="absolute left-0 top-1/2 w-6 h-[2px] bg-white transition-all duration-300"
              style={{
                transform: 'translateY(-50%)',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute left-0 w-6 h-[2px] bg-white transition-all duration-300"
              style={{
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
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileMenuOpen(false)}
        />
        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'rgba(10,22,40,0.95)',
            backdropFilter: 'blur(32px) saturate(200%)',
            WebkitBackdropFilter: 'blur(32px) saturate(200%)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="flex flex-col justify-center h-full px-10">
            <div className="mb-12">
              <span className="font-playfair text-2xl font-bold" style={{ color: '#B8962E' }}>
                GLA
              </span>
              <span className="text-white/60 text-xs font-medium tracking-widest uppercase ml-2">
                Advogados
              </span>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-2xl font-playfair font-medium hover:text-gold transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${i * 50}ms`,
                    color: pathname === link.href ? '#B8962E' : undefined,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <Link
                href="/contato"
                className="btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Análise Jurídica
              </Link>
            </div>

            {/* Contact info in drawer */}
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