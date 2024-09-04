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
import italy from '@assets/italy.svg'
import steve from '@assets/steve.svg'

import PitchPartners from "@/components/pitchPartners";
import PitchParticipants from "@/components/participants";
import PitchJury from "@/components/pitchJury";

function Terms() {
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
            <section className="w-full h-fit relative flex flex-col items-center justify-start pt-16 lg:pt-28">
                
                <h5 className=" text-black z-50 text-4xl SemiBold text-center mb-6 lg:mb-6 lg:px-28 leading-normal mt-0 lg:mt-0 w-11/12 lg:w-full">
                    {t("terms")}
                </h5>
                <div className="w-11/12 lg:w-10/12 h-fit">
                <iframe src="https://fuchsia-fred-82.tiiny.site" width="100%" allowFullScreen className="border-0 h-[80vh] lg:h-[155vh] mt-8 "></iframe>
                </div>
                
                
            </section>
            <Footer />
        </main>
    )
}

export default Terms