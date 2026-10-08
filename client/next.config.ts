import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["youandi.dev", "www.youandi.dev"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host.replace(/\./g, "\\.") }],
      destination: "https://www.youandai.dev/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
