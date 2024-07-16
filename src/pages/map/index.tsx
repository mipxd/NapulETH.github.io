'use client';

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import cloudBase from '@assets/cloud base2.svg'



export default function Map() {

    const { t, i18n } = useTranslation();

    return (
        <main className="flex min-h-screen flex-col items-start justify-start " >
            <Head>
                <title>NapulETH - The Biggest Web3 Event In Southern Italy</title>
                <meta
                    name="description"
                    content="Offering a real incentive for those not yet familiar with web3 to participate in significant events, both accessible and high-profile."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <section className="w-full flex flex-col items-center justify-start pt-16 lg:pt-20">
                <h5 className=" text-black z-50 text-4xl SemiBold text-center mb-3 lg:mb-6 lg:px-28 leading-normal mt-8 lg:mt-0 w-11/12 lg:w-full ">
                    {t('map')}
                </h5>
                <p className="block text-[#2E2E2E] z-50 Medium text-2xl lg:text-2xl text-center lg:px-28 leading-normal mt-8 lg:mb-4 lg:mt-0 w-11/12 lg:w-full">
                    {t('mapPara')}
                </p>
                <div className="w-11/12 lg:w-10/12 h-fit">
                <iframe src="https://magenta-zitella-49.tiiny.site" width="100%" allowFullScreen className="border-0 h-[80vh] lg:h-[155vh] mt-8 "></iframe>
                </div>
            </section>
            <Footer />
        </main>
    );
}
