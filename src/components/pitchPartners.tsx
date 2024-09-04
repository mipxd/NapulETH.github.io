/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Marquee from "react-fast-marquee";

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'

import spaghett from '@assets/SpaghettETH.svg'
import wehub from '@assets/wehub svg.svg'
import mego from '@assets/mego.svg'
import mood from '@assets/mood.svg'
import gate from '@assets/gate.svg'
import canal from '@assets/LOGO CRYTOCANAL- horizontal (new - black).svg'
import nexlabs from '@assets/nexlabs.webp'
import hg from '@assets/hg.png'
import evLabs from '@assets/ev labs.webp'
import niftyz from '@/assets/Niftyz.webp'
import nifty from '@assets/nifty.svg'
import ethmilan from '@assets/ethmilan.svg'
import bucharest from '@assets/BucharestBlack.svg'
import bankless from '@assets/BanklessAcademy Black Bg.svg'
import chilliBanks from '@assets/chilli.svg'
import barbera from '@assets/barbera.jpeg'
import bratislava from '@assets/ETHBratislava black.svg'
import regione from "@assets/logo regione [Converted].svg"
import fabbrica from "@assets/logo_fabbrica_vettoriale-1.png"
import spici from '@assets/logo_spicy_vettoriale-1.png'
import sakebito from '@assets/SAKEbito_logomark_topdown_white.svg'
import CH from '@assets/CH _ blck letter.svg'
import sfondo from '@assets/Sfondo scuro-scritta bianca omino bianchi.png'
import commune from "@assets/commune.png"
import giffoni from '@assets/giffoni.svg'

import hercle from "@assets/hercle.svg"
import grow from '@assets/grow3.svg'
import bga from "@assets/BGA-logo-300x123.png"
import semoto from '@assets/Semoto_logo_design.webp'
import fidesieum from "@assets/fidesium-logo-white.143c3b4.png"


import { useTranslation } from "react-i18next";

function PitchPartners() {

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

    const { t, i18n } = useTranslation();
    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {t('partners')}
            </h5>
            <div className="hidden lg:grid lg:grid-cols-5 gap-4 col-span-8 lg:auto-rows-auto lg:w-10/12 items-center justify-center w-full h-fit relative my-4">
                <Link href="https://www.hercle.financial/herclex/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${hercle.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "80% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://grow3.ai/en" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${grow.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "30% 65%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.blockchaingamealliance.org/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${bga.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "85% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.fidesium.xyz/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${fidesieum.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 50%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.semoto.io/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${semoto.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 50%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
            </div>
            <div className="w-full h-fit block lg:hidden">
                <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.hercle.financial/herclex/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 scale-[2] h-20 bg-contain invert bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${hercle.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://grow3.ai/en'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 scale-100 h-20 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${grow.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.blockchaingamealliance.org/'} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[1.5] invert" alt="degate" src={bga}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.fidesium.xyz/'} target="_blank" className=" w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className=" invert w-auto h-20" alt="degate" src={fidesieum}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.semoto.io/'} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 invert" alt="degate" src={semoto}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

        </section>
    )
}

export default PitchPartners