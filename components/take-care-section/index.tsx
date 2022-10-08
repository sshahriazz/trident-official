import TakeCareBannerSection from "./TakeCareBannerSection";
import TakeCareLeftSection from "./TakeCareLeftSection";

const TakeCare = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="lg:w-[45%]">
        <TakeCareLeftSection />
      </div>
      <div className="lg:w-[50%] hidden lg:block">
        <TakeCareBannerSection />
      </div>
    </div>
  );
};

export default TakeCare;
