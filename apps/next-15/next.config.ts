import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // About react compiler
    reactCompiler: {
      compilationMode: 'annotation',
    },
  },

  // About devIndicators
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
};

export default nextConfig;
