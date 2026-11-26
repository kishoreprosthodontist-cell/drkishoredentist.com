import { useEffect } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { getDentistLocalBusinessSchema, getWebSiteSchema } from "@/components/seo/schemas";
import { Hero } from "@/components/home/Hero";
import { ClinicHighlights } from "@/components/home/ClinicHighlights";
import { FeaturedDoctor } from "@/components/home/FeaturedDoctor";
import { DentalReels } from "@/components/home/DentalReels";
import { TreatmentsOffered } from "@/components/home/TreatmentsOffered";
import { PromotionalAppointmentBanner } from "@/components/home/PromotionalAppointmentBanner";
import { DentalCommunicationShowcase } from "@/components/home/DentalCommunicationShowcase";
import { BeforeAfterShowcaseSection } from "@/components/home/BeforeAfterShowcaseSection";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { LatestDentalBlogs } from "@/components/home/LatestDentalBlogs";
import { FinalHomepageGallery } from "@/components/home/FinalHomepageGallery";
import { LocalCatchmentSection } from "@/components/home/LocalCatchmentSection";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F2EB]">
      <SEOHead
        title="Best Dental Clinic in Erode | Sri Saraswathi Dental | Dr. Kishore Kumar"
        description="Looking for the best dental clinic in Erode? Sri Saraswathi Dental Clinic at Surampatti Four Road offers gentle root canals, dental implants, braces, teeth cleaning & family dentistry."
        canonicalPath="/"
        keywords={[
          "Best Dental Clinic in Erode",
          "Dentist in Erode",
          "Dr Kishore Dentist",
          "Dentist Near Me",
          "Dental Clinic Near Me",
          "Best Dentist in Erode",
          "Dental Hospital in Erode",
          "Dentist in Surampatti",
          "Dental Clinic in Surampatti",
          "Dental Treatment in Erode",
          "Root Canal Treatment in Erode",
          "Dental Implants in Erode",
          "Teeth Cleaning in Erode",
        ]}
        schema={[getDentistLocalBusinessSchema(), getWebSiteSchema()]}
      />

      {/* Section 01 – Hero Banner */}
      <Hero />

      {/* Section 02 – Clinic Highlights */}
      <ClinicHighlights />

      {/* Section 03 – Featured Doctor Introduction */}
      <FeaturedDoctor />

      {/* Section 04 – Watch Our Dental Reels */}
      <DentalReels />

      {/* Section 05 – Treatments Offered */}
      <TreatmentsOffered />

      {/* Section 06 – Promotional Appointment Banner */}
      <PromotionalAppointmentBanner />

      {/* Section 07 – Dental Communication / Information Showcase */}
      <DentalCommunicationShowcase />

      {/* Section 08 – Before & After Showcase */}
      <BeforeAfterShowcaseSection />

      {/* Section 08B – Google Patient Reviews */}
      <GoogleReviewsSection />

      {/* Section 09 – Why Choose Us */}
      <WhyChooseUs />

      {/* Section 10 – Location, Directions & Feeder Areas */}
      <LocalCatchmentSection />

      {/* Section 11 – Latest Dental Blogs */}
      <LatestDentalBlogs />

      {/* Section 12 – Final Homepage Showcase / Gallery */}
      <FinalHomepageGallery />
    </main>
  );
}
