/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import p1 from "@assets/11.jpeg"
import p2 from "@assets/12.jpeg"
import p3 from "@assets/slider/p3.jpeg"
import p4 from "@assets/slider/p4.jpeg"
import { useTranslation } from "react-i18next";

import { IoLocationOutline, IoCalendarClear } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";

import bulb from '@assets/bulb.svg'
import watch from '@assets/watch.svg'

import PitchPartners from "@/components/pitchPartners";
import PitchParticipants from "@/components/participants";
import PitchJury from "@/components/pitchJury";

function SideEvents() {
    const { t, i18n } = useTranslation();


    return (
        <main className="flex min-h-screen flex-col items-start justify-start">
            <Head>
                <title>NapulETH - The Biggest Web3 Event In Southern Italy</title>
                <meta
                    name="description"
                    content="Offering a real incentive for those not yet familiar with web3 to participate in significant events, both accessible and high-profile."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <section className="w-full h-fit relative flex flex-col items-center justify-start pt-16 lg:pt-20">
                <h5 className=" text-black z-50 text-xl SemiBold text-center mb-3 lg:mb-6 lg:px-28 leading-normal mt-8 lg:mt-0 w-11/12 lg:w-full">
                    ⚡NapulETH⚡
                </h5>
                <h5 className=" text-black z-50 text-4xl SemiBold text-center mb-6 lg:mb-6 lg:px-28 leading-normal mt-0 lg:mt-0 w-11/12 lg:w-full">
                    {t("pitchBattleTitle")}
                </h5>
                <div className="w-full h-fit relative flex flex-row items-center justify-center">
                    <Image src={watch} alt="stop watch napuleth startup pitch battle" className="hidden lg:block absolute z-10 -left-7 -top-1/2 w-[15vw] rotate-12"></Image>
                    <div className="w-11/12 lg:w-10/12 relative z-50 h-fit flex flex-row items-center justify-center p-2 lg:p-6 bg-white border-4 border-[#eddb55]">
                        <p className="block text-[#2E2E2E] Medium text-xl lg:text-2xl text-center leading-loose w-full lg:w-full">
                            {t("pitchPara")}
                        </p>
                    </div>
                    <Image src={bulb} alt="stop watch napuleth startup pitch battle" className="hidden lg:block absolute z-10 -right-5 -top-1/3 w-[13vw] -rotate-3"></Image>
                </div>
                <PitchParticipants />
                <PitchJury />
                <PitchPartners />
                
            </section>
            <Footer />
        </main>
    )
}

export default SideEvents