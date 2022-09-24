import React, { FC } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Parks: FC<{ parks: string[] }> = ({ parks }) => {
  return (
    <div className="flex pt-8 gap-6 text-[#565656]">
      {parks.map((park) => (
        <div key={park} className="flex gap-2">
          <span className="w-6 h-6">
            <CheckCircleIcon />
          </span>
          <p key={park}>{park}</p>
        </div>
      ))}
    </div>
  );
};

export default Parks;
