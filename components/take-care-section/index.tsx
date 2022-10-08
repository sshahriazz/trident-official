import TakeCareBannerSection from "./TakeCareBannerSection";
import TakeCareLeftSection from "./TakeCareLeftSection";

const TakeCare = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-20">
      <div className="md:w-[50%]">
        <TakeCareLeftSection />
      </div>
      <div className="md:w-[50%]">
        <TakeCareBannerSection />
      </div>
    </div>
  );
};

export default TakeCare;
