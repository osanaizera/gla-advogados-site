import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1714' }}>
      <div className="container-gla" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10 mb-20">
          {/* Col 1: Logo + description */}
          <div>
            <div className="mb-10">
              <Image
                src="/logo-gla.png"
                alt="GLA | Gusmão & Lima Advogados"
                width={120}
                height={59}
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', lineHeight: 1.7, maxWidth: '260px', fontWeight: 400 }}>
              Advocacia trabalhista empresarial para organizações de médio e grande porte. Consultoria, contencioso estratégico e governança jurídica contínua.
            </p>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '32px' }}>
              Serviços
            </h4>
            <ul className="space-y-5">
              {[
                'Consultoria Preventiva',
                'Defesa Processual',
                'Gestão de Passivo',
                'Due Diligence',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/servicos"
                    style={{
                      color: 'rgba(255,255,255,0.3)',
                      fontSize: '14px',
                      fontWeight: 400,
                      transition: 'color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Institucional */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '32px' }}>
              Institucional
            </h4>
            <ul className="space-y-5">
              {[
                { label: 'Sobre nós', href: '/sobre' },
                { label: 'Equipe', href: '/sobre' },
                { label: 'Imprensa', href: '/imprensa' },
                { label: 'Contato', href: '/contato' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      color: 'rgba(255,255,255,0.3)',
                      fontSize: '14px',
                      fontWeight: 400,
                      transition: 'color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '32px' }}>
              Contato
            </h4>
            <ul className="space-y-5">
              <li style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', lineHeight: 1.6, fontWeight: 400 }}>
                Av. Franklin Roosevelt, 84 - GR 301<br />
                Centro, Rio de Janeiro - 20021-120
              </li>
              <li>
                <a href="tel:+552138835652" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', fontWeight: 400, transition: 'color 0.5s ease' }}>
                  (21) 3883-5652
                </a>
              </li>
              <li>
                <a href="https://wa.me/5521994053121" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', fontWeight: 400, transition: 'color 0.5s ease' }}>
                  WhatsApp: (21) 99405-3121
                </a>
              </li>
              <li>
                <a href="mailto:wagner.gusmao@glaadvogados.com.br" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', fontWeight: 400, transition: 'color 0.5s ease' }}>
                  wagner.gusmao@glaadvogados.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ paddingTop: '36px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '13px', fontWeight: 400 }}>
            © 2026 GLA | gusmão &amp; lima advogados. Todos os direitos reservados.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '13px', fontWeight: 400 }}>
            OAB/RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
