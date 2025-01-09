import Hero from '@/components/sections/hero';
import ScrollToTop from '@/components/scroll-to-top';
import AboutUs from '@/components/sections/about-us';
import LegacySection from '@/components/sections/legacy-section';
import KeyFactsSection from '@/components/sections/key-facts';
import NoidaHighlights from '@/components/sections/noida-highlights';
import WhyInvest from '@/components/sections/why-invest';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/*  */}
        <Hero />
        <AboutUs />
        <LegacySection />
        <KeyFactsSection />
        <NoidaHighlights />
        <WhyInvest />

        <ScrollToTop />
      </main>
    </>
  );
}
