import { testimonials } from "@/data/index";

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--cream-50)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="ornament-rule mb-6 max-w-xs mx-auto">
            <span className="label-sm px-4" style={{ color: "var(--navy-500)" }}>Client Voices</span>
          </div>
          <h2 className="display-lg" style={{ color: "var(--navy-900)" }}>
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--cream-300)" }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card-lift p-8" style={{ background: "var(--cream-50)" }}>
              {/* Opening quote mark */}
              <p className="font-display text-5xl leading-none mb-4" style={{ color: "var(--navy-200)" }}>&ldquo;</p>

              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300, fontStyle: "italic" }}>
                {t.quote}
              </p>

              <div className="flex items-center gap-4 pt-5" style={{ borderTop: "1px solid var(--cream-300)" }}>
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 text-xs font-medium"
                  style={{
                    background: "var(--navy-900)",
                    color: "var(--cream-100)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: "var(--navy-900)", letterSpacing: "0.04em" }}>{t.name}</p>
                  <p className="label-sm mt-0.5" style={{ color: "rgba(6,14,42,0.35)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
