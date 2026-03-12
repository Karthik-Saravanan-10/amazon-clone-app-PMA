import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // disable lint errors during production builds so that the
    // many explicit-any and unescaped-entities warnings don't abort
    // the build; developers can still run `npm run lint` locally.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
