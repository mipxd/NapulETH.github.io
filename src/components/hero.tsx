/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image"
import Marquee from "react-fast-marquee";
import { RibbonContainer, Ribbon } from "react-ribbons";
import dynamic from 'next/dynamic'
const DynamicRibbon = dynamic(() => import("@components/dynamicRibbon").then(module => module.default), { ssr: false });
import { useTranslation } from "react-i18next"; 

import commune from "@assets/commune.png"
import logo from '@assets/bigLogo.svg'
import cloud1 from '@assets/cloud1.svg'
import cloud2 from '@assets/cloud2.svg'
import boatOncloud from '@assets/boatonCloud1.svg'
import castleOncloud from '@assets/castleonCloud.svg'
import templeOncloud from '@assets/templeOnCloud.svg'
import stampOnCloud from '@assets/stampOnCloud.svg'

function Hero() {

    const { t, i18n } = useTranslation();

    return (
        <section className="w-full h-fit relative flex flex-col items-center justify-start pt-32 lg:pt-40">

            <Image src={cloud1} alt="cloud" className=" cloud hidden lg:block absolute -left-24 top-[12%]"></Image>
            <Image src={cloud2} alt="cloud" className=" cloud hidden lg:block absolute -right-16 top-40"></Image>
            <Image src={boatOncloud} alt="cloud" className=" boat hidden lg:block absolute -left-[10%] top-[27%] scale-[.4] "></Image>
            <Image src={castleOncloud} alt="cloud" className=" castle hidden lg:block absolute -right-[22%] top-[35%] scale-[.3] "></Image>
            <Image src={templeOncloud} alt="cloud" className=" boat hidden lg:block absolute -left-[15%] top-[50%] scale-[.2] "></Image>
            <Image src={stampOnCloud} alt="cloud" className=" castle hidden lg:block absolute -right-[10%] top-[55%] scale-[.4] "></Image>
            <h5 className="hidden lg:block text-[#ca75ab] text-4xl lg:text-4xl SemiBold lg:leading-normal text-center relative z-50">

                {t('hero1_1')}<br />{t('hero1_2')}
            </h5>
            <h5 className="block lg:hidden text-[#ca75ab] text-3xl w-11/12 lg:text-4xl SemiBold leading-normal lg:leading-normal text-center relative z-50 mt-4">
                {t('hero1_mobile')}
            </h5>
            <p className=" text-[#2E2E2E] Medium lg:mt-6 text-center lg:text-left text-2xl lg:text-2xl mt-6 relative z-50">
                {t('hero2')}
            </p>
            <p className=" text-[#2E2E2E] Medium text-center lg:text-left text-2xl lg:text-2xl mt-2 relative z-50s">
                {t('hero3')}
            </p>
            <div className="w-fit h-fit flex flex-col xl:flex-row items-center justify-center gap-4 lg:gap-3 mt-6 lg:mt-10">
                <Link href={'/tickets'} className=" relative z-50 p-0 w-fit h-fit">
                    <div className="min-w-[75vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-[19vw] h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AB] border-2 border-[#eddb55] ">


                        <h5 className=" text-black Medium text-xl">
                            {t('gettickets')}
                        </h5>
                    </div>
                </Link>
                <Link href={'/join'} className=" relative z-50 p-0 w-fit h-fit">
                    <div className="min-w-[75vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-[19vw] h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AB] border-2 border-[#eddb55]">


                        <h5 className=" text-black Medium text-xl">
                            {t('joinus')}
                        </h5>
                    </div>
                </Link>
            </div>
            <div className="w-fit h-fit flex flex-col xl:flex-row items-center justify-center gap-4 lg:gap-3 mt-4 lg:mt-4">

                <Link href={'/'} className=" relative z-50 p-0 w-fit h-fit xl:mt-1" onClick={(e) => { e.preventDefault() }}>
                    <DynamicRibbon></DynamicRibbon>

                </Link>
                <Link href={'/pitch_deck.pdf'} className=" relative z-50 p-0 w-fit h-fit">
                    <div className="min-w-[75vw] md:min-w-[50vw] -mt-8 xl:min-w-[15vw] xl:w-[19vw] h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AB] border-2 border-[#eddb55] ">


                        <h5 className=" text-black Medium text-xl">Pitch Deck</h5>
                    </div>
                </Link>
            </div>





            <Image src={logo} alt="big logo" className=" lg:-mt-[32%] lg:scale-50 scale-[0.8] relative z-[60] w-11/12"></Image>

            <h5 className=" text-black text-4xl SemiBold leading-normal text-center  lg:-mt-[30%] mb-6">
                {t('bringing')}
            </h5>
            <p className=" text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-5/12">
                {t('bringinPara')}
            </p>

            <div className="w-[200vw] h-fit my-28 lg:my-40 relative flex flex-row items-center justify-center">
                <div className="w-[200vw] h-fit relative rotate-12 lg:rotate-6 bg-[#ca75ab] border-t-4 border-b-4 border-t-white border-b-white my-4">
                    <Marquee className=" overflow-hidden my-4">
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>


                    </Marquee>
                </div>
                <div className="w-[200vw] h-fit absolute z-50 -rotate-12 lg:-rotate-6 bg-[#ca75ab] border-t-4 border-b-4 border-t-white border-b-white my-4">
                    <Marquee className=" overflow-hidden my-4" direction="right">
                    <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>


                    </Marquee>
                </div>

            </div>



        </section>
    )
}

export default Hero