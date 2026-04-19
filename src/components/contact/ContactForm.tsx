"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Life Protection",
  "Savings & Investment",
  "Retirement Planning",
  "Critical Illness",
  "General Financial Planning",
  "Other",
];

const timeOptions = ["Morning", "Afternoon", "Evening"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const service = fd.get("service") as string;
    const time = fd.get("time") as string;
    const message = fd.get("message") as string;

    const lines = [
      `Hi Irene, I'd like to schedule a consultation.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      service ? `Interested in: ${service}` : "",
      time ? `Preferred time: ${time}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/6596502430?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-brass/20 bg-linen p-10 text-center">
        <div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brass/10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brass"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-medium text-navy">
            Message sent!
          </h3>
          <p className="mt-2 text-sm text-slate">
            Your details have been sent via WhatsApp. Irene will get back to you
            shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy/8 bg-linen p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-navy"
          >
            Name <span className="text-rose">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1.5 w-full rounded-lg border border-navy/10 bg-parchment px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy"
          >
            Phone <span className="text-rose">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1.5 w-full rounded-lg border border-navy/10 bg-parchment px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none transition-colors"
            placeholder="+65 XXXX XXXX"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1.5 w-full rounded-lg border border-navy/10 bg-parchment px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none transition-colors"
            placeholder="you@email.com"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-navy"
          >
            What are you looking for?
          </label>
          <select
            id="service"
            name="service"
            className="mt-1.5 w-full rounded-lg border border-navy/10 bg-parchment px-4 py-3 text-sm text-navy focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none transition-colors appearance-none"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred time */}
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-navy"
          >
            Preferred meeting time
          </label>
          <select
            id="time"
            name="time"
            className="mt-1.5 w-full rounded-lg border border-navy/10 bg-parchment px-4 py-3 text-sm text-navy focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none transition-colors appearance-none"
          >
            <option value="">No preference</option>
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-navy"
          >
            Message <span className="text-rose">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1.5 w-full rounded-lg border border-navy/10 bg-parchment px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:border-brass focus:ring-1 focus:ring-brass focus:outline-none transition-colors resize-none"
            placeholder="Tell me a bit about what you're looking for..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-brass px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brass/25 sm:w-auto"
      >
        Send via WhatsApp
      </button>

      <p className="mt-4 text-xs text-slate/60">
        This form opens WhatsApp with your details pre-filled. No data is
        stored on this website.
      </p>
    </form>
  );
}
