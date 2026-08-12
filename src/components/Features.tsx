const imgRectangle3 = "/assets/feature-img-main.png";
const imgRectangle4 = "/assets/feature-img-overlay.svg";

const features = [
  {
    icon: "✓",
    title: "OPERASIONAL LEBIH RAPI",
    desc: "Atur proses kerja bengkel dan kelola informasi penting tanpa harus bergantung pada pencatatan manual.",
  },
  {
    icon: "⚙",
    title: "SEMUA DATA TERPUSAT",
    desc: "Data pelanggan, kendaraan, servis, estimasi, hingga riwayat pekerjaan tersimpan dalam satu sistem.",
  },
  {
    icon: "★",
    title: "BANTU PELANGGAN KEMBALI",
    desc: "Gunakan riwayat servis dan pengingat untuk membantu menjaga hubungan dengan pelanggan setelah servis selesai.",
  },
];

export default function Features() {
  return (
    <section className="relative z-20 bg-zinc-950 w-full py-16 px-5 md:px-10 lg:px-20" data-name="section.features">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          {/* Image column */}
          <div className="reveal-left w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[440px]" style={{ paddingTop: "clamp(300px, 45vw, 460px)" }}>
              <img
                alt="Features showcase"
                className="absolute top-[50px] left-[60px] right-0 bottom-0 w-[88%] h-[90%] object-cover rounded-[4px]"
                src={imgRectangle3}
              />
              <img
                alt=""
                className="absolute bottom-0 left-0 w-[42%]"
                src={imgRectangle4}
              />
            </div>
          </div>

          {/* Content column */}
          <div className="reveal-right w-full lg:w-1/2 lg:pl-12 flex flex-col gap-8">
            <div>
              <h2
                className="font-bold text-white uppercase leading-tight"
                style={{
                  fontSize: "clamp(26px, 4vw, 40px)",
                }}
              >
                KENAPA MEMILIH <span className="text-[#59d677]">ARTHASEE</span>?
              </h2>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col gap-6">
              {features.map((f, i) => (
                <li
                  key={f.title}
                  className={`reveal text-justify flex gap-4 items-start stagger-${i + 1}`}
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-full bg-[#0a5b34]/20 border border-[#0a5b34] flex items-center justify-center text-[#0a5b34] font-bold text-sm mt-0.5"
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4
                      className="text-white font-bold text-[15px] mb-1"
                      
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-[#aaa] text-[13px] leading-relaxed"
                      
                    >
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
