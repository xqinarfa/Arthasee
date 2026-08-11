const imgDivServiceCard = "http://localhost:3845/assets/cc694dfb24d4bbaa70e8ca66c499a78ea28a2690.png";
const imgDivServiceCard1 = "http://localhost:3845/assets/42199c35d156d4695b2ed902deaed59dca645f1c.png";
const imgDivServiceCard2 = "http://localhost:3845/assets/515a7eec020c6f617e6c96fb695b892caaea351a.png";

const services = [
  {
    img: imgDivServiceCard,
    title: "Leads",
    desc: "Catat calon pelanggan yang belum jadi servis — harga kemahalan, pikir-pikir dulu, dll. Jadi daftar follow-up, bukan hilang begitu saja.",
  },
  {
    img: imgDivServiceCard1,
    title: "Data Pelanggan & Kendaraan",
    desc: "Simpan nama pelanggan, nomor STNK, dan semua kendaraan yang pernah mereka bawa. Satu pelanggan, banyak kendaraan, tidak masalah.",
  },
  {
    img: imgDivServiceCard2,
    title: "Estimasi",
    desc: "Buat perkiraan harga sebelum kerja dimulai — belum menyentuh stok sama sekali sampai pelanggan benar-benar setuju.",
  },
];

export default function Services() {
  return (
    <section className="relative z-20 bg-white w-full overflow-hidden py-16 px-5 md:px-10 lg:px-20" data-name="section.services">
      {/* Watermark text */}
      <div
        className="absolute pointer-events-none select-none font-extrabold italic text-transparent opacity-[0.04] whitespace-nowrap"
        style={{
          fontSize: "clamp(60px, 8vw, 96px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#333",
          WebkitTextStroke: "1px #333",
        }}
        aria-hidden
      >
        OUR SERVICES
      </div>

      <div className="relative mx-auto max-w-310">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-125">
            <p className="text-[#0a5b34] font-semibold text-[14px] uppercase tracking-widest mb-2"
              >OUR SERVICES</p>
            <h2
              className="font-bold text-[#333] uppercase leading-tight"
              style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
            >
              Solusi Lengkap<br />untuk Bengkel Anda
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#333] text-2xl shrink-0">
            <button
              className="btn-press border border-[#ddd] rounded-full w-10 h-10 flex items-center justify-center"
              style={{ '--hover-bg': '#0a5b34', '--hover-fg': '#fff' } as React.CSSProperties}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              className="btn-press border border-[#ddd] rounded-full w-10 h-10 flex items-center justify-center"
              style={{ '--hover-bg': '#0a5b34', '--hover-fg': '#fff' } as React.CSSProperties}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mb-10">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal card-hover group relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-inset ring-white/10 stagger-${i + 1}
                ${i === 0 ? "md:col-span-6 lg:col-span-7" : ""}
                ${i === 1 ? "md:col-span-3 lg:col-span-5" : ""}
                ${i === 2 ? "md:col-span-3 lg:col-span-12" : ""}
              `}
              data-name="div.service-card"
            >
              {/* Background image */}
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={svc.img} />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Image spacer */}
              <div className="h-45 sm:h-50 relative" />

              {/* Content */}
              <div className="relative p-5 flex flex-col gap-2">
                <h3
                  className="font-bold text-white text-[17px] uppercase"
                  
                >
                  {svc.title}
                </h3>
                <p
                  className="text-white/80 text-[13px] leading-relaxed"
                  
                >
                  {svc.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-white font-semibold text-[14px] mt-2 group"
                  
                >
                  READ MORE
                  <span
                    className="inline-block"
                    style={{ transition: "transform 200ms var(--ease-out)" }}
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#"
            className="btn-press bg-[#0a5b34] text-white text-[13px] font-semibold px-6 py-3 rounded-[5px]"
            
          >
            BROWSE ALL SERVICES
          </a>
          <a
            href="#"
            className="btn-press bg-[#111] text-white text-[13px] font-semibold px-6 py-3 rounded-[5px]"
            style={{ '--hover-bg': '#fff', '--hover-fg': '#111' } as React.CSSProperties}
          >
            BROWSE SERVICES
          </a>
        </div>
      </div>
    </section>
  );
}
