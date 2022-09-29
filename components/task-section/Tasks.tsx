import Image from 'next/image'
import React from 'react'

const Tasks = ({ data, iconBg }: { data: any, iconBg: string }) => {
    return (
        <div className="border rounded-3xl p-5">
            <div
                className={`${iconBg && iconBg
                    } p-3 rounded-full w-[48px] h-[48px] mb-4 mt-1`}
            >
                <Image src={data.icon} alt="trident-icon" width={25} height={25} />
            </div>
            <h1 className="text-xl font-semibold mb-4">{data.title}</h1>
            <p className="text-[#565656]">
                {data.description}
            </p>
        </div>
    )
}

export default Tasks