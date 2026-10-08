import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { JsonLd } from '@/components/json-ld'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: "Technical Services & MEP Contractor Dubai | Euro Edge Technical Services L.L.C.",
  description: "Euro Edge Technical Services L.L.C. delivers certified MEP, civil finishing, swimming pool, landscaping, and building maintenance contracting across Dubai and the UAE. Request a free quote today.",
  keywords: [
    "MEP contractor Dubai",
    "technical services company Dubai",
    "civil contractor Dubai",
    "HVAC installation Dubai",
    "electrical contractor Dubai",
    "plumbing services Dubai",
    "building maintenance Dubai",
    "swimming pool contractor Dubai",
    "landscaping company Dubai",
    "Euro Edge Technical Services",
  ],
  alternates: {
    canonical: 'https://www.euroedgets.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
    openGraph: {
    title: "Technical Services & MEP Contractor Dubai | Euro Edge Technical Services L.L.C.",
    description: "Euro Edge Technical Services L.L.C. delivers certified MEP, civil finishing, swimming pool, landscaping, and building maintenance contracting across Dubai and the UAE.",
    type: 'website',
    url: 'https://www.euroedgets.com/',
    siteName: 'Euro Edge Technical Services L.L.C.',
    locale: 'en_AE',
    images: [
      {
        url: 'https://www.euroedgets.com/images/hero-dubai-skyline.jpg',
        width: 1200,
        height: 630,
        alt: 'Euro Edge Technical Services Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technical Services & MEP Contractor Dubai | Euro Edge Technical Services L.L.C.",
    description: "Certified MEP, civil finishing, swimming pool, landscaping, and building maintenance contracting across Dubai and the UAE.",
    images: ['https://www.euroedgets.com/images/hero-dubai-skyline.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
