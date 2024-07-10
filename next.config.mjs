/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/chat",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/customAPI/:path*",
        destination: "https://stg-social.hydrox.ai/api/social/:path*",
      },
      {
        source: "/health",
        destination: "/api/health",
      }
    ];
  },
};

export default nextConfig;
