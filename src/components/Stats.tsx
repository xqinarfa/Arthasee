const imgSubtract = "http://localhost:3845/assets/cab96f21e98237bd08dbb3dcc557cb2fd8f0f217.svg";

const stats = [
  { value: "10", unit: "+", label: "YEARS OF SERVICE" },
  { value: "50K", unit: "+", label: "HAPPY CUSTOMERS" },
  { value: "99", unit: "%", label: "CLIENT SATISFACTION" },
];

export default function Stats() {
  return (
    <section
      className="relative w-full -mt-40.5 z-20"
      data-name="section.stats"
    >
      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-full h-40.5 pointer-events-none overflow-hidden z-0">
        <img alt="" className="w-full h-full object-cover object-right" src={imgSubtract} />
      </div>

      {/* Solid background below the SVG to cover the pinned Hero */}
      <div className="absolute top-40.5 left-0 w-full h-[calc(100%-162px)] bg-white z-0" />

      <div className="relative mx-auto max-w-310 px-5 py-10 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal flex flex-col items-start gap-1 stagger-${i + 1}`}
              data-name="div.stat-item"
            >
              <div
                className="font-extrabold italic text-left"
                style={{
                  fontSize: "clamp(36px, 5vw, 48px)",
                }}
              >
                <span className="text-[#111]">{stat.value}</span>
                <span className="text-[#0a5b34]">{stat.unit}</span>
              </div>
              <p
                className="text-[#111] text-[13px] font-normal text-left tracking-wide"
                
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
