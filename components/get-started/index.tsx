import Image from "next/future/image";
import React from "react";
import { gettingStarted } from "content";
import { Button } from "components/common";
import Parks from "./Parks";

const GettingStarted = () => {
  return (
    <div className="container mx-auto px-2 sm:px-0">
      <div className="bg-[#D6ECF4] rounded-lg">
        <div className="w-full h-full relative">
          <div className="p-4 lg:py-20 lg:pl-24">
            <h1 className="font-semibold text-2xl sm:text-4xl leading-tight pb-4 text-center md:text-left">
              {gettingStarted.heading}
            </h1>
            <p className="text-[#565656] text-base pb-2 md:pb-6 w-100 sm:w-[400px]">
              {gettingStarted.subHeading}
            </p>
            <div className="md:hidden block pb-4">
              <Parks parks={gettingStarted.perks} />
            </div>
            <div className="flex justify-end md:justify-start">
              <Button className="w-full sm:w-auto">
                {gettingStarted.buttonText}
              </Button>
            </div>
            <div className="hidden md:block pt-8">
              <Parks parks={gettingStarted.perks} />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden md:block">
            <Image
              className="rounded-lg xl:w-[700px] xl:h-[400px] lg:w-[600px] lg:h-[350px] md:w-[385px] md:h-[270px]"
              height={350}
              width={600}
              alt="getting started men sitting with a laptop"
              src="/getting-started/getting-started-men.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
