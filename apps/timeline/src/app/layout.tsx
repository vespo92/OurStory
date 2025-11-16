import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OurStory - Comprehensive Historical Timeline',
  description:
    'A comprehensive historical timeline comparing academic and alternative sources across all of human history',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
