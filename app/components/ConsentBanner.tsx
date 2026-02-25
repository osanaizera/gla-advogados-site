'use client'

import { useState, useEffect } from 'react'

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const consented = localStorage.getItem('gla_consent')
    if (!consented) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    setIsExiting(true)
    setTimeout(() => setIsVisible(false), 300)
  }

  const handleAccept = () => {
    localStorage.setItem('gla_consent', 'true')
    dismiss()
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
      style={{
        animation: isExiting ? 'slideDown 0.3s ease-in forwards' : 'slideUp 0.4s ease-out forwards',
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(100px); opacity: 0; }
        }
      `}</style>
      <div style={{ background: 'rgba(26,23,20,0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgba(192,39,45,0.2)', borderRadius: '8px', padding: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative line */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: '#C0272D' }} />
        
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ padding: '8px', background: 'rgba(192,39,45,0.1)', borderRadius: '6px', flexShrink: 0 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C0272D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" />
            </svg>
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '8px', fontSize: '14px' }}>Privacidade e Proteção de Dados</h4>
            <p style={{ color: '#78716C', fontSize: '12px', lineHeight: 1.6, marginBottom: '16px' }}>
              Utilizamos cookies para melhorar sua experiência em nosso site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={handleAccept}
                style={{ background: '#C0272D', color: '#fff', padding: '8px 20px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#A01F25')}
                onMouseLeave={e => (e.currentTarget.style.background = '#C0272D')}
              >
                Aceitar
              </button>
              <button 
                onClick={dismiss}
                style={{ background: 'transparent', color: '#78716C', fontSize: '12px', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#78716C')}
              >
                Recusar
              </button>
            </div>
          </div>
          <button 
            onClick={dismiss}
            style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#78716C', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={e => (e.currentTarget.style.color = '#78716C')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
