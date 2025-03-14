// src/app/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import FeaturedEventsSection from '@/components/sections/FeaturedEventsSection';
import AppDownloadSection from '@/components/sections/AppDownloadSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedEventsSection />
      <AppDownloadSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}