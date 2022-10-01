import React from "react";
import Image from "next/image";
import TridentBanner from "assets/icon/trident-image-one.svg";
import { flyerData } from 'content/component/care'
import Flyer from "./Flyer";

const TakeCareBannerSection = () => {
    return (
        <div className="relative p-4">
            <Image
                src={TridentBanner}
                alt="Trident Support"
                width={450}
                height={450}
            />
            <div className="sm:absolute top-[13.5rem] left-[-11rem] mt-9 sm:mt-0">
                <Flyer data={flyerData.home} iconBg="bg-[#B1D7B4]" />
                <Flyer data={flyerData.wireframe} className="sm:ml-6" iconBg="bg-[#ECC5FB]" />
                <Flyer data={flyerData.travel} className="sm:ml-12" iconBg="bg-[#FFD9C0]" />
            </div>
        </div>
    );
};

export default TakeCareBannerSection;
