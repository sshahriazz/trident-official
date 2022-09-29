import Image from "next/image";
import React from "react";
import TridentBanner from "assets/blogs-image/trident-track-banner.png";
// import Activity from "assets/blogs-image/Activity.png";
import { Button } from "components/common";
// import { Progress } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ProgressBar from "./ProgressBar";
import { trackProgressData, trackData } from "content/component/track-data";

const index = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 pb-[120px]">
            <div className="relative" data-aos="fade-right" data-aos-delay="200">
                <Image src={TridentBanner} alt="Trident Banner" />
                <div className="sm:absolute top-[10.5rem] left-0 md:left-[-1rem] mt-6 md:mt-0 border rounded-3xl mx-auto p-5 w-[270px] bg-white">
                    <h1 className="text-xl font-semibold mb-4 mt-1">Task Progress</h1>
                    <div className="flex w-full flex-col gap-5 mb-1">
                        <ProgressBar data={trackProgressData} />
                    </div>
                </div>
                {/* <div className="sm:absolute top-[18.5rem] left-[22rem] mx-auto">
                    <Image src={Activity} alt="Activity" className="h-48 w-60" />
                </div> */}
            </div>

            <div className="flex flex-col lg:mt-14" data-aos="fade-left" data-aos-delay="200">
                <h1 className="text-2xl md:text-[40px] font-semibold mb-6">
                    Set, forget, and then track.
                </h1>
                <p className="text-[#565656] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mb-5">
                    {trackData.map((item) => (
                        <div key={item.id} className="flex gap-1 sm:gap-2 mb-3">
                            <span className="w-6 h-6">
                                <CheckCircleIcon />
                            </span>
                            <p className="text-[#565656]">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <Button>Book a Demo</Button>
                </div>
            </div>
        </div>
    );
};

export default index;
