"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export type NavigationProps = {
  sections?: string[];
};

export function Navigation({
  sections = ["home", "videos", "gallery", "about", "services", "booking"],
}: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home", href: "#home" },
    { name: "Videos", id: "videos", href: "#videos" },
    { name: "Gallery", id: "gallery", href: "#gallery" },
    { name: "About Us", id: "about", href: "#about" },
    { name: "Services", id: "services", href: "#services" },
    { name: "Book Appointment", id: "booking", href: "#booking" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Offset for sticky navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100/80 bg-white/85 backdrop-blur-xl shadow-sm transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Clinic Logo/Branding on Left with Emerald theme */}
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="flex items-center gap-3 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold shadow-[0_4px_14px_rgba(16,185,129,0.3)] transition-transform group-hover:scale-105">
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C7.5 2 4 4.5 4 8c0 3.5 2 6 3 9.5s2 4.5 5 4.5 4-1 5-4.5S20 11.5 20 8c0-3.5-3.5-6-8-6z" />
              <path d="M9 10c1.5 1 4.5 1 6 0" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              WE DESIGN SMILES
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
              Dental & Aesthetic Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  isActive
                    ? "text-emerald-700 font-semibold"
                    : "text-slate-600 hover:text-emerald-600"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button "Book Appointment" in Emerald */}
        <div className="hidden items-center gap-4 sm:flex">
          <a
            href="#booking"
            onClick={(e) => scrollToSection(e, "booking")}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)] transition-all hover:bg-emerald-700 active:scale-95"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-100 md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Vertical Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-emerald-100 bg-white/95 backdrop-blur-2xl px-6 py-5 md:hidden shadow-xl animate-in slide-in-from-top-2 text-slate-900">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200"
                      : "text-slate-700 hover:bg-slate-100 hover:text-emerald-700"
                  }`}
                >
                  {item.name}
                  {isActive && <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="#booking"
                onClick={(e) => scrollToSection(e, "booking")}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700"
              >
                Book Appointment
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navigation;
