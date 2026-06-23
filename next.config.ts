import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
    output: 'export' generates a fully-static site in the `out/` directory.
    Required for GitHub Pages, which can only serve static files.
  */
  output: "export",

  /*
    trailingSlash: true writes each page as an index.html inside a folder
    (e.g. /about/index.html). This prevents 404s when users navigate directly
    to a URL on GitHub Pages, which doesn't support server-side routing.
  */
  trailingSlash: true,

  /*
    images.unoptimized: true disables Next.js image optimization, which
    requires a Node.js server. All images are served as-is from public/.
    This is acceptable for a static portfolio site.
  */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

