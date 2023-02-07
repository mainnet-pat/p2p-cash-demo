/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.resolve.alias = {...config.resolve.alias, ...{
      fs: false,
      net: false,
      tls: false,
      buffer: require.resolve('buffer/'),
      bufferutil: false,
      'utf-8-validate': false,
    }};

    return config
  },
}

module.exports = nextConfig
