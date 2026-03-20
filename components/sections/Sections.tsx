// BlogPreview
import Link from "next/link";
import { blogPosts } from "@/data/index";

export function BlogPreview() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--navy-800)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule-short" />
              <span className="label-sm" style={{ color: "var(--gold-400)" }}>Journal</span>
            </div>
            <h2 className="display-lg" style={{ color: "var(--cream-50)" }}>
              Insights for event{" "}
              <br className="hidden md:block" />
              business owners
            </h2>
          </div>
          <Link href="/blog" className="label-sm flex items-center gap-2" style={{ color: "rgba(249,247,240,0.4)" }}>
            All articles
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-lift p-8 group block"
              style={{ background: "var(--navy-900)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="label-sm" style={{ color: "var(--gold-400)" }}>{post.category}</span>
                <span className="label-sm" style={{ color: "rgba(249,247,240,0.25)" }}>{post.readTime} read</span>
              </div>
              <h3
                className="font-display text-xl font-light leading-snug mb-3 transition-colors duration-200"
                style={{ color: "var(--cream-50)" }}
              >
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(249,247,240,0.45)", fontWeight: 300 }}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <p className="label-sm" style={{ color: "rgba(249,247,240,0.2)" }}>{post.date}</p>
                <svg className="opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--gold-400)" }}>
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

// LocationsSection
import { locations } from "@/data/index";

export function LocationsSection() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--cream-100)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-14">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="gold-rule-short" style={{ background: "var(--navy-700)" }} />
            <span className="label-sm" style={{ color: "var(--navy-500)" }}>Service Locations</span>
            <span className="gold-rule-short" style={{ background: "var(--navy-700)" }} />
          </div>
          <h2 className="display-lg" style={{ color: "var(--navy-900)" }}>
            Serving event businesses{" "}
            <em className="not-italic" style={{ color: "var(--navy-600)" }}>across Nigeria</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--cream-300)" }}>
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="card-lift p-6"
              style={{ background: loc.popular ? "var(--navy-900)" : "var(--cream-50)" }}
            >
              <p
                className="font-display text-lg font-light mb-1"
                style={{ color: loc.popular ? "var(--cream-50)" : "var(--navy-900)" }}
              >
                {loc.city}
              </p>
              <p
                className="label-sm mb-3"
                style={{ color: loc.popular ? "var(--gold-400)" : "rgba(6,14,42,0.35)" }}
              >
                {loc.state}
              </p>
              <p
                className="text-xs leading-relaxed hidden md:block"
                style={{ color: loc.popular ? "rgba(249,247,240,0.4)" : "rgba(6,14,42,0.4)", fontWeight: 300 }}
              >
                {loc.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "rgba(6,14,42,0.4)", fontWeight: 300 }}>
          Don&apos;t see your city?{" "}
          <a
            href="https://wa.me/2347036580994"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "var(--navy-600)", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            We serve all of Nigeria — let&apos;s talk.
          </a>
        </p>
      </div>
    </section>
  );
}

// CallToAction
export function CallToAction() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ backgroundColor: "var(--navy-950)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <div className="ornament-rule mb-10 max-w-sm mx-auto" style={{ color: "var(--gold-400)" }}>
          <span className="label-sm px-4" style={{ color: "var(--gold-400)" }}>Begin</span>
        </div>

        <h2 className="display-xl mb-6" style={{ color: "var(--cream-50)" }}>
          Your clients are searching.{" "}
          <br className="hidden md:block" />
          <em className="not-italic gold-text">Will they find you?</em>
        </h2>

        <p className="text-lg leading-relaxed mb-12 max-w-xl mx-auto" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
          Every day without a premium website is a day a discerning client
          finds your competitor instead. Let&apos;s change that — this week.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href="/contact" className="btn-primary">
            Request a Proposal
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://wa.me/2347036580994?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20event%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cream"
            style={{ borderColor: "rgba(201,168,76,0.3)", color: "var(--gold-300)" }}
          >
            WhatsApp Us Directly
          </a>
        </div>

        <p className="label-sm" style={{ color: "rgba(249,247,240,0.2)" }}>
          Free consultation · Proposal within 24 hours · No obligations
        </p>
      </div>
    </section>
  );
}
