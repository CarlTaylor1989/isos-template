/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const federationConfig = (isServer) => ({
  name: "isos-template",
  filename: "static/chunks/remoteEntry.js",
  remotes: {
    // Add micro-frontend remotes here
    checkout: `checkout@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
    locations: `locations@http://localhost:3002/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`
  },
  exposes: {
    // Expose components and pages here
    "./footer": "./src/components/Footer.tsx",
    "./nav": "./src/components/Nav.tsx",
    "./home": "./src/pages/index.tsx"
  }
});

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin(federationConfig(isServer)),
      new FederatedTypesPlugin({
        federationConfig: federationConfig(isServer)
      })
    );
    return config;
  }
};

module.exports = nextConfig;
