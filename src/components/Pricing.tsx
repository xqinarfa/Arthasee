const imgCar = "/assets/pricing-car.png";

type PlanFeature = { text: string; included: boolean };

interface PricingPlan {
  name: string;
  price: string;
  currency: string;
  period: string;
  features: PlanFeature[];
  ctaColor: string;
  ctaText: string;
  highlight?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "STARTER",
    price: "Gratis",
    currency: "",
    period: "PER CAR PER MONTH",
    features: [
      { text: "Oil Change & Filter", included: true },
      { text: "Tire Rotation", included: true },
      { text: "Brake Inspection", included: false },
      { text: "Engine Diagnostics", included: false },
    ],
    ctaColor: "#111",
    ctaText: "GET STARTED",
  },
  {
    name: "PROFESSIONAL",
    price: "Rp124.000",
    currency: "IDR",
    period: "PER CAR PER MONTH",
    features: [
      { text: "Oil Change & Filter", included: true },
      { text: "Tire Rotation", included: true },
      { text: "Brake Inspection", included: true },
      { text: "Engine Diagnostics", included: false },
    ],
    ctaColor: "#59d677",
    ctaText: "GET STARTED",
    highlight: true,
  },
  {
    name: "DELUXE",
    price: "Rp189.000",
    currency: "IDR",
    period: "PER CAR PER MONTH",
    features: [
      { text: "Oil Change & Filter", included: true },
      { text: "Tire Rotation", included: true },
      { text: "Brake Inspection", included: true },
      { text: "Engine Diagnostics", included: true },
    ],
    ctaColor: "#111",
    ctaText: "GET STARTED",
  },
];

export default function Pricing() {
  return (
    <section className="relative z-20 bg-white w-full py-20 px-5 md:px-10 lg:px-20" data-name="section.pricing">
      {/* Watermark */}
      <div
        className="absolute pointer-events-none select-none font-extrabold italic text-transparent opacity-[0.04] whitespace-nowrap"
        style={{
          fontSize: "clamp(60px, 8vw, 96px)",
          top: "30px",
          left: "20px",
          color: "transparent",
          WebkitTextStroke: "1px #333",
        }}
        aria-hidden
      >
        PRICING
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <h2
            className="font-bold text-[#333] leading-tight"
            style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
          >
            PACKAGES FOR ALL<br />TYPES OF CARS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal card-hover flex flex-col items-center gap-4 rounded-[10px] px-7 py-10 stagger-${i + 1} ${
                plan.highlight
                  ? "bg-[#111] shadow-[0_15px_40px_rgba(0,0,0,0.25)] scale-[1.03]"
                  : "bg-white shadow-[0_5px_15px_rgba(0,0,0,0.06)]"
              }`}
              data-name="div.pricing-card"
            >
              {/* Icon */}
              <div className="relative size-[90px] overflow-hidden shrink-0">
                <img alt="" className="absolute inset-0 w-full h-full object-contain" src={imgCar} />
              </div>

              {/* Plan name */}
              <h3
                className={`font-bold text-[17px] text-center ${plan.highlight ? "text-white" : "text-[#333]"}`}
                
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center">
                <div
                  className={`font-bold text-[32px] leading-none ${plan.highlight ? "text-[#59d677]" : "text-[#111]"}`}
                  
                >
                  {plan.price}
                  {plan.currency && (
                    <span className="text-[14px] text-[#666] ml-1 font-normal">{plan.currency}</span>
                  )}
                </div>
                <p
                  className={`text-[11px] mt-1 ${plan.highlight ? "text-[#888]" : "text-[#666]"}`}
                  
                >
                  {plan.period}
                </p>
              </div>

              {/* Features */}
              <ul className="w-full flex flex-col gap-2 py-2">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2">
                    <span
                      className={`text-[13px] font-semibold ${f.included ? "text-[#0a5b34]" : plan.highlight ? "text-[#555]" : "text-[#aaa]"}`}
                    >
                      {f.included ? "✓" : "✕"}
                    </span>
                    <span
                      className={`text-[13px] ${plan.highlight ? "text-[#ccc]" : "text-[#333]"}`}
                      
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="btn-press w-full text-center text-white text-[13px] font-semibold px-6 py-3 rounded-[5px]"
                style={{ backgroundColor: plan.ctaColor, '--hover-bg': '#fff', '--hover-fg': plan.ctaColor } as React.CSSProperties}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
