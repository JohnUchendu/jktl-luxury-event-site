import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, businessType, service, budget, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── Option A: Resend ─────────────────────────────────────────────────────
    // Uncomment after adding RESEND_API_KEY to .env.local
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@celebrationweb.ng",
    //   to: "hello@celebrationweb.ng",
    //   subject: `New enquiry — ${businessType || "Event Business"} | ${name}`,
    //   text: [
    //     `Name:          ${name}`,
    //     `Phone/WA:      ${phone}`,
    //     `Email:         ${email || "Not provided"}`,
    //     `Business Type: ${businessType || "Not specified"}`,
    //     `Package:       ${service || "Not specified"}`,
    //     `Budget:        ${budget || "Not specified"}`,
    //     ``,
    //     `Message:`,
    //     message,
    //   ].join("\n"),
    // });

    // ── Option B: Console log (dev fallback) ─────────────────────────────────
    console.log("New enquiry:", {
      name, email, phone, businessType, service, budget, message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
