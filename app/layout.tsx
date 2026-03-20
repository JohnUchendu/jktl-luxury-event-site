import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "JK Technology Limited — Premium Web Design for Nigerian Event Businesses",
  description:
    "We craft premium websites for Nigeria's finest event businesses — decorators, caterers, DJs, planners, and event centers that serve discerning clientele.",
  keywords:
    "luxury web design Nigeria, premium event business website Lagos, high-end event website, event center website Nigeria",
  openGraph: {
    title: "CelebrationWeb — Premium Web Design for Nigerian Event Businesses",
    description:
      "Your high-paying clients judge your business by your website before they ever meet you. Make it exceptional.",
    url: "https://jktl.com.ng",
    siteName: "JK Technology Limited",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
