
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { JobListingsSection } from "@/components/sections/JobListingsSection";
import { QuickApplySection } from "@/components/sections/QuickApplySection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { GoogleMap } from "@/components/GoogleMap";
import { Helmet } from "react-helmet-async";
import { StructuredData } from "@/components/SEO/StructuredData";
import { SocialMediaCards } from "@/components/SEO/SocialMediaCards";

const Index = () => {
  const organizationData = {
    name: "Sofitel Frankfurt Opera",
    url: "https://sofitel-frankfurt-careers.com",
    logo: "/lovable-uploads/3a302ffc-3de0-4cfa-bb45-17de1a0e13a7.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opernplatz 16",
      addressLocality: "Frankfurt am Main",
      postalCode: "60313",
      addressCountry: "DE"
    },
    sameAs: [
      "https://www.facebook.com/SofitelFrankfurtOpera",
      "https://www.instagram.com/sofitelfrankfurtopera/",
      "https://www.linkedin.com/company/sofitel-frankfurt-opera"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+4915210840824",
      contactType: "customer service"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers at Sofitel Frankfurt Opera | Luxury Hospitality Jobs</title>
        <meta name="description" content="Join our exceptional team at Sofitel Frankfurt Opera and build your career in luxury hospitality. Explore current job openings in Frankfurt, including chef, front desk, housekeeping, and management positions. Apply now to our Global Talent Program for international opportunities." />
        <meta name="keywords" content="Sofitel Frankfurt Opera careers, luxury hotel jobs, hospitality employment Frankfurt, Opernplatz hotel jobs, concierge jobs, chef positions Frankfurt, 5-star hotel careers, hotel management jobs, Frankfurt hospitality industry, Accor careers Germany, luxury accommodation staff, hotel front desk opportunities, Sofitel recruitment, luxury service careers" />
        
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Sofitel Frankfurt Opera" />
        <meta name="geo.region" content="DE-HE" />
        <meta name="geo.placename" content="Frankfurt am Main" />
        <meta name="geo.position" content="50.1155;8.6742" />
        <meta name="ICBM" content="50.1155, 8.6742" />
      </Helmet>
      <SocialMediaCards 
        title="Careers at Sofitel Frankfurt Opera | Luxury Hospitality Jobs in Germany"
        description="Join our exceptional team at Sofitel Frankfurt Opera and build your career in luxury hospitality. Competitive salary, professional development, and international opportunities await in the heart of Frankfurt."
        image="/lovable-uploads/1352e9d8-a09e-4f71-a975-8b9766e5905f.png"
        url="/"
        keywords="Sofitel Frankfurt Opera careers, luxury hotel jobs, hospitality employment Frankfurt, 5-star hotel careers, hotel management jobs, chef positions Frankfurt, concierge jobs, Accor careers Germany, hotel front desk opportunities"
      />
      <StructuredData type="Organization" data={organizationData} />
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <BenefitsSection />
        <JobListingsSection />
        <QuickApplySection />
        <GoogleMap />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
