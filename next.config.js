/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  async rewrites() {
    return [
      {
        source: "/me",
        destination: "/components/profile",
      },
    ];
  },
};

module.exports = nextConfig
