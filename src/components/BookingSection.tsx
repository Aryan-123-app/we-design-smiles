"use client";

import BookingForm from "./BookingForm";

export default function BookingSection() {
  return (
    <section id="booking" className="relative w-full overflow-hidden bg-slate-50 py-24 lg:py-32 text-slate-900 border-t border-emerald-100">
      {/* Light Mode Pattern Matrix & Soft Glowing Orb */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-20" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[550px] w-[550px] rounded-full bg-emerald-200/50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <BookingForm />
      </div>
    </section>
  );
}
