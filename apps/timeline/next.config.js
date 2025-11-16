/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@ourstory/timeline-engine',
    '@ourstory/contradiction-tracker',
    '@ourstory/religious-texts',
    '@ourstory/ancient-civilizations',
    '@ourstory/alternative-history',
    '@ourstory/declassified-docs',
    '@ourstory/ui',
  ],
};

module.exports = nextConfig;
