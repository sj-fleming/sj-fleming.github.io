// next.config.mjs

const config = {
  output: 'export', // enables static export for GitHub Pages
  images: {
    unoptimized: true, // required if using next/image
  },
  experimental: {
    // if using Tailwind plugins or PostCSS, experimental options may go here if needed
  },
};

export default config;
