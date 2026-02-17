import type { Metadata } from "next";
import { playfair, inter, cormorant } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Kalyan's Premier Hotel & Banquet Venue`,
  description:
    "Kalyan East's most trusted venue for weddings, events, and celebrations. 3 banquet halls accommodating up to 1000 guests. Fine dining, premium bar, and comfortable rooms.",
  keywords: [
    "hotel kalyan",
    "banquet hall kalyan",
    "wedding venue kalyan east",
    "hotel kashish international",
  ],
  openGraph: {
    title: `${siteConfig.name} | Where Every Occasion Finds Its Place`,
    description:
      "Kalyan East's premier destination for celebrations, dining, and stays.",
    url: "https://hotelkashish.in",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: siteConfig.name,
  description:
    "Kalyan East's premier destination for celebrations, dining, and stays.",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line2}, ${siteConfig.address.line3}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.pincode,
    addressCountry: "IN",
  },
  telephone: siteConfig.phone,
  url: "https://hotelkashish.in",
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
