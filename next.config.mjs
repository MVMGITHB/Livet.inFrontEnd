// next.config.mjs
const nextConfig = {
  images: {
    domains: ['www.livelivet.in', 'images.livemint.com'],
  },
  experimental: {
    allowedDevOrigins: [
      'https://www.tvsmotor.com', // Add any domain making cross-origin requests to /_next/*
      'chrome-extension://*',     // Optional: to allow browser devtools
    ],
  },
};

export default nextConfig;
