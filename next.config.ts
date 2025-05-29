import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'lastfm.freetls.fastly.net',
      port: '',
    }, {
      protocol: 'https',
      hostname: 'londontransit.org.uk',
      port: ''
    }, {
      protocol: 'https',
      hostname: 'formaliser.net',
      port: ''
    }]
  },
  allowedDevOrigins: ['development.martinsmacbook.net', 'martinsmacbook.local'],
  devIndicators: false
};

export default nextConfig;
