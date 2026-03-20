import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/index";
import { CallToAction } from "@/components/sections/Sections";

export const metadata: Metadata = {
  title: "Our Work — JK TECHNOLOGY LIMITED",
  description:
    "Case studies from Nigerian event businesses we have worked with. Real results, real clients, real growth.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-8" style={{ backgroundColor: "var(--navy-950)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-rule-short" />
            <span className="label-sm" style={{ color: "var(--gold-400)" }}>Portfolio</span>
          </div>
          <h1 className="display-xl mb-6 max-w-3xl" style={{ color: "var(--cream-50)" }}>
            Real businesses.{" "}
            <em className="not-italic gold-text">Real results.</em>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
            Every project here is a Nigerian event vendor who decided to go
            online — and has not looked back since.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-pad" style={{ backgroundColor: "var(--cream-50)" }}>
        <div className="max-w-7xl mx-auto px-8 space-y-24">
          {caseStudies.map((cs, i) => (
            <div key={cs.slug} id={cs.slug} className="scroll-mt-24">

              {/* Label */}
              <div className="flex items-center gap-4 mb-10">
                <span
                  className="w-8 h-px flex-shrink-0"
                  style={{ background: cs.accentColor }}
                />
                <span className="label-sm" style={{ color: "rgba(6,14,42,0.35)" }}>
                  {String(i + 1).padStart(2, "0")} — {cs.category} · {cs.location}
                </span>
              </div>

              <div className={`grid md:grid-cols-2 gap-0 border ${i % 2 !== 0 ? "md:flex" : ""}`}
                style={{ borderColor: "var(--cream-300)" }}>

                {/* Accent panel */}
                <div
                  className={`p-10 md:p-14 flex flex-col justify-between min-h-[320px] ${i % 2 !== 0 ? "md:order-2" : ""}`}
                  style={{ backgroundColor: cs.accentColor }}
                >
                  <div>
                    <p className="label-sm mb-4" style={{ color: "rgba(249,247,240,0.45)" }}>
                      {cs.service}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-4"
                      style={{ color: "var(--cream-50)" }}>
                      {cs.client}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(249,247,240,0.6)", fontWeight: 300 }}>
                      {cs.summary}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 pt-8 mt-8"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                    {cs.results.map((r, j) => (
                      <div key={j}>
                        <p className="font-display text-2xl font-light" style={{ color: "var(--cream-50)" }}>
                          {r.value}
                        </p>
                        <p className="label-sm mt-1" style={{ color: "rgba(249,247,240,0.4)" }}>
                          {r.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content panel */}
                <div
                  className={`p-10 md:p-14 flex flex-col justify-between ${i % 2 !== 0 ? "md:order-1" : ""}`}
                  style={{ background: "var(--cream-50)", borderLeft: i % 2 === 0 ? `1px solid var(--cream-300)` : "none", borderRight: i % 2 !== 0 ? `1px solid var(--cream-300)` : "none" }}
                >
                  <div className="space-y-8">
                    <div>
                      <p className="label-sm mb-3" style={{ color: "rgba(6,14,42,0.3)" }}>The Challenge</p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="label-sm mb-3" style={{ color: "rgba(6,14,42,0.3)" }}>Our Solution</p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--cream-300)" }}>
                    <blockquote>
                      <p className="font-display text-lg font-light italic leading-relaxed mb-4"
                        style={{ color: "var(--navy-800)" }}>
                        &ldquo;{cs.quote}&rdquo;
                      </p>
                      <footer>
                        <p className="text-xs font-medium" style={{ color: "var(--navy-900)", letterSpacing: "0.04em" }}>
                          {cs.quoteName}
                        </p>
                        <p className="label-sm mt-0.5" style={{ color: "rgba(6,14,42,0.35)" }}>
                          {cs.quoteRole}
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* CTA below each case study */}
              <div className="mt-6 flex items-center justify-end">
                <Link
                  href="/contact"
                  className="label-sm flex items-center gap-2 transition-colors duration-200"
                  style={{ color: cs.accentColor }}
                >
                  Get similar results for your business
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
