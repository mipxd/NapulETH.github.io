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

interface Event {
    title: string
    address: string
    description: string
    image_url: string
    date: string
}

function SideEvents() {
    const { t, i18n } = useTranslation();
    const [events, setEvents] = useState<Event[]>([])

    const headers = {
        Authorization: "secret_KMU51fPKhtzCgyT6ahxX9sPtU03E17uFR9g4tjD2lOX",
        "Notion-Version": "2022-06-28"
    }

    const page_id = "cade4eeb29fe4c1fb4e5f958ccacdc7f"

    const request_url = `https://api.notion.com/v1/databases/${page_id}`


    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await fetch('https://regalplastic-us.backendless.app/api/data/events').then(async (result) => {
                    const data = await result.json();
                    console.log(data)
                    setEvents([])
                    data.map((item: any) => {
                        const d = new Date(item.eventDate);
                        const event: Event = {
                            title: item.title,
                            address: item.address,
                            description: item.description,
                            date: d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }),
                            image_url: item.image
                        }
                        setEvents((prevState) => [...prevState, event]);
                        console.log(event)
                    })
                })
            } catch (error) {
                console.error(error);
                // Handle errors gracefully (e.g., display error message)
            }
        };

        fetchData();
    }, []);

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
                <h5 className=" text-black text-4xl SemiBold w-full lg:px-28 leading-normal text-left mt-20 mb-3 lg:mb-6">
                    {t("sideEvents")}
                </h5>
                <p className="block text-[#2E2E2E] Medium text-2xl lg:text-2xl text-left lg:px-28 leading-normal mt-8 lg:mb-4 lg:mt-0 w-11/12 lg:w-full">
                    {t('meetupsPagePara')}
                </p>
                <div className="w-11/12 h-fit flex flex-col items-center justify-start lg:grid lg:grid-cols-2 lg:auto-rows-auto gap-4 px-10 lg:my-10">
                    {
                        events.map((event, key) => {
                            return (
                                <div key={key} className="w-full xl:w-auto h-fit flex flex-col lg:flex-row lg:items-center lg:justify-stretch gap-3">
                                    <div className=" w-10/12 aspect-square lg:w-5/12 border-4 border-[#eddb55]" style={{
                                        backgroundImage: `url('${event.image_url}')`,
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }}>

                                    </div>
                                    <div className="w-11/12 lg:w-fit lg:max-w-7/12 flex flex-col lg:items-start lg:justify-between gap-3 lg:max-w-[30vw]">
                                        <div className="flex w-fit h-fit flex-col items-start justify-center lg:items-start lg:justify-start">
                                            <h5 className=" text-black SemiBold text-2xl whitespace-nowrap text-left">
                                                {event.title}
                                            </h5>
                                            <h5 className=" text-[#CA75AB] SemiBold text-md whitespace-nowrap text-left">
                                                {event.date}
                                            </h5>
                                            <h5 className=" text-black text-md whitespace-nowrap text-left lg:mb-8">
                                                {event.address.slice(0,30)+"..."}
                                            </h5>
                                        </div>
                                        <div className="flex w-3/2 h-fit flex-col items-start justify-center lg:items-start lg:justify-start gap-1">
                                            
                                            <h5 className="  text-gray-800 text-sm text-left h-fit w-9/12 mb-2 ">
                                                {event.description.slice(0,100)+"..."}
                                            </h5>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>


            </section>
            <Footer />
        </main>
    )
}

export default SideEvents