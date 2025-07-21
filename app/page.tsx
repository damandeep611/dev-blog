import Footer from "./components/layout/Footer";
import HeroSection from "./components/ui/HeroSection";
import WorkSection from "./components/WorkSection";

export default async function Page() {
  return (
    <div className="w-full  ">
      <HeroSection />
      <WorkSection />
      <Footer />
    </div>
  );
}
