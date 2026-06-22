import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { buildPageMetadata } from "@/lib/metadata";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const MEGA_SITE_ID = "6a835edf-0900-4f02-8bd2-e7b5f3e312c6";
const MEGA_SITE_KEY = "q6ub65gp7dd7bzs8";
const GTM_ID = "GTM-T9JVNGD2";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Landscape Design, Patios & Hardscaping in Boise, ID | TLC Landscape",
  description:
    "Custom paver patios, retaining walls, water features & full landscape design across Boise and the Treasure Valley. Owner-operated, 25+ years, 1,000+ projects. Schedule your free on-site consultation.",
  path: "/",
  image: "/images/hero-hardscape.jpg",
  imageAlt:
    "Custom paver patio, water feature and lush landscaping in a Boise, Idaho backyard by TLC Landscape",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="mega-site-id" content={MEGA_SITE_ID} />
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* MegaTag optimizer — config must run before the optimizer script */}
        <Script id="mega-tag-config" strategy="beforeInteractive">
          {`window.MEGA_TAG_CONFIG={siteKey:"${MEGA_SITE_KEY}",siteId:"${MEGA_SITE_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`}
        </Script>
        <Script
          id="gomega-optimizer"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={MEGA_SITE_ID}
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans bg-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />

        {/* CallTrackingMetrics — shared MEGA universal CTM script */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
