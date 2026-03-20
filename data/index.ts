// ─── SERVICES ────────────────────────────────────────────────────────────────
export const services = [
  {
    slug: "booking-page",
    icon: "◈",
    tier: "Essentials",
    title: "The Booking Page",
    tagline: "Your most important sales tool",
    description:
      "A single, beautifully crafted page that presents your work with authority. Your gallery, packages, testimonials, and contact — all in one place that loads fast and looks stunning on any device.",
    features: [
      "Full-screen photo & video gallery",
      "Pricing packages with descriptions",
      "WhatsApp & inquiry form CTAs",
      "Client testimonials section",
      "Google Maps embed",
      "Mobile-first responsive design",
      "Basic SEO setup",
      "SSL & fast hosting guidance",
    ],
    price: "₦85,000",
    priceTo: "₦120,000",
    delivery: "3–5 business days",
    deposit: "50% upfront",
    bestFor: ["Decorators", "DJs", "Caterers", "Photographers", "MCs"],
    highlight: false,
    note: "",
  },
  {
    slug: "full-brand",
    icon: "◆",
    tier: "Signature",
    title: "The Full Brand",
    tagline: "The complete premium presence",
    description:
      "A full multi-page website that positions your event business as the premier choice in your market. Professional email, Google Business setup, and a digital presence that commands respect from high-value clients.",
    features: [
      "Up to 6 custom-designed pages",
      "Professional business email (Google Workspace or Zoho)",
      "Google Business Profile setup & optimisation",
      "Blog / updates section",
      "Full testimonials & case studies page",
      "Comprehensive SEO foundation",
      "WhatsApp live chat widget",
      "Performance optimisation (under 2s load)",
      "Analytics dashboard setup",
      "30-day post-launch support",
    ],
    price: "₦200,000",
    priceTo: "₦350,000",
    delivery: "7–12 business days",
    deposit: "50% upfront",
    bestFor: ["Event Planners", "Catering Companies", "Live Bands", "MC Agencies", "Decoration Studios"],
    highlight: true,
    note: "Most chosen by established vendors",
  },
  {
    slug: "event-center-suite",
    icon: "◉",
    tier: "Premier",
    title: "Event Center Suite",
    tagline: "Fill your calendar. Automatically.",
    description:
      "Built exclusively for halls, venues, and event centers. Your clients check availability, select packages, and pay deposits online — without a single phone call. You focus on delivering the experience; the website handles the admin.",
    features: [
      "Full multi-page website",
      "Real-time availability calendar",
      "Online booking request system",
      "Paystack deposit payment integration",
      "Package & pricing comparison",
      "Virtual tour / gallery showcase",
      "Admin notification system",
      "Client inquiry dashboard",
      "Email confirmation automation",
      "Priority 60-day support",
    ],
    price: "₦450,000",
    priceTo: "₦700,000",
    delivery: "14–21 business days",
    deposit: "40% upfront, 40% midway, 20% on launch",
    bestFor: ["Event Halls", "Banquet Centers", "Hotel Venues", "Outdoor Spaces"],
    highlight: false,
    note: "",
  },
  {
    slug: "vendor-platform",
    icon: "⬡",
    tier: "Enterprise",
    title: "Vendor Marketplace",
    tagline: "Own the market in your city",
    description:
      "A full event vendor marketplace that connects party planners with premium service providers. You build it, you own it. Vendors pay for premium listings. This is the platform play — long-term, scalable, and defensible.",
    features: [
      "Multi-vendor listing platform",
      "Category search & advanced filters",
      "Individual vendor profile pages",
      "Tiered paid listing subscriptions",
      "Verified review & rating system",
      "Full admin management panel",
      "Paystack subscription billing",
      "SEO optimised for every listing",
      "Vendor onboarding documentation",
    ],
    price: "₦800,000",
    priceTo: "₦1,500,000+",
    delivery: "30–45 business days",
    deposit: "40% upfront, 40% midway, 20% on launch",
    bestFor: ["Entrepreneurs", "Event Associations", "City-Wide Directories"],
    highlight: false,
    note: "Custom quote provided after discovery call",
  },
  {
    slug: "business-email",
    icon: "◻",
    tier: "Add-on",
    title: "Business Email Setup",
    tagline: "Stop using Gmail for business",
    description:
      "A professional email on your own domain instantly elevates how clients perceive you. info@yourbrand.com is the difference between looking established and looking like a side hustle.",
    features: [
      "Custom domain email setup",
      "Google Workspace or Zoho configuration",
      "Up to 5 email accounts",
      "Professional email signature design",
      "SPF / DKIM / DMARC security setup",
      "Migration from existing email",
    ],
    price: "₦25,000",
    priceTo: "₦40,000",
    delivery: "1–2 business days",
    deposit: "Full payment upfront",
    bestFor: ["Any Business", "Startups", "Sole Traders"],
    highlight: false,
    note: "",
  },
  {
    slug: "landing-page",
    icon: "◇",
    tier: "Campaign",
    title: "Campaign Landing Page",
    tagline: "Launch fast. Convert more.",
    description:
      "Promoting a new service, a seasonal package, or a specific event? A focused landing page built for a single goal — turning curious visitors into confirmed bookings.",
    features: [
      "Single focused conversion page",
      "Countdown timer (optional)",
      "Social proof & testimonials",
      "Optimised for paid ads traffic",
      "WhatsApp & form CTA",
      "48-hour priority delivery available",
    ],
    price: "₦60,000",
    priceTo: "₦90,000",
    delivery: "2–4 business days",
    deposit: "Full payment upfront",
    bestFor: ["Seasonal Promos", "New Service Launches", "Event Tickets"],
    highlight: false,
    note: "",
  },
];

