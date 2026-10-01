import { Inter_Tight } from 'next/font/google';
import './globals.css';

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

const siteUrl = 'https://siyasroadvertising.com';
const title = 'Siyasro Advertising | Creative Advertising Solutions in Sri Lanka';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description:
    'Siyasro Advertising provides professional and creative advertising solutions in Sri Lanka, including branding, signage, printing, and digital marketing.',
  keywords: [
    'Siyasro Advertising',
    'advertising Sri Lanka',
    'branding',
    'printing',
    'signage',
    'creative design',
    'marketing',
  ],
  authors: [{ name: 'Siyasro Advertising' }],
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  appleWebApp: { title: 'Siyasro Advertising' },
  openGraph: {
    type: 'website',
    url: '/',
    title,
    description:
      'Discover Siyasro Advertising, your trusted partner for branding, printing, signage, and digital marketing solutions in Sri Lanka.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description:
      'Siyasro Advertising provides creative and professional advertising services in Sri Lanka.',
    images: ['/og-image.jpg'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Siyasro Advertising',
  url: siteUrl,
  logo: `${siteUrl}/favicon-96x96.png`,
  sameAs: [
    'https://www.facebook.com/yourpage',
    'https://www.instagram.com/yourpage',
    'https://www.linkedin.com/company/yourpage',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
