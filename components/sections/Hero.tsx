import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "var(--navy-950)" }}
    >
      {/* Subtle radial gradients for depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{
            top: "-10%", right: "-5%",
            width: "60vw", height: "60vw",
            background: "radial-gradient(circle, rgba(26,49,110,0.55) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "10%", left: "-10%",
            width: "40vw", height: "40vw",
            background: "radial-gradient(circle, rgba(11,22,64,0.7) 0%, transparent 70%)",
          }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main content — bottom aligned for editorial feel */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-20 w-full">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <span className="gold-rule-short" />
            <span className="label-sm" style={{ color: "var(--gold-400)" }}>
              Nigeria&apos;s Premier Event Web Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="display-xl mb-8 animate-fade-up" style={{ color: "var(--cream-50)" }}>
            Your High-Paying Clients{" "}
            <br className="hidden md:block" />
            Judge You{" "}
            <em className="gold-text not-italic">Before You Meet.</em>
          </h1>

          {/* Body */}
          <p
            className="text-lg leading-relaxed mb-12 animate-fade-up delay-2 max-w-2xl"
            style={{ color: "rgba(249,247,240,0.6)", fontWeight: 300 }}
          >
            We build premium websites for Nigerian event businesses — the decorators,
            caterers, planners, DJs, and event centers who serve discerning clients
            and want a digital presence that reflects that standard.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-up delay-3">
            <Link href="/contact" className="btn-primary">
              Request a Proposal
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/work" className="btn-outline-cream">
              View Our Work
            </Link>
            <a
              href="https://wa.me/2347036580994?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20event%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-cream"
              style={{ borderColor: "rgba(201,168,76,0.35)", color: "var(--gold-300)" }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-10 pt-10 animate-fade-up delay-4"
            style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
          >
            {[
              { value: "50+",    label: "Event businesses served" },
              { value: "5 days", label: "Average delivery time"   },
              { value: "6",      label: "Cities across Nigeria"   },
              { value: "100%",   label: "Client satisfaction rate" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-light mb-1" style={{ color: "var(--cream-50)" }}>
                  {s.value}
                </p>
                <p className="label-sm" style={{ color: "rgba(249,247,240,0.35)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-2 opacity-30">
          <span className="label-sm" style={{ color: "var(--cream-50)" }}>Scroll</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--cream-50), transparent)" }} />
        </div>
      </div>
    </section>
  );
}