// ─── ADD-ONS ──────────────────────────────────────────────────────────────────
export const addOns = [
  { name: "Extra page",                    price: "₦25,000 – ₦40,000 per page" },
  { name: "Paystack payment integration",  price: "₦50,000" },
  { name: "Blog / CMS setup",              price: "₦45,000" },
  { name: "Monthly maintenance retainer",  price: "₦20,000 – ₦50,000 / month" },
  { name: "SEO & speed optimisation",      price: "₦35,000" },
  { name: "Logo design",                   price: "₦40,000 – ₦80,000" },
  { name: "Professional copywriting",      price: "₦30,000 – ₦60,000" },
  { name: "Social media banner set",       price: "₦25,000" },
];

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
export const caseStudies = [
  {
    slug: "golden-touch-decorations",
    client: "Golden Touch Decorations",
    category: "Decoration Studio",
    location: "Lagos",
    service: "The Full Brand",
    summary:
      "A celebrated Lagos decorator running her entire business through Instagram DMs — losing corporate clients daily because she had no professional web presence.",
    challenge:
      "Amaka had decorated over 200 events in 6 years and built a loyal Instagram following. But serious corporate clients — the ones with real budgets — wanted a professional vendor they could verify online. She was invisible to them.",
    solution:
      "We built a 5-page website with a curated gallery, services and pricing page, client testimonials, and an about section that told her story with authority. Business email and Google Business profile included.",
    results: [
      { value: "4×", label: "monthly inquiries" },
      { value: "₦2.1M", label: "new bookings in 90 days" },
      { value: "2", label: "corporate clients signed" },
    ],
    quote:
      "Before the website, serious clients would scroll my Instagram and move on. Now they find me on Google and call to confirm. The site paid for itself within the first week.",
    quoteName: "Amaka O.",
    quoteRole: "Founder, Golden Touch Decorations",
    accentColor: "#1A316E",
  },
  {
    slug: "mama-chinyere-catering",
    client: "Mama Chinyere Catering",
    category: "Catering",
    location: "Abuja",
    service: "The Booking Page",
    summary:
      "A beloved Abuja caterer with a decade of experience and a massive WhatsApp following — but zero online presence beyond word of mouth.",
    challenge:
      "Mama Chinyere had no way for new clients to find her or build trust without a personal recommendation. Every new customer had to be 'sold' individually, one conversation at a time.",
    solution:
      "A focused, stunning one-page website with a full menu gallery, package pricing, verified client reviews, and a WhatsApp booking button. Live in 4 days.",
    results: [
      { value: "60%", label: "increase in new inquiries" },
      { value: "5.0★", label: "average review score displayed" },
      { value: "4 days", label: "from brief to launch" },
    ],
    quote:
      "My customers now send other people the link. I didn't know a website could be this simple and still bring so much business.",
    quoteName: "Mrs. Chinyere A.",
    quoteRole: "Founder, Mama Chinyere Catering",
    accentColor: "#254385",
  },
  {
    slug: "rhythmbox-dj",
    client: "RhythmBox DJ Services",
    category: "Entertainment",
    location: "Port Harcourt",
    service: "The Full Brand",
    summary:
      "Port Harcourt's most-booked DJ was completely invisible online — missing corporate events and destination bookings worth millions.",
    challenge:
      "DJ Kingsley had a stellar local reputation but no digital footprint. Clients from other cities couldn't verify him, and he kept losing high-value corporate bookings to DJs with better websites.",
    solution:
      "A dark, sophisticated multi-page site with embedded mixes, a performance calendar, a press kit, and a booking request form. Optimised to rank for 'DJ Port Harcourt' on Google.",
    results: [
      { value: "#1", label: "on Google for 'DJ Port Harcourt'" },
      { value: "3", label: "destination events — month one" },
      { value: "₦800k", label: "in new corporate bookings" },
    ],
    quote:
      "I used to explain to clients why they should hire me. Now I just send the website and they call to confirm the date.",
    quoteName: "DJ Kingsley",
    quoteRole: "RhythmBox DJ Services, Port Harcourt",
    accentColor: "#112055",
  },
];

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "I thought a website was for big companies. They showed me it was exactly what my small decoration business needed. Bookings have not stopped since.",
    name: "Funmilayo A.",
    role: "Event Decorator, Lagos",
    initials: "FA",
  },
  {
    quote:
      "Professional, fast, and they actually understood my business. Most developers give you a generic template. These people built something that felt like me.",
    name: "Emeka O.",
    role: "Corporate Event Planner, Abuja",
    initials: "EO",
  },
  {
    quote:
      "My event center was only full in December. Now it stays booked every month. The online booking system changed everything.",
    name: "Mrs. Adaeze N.",
    role: "Owner, Crystal Hall Enugu",
    initials: "AN",
  },
  {
    quote:
      "They set up my business email in one day. Sounds small but it completely changed how clients see me. info@myvenue.com hits differently.",
    name: "Tunde B.",
    role: "Venue Manager, Ibadan",
    initials: "TB",
  },
  {
    quote:
      "The landing page they built for our Detty December promo delivered 3× more inquiries than the year before. Worth every naira.",
    name: "Chisom K.",
    role: "Party Planner, Lagos",
    initials: "CK",
  },
  {
    quote:
      "Honest, delivers on time, and the design was exactly what I envisioned. I have referred four vendor friends already — without being asked.",
    name: "Blessing I.",
    role: "Catering Business Owner, Port Harcourt",
    initials: "BI",
  },
];

