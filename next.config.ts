/** @type {import('next').NextConfig} */

import { resolve } from "path";
import nextPWA from "next-pwa";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: process.env.DOMAIN,
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    DOMAIN: process.env.DOMAIN,
  },
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": resolve(__dirname, "src/styles"),
      "@resources": resolve(__dirname, "src/styles/resources"),
      "@variables": resolve(__dirname, "src/styles/resources/variables"),
      "@mixins": resolve(__dirname, "src/styles/resources/mixins"),
      "@rfs": resolve(__dirname, "node_modules/rfs/scss"),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        "babel-loader",
        {
          loader: "react-svg-loader",
          options: {
            svgo: {
              plugins: [{ removeDimensions: true, removeViewBox: false }],
              floatPrecision: 2,
            },
          },
        },
      ],
    });

    return config;
  },
};

export default withPWA(nextConfig);
