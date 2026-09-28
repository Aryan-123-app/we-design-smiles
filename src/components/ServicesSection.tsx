export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
};

const SERVICES: ServiceItem[] = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry & Veneers",
    description:
      "Transform your teeth with porcelain veneers, professional whitening, and custom digital smile design.",
    features: ["Porcelain Veneers", "Zoom! Teeth Whitening", "Composite Bonding"],
    icon: (
      <svg className="h-7 w-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "implants",
    title: "Dental Implants & Restorations",
    description:
      "Permanent, natural-looking replacement options using 3D guided implant technology for missing teeth.",
    features: ["Single & Full Arch Implants", "All-on-4® Solutions", "Same-Day Restorations"],
    icon: (
      <svg className="h-7 w-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    id: "ortho",
    title: "Orthodontics & Clear Aligners",
    description:
      "Straighten your teeth comfortably with invisible aligners and modern orthodontic solutions for all ages.",
    features: ["Invisalign® Certified", "Clear Braces", "Accelerated Treatment"],
    icon: (
      <svg className="h-7 w-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h16M4 6h16M4 18h16" />
      </svg>
    ),
  },
  {
    id: "preventive",
    title: "General & Preventive Care",
    description:
      "Keep your teeth healthy and bright with gentle routine cleanings, comprehensive exams, and fluoride care.",
    features: ["Gentle Cleanings", "Low-Radiation Digital X-Rays", "Periodontal Care"],
    icon: (
      <svg className="h-7 w-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "endodontics",
    title: "Endodontics & Root Canals",
    description:
      "Painless root canal treatments using microscopic precision to save damaged teeth and relieve discomfort.",
    features: ["Painless Therapy", "Microscopic Precision", "Tooth Preservation"],
    icon: (
      <svg className="h-7 w-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    description:
      "Immediate care for toothaches, chipped teeth, and dental injuries with same-day emergency openings.",
    features: ["Same-Day Appointments", "Instant Pain Relief", "24/7 On-Call Advice"],
    icon: (
      <svg className="h-7 w-7 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-slate-50 py-24 lg:py-32 text-slate-900 border-t border-emerald-100">
      {/* Light Mode Maximalist Background: Dot Matrix + Cross Grid + Soft Glow Orbs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-200/50 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-teal-200/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 backdrop-blur-xl shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Clinical Excellence
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Services & Treatments
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            From routine checkups to comprehensive smile makeovers, our clinic combines cutting-edge technology with compassionate care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-emerald-100/90 bg-white/90 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] shadow-[0_10px_30px_rgba(16,185,129,0.06)]"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-100/80">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 transition-colors hover:text-emerald-800"
                >
                  Book Treatment
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