// ─── PROCESS ──────────────────────────────────────────────────────────────────
export const processSteps = [
  {
    number: "I",
    title: "Discovery",
    description:
      "A focused 20-minute call to understand your business, your ideal clients, and what success looks like for you. No forms. No jargon. A real conversation.",
    timing: "Day 1",
  },
  {
    number: "II",
    title: "Proposal",
    description:
      "Within 24 hours you receive a clear, written proposal — scope, timeline, cost, and expected outcomes. No hidden fees. Ever.",
    timing: "Day 1–2",
  },
  {
    number: "III",
    title: "Design & Build",
    description:
      "We design and develop your site. You receive a private preview link before anything goes live. We refine until it is right.",
    timing: "Day 3–12",
  },
  {
    number: "IV",
    title: "Your Revisions",
    description:
      "Two rounds of revisions are included in every package. We ensure every word, image, and detail reflects your brand precisely.",
    timing: "Day 12–14",
  },
  {
    number: "V",
    title: "Launch",
    description:
      "We go live on your domain, connect your professional email, and submit your site to Google Search Console. You are open for business — 24 hours a day.",
    timing: "Day 14–16",
  },
  {
    number: "VI",
    title: "Continued Support",
    description:
      "We check in after launch, fix any issues, and remain available on WhatsApp. We are partners in your growth — not vendors who disappear.",
    timing: "Ongoing",
  },
];

