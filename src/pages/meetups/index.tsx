/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image"
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import p1 from "@assets/slider/p1.jpeg"
import p2 from "@assets/slider/p2.jpeg"
import p3 from "@assets/slider/p3.jpeg"
import p4 from "@assets/slider/p4.jpeg"
import { useTranslation } from "react-i18next";

function Meetups() {
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
            <section className="w-full h-fit relative flex flex-col items-center justify-start pt-16 lg:pt-0">
                <h5 className=" text-black text-4xl SemiBold leading-normal text-center mt-20 mb-3 lg:mb-6">
                    {t('meetupsPageTitle')}
                </h5>
                <p className="block text-[#2E2E2E] Medium text-2xl lg:text-2xl text-center leading-normal mt-8 lg:mt-6 w-11/12 lg:w-7/12">
                    {t('meetupsPagePara')}
                </p>
                <div className="w-11/12 lg:w-7/12 h-fit text-black p-6 bg-white border-4 border-[#eddb55] mt-16 ">
                    <h3 className="text-2xl whitespace-nowrap Bold mb-2">Meetup 1</h3>
                    <h4 className="text-lg whitespace-nowrap Medium mb-8">SpaghettETH Naples 2023 - 05/2023</h4>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Speakers</h3>
                    <h4 className="text-lg whitespace-nowrap Bold">Speaker X : <span className="Medium">Meetup subject 1</span></h4>
                    <h4 className="text-lg whitespace-nowrap Bold mb-4">Speaker Y : <span className="Medium">Meetup subject 2</span></h4>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Video:</h3>
                    <iframe src="https://www.youtube.com/embed/jXBuU2oB27A?si=LxdRfVokHD22CA5V" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-full h-[30vh] lg:h-[70vh] mb-4" ></iframe>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Pictures:</h3>
                    <div className="w-full h-fit flex flex-row items-stretch justify-start gap-1">
                        <Image alt="" src={p1} className="w-1/3 aspect-square"></Image>
                        <Image alt="" src={p2} className="w-1/3 aspect-square"></Image>
                        <Image alt="" src={p4} className="w-1/3 aspect-square"></Image>
                    </div>
                </div>
                <div className="w-11/12 lg:w-7/12 h-fit text-black p-6 bg-white border-4 border-[#eddb55] mt-16 ">
                    <h3 className="text-2xl whitespace-nowrap Bold mb-2">Meetup 1</h3>
                    <h4 className="text-lg whitespace-nowrap Medium mb-8">SpaghettETH Naples 2023 - 05/2023</h4>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Speakers</h3>
                    <h4 className="text-lg whitespace-nowrap Bold">Speaker X : <span className="Medium">Meetup subject 1</span></h4>
                    <h4 className="text-lg whitespace-nowrap Bold mb-4">Speaker Y : <span className="Medium">Meetup subject 2</span></h4>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Video:</h3>
                    <iframe src="https://www.youtube.com/embed/jXBuU2oB27A?si=LxdRfVokHD22CA5V" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-full h-[30vh] lg:h-[70vh] mb-4" ></iframe>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Pictures:</h3>
                    <div className="w-full h-fit flex flex-row items-stretch justify-start gap-1">
                        <Image alt="" src={p1} className="w-1/3 aspect-square"></Image>
                        <Image alt="" src={p2} className="w-1/3 aspect-square"></Image>
                        <Image alt="" src={p4} className="w-1/3 aspect-square"></Image>
                    </div>
                </div>
                <div className="w-11/12 lg:w-7/12 h-fit text-black p-6 bg-white border-4 border-[#eddb55] mt-16 ">
                    <h3 className="text-2xl whitespace-nowrap Bold mb-2">Meetup 1</h3>
                    <h4 className="text-lg whitespace-nowrap Medium mb-8">SpaghettETH Naples 2023 - 05/2023</h4>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Speakers</h3>
                    <h4 className="text-lg whitespace-nowrap Bold">Speaker X : <span className="Medium">Meetup subject 1</span></h4>
                    <h4 className="text-lg whitespace-nowrap Bold mb-4">Speaker Y : <span className="Medium">Meetup subject 2</span></h4>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Video:</h3>
                    <iframe src="https://www.youtube.com/embed/jXBuU2oB27A?si=LxdRfVokHD22CA5V" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-full h-[30vh] lg:h-[70vh] mb-4" ></iframe>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Pictures:</h3>
                    <div className="w-full h-fit flex flex-row items-stretch justify-start gap-1">
                        <Image alt="" src={p1} className="w-1/3 aspect-square"></Image>
                        <Image alt="" src={p2} className="w-1/3 aspect-square"></Image>
                        <Image alt="" src={p4} className="w-1/3 aspect-square"></Image>
                    </div>
                </div>
                
            </section>
            <Footer />
        </main>
    )
}

export default Meetups