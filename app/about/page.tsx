import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/sections/Sections";

export const metadata: Metadata = {
  title: "About — JK Technology Limited",
  description:
    "JK Technology Limited is a premium Nigerian web studio built exclusively for the events industry. Our story, our mission, and why we exist.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-0 px-8 relative overflow-hidden"
        style={{ backgroundColor: "var(--navy-950)" }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, var(--navy-600), transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-rule-short" />
            <span className="label-sm" style={{ color: "var(--gold-400)" }}>
              About Us
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 pb-20 items-end">
            <h1 className="display-xl" style={{ color: "var(--cream-50)" }}>
              Built for the people who make{" "}
              <em className="not-italic gold-text">Nigeria celebrate.</em>
            </h1>
            <div>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "rgba(249,247,240,0.55)", fontWeight: 300 }}
              >
                JK Technology Limited is a premium web studio focused entirely on
                Nigeria&apos;s events industry. We exist because event
                businesses deserve digital presences that match the quality of
                what they actually deliver.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(249,247,240,0.4)", fontWeight: 300 }}
              >
                Most web developers take a brief, hand you a template, and
                disappear. We are different — and we built a studio that proves it.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: "rgba(255,255,255,0.06)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {[
              { value: "2022",  label: "Year founded"            },
              { value: "50+",   label: "Event businesses served" },
              { value: "6",     label: "Cities across Nigeria"   },
              { value: "100%",  label: "Client satisfaction"     },
            ].map((s) => (
              <div key={s.label} className="px-8 py-10" style={{ background: "var(--navy-900)" }}>
                <p className="font-display text-3xl font-light mb-1" style={{ color: "var(--cream-50)" }}>
                  {s.value}
                </p>
                <p className="label-sm" style={{ color: "rgba(249,247,240,0.3)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ backgroundColor: "var(--cream-100)" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="gold-rule-short" style={{ background: "var(--navy-700)" }} />
                <span className="label-sm" style={{ color: "var(--navy-500)" }}>Our Story</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--navy-900)" }}>
                Why we built this studio
              </h2>
            </div>
            <div className="md:col-span-3 space-y-5">
              {[
                "We started CelebrationWeb after noticing something that seemed almost absurd: Nigeria has some of the most talented event vendors in the world, and almost none of them had a website worth visiting.",
                "Brilliant decorators running their entire business from Instagram DMs. Caterers with a decade of experience who couldn't be found on Google. Event centers losing corporate bookings because a competitor had a better-looking website — not a better service.",
                "The gap wasn't talent. It wasn't hard work. It was presence. The people who deserved the high-paying clients simply weren't visible to them.",
                "We built CelebrationWeb to close that gap. Not with generic templates and disappearing freelancers — but with a focused studio that understands the events industry, speaks its language, and builds websites that work as hard as the vendors who own them.",
                "Today we work with event businesses across Lagos, Abuja, Port Harcourt, Enugu, Ibadan, and beyond. Every project is personal to us — because we understand that for most of our clients, this is their livelihood.",
              ].map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The luxury standard */}
      <section className="section-pad" style={{ backgroundColor: "var(--navy-900)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-14">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="gold-rule-short" />
                <span className="label-sm" style={{ color: "var(--gold-400)" }}>
                  Our Standard
                </span>
              </div>
              <h2 className="display-lg" style={{ color: "var(--cream-50)" }}>
                We believe luxury is a{" "}
                <em className="not-italic gold-text">
                  feeling delivered at every touchpoint.
                </em>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}
              >
                The best event businesses in Nigeria already understand this.
                The decorator who follows up personally. The caterer who calls
                to confirm the morning of. The planner who sends a handwritten
                note after the event.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}
              >
                We apply the same standard to everything we build. A website
                from us is not a transaction — it is a partnership. We follow
                up after launch. We check in a month later. We treat your
                business as if it were our own.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {[
              {
                title: "Niche focus",
                body: "We only build for event businesses. That singular focus gives us an insight and intuition about your market that generalist developers simply cannot match.",
              },
              {
                title: "Honest pricing",
                body: "You receive a written proposal before we start. What is quoted is what is charged. No scope creep ambushes, no surprise invoices.",
              },
              {
                title: "Speed without shortcuts",
                body: "Most projects are live in 5–14 days. We have built internal systems that allow us to move fast without compromising on craft.",
              },
              {
                title: "Mobile-first always",
                body: "Your clients are on their phones. Every site we build is designed for mobile first — then scaled up to desktop. Never the reverse.",
              },
              {
                title: "Genuine after-support",
                body: "We check in after launch, remain reachable on WhatsApp, and treat every relationship as long-term. You are a partner, not a transaction.",
              },
              {
                title: "Results, not decoration",
                body: "A beautiful site that does not bring bookings is a very expensive poster. Every design decision we make is guided by one question: will this convert?",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="p-8"
                style={{ background: "var(--navy-800)" }}
              >
                <p className="font-display text-5xl font-light mb-4"
                  style={{ color: "rgba(249,247,240,0.07)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="text-sm font-medium mb-3"
                  style={{ color: "var(--cream-50)", letterSpacing: "0.04em" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(249,247,240,0.4)", fontWeight: 300 }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA bridge */}
      <section
        className="py-16 px-8 text-center"
        style={{ backgroundColor: "var(--cream-50)" }}
      >
        <div className="max-w-xl mx-auto">
          <p
            className="font-display text-2xl font-light mb-6"
            style={{ color: "var(--navy-900)" }}
          >
            Ready to work together?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Proposal
            </Link>
            <Link href="/work" className="btn-outline-navy">
              See Our Work First
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
