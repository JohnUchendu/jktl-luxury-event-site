# CelebrationWeb — Premium Event Agency Website

A luxury Next.js 15 website for a Nigerian web agency focused on the events industry.
Design: Deep navy · Off-white cream · Gold accents · Cormorant Garamond + Jost typography.

---

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Tech Stack

| Tool           | Purpose                       |
|----------------|-------------------------------|
| Next.js 15     | Framework (App Router)        |
| TypeScript     | Type safety                   |
| Tailwind CSS   | Utility styling               |
| Cormorant Garamond | Display / headline font  |
| Jost           | Body / UI font                |
| Vercel         | Recommended deployment        |
| Resend         | Contact form emails (optional)|

---

## Customisation Checklist

### 1. Your Agency Details
Search and replace across all files:

| Placeholder              | Replace with              |
|--------------------------|---------------------------|
| `CelebrationWeb`         | Your agency name          |
| `celebrationweb.ng`      | Your domain               |
| `hello@celebrationweb.ng`| Your email address        |
| `2348000000000`          | Your WhatsApp number (no +)|
| `Lagos, Nigeria`         | Your city / location      |

### 2. Content (data/index.ts)
Update all data in `data/index.ts`:
- [ ] `services` — update pricing, descriptions, delivery times
- [ ] `caseStudies` — replace with your real client case studies
- [ ] `testimonials` — replace with real client quotes
- [ ] `blogPosts` — update titles and excerpts
- [ ] `locations` — adjust cities you actively serve

### 3. Contact Form Emails
- [ ] Sign up at https://resend.com (free: 3,000 emails/month)
- [ ] Get API key
- [ ] Create `.env.local` with: `RESEND_API_KEY=re_xxxxxxxx`
- [ ] Open `app/api/contact/route.ts` and uncomment the Resend block
- [ ] Update `from:` and `to:` email addresses

---

## Project Structure

```
app/
  layout.tsx              ← Global layout (Navbar + Footer + metadata)
  page.tsx                ← Homepage (all sections assembled)
  globals.css             ← Design system (CSS variables, typography, buttons)
  services/page.tsx       ← Full services & pricing page
  work/page.tsx           ← Case studies / portfolio
  about/page.tsx          ← About page
  blog/page.tsx           ← Blog / journal listing
  contact/page.tsx        ← Contact form (client component)
  locations/page.tsx      ← Service locations page
  api/contact/route.ts    ← Form submission API

components/
  layout/
    Navbar.tsx            ← Sticky navbar, mobile menu
    Footer.tsx            ← Footer with newsletter
  sections/
    Hero.tsx              ← Homepage hero
    WhyUs.tsx             ← Trust / differentiators
    ServicesPreview.tsx   ← Services grid (homepage)
    CaseStudiesPreview.tsx← Case studies (homepage)
    Process.tsx           ← 6-step process
    Testimonials.tsx      ← Client quotes
    Sections.tsx          ← BlogPreview, LocationsSection, CallToAction

data/
  index.ts                ← ALL content (services, case studies, blog, etc.)
```

---

## Pricing Reference (update in data/index.ts)

| Package               | Price Range         | Deposit Structure        |
|-----------------------|---------------------|--------------------------|
| The Booking Page      | ₦85k – ₦120k       | 50% up / 50% completion  |
| The Full Brand        | ₦200k – ₦350k      | 50% up / 50% completion  |
| Event Center Suite    | ₦450k – ₦700k      | 40% / 40% / 20%          |
| Vendor Marketplace    | ₦800k – ₦1.5M+     | 40% / 40% / 20%          |
| Business Email        | ₦25k – ₦40k        | Full upfront             |
| Campaign Landing Page | ₦60k – ₦90k        | Full upfront             |

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel Dashboard:
# Settings → Environment Variables → Add RESEND_API_KEY
```

After deploying:
1. Add your custom domain in Vercel → Settings → Domains
2. Update DNS records at your domain registrar
3. SSL is automatic on Vercel

---

## WhatsApp Links Format

All WhatsApp links use this format:
```
https://wa.me/[NUMBER]?text=[URL_ENCODED_MESSAGE]
```

Replace `2348000000000` with your number — include country code, no `+`.

---

## Fonts (Google Fonts — already loaded in globals.css)

- **Cormorant Garamond** — headlines, display text, italics
- **Jost** — all body text, labels, UI elements

---

Built with care for Nigeria's events industry 🇳🇬
