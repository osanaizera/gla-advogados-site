'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consented = localStorage.getItem('gla_consent')
    if (!consented) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('gla_consent', 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-[#1A1714]/95 backdrop-blur-md border border-[#C0272D]/20 rounded-lg p-6 shadow-2xl relative overflow-hidden">
            {/* Decorative line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C0272D]" />
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#C0272D]/10 rounded-md shrink-0">
                <Cookie className="w-6 h-6 text-[#C0272D]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm">Privacidade e Proteção de Dados</h4>
                <p className="text-[#78716C] text-xs leading-relaxed mb-4">
                  Utilizamos cookies para melhorar sua experiência em nosso site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={handleAccept}
                    className="bg-[#C0272D] hover:bg-[#A01F25] text-white px-5 py-2 rounded text-xs font-semibold transition-colors"
                  >
                    Aceitar
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-[#78716C] text-xs hover:text-white transition-colors"
                  >
                    Recusar
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-[#78716C] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
