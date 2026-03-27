'use client'

import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import TrustSection from '@/components/trust-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import ProductsSection from '@/components/products-section'
import AmazonStoreSection from '@/components/amazon-store-section'
import LeadMagnetSection from '@/components/lead-magnet-section'
import AIAssistantSection from '@/components/ai-assistant-section'
import TestimonialsSection from '@/components/testimonials-section'
import BlogPreviewSection from '@/components/blog-preview-section'
import BookingSection from '@/components/booking-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <HeroSection />
      {/* <TrustSection /> */}
      {/* <AboutSection /> */}
      <ServicesSection />
      <ProductsSection />
      <AmazonStoreSection />
      <LeadMagnetSection />
      <AIAssistantSection />
      {/* <TestimonialsSection /> */}
      <BlogPreviewSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
