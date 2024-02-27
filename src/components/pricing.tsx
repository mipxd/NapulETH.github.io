"use client"

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic'
const DynamicRibbonSecond = dynamic(() => import("@components/dynamicRibbon2").then(module => module.default), { ssr: false });
const DynamicGrayRibbonSecond = dynamic(() => import("@components/grayedribbon2").then(module => module.default), { ssr: false });

import soldOut from '@assets/SOLD OUT PNG.png'

function Pricing() {

    const { t, i18n } = useTranslation();

    return (
        <>
        <h5 className=" text-black w-full text-4xl mt-8 SemiBold leading-normal text-center">
                Tickets Rounds
            </h5>
        <section className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:px-20 mt-20 lg:mt-32">
            <div className="w-11/12 lg:w-1/2 flex-grow flex flex-col items-center justify-start">
                <div className='w-7/12 h-fit py-4 bg-white border-4 border-[#eddb55]  relative z-40'>
                    <h5 className='Bold text-Black text-xl w-full text-center'>Innovators</h5>
                </div>
                <div className='w-full h-fit lg:h-full bg-[#E38B84] border-4 border-[#eddb55] relative z-10 -mt-9 flex flex-col items-center justify-center pt-4 pb-2 lg:pt-2 lg:pb-4 px-4'>
                    <Image src={soldOut} alt="munaciello sold out" className='w-7/12 lg:w-11/12 aspect-square mt-6 lg:mt-0 brightness-0'></Image>
                    
                    
                    
                    
                </div>
            </div>
            <div className="w-11/12 lg:w-1/2 flex-grow flex flex-col items-center justify-start">
                <div className='w-7/12 h-fit py-4 bg-white border-4 border-[#eddb55]  relative z-40'>
                    <h5 className='Bold text-black text-xl w-full text-center'>Early Adopters</h5>
                </div>
                <div className='w-full h-fit lg:h-full bg-[#E38B84] border-4 border-[#eddb55] relative z-10 -mt-9 flex flex-col items-center justify-center pt-4 pb-2 lg:pt-2 lg:pb-4 px-4'>
                    <Image src={soldOut} alt="munaciello sold out" className='w-7/12 lg:w-11/12 aspect-square mt-6 lg:mt-0 brightness-0'></Image>
                    
                    
                    
                    
                </div>
            </div>
            
        </section>
        </>
        
    )
}

export default Pricing;