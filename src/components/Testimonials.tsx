const imgAuthor = "/assets/testimonial-author-1.png";
const imgAuthor1 = "/assets/testimonial-author-2.png";
const imgAuthor2 = "/assets/testimonial-author-3.png";

const testimonials = [
  {
    quote:
      "Sejak menggunakan Arthasee, pengelolaan data pelanggan dan kendaraan di bengkel kami jadi jauh lebih rapi dan mudah.",
    name: "NAMA PENGGUNA",
    role: "Pemilik Bengkel",
    img: imgAuthor,
  },
  {
    quote:
      "Arthasee membantu kami mencatat riwayat servis dan pekerjaan dengan lebih teratur. Informasi yang dibutuhkan jadi lebih mudah ditemukan.",
    name: "NAMA PENGGUNA",
    role: "Kepala Bengkel",
    img: imgAuthor1,
  },
  {
    quote:
      "Sistemnya sederhana dan mudah digunakan. Kami jadi lebih terbantu dalam mengelola operasional bengkel sehari-hari.",
    name: "NAMA PENGGUNA",
    role: "Pemilik Bengkel",
    img: imgAuthor2,
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-20 bg-zinc-950 w-full py-20 px-5 md:px-10 lg:px-20" data-name="section.testimonials">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
            >
              APA KATA PENGGUNA <br />TENTANG ARTHASEE?
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              className="btn-press border border-[#333] rounded-full w-[52px] h-[52px] flex items-center justify-center text-white text-lg"
              style={{ '--hover-bg': '#0a5b34', '--hover-fg': '#fff' } as React.CSSProperties}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              className="btn-press bg-[#0a5b34] border border-[#0a5b34] rounded-full w-[52px] h-[52px] flex items-center justify-center text-white text-lg"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal card-hover bg-white rounded-[10px] p-7 flex flex-col gap-4 stagger-${i + 1}`}
              data-name="div.testimonial-card"
            >
              {/* Stars */}
              <div className="text-[#fbbf24] text-sm tracking-wider">★★★★★</div>

              {/* Quote */}
              <p
                className="text-[#333] text-[14px] text-justify leading-relaxed flex-1"
                
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1">
                <div>
                  <p className="text-[#333] font-bold text-[13px]" >
                    {t.name}
                  </p>
                  <p className="text-[#666] text-[12px]" >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
