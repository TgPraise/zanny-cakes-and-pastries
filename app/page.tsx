import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import { FeaturedCollections } from '@/components/sections/FeaturedCollections'
import { WhyChooseZanny } from '@/components/sections/WhyChooseZanny'
import { ZannyExperience } from '@/components/sections/ZannyExperience'
import { GalleryMasonry } from '@/components/sections/GalleryMasonry'
import { CakeBuilder } from '@/components/sections/CakeBuilder'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'
import { Contact } from '@/components/sections/Contact'

export default function Page() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <FeaturedCollections />
      <WhyChooseZanny />
      <ZannyExperience />
      <GalleryMasonry />
      <CakeBuilder />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTABanner />
      <Footer />
    </main>
  )
}
