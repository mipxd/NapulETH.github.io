"use client"

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Artists() {

    const { t, i18n } = useTranslation();
    const locales = {
        'en-US': enUS,
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    })

    const events = [
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

    const eventsList = [
        { title: 'Opening', start: "2024-09-12T09:40:00", end: "2024-09-12T10:00:00" },
        { title: 'Tambussi', start: "2024-09-12T10:00:00", end: "2024-09-12T10:40:00" },
        { title: 'Limone', start: "2024-09-12T10:40:00", end: "2024-09-12T11:00:00" },
        { title: 'John Lilic', start: "2024-09-12T11:00:00", end: "2024-09-12T11:20:00" },
        { title: 'QJ + Francesco Vincenti', start: "2024-09-12T11:20:00", end: "2024-09-12T12:00:00" },
    ]

    function renderEventContent(eventInfo: { timeText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | Iterable<ReactNode> | null | undefined; event: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | Iterable<ReactNode> | null | undefined; }; }) {
        return (
            <div className="flex flex-col items-start justify-start p-2 h-fit min-h-fit">
                <p className="Medium">{eventInfo.timeText}</p>
                <p className="Medium text-2xl lg:text-2xl">{eventInfo.event.title}</p>
            </div>
        )
    }

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
                    {t('artistsTitle')}
                </h5>
                <p className="block text-[#2E2E2E] z-50 Medium text-2xl lg:text-2xl text-center lg:px-28 leading-normal mt-8 lg:mb-4 lg:mt-0 w-11/12 lg:w-full">
                    {t('artistsPara')}
                </p>

            </section>
            <section className="w-11/12 mx-auto h-[800px] flex flex-col items-center justify-start mt-20 rounded-[0.6rem] bg-white">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    initialView='timeGridFourDay'
                    events={eventsList}
                    weekends={true}
                    eventContent={renderEventContent}
                    views={
                        {
                            timeGridFourDay: {
                                type: 'timeGrid',
                                weekends: true,
                                dayHeaders: true,
                                duration: {days: 3},
                                dayCount: 3,
                                visibleRange: {
                                    start: '2024-09-12T09:00:00',
                                    end: '2024-09-14'
                                },
                                validRange: {
                                    start: '2024-09-12T09:00:00',
                                    end: '2024-09-16'
                                },
                                
                            },

                        }
                    }

                />
            </section>
            <Footer />
        </main>
    );
}
