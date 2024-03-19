/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import mood from '@assets/mood.svg'
import commune from "@assets/commune.png"
import degate from '@assets/degate.svg'
import square from '@assets/sq20.svg'
import wovlabs from '@assets/wovlabs.svg'
import nifty from '@assets/nifty.svg'
import { useTranslation } from "react-i18next";
import yh from '@assets/mark+word-colorful.svg'
import socialSquare from '@assets/socialSquare.svg'
import money from "@assets/money.svg"
import vault from "@assets/CriptovalutaIt marchio registrato.jpg"

import s1 from "@assets/Isola.jpg"
import s2 from "@assets/PieraDiStefano.jpg"
import s3 from "@assets/VaninaIvanova.png"
import s4 from "@assets/CosimoPalma.jpg"
import s5 from "@assets/VincenzoRana.png"
import s6 from "@assets/SaraNoggler.jpg.jpeg"
import s7 from "@assets/AlessandraBrandi.jpg"
import s8 from "@assets/AndreaPaulillo.jpg"

function Speakers() {
    const { t, i18n } = useTranslation();

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
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {
                    t('speakers')
                }
            </h5>
            <div className="hidden lg:block w-full h-fit relative my-4">
                <Marquee pauseOnHover>
                    <Link href={'https://hgvis.io/'} target="_blank" className="p-0 mx-6 w-[20vw] h-fit">
                        <div className="w-full h-fit flex flex-row items-center justify-center mx-6">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-[20vw] aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${s1.src}')`
                                }}></div>
                                <div className="w-[20vw] h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                    <h5 className=" text-black SemiBold text-2xl text-center mb-2">Isola</h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        HGVIS
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/piera-di-stefano/'} target="_blank" className="p-0 w-[20vw] mx-6 h-fit">
                        <div className="w-full h-fit flex flex-row items-center justify-center mx-6">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-[20vw] aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${s2.src}')`
                                }}></div>
                                <div className="w-[20vw] h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                    <h5 className=" text-black SemiBold text-2xl text-center mb-2">Piera Di Stefano</h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        Avvocato del Web®
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={'https://twitter.com/inks'} target="_blank" className="p-0 w-[20vw] mx-6 h-fit">
                        <div className="w-full h-fit flex flex-row items-center justify-center mx-6">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-[20vw] aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${s3.src}')`
                                }}></div>
                                <div className="w-[20vw] h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                    <h5 className=" text-black SemiBold text-2xl text-center mb-2">Vanina Ivanova</h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        Blockchain Marketing CT
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={'https://palma.partners/'} target="_blank" className="p-0 w-[20vw] mx-6 h-fit">
                        <div className="w-full h-fit flex flex-row items-center justify-center mx-6">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-[20vw] aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${s4.src}')`
                                }}></div>
                                <div className="w-[20vw] h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                    <h5 className=" text-black SemiBold text-2xl text-center mb-2">Cosimo Palma</h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        palma.partners
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={'https://it.linkedin.com/in/vincenzo-rana'} target="_blank" className="p-0 w-[20vw] mx-6 h-fit">
                        <div className="w-full h-fit flex flex-row items-center justify-center mx-6">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-[20vw] aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${s5.src}')`
                                }}></div>
                                <div className="w-[20vw] h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                    <h5 className=" text-black SemiBold text-2xl text-center mb-2">Vincenzo Rana</h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        KNOBS
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={'https://twitter.com/nogglersara?lang=en'} target="_blank" className="p-0 w-[20vw] mx-6 h-fit">
                        <div className="w-full h-fit flex flex-row items-center justify-center mx-6">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-[20vw] aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${s6.src}')`
                                }}></div>
                                <div className="w-[20vw] h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                    <h5 className=" text-black SemiBold text-2xl text-center mb-2">Sara Noggler</h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        Polyhedra
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={'https://x.com/niftynaples?t=hQSGX3McewjQFWs-UffHOg&s=09'} target="_blank" className="p-0 w-[20vw] mx-6 h-fit">
                        <div className="w-full h-fit flex flex-row items-center justify-center mx-6">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-[20vw] aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${s7.src}')`
                                }}></div>
                                <div className="w-[20vw] h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                    <h5 className=" text-black SemiBold text-2xl text-center mb-2">Alessandra Brandi</h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        Nifty Naples
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={'http://www.eloop.it'} target="_blank" className="p-0 w-[20vw] h-fit mx-6">
                        <div className="w-full h-fit flex flex-row items-center justify-center mx-6">
                            <div className="w-full flex flex-col flex-grow items-center justify-center">
                                <div className="w-[20vw] aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${s8.src}')`
                                }}></div>
                                <div className="w-[20vw] h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                    <h5 className=" text-black SemiBold text-2xl text-center mb-2">Andrea Paulillo</h5>
                                    <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                        eLoop
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Marquee>
            </div>
            <div className='w-full h-fit block lg:hidden'>
                <Carousel className="w-full h-fit block lg:hidden" showDots renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-top bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${s1.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Isola</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                    HGVIS
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${s2.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Piera Di Stefano</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                    Avvocato del Web®
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${s3.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black SemiBold text-2xl text-center mb-2">Vanina Ivanova</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                    Blockchain Marketing CT
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${s4.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black SemiBold text-2xl text-center mb-2">Cosimo Palma</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                    palma.partners
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${s5.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Vincenzo Rana</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">KNOBS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${s6.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Sara Noggler</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                    Polyhedra
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${s7.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black SemiBold text-2xl text-center mb-2">Alessandra Brandi</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                    Nifty Naples
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${s8.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                <h5 className=" text-black SemiBold text-2xl text-center mb-2">Andrea Paulillo</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                    eLoop
                                </h5>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>


        </section>
    )
}

export default Speakers