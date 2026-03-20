import type { Metadata } from "next";
import { locations } from "@/data/index";
import { CallToAction } from "@/components/sections/Sections";

export const metadata: Metadata = {
  title: "Service Locations — JK TECHNOLOGY LIMITED",
  description:
    "We build premium websites for event businesses across Nigeria — Lagos, Abuja, Port Harcourt, Enugu, Ibadan, and everywhere in between.",
};

export default function LocationsPage() {
  const popular = locations.filter((l) => l.popular);
  const others   = locations.filter((l) => !l.popular);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-8" style={{ backgroundColor: "var(--navy-950)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-rule-short" />
            <span className="label-sm" style={{ color: "var(--gold-400)" }}>Locations</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h1 className="display-xl" style={{ color: "var(--cream-50)" }}>
              We serve event businesses{" "}
              <em className="not-italic gold-text">across Nigeria.</em>
            </h1>
            <p className="text-lg" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
              Based in Lagos, delivering for vendors in every major city. Our
              entire process is remote — no office visits, no geography limits.
            </p>
          </div>
        </div>
      </section>

      {/* Primary cities */}
      <section className="section-pad" style={{ backgroundColor: "var(--cream-50)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="gold-rule-short" style={{ background: "var(--navy-700)" }} />
            <span className="label-sm" style={{ color: "var(--navy-500)" }}>Most Active Cities</span>
          </div>

          <div className="grid md:grid-cols-3 gap-px mb-px" style={{ background: "var(--cream-300)" }}>
            {popular.map((loc) => (
              <div key={loc.city} className="card-lift p-10" style={{ background: "var(--navy-900)" }}>
                <p className="font-display text-3xl font-light mb-1" style={{ color: "var(--cream-50)" }}>
                  {loc.city}
                </p>
                <p className="label-sm mb-5" style={{ color: "var(--gold-400)" }}>{loc.state}</p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(249,247,240,0.45)", fontWeight: 300 }}>
                  {loc.description}
                </p>
                <a
                  href={`https://wa.me/2348000000000?text=Hello%2C%20I%27m%20an%20event%20vendor%20in%20${loc.city}%20and%20I%27d%20like%20a%20premium%20website`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-sm flex items-center gap-2 transition-colors duration-200"
                  style={{ color: "var(--gold-400)" }}
                >
                  Start a project in {loc.city}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Secondary cities */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--cream-300)" }}>
            {others.map((loc) => (
              <div key={loc.city} className="card-lift p-6" style={{ background: "var(--cream-50)" }}>
                <p className="font-display text-xl font-light mb-1" style={{ color: "var(--navy-900)" }}>{loc.city}</p>
                <p className="label-sm mb-3" style={{ color: "rgba(6,14,42,0.35)" }}>{loc.state}</p>
                <p className="text-xs leading-relaxed hidden md:block" style={{ color: "rgba(6,14,42,0.4)", fontWeight: 300 }}>
                  {loc.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-px p-8 text-center"
            style={{ background: "var(--cream-200)", border: "1px solid var(--cream-300)" }}
          >
            <p className="font-display text-xl font-light mb-2" style={{ color: "var(--navy-900)" }}>
              Not seeing your city?
            </p>
            <p className="text-sm mb-5" style={{ color: "rgba(6,14,42,0.5)", fontWeight: 300 }}>
              We serve event businesses in every Nigerian city. Our entire process is
              remote — we have never needed to visit a client in person.
            </p>
            <a
              href="https://wa.me/2347936580994"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Chat with us — wherever you are
            </a>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
