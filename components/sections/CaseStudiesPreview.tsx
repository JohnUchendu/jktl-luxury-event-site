// ─── CaseStudiesPreview ───────────────────────────────────────────────────────
import Link from "next/link";
import { caseStudies } from "@/data/index";

export default function CaseStudiesPreview() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--cream-200)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule-short" style={{ background: "var(--navy-700)" }} />
              <span className="label-sm" style={{ color: "var(--navy-500)" }}>Our Work</span>
            </div>
            <h2 className="display-lg" style={{ color: "var(--navy-900)" }}>
              Real businesses.{" "}
              <br className="hidden md:block" />
              <em className="not-italic" style={{ color: "var(--navy-600)" }}>Measurable results.</em>
            </h2>
          </div>
          <Link href="/work" className="label-sm flex items-center gap-2 transition-colors duration-200"
            style={{ color: "rgba(6,14,42,0.4)" }}>
            All case studies
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="space-y-px" style={{ background: "var(--cream-400)" }}>
          {caseStudies.map((cs, i) => (
            <div
              key={cs.slug}
              className="card-lift grid md:grid-cols-5 gap-0"
              style={{ background: "var(--cream-50)" }}
            >
              {/* Accent column */}
              <div
                className="md:col-span-1 p-8 flex flex-col justify-between min-h-[180px]"
                style={{ backgroundColor: cs.accentColor }}
              >
                <div>
                  <p className="label-sm mb-3" style={{ color: "rgba(249,247,240,0.5)" }}>{cs.category}</p>
                  <p className="font-display text-xl font-light leading-snug" style={{ color: "var(--cream-50)" }}>
                    {cs.client}
                  </p>
                </div>
                <p className="label-sm mt-4" style={{ color: "rgba(249,247,240,0.4)" }}>{cs.location}</p>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8">
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(6,14,42,0.55)", fontWeight: 300 }}>
                  {cs.summary}
                </p>
                <blockquote className="text-sm italic leading-relaxed" style={{ color: "rgba(6,14,42,0.45)", borderLeft: `2px solid ${cs.accentColor}`, paddingLeft: "16px" }}>
                  &ldquo;{cs.quote}&rdquo;
                  <footer className="label-sm mt-2 not-italic" style={{ color: "rgba(6,14,42,0.3)" }}>
                    — {cs.quoteName}
                  </footer>
                </blockquote>
              </div>

              {/* Results */}
              <div className="md:col-span-1 p-8 flex flex-col justify-center gap-5" style={{ borderLeft: "1px solid var(--cream-300)" }}>
                {cs.results.map((r, j) => (
                  <div key={j}>
                    <p className="font-display text-2xl font-light" style={{ color: cs.accentColor }}>{r.value}</p>
                    <p className="label-sm mt-1" style={{ color: "rgba(6,14,42,0.35)" }}>{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
