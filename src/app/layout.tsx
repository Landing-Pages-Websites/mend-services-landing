import type { Metadata } from "next";
import { Barlow, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { buildPageMetadata } from "@/lib/metadata";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const MEGA_SITE_ID = "052115f8-dc18-4a06-88b3-3bc4bfb437ae";
const MEGA_SITE_KEY = "tmfxv2p6ekedj438";
const GTM_ID = "GTM-PS3FRNNC";

export const metadata: Metadata = buildPageMetadata({
  title:
    "AC Repair, Plumbing & Electrical in Greater Austin | Mend Services",
  description:
    "Same-day AC repair, plumbing and electrical service across Greater Austin. Licensed master pros, 24/7 emergency service, a one-year parts & labor warranty and a 4.9-star Google rating. Call (737) 249-6457.",
  path: "/",
  image: "/images/hero-hvac.jpg",
  imageAlt:
    "Mend Services technician servicing a home air-conditioning unit outside an Austin-area home",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${montserrat.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="mega-site-id" content={MEGA_SITE_ID} />
        {/* MegaTag optimizer — config must run before the optimizer script */}
        <Script id="mega-tag-config" strategy="beforeInteractive">
          {`window.MEGA_TAG_CONFIG={siteKey:"${MEGA_SITE_KEY}",siteId:"${MEGA_SITE_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`}
        </Script>
        <Script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={MEGA_SITE_ID}
          strategy="beforeInteractive"
        />
        {/* Google Tag Manager — Google Ads conversion tracking + GA4 */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
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

        {/* CallTrackingMetrics — shared MEGA universal CTM script (required for call attribution) */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
