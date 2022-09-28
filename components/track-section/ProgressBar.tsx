import React, { FC } from "react";
import { Progress } from "@material-tailwind/react";

interface dataPropsType{
    data: {
        id: number;
        title: string;
        progress: any;
        color: any;
    }[]
}

const ProgressBar:FC<dataPropsType> = function ProgressBar({ data })  {
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between text-sm mb-2">
            <h2>{item.title}</h2>
            <h2 className="text-gray-500">{item.progress}%</h2>
          </div>
          <Progress value={item.progress} color={item.color} />
        </div>
      ))}
    </>
  );
};

export default ProgressBar;
