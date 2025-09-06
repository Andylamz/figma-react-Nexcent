import HeroDescription from "./HeroDescription";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section id="hero" className="bg-[#F5F7FA]">
      <div className="flex justify-center item-center py-24 px-36 gap-26 max-w-[1440px] mx-auto">
        <HeroDescription />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
