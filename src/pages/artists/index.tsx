import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ComingSoon from "@/components/comingsoon";
import Phases from "@/components/phases";
import TicketingPartner from "@/components/ticketingPartner";
import SpeakersSection from "@/components/speakersSection";
import Footer from "@/components/footer";

import { BsGlobe, BsLinkedin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import pescatroie from '@assets/pescatroie 2.svg'
import cloudBase from '@assets/cloud base2.svg'
import totano from '@assets/totano funk 2.svg'
import nonnetto from '@assets/nonnetto 3.svg'

interface Artist {
    name: string
    image: string
    link: string
    description: string
}

export default function Artists() {

    const { t, i18n } = useTranslation();
    const [artists, setArtists] = useState<Artist[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await fetch('https://regalplastic-us.backendless.app/api/data/artists').then(async (result) => {
                    const data = await result.json();
                    console.log(data)
                    setArtists([])
                    data.map((item: any) => {
                        const artist: Artist = {
                            name: item.name,
                            image: item.image,
                            description: item.description,
                            link: item.url
                        }
                        setArtists((prevState) => [...prevState, artist]);
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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


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
                <Image src={cloudBase} alt="cloud" className=" cloud w-96 hidden lg:block absolute -left-20 top-36"></Image>
                <Image src={cloudBase} alt="cloud" className=" cloud w-96 hidden lg:block absolute -right-20 top-28"></Image>

                <h5 className=" text-black z-50 text-4xl SemiBold text-center mb-3 lg:mb-6 lg:px-28 leading-normal mt-8 lg:mt-0 w-11/12 lg:w-full ">
                    {t('artistsTitle')}
                </h5>
                <p className="block text-[#2E2E2E] z-50 Medium text-2xl lg:text-2xl text-center lg:px-28 leading-normal mt-8 lg:mb-4 lg:mt-0 w-11/12 lg:w-full">
                    {t('artistsPara')}
                </p>
                <h6 className=" xl:w-1/2 w-10/12 text-white p-4 z-50 bg-white border-4 border-[#eddb55] text-xl xl:text-2xl SemiBold leading-normal text-center my-8 lg:my-6" style={{
                    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/original-acrylic-painting-background-dlerick.jpg")',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    {
                        t('artistsSoon')
                    } ⏳⌛
                </h6>
                <div className="grid-cols-4 auto-rows-auto w-10/12 flex flex-col items-center justify-start lg:grid z-50">
                    {
                        [...artists].sort((a, b) => {
                            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0; // names must be equal
                        }).map((artist, index) => {
                            return (
                                <div className="flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
                                    <Link href={artist.link} target="_blank" className="w-full aspect-square">
                                        <div className="w-full aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                            backgroundImage: `url('${artist.image}')`
                                        }}></div>
                                    </Link>
                                    <div className="w-full flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]" style={{
                                        backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/original-acrylic-painting-background-dlerick.jpg")',
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",

                                    }}>
                                        <div className="h-fit w-10/12 flex flex-col items-start justify-between">
                                            <h5 className=" text-white drop-shadow-md shadow-black SemiBold text-lg whitespace-nowrap text-left mb-2">
                                                {artist.name}
                                            </h5>
                                            <h5 className=" text-[#FFFFFF] SemiBold text-md whitespace-nowrap">
                                                {artist.description}
                                            </h5>
                                        </div>
                                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                                            <Link href={artist.link} target="_blank"><GoLinkExternal color="#FFFFFF" size={22} /></Link>

                                        </div>

                                    </div>
                                </div>


                            )
                        })
                    }
                </div>



                <div className='w-full h-fit hidden lg:hidden'>
                    <Carousel className="w-full h-fit block lg:hidden" showDots renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                        {
                            artists.map((artist, index) => {
                                return (
                                    <Link href={artist.link} key={index} target="_blank" className="w-10/12 bg-red-400 h-fit">
                                        <div className="w-full h-fit flex flex-row items-center justify-center">
                                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                                <div className="w-8/12 aspect-square bg-cover bg-top bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                                    backgroundImage: `url('${artist.image}')`
                                                }}></div>
                                                <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                                    <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">
                                                        {artist.name}
                                                    </h5>
                                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                                        {artist.description}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </Carousel>
                </div>
                <h6 className=" xl:w-1/2 w-10/12 text-black p-4 z-50 bg-white border-4 border-[#eddb55] text-xl xl:text-2xl SemiBold leading-normal text-center my-8 lg:my-6">
                    {
                        t("curators")
                    }
                    <span className="block text-md mt-1 Medium">&#9679;&nbsp;BARBARA MALACARNE</span>
                    <span className="block text-md Medium">&#9679;&nbsp;LUIGI GALLO</span>
                </h6>

            </section>
            <Footer />
        </main>
    );
}
