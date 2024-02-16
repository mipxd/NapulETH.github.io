"use client"

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic'
const DynamicRibbonSecond = dynamic(() => import("@components/dynamicRibbon2").then(module => module.default), { ssr: false });


function Pricing() {

    const { t, i18n } = useTranslation();

    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:px-20 mt-20 lg:mt-32">
            <div className="w-11/12 lg:w-[30%] h-fit lg:h-[70vh] flex flex-col items-center justify-start">
                <div className='w-7/12 h-fit py-4 bg-white border-4 border-[#eddb55]  relative z-40'>
                    <h5 className='Bold text-Black text-2xl w-full text-center'>Early Birds</h5>
                </div>
                <div className='w-full h-fit lg:h-full bg-[#CA75AB] border-4 border-[#eddb55] relative z-10 -mt-9 flex flex-col items-center justify-start pt-16 pb-10 lg:py-16 px-4'>
                    <h5 className='text-black Bold text-xl mb-2'>
                        {t('ends')}
                    </h5>
                    <FlipClockCountdown to={"2024-03-30T00:00:00"} separatorStyle={{ color: "white" }} digitBlockStyle={{ backgroundColor: "white", color: "black", fontFamily: "Poppins", fontWeight: "700" }} showLabels={false} className=' scale-[.6] '></FlipClockCountdown>
                    <p className='mt-8 text-xl Medium text-black w-10/12 text-center'>
                        {t('earlyPara')}
                    </p>
                    <Link href={'https://napuleth.mego.tickets/'} className=" relative z-50 p-0 w-full flex flex-row items-center justify-center h-fit">
                        <div className="min-w-[85vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-10/12 h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#FFFFFF] border-4 border-[#eddb55] mt-8">


                            <h5 className=" text-black Medium text-xl">
                                {t('gettickets')}
                            </h5>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-11/12 lg:w-[35%] h-fit lg:h-[80vh] flex flex-col items-center justify-start">
                <div className='w-7/12 h-fit py-4 bg-white border-4 border-[#eddb55]  relative z-40'>
                    <h5 className='Bold text-Black text-2xl w-full text-center'>Normal Tickets</h5>
                </div>
                <div className='w-full h-fit lg:h-full bg-[#CA75AB] border-4 border-[#eddb55] relative z-10 -mt-9 flex flex-col items-center justify-start pt-16 pb-2 lg:py-16 px-4'>
                    <h5 className='text-black Bold text-xl mb-4'>
                        {t('starts')}
                    </h5>
                    <FlipClockCountdown to={"2024-04-01T00:00:00"} separatorStyle={{ color: "white" }} digitBlockStyle={{ backgroundColor: "white", color: "black", fontFamily: "Poppins", fontWeight: "700" }} showLabels={false} className=' scale-[.75] '></FlipClockCountdown>
                    <p className='mt-8 text-xl Medium text-black w-10/12 text-center'>
                        {t('normalPara')}
                    </p>
                    <Link href={'https://napuleth.mego.tickets/'} className=" relative z-50 p-0 w-full flex flex-row items-center justify-center h-fit">
                        <div className="min-w-[85vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-10/12 h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#FFFFFF] border-4 border-[#eddb55] mt-8">


                            <h5 className=" text-black Medium text-xl">
                                {t('gettickets')}
                            </h5>
                        </div>
                    </Link>
                    <Link href={'/'} className=" relative z-50 p-0 w-full flex flex-row items-center justify-center h-fit mt-4 -ml-[20%] lg:-ml-0 " onClick={(e) => { e.preventDefault() }}>
                        <DynamicRibbonSecond></DynamicRibbonSecond>

                    </Link>
                </div>
            </div>
            <div className="w-11/12 lg:w-[30%] h-fit lg:h-[70vh] flex flex-col items-center justify-start">
                <div className='w-7/12 h-fit py-4 bg-white border-4 border-[#eddb55]  relative z-40'>
                    <h5 className='Bold text-Black text-2xl w-full text-center'>Late Stage</h5>
                </div>
                <div className='w-full h-fit lg:h-full bg-[#CA75AB] border-4 border-[#eddb55] relative z-10 -mt-9 flex flex-col items-center justify-start pt-16 pb-10 lg:py-16 px-4'>
                    <h5 className='text-black Bold text-xl mb-2'>
                        {t('starts')}
                    </h5>
                    <FlipClockCountdown to={"2024-07-01T00:00:00"} separatorStyle={{ color: "white" }} digitBlockStyle={{ backgroundColor: "white", color: "black", fontFamily: "Poppins", fontWeight: "700" }} showLabels={false} className=' scale-[.6] '></FlipClockCountdown>
                    <p className='mt-8 text-xl Medium text-black w-10/12 text-center'>
                        {t('latePara')}
                    </p>
                    <Link href={'https://napuleth.mego.tickets/'} className=" relative z-50 p-0 w-full flex flex-row items-center justify-center h-fit">
                        <div className="min-w-[85vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-10/12 h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#FFFFFF] border-4 border-[#eddb55] mt-8">


                            <h5 className=" text-black Medium text-xl">
                                {t('gettickets')}
                            </h5>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Pricing;