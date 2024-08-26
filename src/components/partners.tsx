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
import nexlabs from '@assets/NEX logo.svg'
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
import fana from '@assets/Fana.ai black.svg';
import thrill from '@assets/THRILLD LABS (black text).svg'
import spark from '@assets/logo-theSpark-01 (1).svg'
import beincrypto from '@assets/beincrypto.svg'
import belonq from '@assets/Belong community SVG.svg'

import { useTranslation } from "react-i18next";

function Partners() {

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
                <Link href="https://www.ethbucharest.xyz/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${bucharest.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "90% 120%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.spaghett-eth.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${spaghett.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "40% 75%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://it.beincrypto.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${beincrypto.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "55% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://wehub.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${wehub.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "85% 130%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://mego.tickets/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${mego.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://thecryptogateway.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${gate.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.cryptocanal.org/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${canal.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "70% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.nexlabs.io/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${nexlabs.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 90%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://hgvis.io/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${hg.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "50% 55%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.ethmilan.xyz/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${ethmilan.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "90% 130%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://app.banklessacademy.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${bankless.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://t.me/Chilicommunity" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${chilliBanks.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "80% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.ethbratislava.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${bratislava.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.regione.campania.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${regione.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "75% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.fabbricaitalianainnovazione.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${fabbrica.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.spici.eu/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${spici.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.sakebito.xyz/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28 invert" style={{
                        backgroundImage: `url('${sakebito.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 80%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://linktr.ee/themetagate" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${sfondo.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "65% 60%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.comune.napoli.it/home" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${commune.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "45% 90%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.giffonifilmfestival.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${giffoni.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "55% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.fana.ai/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${fana.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "55% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.thrilldlabs.io/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${thrill.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "55% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.thesparkhub.it/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${spark.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "55% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://belonqevent.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${belonq.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "55% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
            </div>
            <div className="w-full h-fit block lg:hidden">
                <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.ethbucharest.xyz/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 scale-[2.5] h-20 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${bucharest.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 scale-150 h-20 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${spaghett.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://it.beincrypto.com/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 scale-150 h-20 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${beincrypto.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://wehub.it/'} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] " alt="degate" src={wehub}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://mego.tickets/'} target="_blank" className=" w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className=" invert w-auto h-20" alt="degate" src={mego}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://thecryptogateway.it/'} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20" alt="degate" src={gate}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.cryptocanal.org/'} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className=" w-auto h-20  " alt="degate" src={canal}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.nexlabs.io/'} target="_blank" className=" w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-40 h-20 aspect-square bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${nexlabs.src}')`,
                                        }}></div>

                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://hgvis.io/'} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20" alt="degate" src={hg}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.ethmilan.xyz/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[2] " alt="degate" src={ethmilan}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://app.banklessacademy.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-125 " alt="degate" src={bankless}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://t.me/Chilicommunity'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-125 rounded-full" alt="degate" src={chilliBanks}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.ethbratislava.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[1.2] " alt="degate" src={bratislava}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.regione.campania.it/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[1.5] " alt="degate" src={regione}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.fabbricaitalianainnovazione.it/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[1.2] " alt="degate" src={fabbrica}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.spici.eu/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[1.5] " alt="degate" src={spici}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.sakebito.xyz/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-[1.5] invert" alt="degate" src={sakebito}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://twitter.com/icphub_IT'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                        <Image className="w-auto h-20 scale-75 invert" alt="degate" src={CH}></Image>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://linktr.ee/themetagate'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[1.2] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${sfondo.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.comune.napoli.it/home'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${commune.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.giffonifilmfestival.it/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${giffoni.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.fana.ai/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${fana.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.thrilldlabs.io/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${thrill.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.thesparkhub.it/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${spark.src}')`
                                        }}></div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://belonqevent.com/'} target="_blank" className="p-0 w-full h-fit">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${belonq.src}')`
                                        }}></div>
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

export default Partners