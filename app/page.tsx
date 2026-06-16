import SiteHeader from "@/components/sections/SiteHeader";
import TrustHero from "@/components/sections/TrustHero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import ShkIntro from "@/components/sections/ShkIntro";
import GewerkHub from "@/components/sections/GewerkHub";
import WhyHLS from "@/components/sections/WhyHLS";
import ReviewsMarquee from "@/components/sections/ReviewsMarquee";
import HeatingConfigurator from "@/components/configurators/HeatingConfigurator";
import SocialProofGallery from "@/components/sections/SocialProofGallery";
import RecruitingSection from "@/components/sections/RecruitingSection";
import ContactSection from "@/components/sections/ContactSection";
import LocationMap from "@/components/sections/LocationMap";
import SiteFooter from "@/components/sections/SiteFooter";
import RecruitingStickyBanner from "@/components/RecruitingStickyBanner";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <TrustHero />
        <BrandMarquee />
        <ShkIntro />
        <GewerkHub />
        <WhyHLS />
        <ReviewsMarquee />
        <HeatingConfigurator />
        <SocialProofGallery />
        <RecruitingSection />
        <ContactSection />
        <LocationMap />
      </main>
      <SiteFooter />
      <RecruitingStickyBanner />
    </>
  );
}
