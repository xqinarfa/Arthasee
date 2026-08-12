export default function Footer() {
  const quickLinks = [
    "Beranda",
    "Layanan",
    "Cerita Kami",
    "Harga",
  ];

  const companyLinks = [
    "Tentang Kami",
    "Fitur",
    "Testimoni",
    "Hubungi Kami",
  ];

  return (
    <footer className="relative z-20 bg-zinc-950 w-full pt-16 pb-6 px-5 md:px-10 lg:px-20" data-name="section.footer">
      <div className="mx-auto max-w-[1240px]">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-[#333]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative size-[40px] shrink-0">
                <img
                  alt="Arthasee Logo"
                  className="absolute inset-0 max-w-none object-cover size-full pointer-events-none"
                  src="/assets/logo.png"
                />
              </div>
              <span
                className="text-white font-extrabold text-[20px] tracking-[1px]"
                
              >
                ARTHASEE
              </span>
            </div>
            <p
              className="text-[#aaa] text-[13px] text-justify leading-relaxed max-w-[260px]"
              
            >
              Sistem manajemen bengkel yang membantu Anda mengelola
              pelanggan, kendaraan, dan riwayat servis dengan lebih
              mudah dan teratur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-[15px] mb-4"
              
            >
              TAUTAN
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#aaa] text-[13px] hover:text-[#59d677] transition-colors duration-200"
                    
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-white font-bold text-[15px] mb-4"
              
            >
              ARTHASEE
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#aaa] text-[13px] hover:text-[#59d677] transition-colors duration-200"
                    
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-[15px] mb-4"
              
            >
              HUBUNGI KAMI
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "📞", text: "+62 555 010 2023" },
                { icon: "✉", text: "info@autocarx.com" },
                { icon: "📍", text: "1234 Tech Street, Santa Monica" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2">
                  <span className="text-[#aaa] text-[12px] mt-0.5">{item.icon}</span>
                  <span
                    className="text-[#aaa] text-[13px] leading-relaxed"
                    
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5">
          <p
            className="text-[#aaa] text-[13px] text-center sm:text-left"
            
          >
            © 2026 ARTHASEE. HAK CIPTA DILINDUNGI.
          </p>
          <div className="flex items-center gap-3">
            {[
              { label: "Facebook", char: "\uF39E" },
              { label: "Twitter", char: "\uF099" },
              { label: "Instagram", char: "\uF16D" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="btn-press bg-[#222] size-[35px] rounded-full flex items-center justify-center text-[#aaa] text-[13px]"
                style={{ '--hover-bg': '#0a5b34', '--hover-fg': '#fff' } as React.CSSProperties}
              >
                <span style={{ fontFamily: "'Font Awesome 5 Brands'" }}>{social.char}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
