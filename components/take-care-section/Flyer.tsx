import Image from "next/image";
import React from "react";

const Flyer = ({
  data,
  className,
  iconBg,
}: {
  data: any;
  className?: string;
  iconBg: string;
}) => {
  return (
    <div
      className={`${
        className && className
      } flex rounded-full p-3 mb-3 w-[300px] sm:w-[350px]  bg-white drop-shadow-2xl`}
    >
      <div
        className={`${
          iconBg && iconBg
        } p-4 mr-4 rounded-full w-[48px] h-[48px]`}
      >
        <Image src={data.image} alt="image" width={20} height={20} />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{data.title}</h2>
        <p className="text-left text-[14px] text-[#565656]">{data.date}</p>
      </div>
    </div>
  );
};

export default Flyer;
