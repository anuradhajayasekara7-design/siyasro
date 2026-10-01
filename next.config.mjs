/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export to `out/` for Firebase Hosting
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
