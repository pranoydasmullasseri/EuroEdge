/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.5:3000', '192.168.1.5', 'localhost:3000'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 85, 90, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // 1. Projects Routes -> /services (Section 35.B & 35.G)
      { source: '/projects', destination: '/services', permanent: true },
      { source: '/projects/:path*', destination: '/services', permanent: true },
      { source: '/portfolio', destination: '/services', permanent: true },
      { source: '/portfolio/:path*', destination: '/services', permanent: true },

      // 2. About-Related Invalid URLs -> /about (Section 35.E)
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/company', destination: '/about', permanent: true },
      { source: '/company-profile', destination: '/about', permanent: true },
      { source: '/who-we-are', destination: '/about', permanent: true },

      // 3. Contact-Related Invalid URLs -> /contact (Section 35.F)
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/get-in-touch', destination: '/contact', permanent: true },
      { source: '/request-quote', destination: '/contact', permanent: true },
      { source: '/quote', destination: '/contact', permanent: true },

      // 4. Service Aliases & Shortcuts (Section 35.C)
      { source: '/mep', destination: '/services/mep-technical-works', permanent: true },
      { source: '/mep-works', destination: '/services/mep-technical-works', permanent: true },
      { source: '/mep-services', destination: '/services/mep-technical-works', permanent: true },
      { source: '/electrical', destination: '/services/mep-technical-works', permanent: true },
      { source: '/electrical-works', destination: '/services/mep-technical-works', permanent: true },
      { source: '/plumbing', destination: '/services/mep-technical-works', permanent: true },
      { source: '/plumbing-works', destination: '/services/mep-technical-works', permanent: true },
      { source: '/hvac', destination: '/services/mep-technical-works', permanent: true },
      { source: '/ac', destination: '/services/mep-technical-works', permanent: true },
      { source: '/ac-maintenance', destination: '/services/mep-technical-works', permanent: true },
      { source: '/ac-hvac-works', destination: '/services/mep-technical-works', permanent: true },

      { source: '/civil', destination: '/services/civil-finishing-works', permanent: true },
      { source: '/civil-works', destination: '/services/civil-finishing-works', permanent: true },
      { source: '/finishing', destination: '/services/civil-finishing-works', permanent: true },
      { source: '/civil-finishing', destination: '/services/civil-finishing-works', permanent: true },
      { source: '/painting', destination: '/services/civil-finishing-works', permanent: true },
      { source: '/tiling', destination: '/services/civil-finishing-works', permanent: true },
      { source: '/plastering', destination: '/services/civil-finishing-works', permanent: true },
      { source: '/carpentry', destination: '/services/civil-finishing-works', permanent: true },

      { source: '/pool', destination: '/services/swimming-pool-works', permanent: true },
      { source: '/pools', destination: '/services/swimming-pool-works', permanent: true },
      { source: '/swimming-pool', destination: '/services/swimming-pool-works', permanent: true },
      { source: '/swimming-pools', destination: '/services/swimming-pool-works', permanent: true },
      { source: '/pool-construction', destination: '/services/swimming-pool-works', permanent: true },
      { source: '/waterproofing', destination: '/services/swimming-pool-works', permanent: true },

      { source: '/landscaping', destination: '/services/landscaping-works', permanent: true },
      { source: '/landscaping-works', destination: '/services/landscaping-works', permanent: true },
      { source: '/irrigation', destination: '/services/landscaping-works', permanent: true },

      { source: '/maintenance', destination: '/services/general-maintenance', permanent: true },
      { source: '/general-maintenance', destination: '/services/general-maintenance', permanent: true },
      { source: '/amc', destination: '/services/general-maintenance', permanent: true },
      { source: '/building-maintenance', destination: '/services/general-maintenance', permanent: true },
      { source: '/villa-maintenance', destination: '/services/general-maintenance', permanent: true },
    ]
  },
}

export default nextConfig
