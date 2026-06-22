import type { Metadata } from "next";

export const siteUrl = "https://book.tlcscape.com";
export const siteName = "TLC Landscape";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  socialTitle?: string;
  socialDescription?: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = "/images/hero-hardscape.jpg",
  imageAlt = "Custom paver patio, water feature and lush landscaping in a Boise, Idaho backyard by TLC Landscape",
  socialTitle,
  socialDescription,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const openGraphTitle = socialTitle ?? title;
  const openGraphDescription = socialDescription ?? description;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      url,
      siteName,
      locale: "en_US",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
  };
}
