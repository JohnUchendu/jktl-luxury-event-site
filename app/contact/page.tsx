"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", businessType: "", service: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--cream-50)",
    border: "1px solid var(--cream-300)",
    color: "var(--navy-900)",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.875rem",
    fontWeight: 300,
    padding: "14px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.65rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "rgba(6,14,42,0.4)",
    marginBottom: "8px",
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-8" style={{ backgroundColor: "var(--navy-950)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-rule-short" />
            <span className="label-sm" style={{ color: "var(--gold-400)" }}>Get in Touch</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1 className="display-xl" style={{ color: "var(--cream-50)" }}>
              Let&apos;s build something{" "}
              <em className="not-italic gold-text">exceptional.</em>
            </h1>
            <p className="text-lg" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
              Tell us about your business and what you want to achieve. We will
              respond with a clear, honest proposal — within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad" style={{ backgroundColor: "var(--cream-100)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-12">

            {/* Sidebar info */}
            <div className="md:col-span-2 space-y-8">
              {/* Direct channels */}
              <div>
                <p className="label-sm mb-5" style={{ color: "rgba(6,14,42,0.35)" }}>Direct Channels</p>
                <div className="space-y-2">
                  {[
                    {
                      label: "WhatsApp",
                      value: "+234 703 658 0994",
                      href: "https://wa.me/2347036580994",
                      note: "Fastest response",
                      accent: true,
                    },
                    {
                      label: "Email",
                      value: "info@jktl.com.ng",
                      href: "mailto:info@jktl.com.ng",
                      note: "Response within 24 hours",
                      accent: false,
                    },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start justify-between p-5 transition-all duration-200 block"
                      style={{
                        background: c.accent ? "var(--navy-900)" : "var(--cream-50)",
                        border: `1px solid ${c.accent ? "transparent" : "var(--cream-300)"}`,
                      }}
                    >
                      <div>
                        <p className="label-sm mb-1" style={{ color: c.accent ? "var(--gold-400)" : "rgba(6,14,42,0.35)" }}>
                          {c.label}
                        </p>
                        <p className="text-sm" style={{ color: c.accent ? "var(--cream-50)" : "var(--navy-900)", fontWeight: 300 }}>
                          {c.value}
                        </p>
                      </div>
                      <span className="label-sm" style={{ color: c.accent ? "rgba(249,247,240,0.3)" : "rgba(6,14,42,0.3)" }}>
                        {c.note}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="p-6" style={{ background: "var(--cream-50)", border: "1px solid var(--cream-300)" }}>
                <p className="label-sm mb-5" style={{ color: "rgba(6,14,42,0.35)" }}>What to Expect</p>
                <div className="space-y-4">
                  {[
                    { step: "01", text: "We review your message same day" },
                    { step: "02", text: "We reach out via WhatsApp or email" },
                    { step: "03", text: "A free 20-minute discovery call" },
                    { step: "04", text: "Written proposal within 24 hours" },
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-4">
                      <span className="font-display text-base font-light flex-shrink-0"
                        style={{ color: "var(--navy-200)", minWidth: "28px" }}>
                        {s.step}
                      </span>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(6,14,42,0.5)", fontWeight: 300 }}>
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="p-6" style={{ background: "var(--cream-50)", border: "1px solid var(--cream-300)" }}>
                <p className="label-sm mb-3" style={{ color: "rgba(6,14,42,0.35)" }}>Location</p>
                <p className="text-sm" style={{ color: "var(--navy-900)", fontWeight: 300 }}>
                 Nigeria
                  <br />
                  <span style={{ color: "rgba(6,14,42,0.4)", fontSize: "12px" }}>
                    100% remote delivery — we work with clients across all of Nigeria
                  </span>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {status === "success" ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-16"
                  style={{ background: "var(--navy-900)", minHeight: "500px" }}
                >
                  <p className="font-display text-5xl font-light mb-6" style={{ color: "var(--cream-50)" }}>
                    Message received.
                  </p>
                  <p className="text-base mb-2" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
                    We will be in touch within 24 hours — usually sooner.
                  </p>
                  <p className="label-sm mt-6" style={{ color: "var(--gold-400)" }}>
                    Check your WhatsApp — we may reach out there first.
                  </p>
                </div>
              ) : (
                <div style={{ background: "var(--cream-50)", border: "1px solid var(--cream-300)" }}>
                  <div className="p-8 md:p-10" style={{ borderBottom: "1px solid var(--cream-300)" }}>
                    <p className="font-display text-2xl font-light" style={{ color: "var(--navy-900)" }}>
                      Project Enquiry
                    </p>
                    <p className="text-xs mt-1" style={{ color: "rgba(6,14,42,0.4)", fontWeight: 300 }}>
                      All fields marked * are required
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input type="text" name="name" required value={form.name}
                          onChange={handleChange} placeholder="Amaka Okonkwo" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone / WhatsApp *</label>
                        <input type="tel" name="phone" required value={form.phone}
                          onChange={handleChange} placeholder="08012345678" style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder="you@yourbusiness.com" style={inputStyle} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyle}>Type of Business *</label>
                        <select name="businessType" required value={form.businessType}
                          onChange={handleChange} style={inputStyle}>
                          <option value="">Select...</option>
                          <option>Event Decorator</option>
                          <option>Caterer</option>
                          <option>DJ / Live Band</option>
                          <option>Event Planner</option>
                          <option>Event Center / Venue</option>
                          <option>Photographer / Videographer</option>
                          <option>Party Rental</option>
                          <option>MC / Comedian</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Package of Interest</label>
                        <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
                          <option value="">Select...</option>
                          <option>The Booking Page (₦85k – ₦120k)</option>
                          <option>The Full Brand (₦200k – ₦350k)</option>
                          <option>Event Center Suite (₦450k – ₦700k)</option>
                          <option>Vendor Marketplace (₦800k+)</option>
                          <option>Business Email Setup (₦25k – ₦40k)</option>
                          <option>Campaign Landing Page (₦60k – ₦90k)</option>
                          <option>Not sure yet — advise me</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Approximate Budget</label>
                      <select name="budget" value={form.budget} onChange={handleChange} style={inputStyle}>
                        <option value="">Select a range...</option>
                        <option>Under ₦100,000</option>
                        <option>₦100,000 – ₦200,000</option>
                        <option>₦200,000 – ₦400,000</option>
                        <option>₦400,000 – ₦700,000</option>
                        <option>₦700,000 and above</option>
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Tell Us About Your Business *</label>
                      <textarea
                        name="message" required rows={5} value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what you do, who your clients are, and what you want the website to achieve for you..."
                        style={{ ...inputStyle, resize: "none" }}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs" style={{ color: "#A32D2D" }}>
                        Something went wrong. Please try WhatsApp instead.
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-primary flex-1 justify-center"
                        style={{ opacity: status === "loading" ? 0.6 : 1 }}
                      >
                        {status === "loading" ? "Sending..." : "Submit Enquiry"}
                        {status !== "loading" && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                      <a
                        href="https://wa.me/2347036580994?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20event%20business"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-navy flex-1 justify-center"
                      >
                        WhatsApp Instead
                      </a>
                    </div>

                    <p className="text-xs text-center" style={{ color: "rgba(6,14,42,0.3)", fontWeight: 300 }}>
                      No spam. No pressure. We will respond with a clear, honest proposal.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
