import Footer from "./components/layout/Footer";
import SelectedWork from "./components/SelectedWork";
import HeroSection from "./components/ui/HeroSection";

export default async function Page() {
  return (
    <div className="w-full  ">
      <HeroSection />

      <SelectedWork />
      <Footer />
    </div>
  );
}
