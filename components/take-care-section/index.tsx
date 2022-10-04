import TakeCareBannerSection from "./TakeCareBannerSection";
import TakeCareLeftSection from "./TakeCareLeftSection";

const TakeCare = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-12 py-16">
            <div className="col-span-2 mt-10" >
                <TakeCareLeftSection />
            </div>
            <div className="col-span-3 flex justify-center lg:justify-end">
                <TakeCareBannerSection />
            </div>
        </div>
    );
};

export default TakeCare;
