"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type BookingFormInputs = {
  fullName: string;
  email: string;
  phone: string;
  service: "Cleaning" | "Whitening" | "Restoration" | "Consultation" | "Other";
  date: string;
  time: string;
  message?: string;
};

export type BookingFormProps = {
  onSubmit?: (data: BookingFormInputs) => Promise<void> | void;
};

export function BookingForm({ onSubmit }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const todayStr = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormInputs>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "Cleaning",
      date: "",
      time: "",
      message: "",
    },
  });

  const handleFormSubmit: SubmitHandler<BookingFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSuccessMessage(null);

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Simulated API Endpoint delay
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setSuccessMessage("Thank you! We'll contact you soon.");
      reset();
    } catch (err) {
      console.error("Booking submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[600px] rounded-3xl border border-emerald-100/90 bg-white/95 p-6 backdrop-blur-2xl shadow-[0_25px_60px_rgba(16,185,129,0.12)] sm:p-10 text-slate-900">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Book Your Appointment
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Fill out the form below to reserve your slot at WE DESIGN SMILES clinic.
        </p>
      </div>

      {successMessage ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/90 p-8 text-center shadow-lg animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)]">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h4 className="mt-4 text-xl font-bold text-slate-900">
            {successMessage}
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            Our patient care team will confirm your preferred appointment time within 24 hours.
          </p>

          <button
            type="button"
            onClick={() => setSuccessMessage(null)}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-700"
          >
            Book Another Slot
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5" noValidate>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="e.g. Jane Smith"
              {...register("fullName", {
                required: "Full Name is required.",
                minLength: {
                  value: 2,
                  message: "Full Name must be at least 2 characters.",
                },
              })}
              className={`block w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-rose-300 bg-rose-50 text-slate-900 placeholder-slate-400 focus:border-rose-500 focus:ring-rose-200"
                  : "border-slate-200 bg-slate-50/80 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:ring-emerald-100 focus:bg-white"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="jane@example.com"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className={`block w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-rose-300 bg-rose-50 text-slate-900 placeholder-slate-400 focus:border-rose-500 focus:ring-rose-200"
                  : "border-slate-200 bg-slate-50/80 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:ring-emerald-100 focus:bg-white"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="10 digit phone number (e.g. 5551234567)"
              {...register("phone", {
                required: "Phone number is required.",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be exactly 10 digits.",
                },
              })}
              className={`block w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-rose-300 bg-rose-50 text-slate-900 placeholder-slate-400 focus:border-rose-500 focus:ring-rose-200"
                  : "border-slate-200 bg-slate-50/80 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:ring-emerald-100 focus:bg-white"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Preferred Service */}
          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Preferred Service <span className="text-rose-500">*</span>
            </label>
            <select
              id="service"
              {...register("service", { required: "Please select a service." })}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:bg-white"
            >
              <option value="Cleaning" className="bg-white text-slate-900">Cleaning</option>
              <option value="Whitening" className="bg-white text-slate-900">Whitening</option>
              <option value="Restoration" className="bg-white text-slate-900">Restoration</option>
              <option value="Consultation" className="bg-white text-slate-900">Consultation</option>
              <option value="Other" className="bg-white text-slate-900">Other</option>
            </select>
          </div>

          {/* Preferred Date & Time Row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Preferred Date */}
            <div>
              <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Preferred Date <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                min={todayStr}
                max={maxDateStr}
                {...register("date", { required: "Date is required." })}
                className={`block w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.date
                    ? "border-rose-300 bg-rose-50 text-slate-900 focus:border-rose-500 focus:ring-rose-200"
                    : "border-slate-200 bg-slate-50/80 text-slate-900 focus:border-emerald-600 focus:ring-emerald-100 focus:bg-white"
                }`}
              />
              {errors.date && (
                <p className="mt-1 text-xs text-rose-600">{errors.date.message}</p>
              )}
            </div>

            {/* Preferred Time */}
            <div>
              <label htmlFor="time" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Preferred Time <span className="text-rose-500">*</span>
              </label>
              <input
                type="time"
                id="time"
                min="09:00"
                max="18:00"
                {...register("time", {
                  required: "Time is required.",
                  validate: (val) => {
                    if (!val) return "Time is required.";
                    const [h, m] = val.split(":").map(Number);
                    const mins = h * 60 + m;
                    if (mins < 9 * 60 || mins > 18 * 60) {
                      return "Please choose business hours (9AM-6PM).";
                    }
                    return true;
                  },
                })}
                className={`block w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.time
                    ? "border-rose-300 bg-rose-50 text-slate-900 focus:border-rose-500 focus:ring-rose-200"
                    : "border-slate-200 bg-slate-50/80 text-slate-900 focus:border-emerald-600 focus:ring-emerald-100 focus:bg-white"
                }`}
              />
              {errors.time && (
                <p className="mt-1 text-xs text-rose-600">{errors.time.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Message (Optional, max 300 chars)
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Any specific symptoms, questions, or requests..."
              {...register("message", {
                maxLength: {
                  value: 300,
                  message: "Message cannot exceed 300 characters.",
                },
              })}
              className={`block w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-rose-300 bg-rose-50 text-slate-900 placeholder-slate-400 focus:border-rose-500 focus:ring-rose-200"
                  : "border-slate-200 bg-slate-50/80 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:ring-emerald-100 focus:bg-white"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-base font-bold text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)] transition-all hover:bg-emerald-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Processing Booking...
                </>
              ) : (
                "Book Appointment"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
