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


function SideEvents() {
    const { t, i18n } = useTranslation();


    const headers = {
        Authorization: "secret_KMU51fPKhtzCgyT6ahxX9sPtU03E17uFR9g4tjD2lOX",
        "Notion-Version": "2022-06-28"
    }

    const page_id = "cade4eeb29fe4c1fb4e5f958ccacdc7f"

    const request_url = `https://api.notion.com/v1/databases/${page_id}`


    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await fetch('/api/getEvents');
                console.log(Object.keys(req))
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
                <h5 className=" text-black text-4xl SemiBold leading-normal text-center mt-20 mb-3 lg:mb-6">
                    {t("sideEvents")}
                </h5>



            </section>
            <Footer />
        </main>
    )
}

export default SideEvents