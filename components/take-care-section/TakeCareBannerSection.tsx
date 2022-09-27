import React from "react";
import Image from "next/image";
import TridentSupport from "assets/blogs-image/trident-support.png";
import { flyerData } from 'content/component/care'
import Flyer from "./Flyer";

const TakeCareBannerSection = () => {
    return (
        <div className="relative p-4">
            <Image
                src={TridentSupport}
                alt="Trident Support"
                width={400}
                height={480}
            />
            <div className="sm:absolute top-[13.5rem] left-[-6rem] mt-9 sm:mt-0">
                <Flyer data={flyerData.home} iconBg="bg-[#B1D7B4]" />
                <Flyer data={flyerData.wireframe} className="sm:ml-6" iconBg="bg-[#ECC5FB]" />
                <Flyer data={flyerData.travel} className="sm:ml-12" iconBg="bg-[#FFD9C0]" />
            </div>
        </div>
    );
};

export default TakeCareBannerSection;
