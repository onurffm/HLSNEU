import type { Metadata } from "next";
import { Open_Sans, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Open Sans = Original-Hausschrift der HLS-Seite (Fließtext).
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "HLS Haustechnik Leipzig | Wärmepumpe, Photovoltaik, Sanitär & Klima",
    template: "%s | HLS Haustechnik Leipzig",
  },
  description:
    "Meisterbetrieb für Wärmepumpen, PV-Komplettsysteme, hochwertigen Badbau und Klimatechnik in Leipzig. 5,0 Sterne bei Google. Kostenlose Ersteinschätzung anfragen.",
  keywords: [
    "Wärmepumpe Leipzig",
    "Heizung Leipzig",
    "Photovoltaik Leipzig",
    "Badsanierung Leipzig",
    "Sanitär Leipzig",
    "Klimaanlage Leipzig",
    "Anlagenmechaniker Leipzig",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: "HLS Haustechnik Leipzig | Wärmepumpe, PV, Sanitär & Klima",
    description:
      "Meisterbetrieb mit 5,0 Sternen. Wärmepumpen, Photovoltaik, Badbau und Klimatechnik aus Leipzig.",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "HLS Haustechnik Leipzig",
      },
    ],
  },
  robots: { index: true, follow: true },
};

// LocalBusiness-Strukturdaten (starkes lokales SEO-Signal)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: site.name,
  image: `${site.url}/images/og.jpg`,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.lat,
    longitude: site.address.lng,
  },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  sameAs: [site.social.instagram, site.social.facebook],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: 5,
  },
  priceRange: "€€€",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${openSans.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
