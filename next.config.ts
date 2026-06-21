import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 uses Cache Components for component-level static/dynamic rendering.
  // Without this flag, rendering decisions are mostly route-level, which is why
  // the previous "partly static" example ended up behaving as fully static.
  cacheComponents: true,
  output: "standalone",

  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
