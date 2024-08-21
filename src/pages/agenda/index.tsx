import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";

export default function Agenda() {

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
            <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-20">
                <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                    {
                        t('agendaTitle')
                    }
                </h5>
                <h6 className=" xl:w-1/2 w-8/12 text-black p-4 bg-white border-4 border-[#eddb55] text-xl xl:text-2xl Medium leading-normal text-center my-6">
                    {
                        t('agendaPara')
                    } ⏳⌛
                </h6>
            </section>
            
            <Footer />
        </main>
    );
}
