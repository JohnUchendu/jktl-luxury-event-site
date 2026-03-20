import type { Metadata } from "next";
import Link from "next/link";
import { services, addOns } from "@/data/index";
import { CallToAction } from "@/components/sections/Sections";

export const metadata: Metadata = {
  title: "Services & Pricing — JK Technology Limited",
  description: "Premium website packages for Nigerian event businesses. Transparent pricing, clear deliverables, exceptional results.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 text-center px-8" style={{ backgroundColor: "var(--navy-950)" }}>
        <div className="flex items-center gap-4 mb-8 justify-center">
          <span className="gold-rule-short" />
          <span className="label-sm" style={{ color: "var(--gold-400)" }}>Services & Pricing</span>
          <span className="gold-rule-short" />
        </div>
        <h1 className="display-xl mb-6" style={{ color: "var(--cream-50)" }}>
          Clear packages.{" "}
          <br className="hidden md:block" />
          <em className="not-italic gold-text">Exceptional results.</em>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
          No vague quotes. No surprise fees. Every package is priced honestly
          and scoped precisely before we begin.
        </p>
      </section>

      {/* Payment terms callout */}
      <div className="px-8 py-5" style={{ backgroundColor: "var(--navy-900)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 items-center justify-center">
          {[
            { icon: "◈", text: "50% deposit to begin, 50% on completion (projects under ₦200k)" },
            { icon: "◆", text: "40/40/20 split for larger projects (upfront / midway / launch)" },
            { icon: "◉", text: "Work begins only after first payment is cleared" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <span style={{ color: "var(--gold-400)", fontSize: "10px" }}>{item.icon}</span>
              <span className="text-xs" style={{ color: "rgba(249,247,240,0.45)", fontWeight: 300 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services list */}
      <section className="section-pad" style={{ backgroundColor: "var(--cream-50)" }}>
        <div className="max-w-6xl mx-auto px-8 space-y-2">
          {services.map((service) => (
            <div
              id={service.slug}
              key={service.slug}
              className="scroll-mt-24 border"
              style={{ borderColor: service.highlight ? "var(--navy-600)" : "var(--cream-300)", background: "var(--cream-50)" }}
            >
              {service.highlight && (
                <div className="px-8 py-2.5 flex items-center gap-3" style={{ background: "var(--navy-900)" }}>
                  <span className="gold-rule-short" />
                  <span className="label-sm" style={{ color: "var(--gold-400)" }}>Most chosen by established vendors</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-0">
                {/* Left */}
                <div className="p-8 md:p-10" style={{ borderRight: "1px solid var(--cream-300)" }}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="font-display text-2xl mt-1" style={{ color: "var(--navy-300)" }}>{service.icon}</span>
                    <div>
                      <p className="label-sm mb-1" style={{ color: "var(--navy-500)" }}>{service.tier}</p>
                      <h2 className="font-display text-3xl font-light" style={{ color: "var(--navy-900)" }}>
                        {service.title}
                      </h2>
                      <p className="text-sm mt-1" style={{ color: "rgba(6,14,42,0.45)", fontWeight: 300 }}>{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                    {service.description}
                  </p>

                  {/* Best for */}
                  <div className="mb-8">
                    <p className="label-sm mb-3" style={{ color: "rgba(6,14,42,0.3)" }}>Best for</p>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.map((b) => (
                        <span key={b} className="text-xs px-3 py-1"
                          style={{ background: "var(--cream-200)", color: "var(--navy-700)", border: "1px solid var(--cream-300)" }}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price block */}
                  <div className="p-5" style={{ background: "var(--navy-900)" }}>
                    <div className="flex items-end gap-6">
                      <div>
                        <p className="label-sm mb-1" style={{ color: "rgba(249,247,240,0.3)" }}>Investment</p>
                        <p className="font-display text-2xl font-light" style={{ color: "var(--cream-50)" }}>
                          {service.price}
                          {service.priceTo !== service.price && (
                            <span className="text-base ml-2" style={{ color: "rgba(249,247,240,0.4)" }}>– {service.priceTo}</span>
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="label-sm mb-1" style={{ color: "rgba(249,247,240,0.3)" }}>Delivery</p>
                        <p className="text-sm" style={{ color: "var(--cream-100)", fontWeight: 300 }}>{service.delivery}</p>
                      </div>
                    </div>
                    {service.note && (
                      <p className="text-xs mt-3" style={{ color: "var(--gold-400)" }}>{service.note}</p>
                    )}
                  </div>
                </div>

                {/* Right: features + CTA */}
                <div className="p-8 md:p-10 flex flex-col">
                  <p className="label-sm mb-5" style={{ color: "rgba(6,14,42,0.3)" }}>What&apos;s included</p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "rgba(6,14,42,0.65)", fontWeight: 300 }}>
                        <span style={{ color: "var(--navy-500)", marginTop: "2px", fontSize: "10px" }}>—</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 pt-5" style={{ borderTop: "1px solid var(--cream-300)" }}>
                    <Link href="/contact" className="btn-primary flex-1 justify-center">
                      Get Started
                    </Link>
                    <a
                      href={`https://wa.me/2347035480994?text=Hello%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(service.title)}%20package`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-navy flex-1 justify-center"
                    >
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-pad" style={{ backgroundColor: "var(--cream-100)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="gold-rule-short" style={{ background: "var(--navy-700)" }} />
            <span className="label-sm" style={{ color: "var(--navy-500)" }}>Add-ons & Extras</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--cream-300)" }}>
            {addOns.map((a) => (
              <div key={a.name} className="flex items-center justify-between p-5" style={{ background: "var(--cream-50)" }}>
                <p className="text-sm" style={{ color: "var(--navy-800)", fontWeight: 300 }}>{a.name}</p>
                <p className="text-sm font-medium" style={{ color: "var(--navy-600)" }}>{a.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ backgroundColor: "var(--navy-900)" }}>
        <div className="max-w-3xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <span className="gold-rule-short" />
            <span className="label-sm" style={{ color: "var(--gold-400)" }}>Questions</span>
          </div>
          <div className="space-y-px" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {[
              { q: "Do I need to provide my own content?", a: "We guide you through exactly what we need. If you don't have professional photos, we recommend affordable photographers in your city, or source high-quality relevant imagery for you." },
              { q: "What happens after the site launches?", a: "Every package includes post-launch support. We check in, fix issues, and remain reachable on WhatsApp. We do not disappear." },
              { q: "Can I pay in instalments?", a: "Yes. Projects under ₦200k: 50% upfront, 50% on completion. Larger projects use a 40/40/20 structure. A signed agreement is required before work begins." },
              { q: "How do I know my site will rank on Google?", a: "Every site we build includes SEO foundations — proper metadata, structured headings, Google Search Console submission, and a sitemap. Ranking grows over time; we set the right foundation from day one." },
              { q: "What platform do you build on?", a: "We build on Next.js, deployed on Vercel. It is fast, modern, and scales with your business. We also handle your domain setup and hosting guidance." },
            ].map((faq, i) => (
              <div key={i} className="py-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--cream-50)", letterSpacing: "0.03em" }}>{faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(249,247,240,0.45)", fontWeight: 300 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
