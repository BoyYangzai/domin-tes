/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      // {
      //   source: "/chat",
      //   destination: "/",
      //   permanent: true,
      // },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/social/:path*",
        destination: "https://stg-web-social.mirrorx.ai/api/social/:path*",
      },
      {
        source: "/health",
        destination: "/api/health",
      }
    ];
  }
};

export default nextConfig;
