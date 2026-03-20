import { whyUs } from "@/data/index";

export default function WhyUs() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--cream-100)" }}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-end">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule-short" style={{ background: "var(--navy-700)" }} />
              <span className="label-sm" style={{ color: "var(--navy-500)" }}>Why Choose Us</span>
            </div>
            <h2 className="display-lg" style={{ color: "var(--navy-900)" }}>
              We built this studio{" "}
              <em className="not-italic" style={{ color: "var(--navy-600)" }}>
                for the event industry.
              </em>
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed" style={{ color: "rgba(6,14,42,0.55)", fontWeight: 300 }}>
              Most developers take your brief, disappear for two weeks, and hand you a
              template. We work differently. We understand the Nigerian events market,
              we speak your clients&apos; language, and we build websites that work as
              hard as you do.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--cream-300)" }}>
          {whyUs.map((item, i) => (
            <div
              key={i}
              className="card-lift p-8"
              style={{ background: "var(--cream-50)" }}
            >
              <p
                className="font-display text-5xl font-light mb-5"
                style={{ color: "var(--navy-200)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-sm font-medium mb-3" style={{ color: "var(--navy-900)", letterSpacing: "0.04em" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.5)", fontWeight: 300 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
