import TakeCareBannerSection from "./TakeCareBannerSection";
import TakeCareLeftSection from "./TakeCareLeftSection";

const TakeCare = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 py-16 items-center">
            <div className="w-full lg:w-[470px]" data-aos="fade-up" data-aos-delay="200">
                <TakeCareLeftSection />
            </div>
            <div className="flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="200">
                <TakeCareBannerSection />
            </div>
        </div>
    );
};

export default TakeCare;
