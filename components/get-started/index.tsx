import Image from "next/future/image";
import React from "react";
import { Button } from "components/common";
import Parks from "./Parks";
import { gettingStarted } from "content";
import CallToAction from '../../assets/icon/trident-call-to-action.svg'

const GettingStarted = () => {
  return (
    <div className=" bg-[#D6ECF4] rounded-3xl">
      <div className="w-full h-full relative flex justify-between items-center p-7 md:p-14">
        <div className="">
          <h1 className="font-semibold text-2xl sm:text-4xl leading-tight pb-4 text-center md:text-left"  data-aos="fade-up" data-aos-delay="250">
            {gettingStarted.heading}
          </h1>
          <p className="text-[#565656] text-base pb-2 md:pb-6 w-100 sm:w-[500px]"  data-aos="fade-up" data-aos-delay="300">
            {gettingStarted.subHeading}
          </p>
          <div className="flex justify-end md:justify-start"  data-aos="fade-up" data-aos-delay="350">
            <Button className="w-full sm:w-auto">
              {gettingStarted.buttonText}
            </Button>
          </div>
        </div>
        <div className="hidden md:block" data-aos="fade-up" data-aos-delay="400">
          <Image
            className="rounded-lg"
            height={250}
            width={400}
            alt="getting started men sitting with a laptop"
            src={CallToAction}
          />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
