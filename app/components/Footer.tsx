import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A' }}>
      <div className="container-main py-20">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Escritório */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <span style={{ fontWeight: 900, fontSize: '24px', color: '#C0272D' }}>GLa</span>
              <span style={{ color: '#C0272D', fontSize: '30px', fontWeight: 100 }}>|</span>
              <span style={{ fontSize: '9px', lineHeight: 1.3, fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}
                dangerouslySetInnerHTML={{ __html: 'gusmão<br>& lima<br>advogados' }}
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Especialistas em Direito Trabalhista Empresarial. Protegendo empresas com estratégia e excelência desde 2010.
            </p>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 tracking-tight">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                'Consultoria Preventiva',
                'Defesa Processual',
                'Gestão de Passivo',
                'Due Diligence',
              ].map((item) => (
                <li key={item}>
                  <Link href="/servicos" className="text-sm transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Institucional */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 tracking-tight">
              Institucional
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Sobre nós', href: '/sobre' },
                { label: 'Equipe', href: '/sobre' },
                { label: 'Imprensa', href: '/imprensa' },
                { label: 'Contato', href: '/contato' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 tracking-tight">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Av. Franklin Roosevelt, 84 - GR 301<br />
                Centro, Rio de Janeiro - 20021-120
              </li>
              <li>
                <a href="tel:+552138835652" className="text-sm transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  (21) 3883-5652
                </a>
              </li>
              <li>
                <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  WhatsApp: (21) 99405-3121
                </a>
              </li>
              <li>
                <a href="mailto:wagner.gusmao@glaadvogados.com.br" className="text-sm transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  wagner.gusmao@glaadvogados.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} GLA | gusmão &amp; lima advogados. Todos os direitos reservados.
          </p>

          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
            www.glaadvogados.com.br
          </p>
        </div>
      </div>
    </footer>
  );
}
