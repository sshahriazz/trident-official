import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import One from '../assets/images/portfolios/1.1.png'
import Two from '../assets/images/portfolios/1.2.png'
import Three from '../assets/images/portfolios/1.4.png'
import Four from '../assets/images/portfolios/1.3.png'
import Five from '../assets/images/portfolios/1.5.png'
import Six from '../assets/images/portfolios/1.6.png'
import Seven from '../assets/images/portfolios/1.7.png'
import Eight from '../assets/images/portfolios/1.8.png'
import Nine from '../assets/images/portfolios/1.9.png'

const portfolios = () => {
    return (
        <>
            <div className="flex justify-center my-10" data-aos="fade-down">
                <h1 className="text-3xl sm:text-7xl sm:leading-[90px] font-semibold text-center w-full xl:w-[60%] font-Italiana text-primary-500 ">
                    Portfolios
                </h1>
            </div>
            <div>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='space-y-10'>
                        <Link href="http://twinklecreative.io/" passHref={true}>
                            <a target='_blank'>
                                <div className='border border-primary-500 rounded-md p-10 cursor-pointer hover:shadow-lg w-full md:w-[600px]'>
                                    <Image src={Three} alt='trident' />
                                </div>
                            </a>
                        </Link>
                        <Link href="http://b2bprospecthive.com/" passHref={true}>
                            <div className='border border-primary-500 rounded-md p-10 cursor-pointer hover:shadow-lg w-full md:w-[450px]'>
                                <Image src={Four} alt='trident' />
                            </div>
                        </Link>
                        <Link href="https://www.bongoxpress.com/" passHref={true}>
                            <div className='border border-primary-500 rounded-md p-10 cursor-pointer hover:shadow-lg w-full md:w-[480px]'>
                                <Image src={Six} alt='trident' />
                            </div>
                        </Link>
                        <Link href="https://www.alhikmahfund.org/" passHref={true}>
                            <div className='border border-primary-500 rounded-md p-10 cursor-pointer hover:shadow-lg w-full md:w-[560px]'>
                                <Image src={Seven} alt='trident' />
                            </div>
                        </Link>
                    </div>
                    <div className='space-y-10'>
                        <Link href="#" passHref={true}>
                            <div className='border border-primary-500 rounded-md p-10 cursor-pointer hover:shadow-lg w-full md:w-[600px]'>
                                <Image src={One} alt='trident' />
                            </div>
                        </Link>
                        <Link href="http://bongo-technology.com/" passHref={true}>
                            <div className='border border-primary-500 rounded-md p-10 cursor-pointer hover:shadow-lg w-full md:w-[350px]'>
                                <Image src={Eight} alt='trident' />
                            </div>
                        </Link>
                        <Link href="https://trident-mart.vercel.app/" passHref={true}>
                            <div className='border border-primary-500 rounded-md p-10 cursor-pointer hover:shadow-lg w-full md:w-[560px]'>
                                <Image src={Two} alt='trident' />
                            </div>
                        </Link>
                        <Link href="https://trident-mart.vercel.app/" passHref={true}>
                            <div className='border border-primary-500 rounded-md p-10 cursor-pointer hover:shadow-lg w-full md:w-[600px]'>
                                <Image src={Nine} alt='trident' />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default portfolios