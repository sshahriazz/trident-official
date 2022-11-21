import Image from "next/image";
import React from "react";
import TridentBanner from "assets/icon/Programming-pana.svg";
// import Activity from "assets/blogs-image/Activity.png";
import { Button } from "components/common";
// import { Progress } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ProgressBar from "./ProgressBar";
import { trackProgressData, trackData } from "content/component/track-data";

const index = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <div className="relative" data-aos="fade-up" data-aos-delay="100">
                <Image src={TridentBanner} alt="Trident Banner" />
            </div>

            <div className="flex flex-col lg:mt-14">
                <h1 className="text-2xl md:text-[40px] font-semibold mb-6" data-aos="fade-up" data-aos-delay="150">
                    Our Development Process
                </h1>
                <p className="text-[#565656] mb-6" data-aos="fade-up" data-aos-delay="150">
                    A Product Development Process refers to the entire range of activities where a company conceptualizes and realizes a new offering.
                    A product concept might originate in the marketplace, or in a lab or workspace, or in the so-called fuzzy front end.
                    Ideas come from customer requirements, too.
                </p>
                <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                    {trackData.map((item) => (
                        <div key={item.id} className="flex gap-1 sm:gap-2 mb-3">
                            <span className="w-6 h-6">
                                <CheckCircleIcon />
                            </span>
                            <p className="text-[#565656]">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" data-aos-delay="250">
                    <Button><a href="mailto:hello.teamtrident@gmail.com">Hire Us</a></Button>
                </div>
            </div>
        </div>
    );
};

export default index;
