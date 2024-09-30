import Hero from "./components/ui/Hero";
import Banner from "./components/ui/Banner";

export default async function Page() {
  return (
    <div className="container mx-auto px-2 lg:px-5 flex flex-col items-center ">
      <Hero />
      <Banner />
    </div>
  );
}
