import Image from "next/future/image";
import React from "react";
import { gettingStarted } from "content";
import { Button } from "components/common";
import Parks from "./Parks";

const GettingStarted = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#D6ECF4] rounded-lg">
        <div className="w-full h-full relative">
          <div className="py-20 pl-24">
            <h1 className="font-semibold text-4xl leading-tight pb-4">
              {gettingStarted.heading}
            </h1>
            <p className="text-[#565656] text-base pb-6 w-[400px]">
              {gettingStarted.subHeading}
            </p>
            <Button>{gettingStarted.buttonText}</Button>
            <Parks parks={gettingStarted.perks} />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              className="rounded-lg"
              width={600}
              height={550}
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
