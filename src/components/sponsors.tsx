/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import mood from '@assets/mood.svg'
import moodMobile from '@assets/moodMobile.svg'
import commune from "@assets/commune.png"
import degate from '@assets/degate.svg'
import square from '@assets/sq20.svg'
import wovlabs from '@assets/wovlabs.svg'
import nifty from '@assets/nifty.svg'
import { useTranslation } from "react-i18next";
import yh from '@assets/mark+word-colorful.svg'
import socialSquare from '@assets/socialSquare.svg'
import money from "@assets/money.svg"
import vault from "@assets/ICON-CRIPTOVALUTA.png"
import sfondo from '@assets/Sfondo scuro-scritta bianca omino bianchi.png'
import barbera from '@assets/barbera.jpeg'
import esp from '@assets/esp-logo.96fc01cc.svg'
import QJ from '@assets/QJ.jpg.jpeg'
import lilic from '@assets/johnLilic.jpg'
import { useState } from "react";
import { BsGlobe } from "react-icons/bs";


function Sponsors() {
    const { t, i18n } = useTranslation();

    const [type, setType] = useState("main");

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
                {t('sponsors')}
            </h5>
            <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-center gap-4 mb-8">
            <div className={`w-10/12 lg:w-[27vw] h-fit px-8 py-2 cursor-pointer ${type == "diamond" ? "bg-[#CA75AB] text-white" : "bg-white text-black"} border-4 border-[#eddb55]`} onClick={() => { setType("diamond") }}>
                    <h5 className="text-2xl lg:text-3xl SemiBold leading-normal text-center">
                        Diamond Sponsors
                    </h5>
                </div>
                <div className={`w-10/12 lg:w-[27vw] h-fit px-8 py-2 cursor-pointer ${type == "main" ? "bg-[#CA75AB] text-white" : "bg-white text-black"} border-4 border-[#eddb55]`} onClick={() => { setType("main") }}>
                    <h5 className="text-2xl lg:text-3xl SemiBold leading-normal text-center">
                        Main Sponsors
                    </h5>
                </div>
                <div className={`w-10/12 lg:w-[27vw] h-fit px-8 py-2 cursor-pointer ${type == "side" ? "bg-[#CA75AB] text-white" : "bg-white text-black"} border-4 border-[#eddb55]`} onClick={() => { setType("side") }}>
                    <h5 className="text-2xl lg:text-3xl SemiBold leading-normal text-center">
                        Side Sponsors
                    </h5>
                </div>
                
            </div>

            {
                type == "main" ? (
                    <div className="hidden lg:grid lg:grid-cols-5 gap-4 col-span-8 lg:auto-rows-auto lg:w-10/12 items-center justify-center w-full h-fit relative my-4">
                        <Link href="https://www.youhodler.com/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${yh.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "85% 110%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="http://degate.com/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${degate.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "65% 100%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="https://20squares.xyz/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${square.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "65% 100%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="http://moodglobalservices.com/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${mood.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "65% 100%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                    </div>
                ) : type == "side" ? (
                    <div className="hidden lg:grid lg:grid-cols-5 gap-4 col-span-8 lg:auto-rows-auto lg:w-10/12 items-center justify-center w-full h-fit relative my-4">
                        <Link href="https://esp.ethereum.foundation/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${esp.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "65% 90%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="https://wovlabs.com/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${wovlabs.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "65% 100%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="https://niftynaples.it/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${nifty.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "85% 140%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="https://bitcashback.net/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${socialSquare.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "40% 80%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="https://www.moneyviz.it/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${money.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "65% 100%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="https://www.criptovaluta.it/" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${vault.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "35% 60%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                        <Link href="https://www.caffebarbera.com/en/?utm_source=google&utm_medium=cpc&utm_campaign=brand_dubai&gad_source=1&gclid=EAIaIQobChMIhJHBvJujhQMV8UZBAh15BQ6QEAAYASAAEgLkgfD_BwE" target="_blank" className="p-0 w-full h-fit flex">
                            <div className="w-full h-28" style={{
                                backgroundImage: `url('${barbera.src}')`,
                                backgroundPosition: "center",
                                backgroundSize: "65% 80%",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Link>
                    </div>
                ) : (
                    <div className="flex-row items-start justify-center w-11/12 hidden lg:flex">
                        <div className="flex flex-col items-center justify-center w-1/5 mx-auto mb-4">
                            <Link href={"https://www.johnlilic.info/"} target="_blank" className="w-full aspect-square">
                                <div className="w-full aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${lilic.src}')`
                                }}></div>
                            </Link>
                            <div className="w-full flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <div className="h-fit w-10/12 flex flex-col items-start justify-between">
                                    <h5 className=" text-black SemiBold text-md whitespace-nowrap text-left mb-2">
                                        John Lilic
                                    </h5>
                                    <h5 className=" text-[#EDDB55] Medium text-md">
                                        Seed Investor
                                    </h5>
                                </div>
                                <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                                    <Link href={"https://www.johnlilic.info/"} target="_blank"><BsGlobe color="#252525" size={26}></BsGlobe></Link>

                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
            {
                type == "main" ? (
                    <div className="w-full h-fit block lg:hidden">
                        <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://www.youhodler.com/'} target="_blank" className="w-full h-full">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                                <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                                    backgroundImage: `url('${yh.src}')`
                                                }}></div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">

                                                <Image className=" w-10 scale-[4] h-20" alt="degate" src={degate}></Image>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://20squares.xyz/'} target="_blank" className="w-full h-fit">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                                <Image className="w-auto h-20" alt="degate" src={square}></Image>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'http://moodglobalservices.com/'} target="_blank" className="w-full h-fit">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                                <Image className=" w-auto h-20" alt="degate" src={moodMobile}></Image>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                ) : type == "side" ? (
                    <div className="w-full h-fit block lg:hidden">
                        <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                            
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://esp.ethereum.foundation/'} target="_blank" className="p-0 w-full h-fit">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#eddb55]">
                                                <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                                    backgroundImage: `url('${esp.src}')`
                                                }}></div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://wovlabs.com/'} target="_blank" className=" w-full h-fit">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                                <Image className=" w-auto h-20" alt="degate" src={wovlabs}></Image>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://niftynaples.it/'} target="_blank" className=" w-full h-fit">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                                <Image className=" scale-[2] w-auto h-20" alt="degate" src={nifty}></Image>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://www.youhodler.com/'} target="_blank" className="w-full h-full">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                                <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                                    backgroundImage: `url('${yh.src}')`
                                                }}></div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://bitcashback.net/'} target="_blank" className="w-full h-full">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                                <div className="w-28 h-20 scale-[1.5] bg-contain bg-center bg-no-repeat" style={{
                                                    backgroundImage: `url('${socialSquare.src}')`
                                                }}></div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://www.moneyviz.it/'} target="_blank" className="w-full h-full">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                                <div className="w-28 h-20 scale-[1.5] bg-contain bg-center bg-no-repeat" style={{
                                                    backgroundImage: `url('${money.src}')`
                                                }}></div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://www.criptovaluta.it/'} target="_blank" className="w-full h-full">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                                <div className="w-28 h-20 scale-[2.5] bg-contain bg-center bg-no-repeat" style={{
                                                    backgroundImage: `url('${vault.src}')`
                                                }}></div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-fit flex flex-row items-center justify-center">
                                <div className="w-10/12 flex flex-col items-center justify-center">
                                    <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                        <Link href={'https://www.caffebarbera.com/en/?utm_source=google&utm_medium=cpc&utm_campaign=brand_dubai&gad_source=1&gclid=EAIaIQobChMIhJHBvJujhQMV8UZBAh15BQ6QEAAYASAAEgLkgfD_BwE'} target="_blank" className="w-full h-full">
                                            <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">

                                                <Image className="w-auto h-20 scale-[2] rounded-full" alt="degate" src={barbera}></Image>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>




                        </Carousel>
                    </div>
                ) : (
                    <div className='w-full h-fit block lg:hidden'>
                        <Carousel className="w-full h-fit block lg:hidden" showDots renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                            <Link href={"https://www.johnlilic.info/"} target="_blank" className="w-full h-fit">
                                <div className="w-full h-fit flex flex-row items-center justify-center">
                                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                                        <div className="w-8/12 aspect-square bg-cover bg-top bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                            backgroundImage: `url('${lilic.src}')`
                                        }}></div>
                                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">
                                                John Lilic
                                            </h5>
                                            <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                                Seed Investor
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Carousel>
                    </div>
                )
            }



        </section>
    )
}

export default Sponsors