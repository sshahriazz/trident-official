import Image from "next/image";
import React from "react";
import { tasksData } from 'content/component/tasks'
import Tasks from "./Tasks";

const index = () => {
    return (
        <div className="pt-8 pb-[60px]">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-[40px] font-semibold mb-5">
                    Your tasks, automated.
                </h2>
                <p className="text-[#565656] mx-auto sm:w-[520px] w-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                <Tasks data={tasksData.options} iconBg="bg-[#F9EA72]" />
                <Tasks data={tasksData.stay} iconBg="bg-[#CCEFF6]" />
                <Tasks data={tasksData.automate} iconBg="bg-[#F6CEDC]" />
                <Tasks data={tasksData.alerts} iconBg="bg-[#B1D7B4]" />
            </div>
        </div>
    );
};

export default index;
