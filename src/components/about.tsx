/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image"
import Marquee from "react-fast-marquee";



import commune from "@assets/commune.png"
import logo from '@assets/bigLogo.svg'

import cloud1 from '@assets/cloud1.svg'
import cloud2 from '@assets/cloud2.svg'
import boatOncloud from '@assets/boatonCloud1.svg'
import castleOncloud from '@assets/castleonCloud.svg'
import templeOncloud from '@assets/templeOnCloud.svg'
import stampOnCloud from '@assets/stampOnCloud.svg'
import { useTranslation } from "react-i18next";

function About() {
    const { t, i18n } = useTranslation();
    
    return (
        <section className="w-full h-fit relative flex flex-col items-center justify-start pt-16 lg:pt-40">
            
            <Image src={boatOncloud} alt="cloud" className=" hidden lg:block boat absolute -left-[15%] top-[15%] scale-[.2] "></Image>
            <Image src={castleOncloud} alt="cloud" className="hidden lg:block castle absolute -right-[22%] top-[35%] scale-[.4] "></Image>
            <Image src={templeOncloud} alt="cloud" className="hidden lg:block boat absolute -left-[16%] top-[65%] scale-[.5] "></Image>
            <Image src={stampOnCloud} alt="cloud" className="hidden lg:block castle absolute -right-[15%] top-[90%] scale-[.4] "></Image>
            <h5 className=" text-black text-4xl SemiBold leading-normal text-center mt-20 mb-3 lg:mb-6">
            {t('abouttitle')}
            </h5>
            <p className="hidden lg:block text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-7/12">
            {t('aboutsubtitle')}
            </p>
            <p className="block lg:hidden text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-7/12">
            {t('aboutmobilesubtitle')}
            </p>

            <p className=" hidden lg:block text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal mt-8 lg:mt-20 w-11/12 lg:w-7/12">
            {t('aboutpara1')}
            </p>
            <p className=" block lg:hidden text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal mt-8 lg:mt-20 w-11/12 lg:w-7/12">
            {t('aboutpara1mobile')}
            </p>

            <p className="hidden lg:block text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal mt-8 lg:mt-20 w-11/12 lg:w-7/12">
            {t('aboutpara2')}
            </p>
            <p className="block lg:hidden text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal mt-8 lg:mt-20 w-11/12 lg:w-7/12">
            {t('aboutpara2mobile')}
            </p>

            <p className="hidden lg:block text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal mt-8 lg:mt-20 w-11/12 lg:w-7/12">
            {t('aboutpara3')}
            </p>



        </section>
    )
}

export default About