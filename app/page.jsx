import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import NewSeasonBanner from "./components/NewSeasonBanner";
import TrustBadges from "./components/TrustBadges";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <NewSeasonBanner />
        <TrustBadges />
      </div>
      <FeaturedProducts />
    </>
  );
}
