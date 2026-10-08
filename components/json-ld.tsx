import { servicesData } from "@/lib/services-data"

export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.euroedgets.com/#website",
        "url": "https://www.euroedgets.com/",
        "name": "Euro Edge Technical Services L.L.C.",
        "alternateName": ["Euro Edge", "Euro Edge Dubai", "Euro Edge Technical Services"],
        "description": "Euro Edge Technical Services L.L.C. delivers certified MEP, civil finishing, swimming pool, landscaping, and building maintenance contracting across Dubai and the UAE.",
        "inLanguage": "en",
        "publisher": {
          "@id": "https://www.euroedgets.com/#organization"
        }
      },
      {
        "@type": ["LocalBusiness", "Organization", "GeneralContractor"],
        "@id": "https://www.euroedgets.com/#organization",
        "name": "Euro Edge Technical Services L.L.C.",
        "alternateName": ["Euro Edge", "Euro Edge Dubai", "Euro Edge Technical Services"],
        "url": "https://www.euroedgets.com/",
        "logo": "https://www.euroedgets.com/images/logo.png",
        "image": "https://www.euroedgets.com/images/hero-dubai-skyline.jpg",
        "description": "Euro Edge Technical Services L.L.C. delivers certified MEP, civil finishing, swimming pool, landscaping, and building maintenance contracting across Dubai and the UAE.",
        "telephone": "+971543909946",
        "email": "info@euroedgets.com",
        "priceRange": "$$",
        "currenciesAccepted": "AED",
        "paymentAccepted": "Cash, Bank Transfer, Cheque",
        "inLanguage": "en",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Quoz Industrial Area",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.1634,
          "longitude": 55.2205
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+971543909946",
            "contactType": "customer service",
            "contactOption": "TollFree",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
          },
          {
            "@type": "ContactPoint",
            "email": "info@euroedgets.com",
            "contactType": "sales",
            "areaServed": "AE"
          }
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Dubai",
            "sameAs": "https://www.wikidata.org/wiki/Q612"
          },
          {
            "@type": "Country",
            "name": "United Arab Emirates",
            "sameAs": "https://www.wikidata.org/wiki/Q878"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Technical Contracting Services & MEP Works Catalog",
          "itemListElement": servicesData.map((service, index) => ({
            "@type": "OfferCatalog",
            "name": service.title,
            "position": index + 1,
            "url": `https://www.euroedgets.com/services/${service.slug}`
          }))
        },
        "potentialAction": {
          "@type": "CommunicateAction",
          "target": "https://www.euroedgets.com/contact",
          "name": "Request a Quote"
        },
        "sameAs": [
          "https://wa.me/971543909946",
          "https://www.instagram.com/euro_edge",
          "https://www.linkedin.com/company/euro-edge-technical-services-llc/"
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  )
}
