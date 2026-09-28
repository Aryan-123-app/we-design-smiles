export type BusinessHours = {
  monFri: string;
  sat: string;
  sun: string;
};

export type LocationSectionProps = {
  clinicName?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: BusinessHours;
  mapEmbedUrl?: string;
  locationDescription?: string;
};

const DEFAULT_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0253457199147!2d73.170669!3d22.315053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b49e19d275%3A0x67396c09dfd96a92!2sAlkapuri%2C%20Vadodara%2C%20Gujarat%20390007!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export function LocationSection({
  clinicName = "WE DESIGN SMILES",
  address = "102 Sunrise Heights, Alkapuri Main Road, Vadodara, Gujarat 390007",
  phone = "+91 98765 43210",
  email = "contact@wedesignsmiles.com",
  hours = {
    monFri: "9:00 AM - 6:00 PM",
    sat: "10:00 AM - 4:00 PM",
    sun: "Closed",
  },
  mapEmbedUrl = DEFAULT_MAP_EMBED_URL,
  locationDescription = "Centrally located in Alkapuri, Vadodara, featuring dedicated patient parking, wheelchair accessibility, and easy access from major transit hubs.",
}: LocationSectionProps) {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${clinicName}, ${address}`
  )}`;

  return (
    <section id="location" className="relative w-full overflow-hidden bg-slate-50 py-24 lg:py-32 text-slate-900 border-t border-emerald-100">
      {/* Light Mode Matrix Pattern & Soft Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-200/50 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 backdrop-blur-xl shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Find Our Clinic
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Location & Contact Information
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Visit our state-of-the-art facility in Vadodara, Gujarat. We are here to welcome you to a seamless dental care experience.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Contact Information Card (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-emerald-100/90 bg-white/95 p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(16,185,129,0.08)] sm:p-10">
            <div>
              {/* Clinic Name & Badge */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.3)] font-bold">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C7.5 2 4 4.5 4 8c0 3.5 2 6 3 9.5s2 4.5 5 4.5 4-1 5-4.5S20 11.5 20 8c0-3.5-3.5-6-8-6z" />
                      <path d="M9 10c1.5 1 4.5 1 6 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">{clinicName}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Vadodara, Gujarat
                    </span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="hidden sm:flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-700 shadow-sm">
                  <span>★ 4.9</span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                {locationDescription}
              </p>

              <div className="mt-6 space-y-5 border-t border-slate-100 pt-6">
                {/* Full Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Address</h4>
                    <p className="mt-0.5 text-sm font-semibold text-slate-900 leading-snug">
                      {address}
                    </p>
                  </div>
                </div>

                {/* Phone Link */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</h4>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="mt-0.5 inline-block text-sm font-semibold text-slate-900 transition-colors hover:text-emerald-700"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Email Link */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</h4>
                    <a
                      href={`mailto:${email}`}
                      className="mt-0.5 inline-block text-sm font-medium text-slate-900 transition-colors hover:text-emerald-700"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</h4>
                    <ul className="mt-1 space-y-0.5 text-xs text-slate-600">
                      <li>
                        <strong className="font-semibold text-slate-900">Mon - Fri:</strong> {hours.monFri}
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Saturday:</strong> {hours.sat}
                      </li>
                      <li>
                        <strong className="font-semibold text-rose-600">Sunday:</strong> {hours.sun}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="mt-8 pt-4 border-t border-slate-100">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)] transition-all hover:bg-emerald-700 active:scale-95"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Column (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video max-h-[500px] w-full overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-xl">
              <iframe
                title={`${clinicName} Google Maps Location - Vadodara, Gujarat`}
                src={mapEmbedUrl}
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
