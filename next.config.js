const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/menu_1",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["developer1.zingotv.com", "developer.zingotv.com"],
  },
};

module.exports = nextConfig;
