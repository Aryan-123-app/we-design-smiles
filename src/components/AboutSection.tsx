import Image from "next/image";

export default function AboutSection() {
  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Dentist & Cosmetic Specialist",
      credentials: "DDS, Northwestern University | 14+ Yrs Exp",
      bio: "Dr. Sarah specializes in aesthetic dentistry, veneers, and full mouth rehabilitations with a gentle, patient-first approach.",
      image: "/images/dr_sarah_mitchell.jpg",
    },
    {
      name: "Dr. Marcus Vance",
      role: "Orthodontist & Aligner Specialist",
      credentials: "DMD, Harvard School of Dental Medicine",
      bio: "Dr. Marcus brings advanced digital orthodontics expertise, helping patients achieve beautifully aligned smiles with Invisalign®.",
      image: "/images/dr_marcus_vance.jpg",
    },
  ];

  const stats = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Smiles Transformed", value: "5,000+" },
    { label: "Patient Satisfaction", value: "99.4%" },
    { label: "Google Review Rating", value: "4.9 ★" },
  ];

  return (
    <section id="about" className="relative w-full overflow-hidden bg-slate-50 py-24 lg:py-32 text-slate-900 border-t border-emerald-100">
      {/* Light Mode Pattern Overlay & Soft Glowing Ambient Orbs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-15" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] [background-size:5rem_5rem]" />
      <div className="pointer-events-none absolute top-1/4 -left-48 h-[550px] w-[550px] rounded-full bg-emerald-200/50 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 -right-48 h-[550px] w-[550px] rounded-full bg-teal-200/40 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        {/* Story & Mission */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 backdrop-blur-xl shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Our Story & Mission
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Crafting Healthy, Confident Smiles Since 2011
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              At <strong className="font-semibold text-emerald-700">WE DESIGN SMILES</strong>, we believe every patient deserves compassionate, state-of-the-art dental care. From our tranquil reception lounge to our advanced 3D imaging suites, every detail is curated for your comfort and safety.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Our mission is simple: to combine clinical mastery with personalized aesthetic artistry, ensuring your visit is seamless, pain-free, and transformative.
            </p>

            {/* Stats Badges */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-slate-200 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col rounded-2xl border border-emerald-100 bg-white/80 p-4 backdrop-blur-md shadow-sm">
                  <span className="text-2xl font-black tracking-tight text-emerald-700 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-semibold text-slate-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Card & Values */}
          <div className="rounded-3xl border border-emerald-800/20 bg-gradient-to-br from-emerald-900 to-teal-950 p-8 text-white shadow-[0_20px_50px_rgba(16,185,129,0.15)] backdrop-blur-2xl lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              ★
            </div>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
              Why Patients Choose Us
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-slate-200">
                  <strong className="text-white">State-of-the-Art Technology:</strong> Digital 3D CBCT scanners and painless laser therapy.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-slate-200">
                  <strong className="text-white">Anxiety-Free Dentistry:</strong> Sedation options and calming, spa-like treatment rooms.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-slate-200">
                  <strong className="text-white">Transparent Pricing:</strong> Flexible payment plans and direct insurance processing.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Doctor & Team Showcase */}
        <div className="mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Meet Our Specialist Team
            </h3>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Dedicated doctors committed to your dental wellness and aesthetic perfection.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {doctors.map((doctor, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl border border-emerald-100/90 bg-white/90 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl font-bold text-slate-900">{doctor.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mt-1">
                    {doctor.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{doctor.credentials}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
