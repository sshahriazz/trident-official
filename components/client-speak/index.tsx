import Image from 'next/image'
import React from 'react'

export default function index() {
    const companysRow1 = ["Company logo", "Company logo1", "Company logo2", "Company logo3", "Company logo4", "Company logo5"];
    const companysRow2 = ["Company logo", "Company logo1", "Company logo2", "Company logo3", "Company logo4"];

    return (
        <>
            <div className='text-center mb-5'>
                <h1 className='text-2xl font-semibold'>Trusted by 50,000+ companies</h1>
            </div>
            <div className='flex gap-3 sm:gap-14 justify-center flex-wrap'>
                {
                    companysRow1.map((company, index): any =>
                        <Image
                            key={index}
                            className=""
                            src={`/assets/logo/${company}.svg`}
                            alt={company}
                            width={121}
                            height={48}
                        />)
                }
            </div>
            <div className='flex gap-5 sm:gap-14 justify-center flex-wrap mt-4'>
                {
                    companysRow2.map((company, index): any => <Image
                        key={index}
                        className=""
                        src={`/assets/logo/${company}.svg`}
                        alt={company}
                        width={121}
                        height={48}
                    />)
                }
            </div>
        </>
    )
}
