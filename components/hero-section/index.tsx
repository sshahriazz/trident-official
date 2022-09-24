import Image from "next/future/image";
import React from "react";
export const HeroSection = () => {
  return (
    <div>
      <div className="w-100 sm:w-[820px] mx-auto">
        <h1 className="text-center text-3xl sm:text-[70px] font-semibold leading-[50px] sm:leading-[80px]">
          Your everyday tasks, automated.
        </h1>
      </div>
      <div className="flex-row sm:flex justify-around my-3">
        <div className="">
          <div className="">
            <Image
              className="m-0 "
              src={"/assets/images/trident-how-to-works.svg"}
              alt={"trident hero image"}
              width={283}
              height={200}
            />
          </div>
        </div>
        <div className="">
          <div className="relative mx-auto w-[331px]">
            <div
              className={
                "bg-[url('/assets/images/trident-hero-image-bg.svg')] bg-contain bg-no-repeat relative bg-[center_top_4.36rem]"
              }
            >
              <Image
                className="m-0 "
                src={"/assets/images/trident-hero-image.svg"}
                alt={"trident hero image"}
                width={329}
                height={602}
              />
            </div>
            <div className="absolute bottom-[-14px] left-[calc(50%-39px)]">
              <Image
                className="m-0"
                src={"/assets/images/trident-progress-bar.svg"}
                alt={"trident hero image"}
                width={80}
                height={98}
              />
            </div>
          </div>

        </div>
        <div>
          <div className="">
            <Image
              className="m-0 "
              src={"/assets/images/trident-how-to-works.svg"}
              alt={"trident hero image"}
              width={283}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
