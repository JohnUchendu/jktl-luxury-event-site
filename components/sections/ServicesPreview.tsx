import Link from "next/link";
import { services } from "@/data/index";

export default function ServicesPreview() {
  const featured = services.filter((s) => ["booking-page", "full-brand", "event-center-suite"].includes(s.slug));

  return (
    <section className="section-pad" style={{ backgroundColor: "var(--navy-900)" }}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule-short" />
              <span className="label-sm" style={{ color: "var(--gold-400)" }}>Services & Pricing</span>
            </div>
            <h2 className="display-lg" style={{ color: "var(--cream-50)" }}>
              Packages built for{" "}
              <br className="hidden md:block" />
              <em className="not-italic gold-text">event businesses.</em>
            </h2>
          </div>
          <Link
            href="/services"
            className="label-sm transition-colors duration-200 flex items-center gap-2"
            style={{ color: "rgba(249,247,240,0.4)" }}
          >
            View all packages
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {featured.map((service) => (
            <div
              key={service.slug}
              className="card-lift relative p-8 flex flex-col"
              style={{
                background: service.highlight ? "var(--navy-700)" : "var(--navy-800)",
              }}
            >
              {service.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--gold-400)" }} />
              )}

              {service.highlight && (
                <p className="label-sm mb-4" style={{ color: "var(--gold-400)" }}>
                  — Most chosen
                </p>
              )}

              <div className="mb-2">
                <p className="label-sm mb-2" style={{ color: "rgba(249,247,240,0.3)" }}>{service.tier}</p>
                <h3 className="font-display text-2xl font-light mb-1" style={{ color: "var(--cream-50)" }}>
                  {service.title}
                </h3>
                <p className="text-xs mb-5" style={{ color: "rgba(249,247,240,0.4)", fontWeight: 300 }}>
                  {service.tagline}
                </p>
              </div>

              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "rgba(249,247,240,0.55)", fontWeight: 300 }}>
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-start gap-3 text-xs" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
                    <span style={{ color: "var(--gold-400)", marginTop: "1px" }}>—</span>
                    {f}
                  </li>
                ))}
                {service.features.length > 5 && (
                  <li className="text-xs" style={{ color: "rgba(249,247,240,0.25)", paddingLeft: "21px" }}>
                    +{service.features.length - 5} more inclusions
                  </li>
                )}
              </ul>

              <div className="pt-5 flex items-end justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div>
                  <p className="font-display text-xl font-light" style={{ color: "var(--cream-50)" }}>
                    {service.price}
                    {service.priceTo !== service.price && (
                      <span className="text-sm ml-1" style={{ color: "rgba(249,247,240,0.4)" }}>
                        – {service.priceTo}
                      </span>
                    )}
                  </p>
                  <p className="label-sm mt-1" style={{ color: "rgba(249,247,240,0.25)" }}>
                    {service.delivery}
                  </p>
                </div>
                <Link
                  href={`/services#${service.slug}`}
                  className="label-sm transition-colors duration-200 flex items-center gap-2"
                  style={{ color: "var(--gold-400)" }}
                >
                  Details
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mini add-ons strip */}
        <div
          className="mt-px grid grid-cols-2 md:grid-cols-3 gap-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {services.filter((s) => !["booking-page","full-brand","event-center-suite"].includes(s.slug)).map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="p-5 flex items-center justify-between group transition-all duration-200"
              style={{ background: "var(--navy-800)" }}
            >
              <div>
                <p className="label-sm mb-1" style={{ color: "rgba(249,247,240,0.3)" }}>{s.tier}</p>
                <p className="text-sm font-medium" style={{ color: "var(--cream-50)" }}>{s.title}</p>
              </div>
              <div className="text-right">
                <p className="text-xs" style={{ color: "var(--gold-400)" }}>{s.price}</p>
                <svg className="ml-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--gold-400)" }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
