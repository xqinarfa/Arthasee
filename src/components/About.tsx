const imgMechanic = "/assets/about-mechanic.png";
const imgAfter = "/assets/about-after-shape.svg";

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-white w-full py-16 px-5 md:px-10 lg:px-20" data-name="section.about">
      <div className="mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text column */}
          <div className="reveal-left w-full lg:w-1/2 relative">
            {/* Decorative green block */}
            <div className="absolute -left-4 top-8 w-[180px] h-20 bg-[#0a5b34] rounded-r-md hidden lg:block z-0" />

            {/* Watermark */}
            <div
              className="absolute -top-6 -left-4 font-extrabold italic opacity-[0.06] whitespace-nowrap select-none pointer-events-none hidden lg:block"
              style={{
                fontSize: "72px",
                color: "transparent",
                WebkitTextStroke: "1px #333",
              }}
              aria-hidden
            >
              ABOUT US
            </div>

            <div className="relative lg:pl-14">
              <p
                className="text-[#0a5b34] font-semibold text-[13px] uppercase tracking-widest mb-3"

              >
                TENTANG KAMI
              </p>

              <h2
                className="font-bold leading-tight mb-6 text-[#333]"
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                }}
              >
                MEMBANTU BENGKEL BEKERJA
                <span className="text-[#0a5b34]"> LEBIH TERATUR</span>
              </h2>

              <div
                className="text-[#666] text-justify leading-relaxed"
                style={{ fontSize: "clamp(14px, 1.6vw, 16px)" }}
              >
                <p className="font-bold text-[#333] mb-3">
                  &ldquo;Pelanggan adalah aset kami. Tanpa pelanggan dan sistem yang mengurus mereka,
                  gudang dan montir sebanyak apa pun tidak ada gunanya.&rdquo; 
                </p>
                <p>
                  — I Made Sudarta, CV. Arya Motor, Batam
                </p>
                <p className="mt-5">
                  Pengelolaan bengkel tidak hanya soal memperbaiki kendaraan. Ada pelanggan yang perlu 
                  dicatat, riwayat servis yang perlu disimpan, pekerjaan yang harus dipantau, hingga 
                  kendaraan yang perlu kembali diservis.
                  
                  Arthasee hadir untuk membantu semua proses tersebut menjadi lebih sederhana dalam satu 
                  sistem. Data pelanggan, kendaraan, servis, hingga kebutuhan operasional bengkel dapat 
                  dikelola dengan lebih rapi dan mudah diakses.
                </p>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="reveal-right w-full lg:w-1/2 relative">
            <div className="relative rounded-[5px] overflow-hidden shadow-xl"
              style={{ paddingTop: "66%" }}
            >
              <img
                alt="Mechanic at work"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgMechanic}
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-25 hidden md:block">
              <img alt="" className="w-full" src={imgAfter} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
