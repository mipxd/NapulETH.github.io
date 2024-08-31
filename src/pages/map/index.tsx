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
                <h6 className=" xl:w-1/2 w-10/12 text-white p-4 z-50 bg-white border-4 border-[#eddb55] text-xl xl:text-2xl SemiBold leading-normal text-center my-8 lg:my-6" style={{
                    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/original-acrylic-painting-background-dlerick.jpg")',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    {
                        t('mapSoon')
                    } ⏳⌛
                </h6>
            </section>
            <Footer />
        </main>
    );
}
