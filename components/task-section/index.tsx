import Image from "next/image";
import React from "react";
import { tasksData } from 'content/component/tasks'
import Tasks from "./Tasks";

const index = () => {
    return (
        <div className="pt-8 pb-[60px]">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-[40px] font-semibold mb-5">
                    Get Your Every Digital Solution in One Platform
                </h2>
                <p className="text-[#565656] mx-auto sm:w-[520px] w-100">
                    As you&apos;ve decided to jump into digitalization, why should you waste your time by getting things done in different places? Get all the things done in one place!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7" data-aos="fade-up" data-aos-delay="200">
                <Tasks data={tasksData.options} iconBg="bg-[#F9EA72]" />
                <Tasks data={tasksData.stay} iconBg="bg-[#CCEFF6]" />
                <Tasks data={tasksData.automate} iconBg="bg-[#F6CEDC]" />
                <Tasks data={tasksData.alerts} iconBg="bg-[#B1D7B4]" />
            </div>
        </div>
    );
};

export default index;
