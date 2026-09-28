import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-bold shadow-md">
                <svg className="h-6 w-6 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C7.5 2 4 4.5 4 8c0 3.5 2 6 3 9.5s2 4.5 5 4.5 4-1 5-4.5S20 11.5 20 8c0-3.5-3.5-6-8-6z" />
                  <path d="M9 10c1.5 1 4.5 1 6 0" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                WE DESIGN SMILES
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              State-of-the-art dental care designed around your comfort, health, and visual aesthetic. Transforming smiles with precision and passion since 2011.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} WE DESIGN SMILES Dental Clinic. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services & Treatments
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition-colors">
                  Results Gallery
                </Link>
              </li>
              <li>
                <Link href="#videos" className="hover:text-white transition-colors">
                  Clinic Tour
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Our Doctors
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Clinic Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">📍</span>
                102 Sunrise Heights, Alkapuri Main Road, Vadodara, Gujarat
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">📞</span>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✉️</span>
                contact@wedesignsmiles.com
              </li>
              <li className="pt-2 text-xs text-slate-400">
                Mon-Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>Designed with clinical excellence and patient care in mind.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">HIPAA Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
