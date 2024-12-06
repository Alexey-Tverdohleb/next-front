/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async function () {
    return [
      {
        source: '/',
        destination: '/minting',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  webpack: function (config) {
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};

module.exports = nextConfig;
