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
            <div className="absolute -left-4 top-8 w-[194px] h-28 bg-[#0a5b34] hidden lg:block z-0" />

            {/* Watermark */}
            <div
              className="absolute pointer-events-none select-none -top-8 md:-top-10 lg:-top-12 left-10 md:left-20 lg:left-[190px] hidden sm:block z-0 overflow-hidden"
              aria-hidden
            >
              <div className="flex flex-col font-extrabold italic justify-center leading-none opacity-35 text-6xl md:text-7xl lg:text-[96px] text-transparent whitespace-nowrap"
                style={{ WebkitTextStroke: "2px #E5E5E5" }}
              >
                ABOUT US
              </div>
            </div>

            <div className="relative lg:pl-14">
              <p className="text-[#0a5b34] font-semibold text-xs md:text-[13px] uppercase tracking-widest mb-3">
                TENTANG KAMI
              </p>

              <h2 className="font-bold leading-tight mb-6 text-[#333] text-[22px] sm:text-3xl md:text-4xl lg:text-[28px] xl:text-[36px] 2xl:text-[40px] flex flex-col gap-1">
                <span className="block whitespace-nowrap">
                  <span className="text-[#fafafa]">MEMB</span>ANTU BENGKEL BEKERJA
                </span>
                <span className="block">
                  <span className="text-[#fafafa]">LEBIH</span>
                  <span className="text-[#0a5b34]"> TERATUR</span>
                </span>
              </h2>

              <div className="text-[#666] text-justify leading-relaxed text-sm md:text-base">
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
                </p>
                <p className="mt-3">
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
