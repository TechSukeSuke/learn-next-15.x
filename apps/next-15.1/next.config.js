/** @type {import('next').NextConfig} */
const nextConfig = {
  // To try both forbidden and unauthorized API.
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
