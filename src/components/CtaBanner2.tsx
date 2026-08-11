const imgDivServiceCard = "/assets/service-card-1.png";

export default function CtaBanner2() {
  return (
    <section className="relative w-full py-16 px-5" data-name="section.cta-banner-2">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute w-full h-full max-w-none object-cover" src={imgDivServiceCard} />
        </div>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto max-w-[1240px] flex flex-col items-center gap-8 text-center">
        <div className="reveal">
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(22px, 4vw, 40px)",
            }}
          >
            SCHEDULE AN APPOINTMENT TODAY
          </h2>
        </div>
        <a
          href="#"
          className="reveal btn-press stagger-2 bg-[#0a5b34] text-white text-[13px] font-semibold px-8 py-3 rounded-[5px]"
          
        >
          SCHEDULE AN APPOINTMENT
        </a>
      </div>
    </section>
  );
}
