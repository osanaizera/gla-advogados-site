import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1714' }}>
      <div className="container-gla" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Col 1: Logo + description */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span style={{ fontWeight: 900, fontSize: '28px', color: '#C0272D', letterSpacing: '-0.03em', lineHeight: 1 }}>GLa</span>
              <span style={{ color: '#C0272D', fontSize: '34px', fontWeight: 100, lineHeight: 1, opacity: 0.6 }}>|</span>
              <span
                style={{ fontSize: '9.5px', lineHeight: 1.4, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em' }}
                dangerouslySetInnerHTML={{ __html: 'gusmão<br/>& lima<br/>advogados' }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', lineHeight: 1.7, maxWidth: '260px' }}>
              Especialistas em Direito Trabalhista Empresarial. Protegendo o patrimônio de empresas com estratégia e excelência desde 2010.
            </p>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' as const, marginBottom: '28px' }}>
              Serviços
            </h4>
            <ul className="space-y-4">
              {[
                'Consultoria Preventiva',
                'Defesa Processual',
                'Gestão de Passivo',
                'Due Diligence',
              ].map((item) => (
                <li key={item}>
                  <Link href="/servicos" className="transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Institucional */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' as const, marginBottom: '28px' }}>
              Institucional
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Sobre nós', href: '/sobre' },
                { label: 'Equipe', href: '/sobre' },
                { label: 'Imprensa', href: '/imprensa' },
                { label: 'Contato', href: '/contato' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' as const, marginBottom: '28px' }}>
              Contato
            </h4>
            <ul className="space-y-4">
              <li style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', lineHeight: 1.6 }}>
                Av. Franklin Roosevelt, 84 - GR 301<br />
                Centro, Rio de Janeiro - 20021-120
              </li>
              <li>
                <a href="tel:+552138835652" className="transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
                  (21) 3883-5652
                </a>
              </li>
              <li>
                <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
                  WhatsApp: (21) 99405-3121
                </a>
              </li>
              <li>
                <a href="mailto:wagner.gusmao@glaadvogados.com.br" className="transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
                  wagner.gusmao@glaadvogados.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>
            © 2026 GLA | gusmão &amp; lima advogados. Todos os direitos reservados.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>
            OAB/RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
