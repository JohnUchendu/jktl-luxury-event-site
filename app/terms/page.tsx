import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — JK Technology Limited",
  description: "Terms and conditions governing the use of JK Technology Limited's website design services.",
};

const lastUpdated = "March 2025";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-8" style={{ backgroundColor: "var(--navy-950)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-rule-short" />
            <span className="label-sm" style={{ color: "var(--gold-400)" }}>Legal</span>
          </div>
          <h1 className="display-xl mb-4" style={{ color: "var(--cream-50)" }}>
            Terms of Service
          </h1>
          <p className="text-sm" style={{ color: "rgba(249,247,240,0.4)", fontWeight: 300 }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad" style={{ backgroundColor: "var(--cream-50)" }}>
        <div className="max-w-4xl mx-auto px-8">

          {/* Intro */}
          <div className="mb-12 p-8 border" style={{ borderColor: "var(--cream-300)", background: "var(--cream-100)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.65)", fontWeight: 300 }}>
              These Terms of Service (&quot;Terms&quot;) govern your use of the JKTL website
              at{" "}
              <a href="https://jktl.com.ng" style={{ color: "var(--navy-600)", textDecoration: "underline" }}>
                celebrationweb.ng
              </a>{" "}
              and the web design and development services provided by JK Technology Limited
              (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our website or engaging our services,
              you agree to be bound by these Terms. If you do not agree, please do not use
              our website or services.
            </p>
          </div>

          <div className="space-y-12">

            {/* 1 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                1. Services
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                JK Technology Limited provides website design, development, and related digital
                services including but not limited to: landing pages, multi-page websites,
                business email setup, Paystack payment integration, SEO optimisation, and
                ongoing website maintenance.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                The specific scope, deliverables, timeline, and pricing for each project
                will be set out in a written proposal or agreement provided to you before
                work commences. No work will begin until the proposal is accepted and the
                required deposit is received.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                2. Payment Terms
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />

              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--navy-800)", letterSpacing: "0.04em" }}>
                Deposit & Payment Schedule
              </h3>
              <ul className="space-y-2 pl-4 mb-6">
                {[
                  "All projects require a deposit before work begins. The deposit amount will be specified in your proposal (typically 50% of the total project fee).",
                  "For projects valued above ₦200,000, a three-part payment schedule may apply: 40% upfront, 40% at design approval, and 20% upon completion and delivery.",
                  "The remaining balance is due before the final website is made live or delivered to you.",
                  "For add-on services valued under ₦50,000, full payment upfront is required.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                    <span style={{ color: "var(--navy-500)", marginTop: "2px", fontSize: "10px", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--navy-800)", letterSpacing: "0.04em" }}>
                Late Payment
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                If payment is not received within 7 days of the due date, we reserve the
                right to pause work on your project until outstanding balances are settled.
                Persistent non-payment may result in project cancellation without refund of
                the deposit.
              </p>

              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--navy-800)", letterSpacing: "0.04em" }}>
                Accepted Payment Methods
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                We accept payment via bank transfer, Paystack, and other methods specified
                in your proposal. All prices are quoted and payable in Nigerian Naira (₦)
                unless otherwise agreed in writing.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                3. Project Scope & Revisions
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                The scope of each project is defined in the written proposal or agreement.
                The following revision policy applies:
              </p>
              <ul className="space-y-2 pl-4 mb-5">
                {[
                  "Each project includes two (2) rounds of revisions at no additional cost, unless otherwise specified in your proposal.",
                  "A revision is defined as reasonable modifications to the existing design or content. A revision does not include adding new pages, significantly changing the design direction, or adding features not included in the original scope.",
                  "Additional revisions or scope changes beyond what is agreed will be quoted and billed separately before work proceeds.",
                  "Requests for changes must be submitted in writing (email or WhatsApp message) within 7 days of receiving a design preview.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                    <span style={{ color: "var(--navy-500)", marginTop: "2px", fontSize: "10px", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                We will not be responsible for delays caused by late provision of content,
                feedback, or approvals from the client.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                4. Client Responsibilities
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                To enable us to deliver your project on time and to a high standard, you agree to:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "Provide all required content (text, images, logos, branding materials) in a timely manner as requested",
                  "Ensure that all content you provide is accurate, lawful, and does not infringe the intellectual property rights of any third party",
                  "Provide clear and timely feedback during the design review process",
                  "Notify us promptly of any changes to your contact details, business information, or project requirements",
                  "Ensure that any third-party accounts required for the project (e.g. domain registrar, hosting, Google accounts) are accessible",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                    <span style={{ color: "var(--navy-500)", marginTop: "2px", fontSize: "10px", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                5. Intellectual Property
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />

              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--navy-800)", letterSpacing: "0.04em" }}>
                Ownership Upon Full Payment
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                Upon receipt of full payment, you will own the final website design and
                content created specifically for your project. All rights to the completed
                deliverables transfer to you at that point.
              </p>

              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--navy-800)", letterSpacing: "0.04em" }}>
                Our Rights
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                We retain the right to display your completed project in our portfolio and
                to reference it in our marketing materials (social media, website, case
                studies), unless you expressly request otherwise in writing before the
                project commences.
              </p>

              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--navy-800)", letterSpacing: "0.04em" }}>
                Third-Party Assets
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                We may use licensed fonts, stock images, icon sets, or third-party code
                libraries in your project. Where applicable, we will use properly licensed
                materials. You are responsible for ensuring that any content you provide to
                us is legally licensed for use.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                6. Cancellation & Refunds
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <ul className="space-y-3 pl-4">
                {[
                  { bold: "Cancellation by client before work begins:", body: "If you cancel after paying a deposit but before any work has commenced, you are entitled to a 50% refund of the deposit. The remaining 50% covers administrative and preparation costs." },
                  { bold: "Cancellation by client after work has begun:", body: "If you cancel after work has commenced, the deposit is non-refundable. Any work completed up to the point of cancellation may be invoiced separately at our discretion." },
                  { bold: "Cancellation by CelebrationWeb:", body: "If we are unable to complete your project for any reason, we will refund any payments made for work not yet delivered." },
                  { bold: "Completed projects:", body: "No refunds are available once a project has been delivered and launched, or once the client has approved a final preview." },
                ].map((item) => (
                  <li key={item.bold} className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                    <span style={{ color: "var(--navy-500)", marginTop: "2px", fontSize: "10px", flexShrink: 0 }}>—</span>
                    <span><strong style={{ color: "var(--navy-800)" }}>{item.bold}</strong> {item.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                7. Maintenance & Support
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                Unless a separate maintenance retainer agreement is in place:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "Post-launch support is provided for 30 days from the date the website goes live, covering bug fixes and minor issues arising from our work.",
                  "After 30 days, any updates, changes, or technical support will be quoted separately or covered under a retainer agreement.",
                  "We are not responsible for issues arising from third-party platforms, hosting providers, domain registrars, or changes made to the website by the client or their representatives after handover.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                    <span style={{ color: "var(--navy-500)", marginTop: "2px", fontSize: "10px", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                8. Limitation of Liability
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                To the maximum extent permitted by applicable law, CelebrationWeb shall not
                be liable for any indirect, incidental, special, consequential, or punitive
                damages, including but not limited to loss of profits, loss of data, loss of
                business, or loss of goodwill, arising from or related to our services or
                these Terms.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                Our total liability to you for any claim arising under these Terms shall not
                exceed the total fees paid by you for the specific project to which the claim
                relates.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                9. Confidentiality
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                Both parties agree to keep confidential any sensitive business information
                shared during the course of a project. We will not disclose your confidential
                business information to third parties without your consent, except as required
                by law or as necessary to deliver your project (e.g. sharing a brief with a
                specialist contractor). This obligation survives the termination of any
                project agreement.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                10. Website Use
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                By using the CelebrationWeb website, you agree not to:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "Use the site in any way that violates applicable local, national, or international laws or regulations",
                  "Attempt to gain unauthorised access to any part of our website or its underlying systems",
                  "Transmit any unsolicited or unauthorised advertising or promotional material",
                  "Reproduce, duplicate, or exploit any part of our website without our express written permission",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                    <span style={{ color: "var(--navy-500)", marginTop: "2px", fontSize: "10px", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 11 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                11. Governing Law
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                These Terms shall be governed by and construed in accordance with the laws
                of the Federal Republic of Nigeria. Any disputes arising under these Terms
                shall be subject to the exclusive jurisdiction of the courts of Lagos State,
                Nigeria. We will, however, always attempt to resolve any disputes amicably
                before resorting to formal legal proceedings.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                12. Changes to These Terms
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                We reserve the right to update these Terms at any time. The updated version
                will be posted on this page with a revised &quot;Last updated&quot; date. Your continued
                use of our website or services after any changes constitutes your acceptance
                of the revised Terms. For active project agreements, the Terms in effect at
                the time the agreement was signed will govern that project.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="font-display text-2xl font-light mb-4" style={{ color: "var(--navy-900)" }}>
                13. Contact
              </h2>
              <div className="gold-rule-short mb-5" style={{ background: "var(--navy-700)" }} />
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="p-6 border" style={{ background: "var(--cream-100)", borderColor: "var(--cream-300)" }}>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--navy-900)", letterSpacing: "0.04em" }}>CelebrationWeb</p>
                <div className="space-y-1">
                  {[
                    ["Email",    "info@jktl.com.ng", "mailto:info@jktl.com.ng"],
                    ["WhatsApp", "+234  703 658 0994",        "https://wa.me/2347036580994"],
                    ["Location"," Nigeria",            null],
                  ].map(([label, value, href]) => (
                    <div key={label as string} className="flex gap-4 text-sm">
                      <span className="label-sm w-20 flex-shrink-0" style={{ color: "rgba(6,14,42,0.35)" }}>{label}</span>
                      {href ? (
                        <a href={href as string} style={{ color: "var(--navy-600)", fontWeight: 300, textDecoration: "underline", textUnderlineOffset: "3px" }}>{value}</a>
                      ) : (
                        <span style={{ color: "rgba(6,14,42,0.6)", fontWeight: 300 }}>{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom nav */}
          <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid var(--cream-300)" }}>
            <p className="label-sm" style={{ color: "rgba(6,14,42,0.3)" }}>
              Last updated: {lastUpdated}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="label-sm"
                style={{ color: "var(--navy-600)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Privacy Policy
              </Link>
              <Link href="/contact" className="label-sm"
                style={{ color: "var(--navy-600)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
