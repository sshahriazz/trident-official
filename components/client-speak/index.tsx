import { csRowOneImages, csRowTwoImages } from 'content/component/client-speak';
import Image from 'next/image'
import React from 'react'

export default function index() {
    const companysRow1 = ["Company logo", "Company logo1", "Company logo2", "Company logo3", "Company logo4", "Company logo5"];
    const companysRow2 = ["Company logo", "Company logo1", "Company logo2", "Company logo3", "Company logo4"];

    return (
        <>
            <div className='text-center mb-5' data-aos="fade-up" data-aos-delay="100">
                <h1 className='text-2xl font-semibold'>Trusted by 50+ Organizations</h1>
            </div>
            <div className='flex gap-3 sm:gap-14 justify-center flex-wrap mt-10' data-aos="fade-up" data-aos-delay="150">
                {
                    csRowOneImages.map((company, index): any =>
                        <Image
                            key={index}
                            src={company.image}
                            alt={'trident'}
                            width={150}
                            height={30}
                            className="cursor-pointer grayscale hover:filter-none"
                        />)
                }
            </div>
            <div className='flex gap-5 sm:gap-14 justify-center flex-wrap mt-10' data-aos="fade-up" data-aos-delay="200">
                {
                    csRowTwoImages.map((company, index): any =>
                    <Image
                        key={index}
                        src={company.image}
                        alt={'trident'}
                        width={150}
                        height={35}
                        className="cursor-pointer grayscale hover:filter-none"
                    />)
                }
            </div>
        </>
    )
}
