import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureIntro from "./components/FeatureIntro";
import SocialBanner from "./components/SocialBanner";
import ScreensCarousel from "./components/ScreensCarousel";
import DownloadBanner from "./components/DownloadBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <Hero />
      <FeatureIntro />
      <SocialBanner />
      <ScreensCarousel />
      <DownloadBanner />
      <Footer />
    </div>
  );
}
