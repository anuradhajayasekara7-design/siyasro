export const dynamic = 'force-static';

const hostname = 'https://siyasroadvertising.com';

export default function sitemap() {
  return [
    { url: `${hostname}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${hostname}/image-gallery`, priority: 0.8 },
  ];
}
