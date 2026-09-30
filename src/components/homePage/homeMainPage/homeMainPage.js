import HeroSection from "./sections/HeroSection";
import CategoryBanner from "./sections/CategoryBanner";
import PromoBanners from './sections/PromoBanners';
import PopularProducts from './sections/PopularProducts';
import FeaturesBar from './sections/FeaturesBar';

export default function HomeMainPage() {
  return (
    <div className="bg-[#FAF8F5] text-gray-800 font-sans">
      <HeroSection />
      <CategoryBanner />
      <PromoBanners />
      <PopularProducts />
      <FeaturesBar />
    </div>
  );
}