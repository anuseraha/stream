import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoCloud } from "@/components/logo-cloud"
import { FeaturesSection } from "@/components/features-section"
import { TaskManagementSection } from "@/components/task-management-section"
import { OverachieverSection } from "@/components/overachiever-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { BenefitSection } from "@/components/benefit-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <TaskManagementSection />
      <OverachieverSection />
      <TestimonialsSection />
      <StatsSection />
      <BenefitSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
