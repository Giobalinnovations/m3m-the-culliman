import Hero from '@/components/sections/hero';
import ScrollToTop from '@/components/scroll-to-top';

import AboutUs from '@/components/sections/about-us';

import Projects from '@/components/sections/projects';
import EpicentreSection from '@/components/sections/EpicentreSection';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/*  */}
        <Hero />
        <AboutUs />
        <Projects />
        <EpicentreSection />
        <ScrollToTop />
      </main>
    </>
  );
}
