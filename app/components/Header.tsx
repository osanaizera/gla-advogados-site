'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        backgroundColor: scrolled ? 'rgba(13,27,62,0.85)' : 'transparent'
      }}
    >
      <div className="container-premium mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex flex-col">
            <span className="font-playfair text-3xl font-bold">
              <span className="text-gold">GLA</span> <span className={scrolled ? 'text-white' : 'text-white'}>Advogados</span>
            </span>
            <span className="h-1 w-20 bg-wine mt-1"></span>
          </Link>
        </div>

        <nav className={`hidden lg:flex space-x-8 items-center`}>
          <Link 
            href="/" 
            className={`${scrolled ? 'text-white' : 'text-white'} font-medium relative group`}
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wine transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/sobre" 
            className={`${scrolled ? 'text-white' : 'text-white'} font-medium relative group`}
          >
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wine transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/servicos" 
            className={`${scrolled ? 'text-white' : 'text-white'} font-medium relative group`}
          >
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wine transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/imprensa" 
            className={`${scrolled ? 'text-white' : 'text-white'} font-medium relative group`}
          >
            Imprensa
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wine transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/contato" 
            className={`${scrolled ? 'text-white' : 'text-white'} font-medium relative group`}
          >
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wine transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link href="/contato" className="btn-secondary ml-4 py-3 px-6">
            Consultoria Jurídica
          </Link>
        </nav>

        <div className="lg:hidden">
          <button 
            className="text-white z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 glass-dark flex flex-col justify-center items-center space-y-6 transition-all duration-400 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Link 
          href="/" 
          className="text-white font-medium text-2xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/sobre" 
          className="text-white font-medium text-2xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          Sobre
        </Link>
        <Link 
          href="/servicos" 
          className="text-white font-medium text-2xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          Serviços
        </Link>
        <Link 
          href="/imprensa" 
          className="text-white font-medium text-2xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          Imprensa
        </Link>
        <Link 
          href="/contato" 
          className="text-white font-medium text-2xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contato
        </Link>
        
        <Link 
          href="/contato" 
          className="btn-primary mt-6"
          onClick={() => setMobileMenuOpen(false)}
        >
          Consultoria Jurídica
        </Link>
      </div>
    </header>
  )
}