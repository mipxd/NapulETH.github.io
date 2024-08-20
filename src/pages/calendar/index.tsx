import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Agenda from "@/components/agenda";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";


export default function Artists() {

    const { t, i18n } = useTranslation();
    const events = [
        {
            id: 0,
            title: 'Opening',
            subtitle: "HAHA",
            speaker: "NONE",
            start: new Date(2024, 8, 15, 9, 40, 0),
            end: new Date(2024, 8, 15, 10, 0, 0),
        },
        {
            id: 1,
            title: 'Tambussi',
            subtitle: "HAHA",
            speaker: "NONE",
            start: new Date(2024, 8, 15, 10, 20, 0),
            end: new Date(2024, 8, 15, 10, 40, 0),
        },
        {
            id: 2,
            title: 'Limone',
            subtitle: "HAHA",
            speaker: "NONE",
            start: new Date(2024, 8, 15, 10, 40, 0),
            end: new Date(2024, 8, 15, 11, 0, 0),
        },
        {
            id: 3,
            title: 'Unlocking the Code: Breaking Barriers with Tech Education for Women in Afghanistan',
            subtitle: "Breaking Barriers with Tech Education for Women in Afghanistan",
            speaker: "John Lilic",
            start: new Date(2024, 8, 15, 11, 0, 0),
            end: new Date(2024, 8, 15, 11, 20, 0),
        },
        {
            id: 4,
            title: 'QJ + Francesco Vincenti (Zuzalu)(Modera Fab)',
            subtitle: "QJ + Francesco Vincenti (Zuzalu)(Modera Fab)",
            speaker: "QJ + Francesco Vincenti (Zuzalu)(Modera Fab)",
            start: new Date(2024, 8, 15, 11, 20, 0),
            end: new Date(2024, 8, 15, 12, 0, 0),
        },
        {
            id: 5,
            title: 'Luca Boiardi (Marketing)(IT)',
            subtitle: "Luca Boiardi (Marketing)(IT)",
            speaker: "Luca Boiardi (Marketing)(IT)",
            start: new Date(2024, 8, 15, 14, 10, 0),
            end: new Date(2024, 8, 15, 14, 20, 0),
        },
        {
            id: 6,
            title: 'Francesco Vincenti (Community)',
            subtitle: "Francesco Vincenti (Community)",
            speaker: "Francesco Vincenti (Community)",
            start: new Date(2024, 8, 15, 14, 40, 0),
            end: new Date(2024, 8, 15, 15, 0, 0),
        },
        {
            id: 7,
            title: 'EthCommunity',
            subtitle: "Tambussi, Cia, Limone, Marsili, Paesano (Community)(Modera Raffaele)",
            speaker: "Tambussi, Cia, Limone, Marsili, Paesano (Community)(Modera Raffaele)",
            start: new Date(2024, 8, 15, 15, 0, 0),
            end: new Date(2024, 8, 15, 16, 0, 0),
        },
        {
            id: 8,
            title: 'Ornella Vallana (Education, Community)',
            subtitle: "Ornella Vallana (Education, Community)",
            speaker: "Ornella Vallana (Education, Community)",
            start: new Date(2024, 8, 15, 16, 0, 0),
            end: new Date(2024, 8, 15, 16, 20, 0),
        },
        {
            id: 9,
            title: `Paolo Schiattarella ${<br></br>} (Community)`,
            subtitle: "Paolo Schiattarella (Community)",
            speaker: "Paolo Schiattarella (Community)",
            start: new Date(2024, 8, 15, 16, 20, 0),
            end: new Date(2024, 8, 15, 16, 40, 0),
        },
        {
            id: 10,
            title: 'Suning Yao',
            subtitle: "Suning Yao",
            speaker: "Suning Yao",
            start: new Date(2024, 8, 15, 16, 40, 0),
            end: new Date(2024, 8, 15, 17, 0, 0),
        },
    ]

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
                    {t('agendaTitle')}
                </h5>
                <p className="block text-[#2E2E2E] z-50 Medium text-2xl lg:text-2xl text-center lg:px-28 leading-normal mt-8 lg:mb-4 lg:mt-0 w-11/12 lg:w-full">
                    {t('agendaPara')}
                </p>

            </section>
            <Agenda />
            <Footer />
        </main>
    );
}
