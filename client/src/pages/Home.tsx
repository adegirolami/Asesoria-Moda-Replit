import HeroSection from "@/components/HeroSection";
import ValidationSection from "@/components/ValidationSection";
import OpportunitySection from "@/components/OpportunitySection";
import TransformationSection from "@/components/TransformationSection";
import MethodologySection from "@/components/MethodologySection";
import IncludedSection from "@/components/IncludedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AuthorSection from "@/components/AuthorSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValidationSection />
      <OpportunitySection />
      <TransformationSection />
      <MethodologySection />
      <IncludedSection />
      <TestimonialsSection />
      <AuthorSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
