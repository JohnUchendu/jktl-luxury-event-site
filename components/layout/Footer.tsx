import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy-950)", color: "var(--cream-100)" }}>
      <style>{`
        .footer-link { color: rgba(249,247,240,0.4); transition: color 0.2s; font-weight: 300; font-size: 0.75rem; text-decoration: none; }
        .footer-link:hover { color: var(--cream-50); }
        .footer-contact-link { color: rgba(249,247,240,0.35); transition: color 0.2s; font-size: 0.75rem; display: block; text-decoration: none; }
        .footer-contact-link:hover { color: var(--gold-400); }
        .footer-legal-link { color: rgba(249,247,240,0.2); transition: color 0.2s; font-size: 0.75rem; text-decoration: none; }
        .footer-legal-link:hover { color: rgba(249,247,240,0.5); }
      `}</style>

      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-3xl md:text-4xl font-light mb-2" style={{ color: "var(--cream-50)" }}>
              Ready to elevate your presence?
            </p>
            <p className="label-sm" style={{ color: "rgba(249,247,240,0.4)" }}>
              Your high-paying clients are searching for you right now.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-outline-cream" style={{ padding: "12px 28px", fontSize: "0.65rem", whiteSpace: "nowrap" }}>
              Get a Proposal
            </Link>
            <a href="https://wa.me/2347036580994" target="_blank" rel="noopener noreferrer"
              className="btn-outline-cream"
              style={{ padding: "12px 28px", fontSize: "0.65rem", whiteSpace: "nowrap", borderColor: "rgba(201,168,76,0.4)", color: "var(--gold-300)" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          <div className="md:col-span-1">
            <p className="label-sm mb-5" style={{ color: "var(--gold-400)" }}>JKTL</p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(249,247,240,0.4)", fontWeight: 300 }}>
              Premium web design for Nigeria&apos;s finest event businesses. We build digital presences that attract the clients you deserve.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@jktl.com.ng" className="footer-contact-link">info@jktl.com.ng</a>
              <a href="https://wa.me/2347036580994" target="_blank" rel="noopener noreferrer" className="footer-contact-link">+234 703 658 0994</a>
              <span className="footer-contact-link" style={{ cursor: "default" }}> Nigeria 🇳🇬</span>
            </div>
          </div>

          <div>
            <p className="label-sm mb-5" style={{ color: "rgba(249,247,240,0.35)" }}>Services</p>
            <ul className="space-y-3">
              {[
                ["The Booking Page",   "/services#booking-page"],
                ["The Full Brand",     "/services#full-brand"],
                ["Event Center Suite", "/services#event-center-suite"],
                ["Vendor Marketplace", "/services#vendor-platform"],
                ["Business Email",     "/services#business-email"],
                ["Campaign Page",      "/services#landing-page"],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-sm mb-5" style={{ color: "rgba(249,247,240,0.35)" }}>Company</p>
            <ul className="space-y-3">
              {[
                ["About Us",  "/about"],
                ["Our Work",  "/work"],
                ["Journal",   "/blog"],
                ["Locations", "/locations"],
                ["Contact",   "/contact"],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-sm mb-5" style={{ color: "rgba(249,247,240,0.35)" }}>Business Insights</p>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(249,247,240,0.4)", fontWeight: 300 }}>
              Monthly insights for event business owners who want to attract better clients.
            </p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="your@email.com" className="text-xs px-4 py-3 w-full"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--cream-50)", outline: "none" }} />
              <button type="submit" className="label-sm py-3"
                style={{ background: "var(--navy-600)", color: "var(--cream-50)", border: "1px solid var(--navy-500)", cursor: "pointer" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(249,247,240,0.2)", fontWeight: 300 }}>
            © {new Date().getFullYear()} JKTL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
