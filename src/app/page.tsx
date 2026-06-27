import IntroReveal from "@/components/IntroReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TastingJourney from "@/components/sections/TastingJourney";
import MenuPreview from "@/components/sections/MenuPreview";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Reservation from "@/components/sections/Reservation";

/**
 * L'Épicure — One-page luxury restaurant homepage.
 *
 * Structure:
 *  1. IntroReveal   — Cinematic entry animation
 *  2. Navbar        — Fixed glassmorphism navigation
 *  3. Hero          — Full-screen cinematic hero
 *  4. TastingJourney — Seven-course chef's tasting journey
 *  5. MenuPreview   — À la carte tabbed menu
 *  6. Story         — Brand story & chef philosophy
 *  7. Gallery       — Masonry food & atmosphere gallery
 *  8. Reservation   — Booking form
 *  9. Footer        — Brand, hours, contact, social
 */
export default function HomePage() {
  return (
    <>
      {/* Cinematic intro */}
      <IntroReveal />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />
        <TastingJourney />
        <MenuPreview />
        <Story />
        <Gallery />
        <Reservation />
      </main>

      <Footer />
    </>
  );
}
