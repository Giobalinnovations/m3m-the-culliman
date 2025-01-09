import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'M3M The Cullinan: Luxury Residences in Gurugram.',
  description:
    "Discover M3M The Cullinan, ultra-luxurious residences at Gurugram's most exclusive address. The world's best amenities, prime locations, and unmatched grandeur are in store for you. Book your dream home today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