// ─── BLOG ─────────────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    slug: "why-event-vendors-need-website",
    title: "Why Every Nigerian Event Vendor Needs a Website in 2025",
    excerpt:
      "You have 4,000 Instagram followers but no website. Here is exactly how much money that is costing you — and how to fix it this week.",
    category: "Business Growth",
    readTime: "5 min",
    date: "March 2025",
  },
  {
    slug: "instagram-vs-website",
    title: "Instagram Page vs. Website: Which Grows Your Event Business Faster?",
    excerpt:
      "Both matter. But there is a key difference between what you own and what can disappear overnight. Let us break it down clearly.",
    category: "Strategy",
    readTime: "4 min",
    date: "February 2025",
  },
  {
    slug: "luxury-events-client-experience",
    title: "The Secret to Attracting High-Paying Event Clients in Nigeria",
    excerpt:
      "They are paying ₦2M for a table. What they find when they Google you will determine whether they ever call. Here is what to do.",
    category: "Luxury Market",
    readTime: "6 min",
    date: "January 2025",
  },
  {
    slug: "business-email-matters",
    title: "Still Using Gmail for Your Business? Here Is What It Is Costing You",
    excerpt:
      "A professional email on your own domain costs under ₦5,000 per month. And it signals something your clients notice — every single time.",
    category: "Quick Wins",
    readTime: "3 min",
    date: "December 2024",
  },
];

// ─── LOCATIONS ────────────────────────────────────────────────────────────────
export const locations = [
  { city: "Lagos",        state: "Lagos State",  popular: true,  description: "Our home base. Serving event vendors across Lekki, VI, Ikeja, Lagos Island, and the Mainland." },
  { city: "Abuja",        state: "FCT",           popular: true,  description: "Serving planners and venues across Maitama, Wuse, Gwarinpa, Garki, and surrounding areas." },
  { city: "Port Harcourt",state: "Rivers State",  popular: true,  description: "PH's vibrant events scene — GRA, Trans-Amadi, Rumuola, and beyond." },
  { city: "Enugu",        state: "Enugu State",   popular: false, description: "Helping Enugu event businesses go premium online." },
  { city: "Ibadan",       state: "Oyo State",     popular: false, description: "One of Nigeria's largest cities, fully served." },
  { city: "Kano",         state: "Kano State",    popular: false, description: "Northern Nigeria's largest city, including bilingual-capable builds." },
  { city: "Benin City",   state: "Edo State",     popular: false, description: "Supporting Benin's growing events industry." },
  { city: "Warri",        state: "Delta State",   popular: false, description: "Warri knows how to celebrate. We make sure your business captures every booking." },
];

// ─── WHY US ───────────────────────────────────────────────────────────────────
export const whyUs = [
  {
    title: "Event Industry Exclusivity",
    description: "We work only with event businesses. That singular focus means we understand your clients, your language, and what genuinely moves the needle for your bookings.",
  },
  {
    title: "Premium Positioning",
    description: "Your website is the first thing a high-paying client sees. We build digital presences that match the quality of service you actually deliver.",
  },
  {
    title: "Transparent Pricing",
    description: "No vague quotes that double before completion. You receive a clear written proposal before we begin, and we honour it.",
  },
  {
    title: "Speed Without Compromise",
    description: "Most projects are live within 5–14 days. We have built systems that allow us to move fast without cutting corners on craft.",
  },
  {
    title: "Genuine After-Support",
    description: "We do not disappear after launch. We check in, fix issues, and are reachable on WhatsApp. You are a partner, not a transaction.",
  },
  {
    title: "Built to Convert",
    description: "Beautiful design that does not bring bookings is just decoration. Every layout decision we make is guided by one question: will this convert a visitor into a client?",
  },
];
