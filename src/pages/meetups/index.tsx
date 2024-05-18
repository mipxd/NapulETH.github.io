/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image"
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import p1 from "@assets/11.jpeg"
import p2 from "@assets/12.jpeg"
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
                    <h3 className="text-2xl whitespace-nowrap Bold mb-2 text-[#91CE35]">Upcoming</h3>
                    <h4 className="text-lg whitespace-nowrap Medium mb-1"><span className="Bold">ETH.SPARKLING: </span>Road to NapulETH</h4>
                    <h4 className="text-lg whitespace-nowrap Medium mb-1 italic">17.04.2024</h4>
                    <Link href={"https://g.co/kgs/8Z3W44M"} target="_blank" className=" text-blue-800"><h4 className="text-lg whitespace-nowrap Medium mb-8">The Spark Creative Hub - Mondadori Bookstore<br />Via degli Acquari, 80133, Napoli, Italy.</h4></Link>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Program:</h3>
                    <ul className="list-disc text-left ml-10 w-11/12">
                        <li>
                            <h4 className="text-lg Bold">Michel Bauwens : <span className="Medium">Human Civilizations and Crypto's Role in Shaping Civilization's New Era</span></h4>
                        </li>
                        <li>
                            <h4 className="text-lg Bold mb-4">Open Discussion, Networking & Aperitivo</h4>
                        </li>
                    </ul>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Pictures:</h3>
                    <div className="w-full h-fit flex flex-row items-stretch justify-start gap-1">
                        <Image alt="" src={p1} className="w-1/2 aspect-square"></Image>
                        <Image alt="" src={p2} className="w-1/2 aspect-square"></Image>
                    </div>
                    <Link href={"https://www.eventbrite.it/e/biglietti-napuleth-the-spark-blockchain-and-ai-informal-meetup-863744451907"} className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full h-fit mt-4 bg-[#CA75AB] border-4 border-[#eddb55] p-6 flex flex-row items-center justify-center">
                            <h5 className=" text-black Bold text-xl">
                                Make A Reservation
                            </h5>
                        </div>
                    </Link>
                </div>
                <div className="w-11/12 lg:w-7/12 h-fit text-black p-6 bg-white border-4 border-[#eddb55] mt-16 ">
                    <h3 className="text-2xl whitespace-nowrap Bold mb-2 text-[#91CE35]">Upcoming</h3>
                    <h4 className="text-lg whitespace-nowrap Medium mb-1"><span className="Bold">ETH.SPARKLING: </span>Road to NapulETH</h4>
                    <h4 className="text-lg whitespace-nowrap Medium mb-1 italic">08.05.2024</h4>
                    <Link href={"https://g.co/kgs/8Z3W44M"} target="_blank" className=" text-blue-800"><h4 className="text-lg whitespace-nowrap Medium mb-8">The Spark Creative Hub - Mondadori Bookstore<br />Via degli Acquari, 80133, Napoli, Italy.</h4></Link>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Program:</h3>
                    <ul className="list-disc text-left ml-10 w-11/12">
                        <li>
                            <h4 className="text-lg Bold">Gianmarco Paduano <span className="italic Medium">&</span> Andrea Ricci : <span className="Medium">Potenzialità "disruptive" dell' AI</span></h4>
                        </li>
                        <li>
                            <h4 className="text-lg Bold mb-4">Open Discussion & Networking</h4>
                        </li>
                    </ul>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Pictures:</h3>
                    <div className="w-full h-fit flex flex-row items-stretch justify-start gap-1">
                        <Image alt="" src={p1} className="w-1/2 aspect-square"></Image>
                        <Image alt="" src={p2} className="w-1/2 aspect-square"></Image>
                    </div>
                    <Link href={"https://www.eventbrite.it/e/biglietti-napuleth-the-spark-blockchain-and-ai-informal-meetup-863744451907"} className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full h-fit mt-4 bg-[#CA75AB] border-4 border-[#eddb55] p-6 flex flex-row items-center justify-center">
                            <h5 className=" text-black Bold text-xl">
                                Make A Reservation
                            </h5>
                        </div>
                    </Link>
                </div>
                <div className="w-11/12 lg:w-7/12 h-fit text-black p-6 bg-white border-4 border-[#eddb55] mt-16 ">
                    <h3 className="text-2xl whitespace-nowrap Bold mb-2 text-[#91CE35]">Upcoming</h3>
                    <h4 className="text-lg whitespace-nowrap Medium mb-1"><span className="Bold">ETH.SPARKLING: </span>Road to NapulETH</h4>
                    <h4 className="text-lg whitespace-nowrap Medium mb-1 italic">22.05.2024</h4>
                    <Link href={"https://g.co/kgs/8Z3W44M"} target="_blank" className=" text-blue-800"><h4 className="text-lg whitespace-nowrap Medium mb-8">The Spark Creative Hub - Mondadori Bookstore<br />Via degli Acquari, 80133, Napoli, Italy.</h4></Link>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Program:</h3>
                    <ul className="list-disc text-left ml-10 w-11/12">
                        <li>
                            <h4 className="text-lg Bold mb-4">Wecome & Check-in</h4>
                        </li>
                        <li>
                            <h4 className="text-lg Bold">Fabrizio Romano Genovese: <span className="Medium">Blockchain: Il Nuovo Orizzonte del Web3</span></h4>
                        </li>
                        <li>
                            <h4 className="text-lg Bold mb-4">Open Discussion & Networking Session</h4>
                        </li>
                        <li>
                            <h4 className="text-lg Bold mb-4">🍕 Global Pizza Party 2024 🍕</h4>
                        </li>
                    </ul>
                    <h3 className="text-xl whitespace-nowrap Bold mb-2">Pictures:</h3>
                    <div className="w-full h-fit flex flex-row items-stretch justify-start gap-1">
                        <Image alt="" src={p1} className="w-1/2 aspect-square"></Image>
                        <Image alt="" src={p2} className="w-1/2 aspect-square"></Image>
                    </div>
                    <Link href={"https://www.eventbrite.it/e/biglietti-napuleth-the-spark-blockchain-and-ai-informal-meetup-863744451907"} className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full h-fit mt-4 bg-[#CA75AB] border-4 border-[#eddb55] p-6 flex flex-row items-center justify-center">
                            <h5 className=" text-black Bold text-xl">
                                Make A Reservation
                            </h5>
                        </div>
                    </Link>
                </div>
                <div className="hidden w-11/12 lg:w-7/12 h-fit text-black p-6 bg-white border-4 border-[#eddb55] mt-16 ">
                    <h3 className="text-2xl whitespace-nowrap Bold mb-2 text-[#91CE35] ">Upcoming</h3>
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