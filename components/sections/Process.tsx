import { processSteps } from "@/data/index";

export default function Process() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--navy-900)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule-short" />
              <span className="label-sm" style={{ color: "var(--gold-400)" }}>Our Process</span>
            </div>
            <h2 className="display-lg" style={{ color: "var(--cream-50)" }}>
              From first conversation{" "}
              <br className="hidden md:block" />
              <em className="not-italic gold-text">to going live.</em>
            </h2>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "rgba(249,247,240,0.5)", fontWeight: 300 }}>
            A transparent, structured process — no surprises, no delays, no
            disappearing acts. You are informed at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {processSteps.map((step) => (
            <div key={step.number} className="p-8" style={{ background: "var(--navy-800)" }}>
              <div className="flex items-start gap-4 mb-5">
                <span
                  className="font-display text-4xl font-light flex-shrink-0"
                  style={{ color: "rgba(249,247,240,0.12)", lineHeight: 1 }}
                >
                  {step.number}
                </span>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--cream-50)", letterSpacing: "0.04em" }}>
                    {step.title}
                  </p>
                  <p className="label-sm" style={{ color: "var(--gold-400)" }}>{step.timing}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(249,247,240,0.45)", fontWeight: 300 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
