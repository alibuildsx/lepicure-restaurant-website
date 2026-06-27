"use client";

import { useState } from "react";
import { useIntersection } from "@/hooks/useIntersection";

interface FormState {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

const TIME_SLOTS = [
  "18:00", "18:30", "19:00", "19:30", "20:00",
  "20:30", "21:00", "21:30", "22:00", "22:30",
];

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

export default function Reservation() {
  const { ref: headRef, isVisible: headVisible } = useIntersection();
  const { ref: formRef, isVisible: formVisible } = useIntersection(0.1);

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
  };

  return (
    <section
      id="reservation"
      className="py-[120px] md:py-[160px] bg-[#0a0a0a] relative overflow-hidden"
      aria-label="Make a reservation"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(166,124,82,0.05)_0%,transparent_65%)]" />

      <div className="container-luxury relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div
            ref={headRef}
            className={`text-center mb-16 reveal ${headVisible ? "visible" : ""}`}
          >
            <div className="label-caps text-[#a67c52] mb-4">Dining Reservations</div>
            <h2
              className="font-serif font-bold text-[#f5f5dc] mb-4"
              style={{ fontSize: "clamp(30px, 4.5vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Reserve Your Table
            </h2>
            <p className="text-[#8e9192] text-[16px] leading-relaxed max-w-md mx-auto">
              We accept reservations up to three months in advance. For same-day requests,
              please call us directly.
            </p>
          </div>

          {/* Form card */}
          <div
            ref={formRef}
            className={`card-luxury rounded-sm p-8 md:p-12 glow-bronze reveal-scale ${formVisible ? "visible" : ""}`}
          >
            {submitted ? (
              /* Success state */
              <div className="text-center py-10" role="status" aria-live="polite">
                <div className="text-[#a67c52] text-[48px] mb-6">✦</div>
                <h3 className="font-serif text-[#f5f5dc] text-[28px] font-semibold mb-4">
                  Request Received
                </h3>
                <p className="text-[#8e9192] text-[16px] leading-relaxed max-w-sm mx-auto mb-8">
                  Thank you, {form.name}. We&apos;ll confirm your reservation at{" "}
                  <span className="text-[#c9c6c5]">{form.email}</span> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="label-caps text-[#a67c52] hover:text-[#c49a6c] transition-colors duration-300"
                >
                  Make another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="res-name" className="label-caps" style={{ fontSize: "10px" }}>
                      Full Name
                    </label>
                    <input
                      id="res-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jean Dupont"
                      value={form.name}
                      onChange={handleChange}
                      className="input-luxury"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="res-email" className="label-caps" style={{ fontSize: "10px" }}>
                      Email Address
                    </label>
                    <input
                      id="res-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jean@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="input-luxury"
                    />
                  </div>

                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="res-date" className="label-caps" style={{ fontSize: "10px" }}>
                      Preferred Date
                    </label>
                    <input
                      id="res-date"
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="input-luxury"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>

                  {/* Time */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="res-time" className="label-caps" style={{ fontSize: "10px" }}>
                      Preferred Time
                    </label>
                    <select
                      id="res-time"
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="input-luxury"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled>Select time</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t} className="bg-[#1a1a1a]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="res-guests" className="label-caps" style={{ fontSize: "10px" }}>
                      Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="input-luxury"
                      style={{ colorScheme: "dark" }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n} className="bg-[#1a1a1a]">
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="res-notes" className="label-caps" style={{ fontSize: "10px" }}>
                      Special Requests or Dietary Requirements
                    </label>
                    <textarea
                      id="res-notes"
                      name="notes"
                      rows={3}
                      placeholder="Allergies, celebrations, preferred seating…"
                      value={form.notes}
                      onChange={handleChange}
                      className="input-luxury resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <button
                    id="res-submit-btn"
                    type="submit"
                    className="
                      px-10 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase
                      bg-[#a67c52] text-[#0a0a0a]
                      hover:bg-[#c49a6c] active:bg-[#7a5a38]
                      transition-all duration-300 rounded-sm
                      glow-bronze hover:glow-bronze-strong
                    "
                  >
                    Request Reservation
                  </button>
                  <p className="text-[#8e9192] text-[13px] leading-relaxed">
                    By submitting you agree to our{" "}
                    <a href="#" className="text-[#a67c52] hover:underline">
                      booking policy
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Direct contact */}
          <div className={`mt-10 text-center reveal ${headVisible ? "visible delay-500" : ""}`}>
            <p className="text-[#8e9192] text-[14px]">
              For groups of 9 or more, private dining, or urgent requests:{" "}
              <a
                href="tel:+33142962000"
                className="text-[#c9c6c5] hover:text-[#a67c52] transition-colors duration-300"
              >
                +33 1 42 96 20 00
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
