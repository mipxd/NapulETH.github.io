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

import { BsGlobe, BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";




import s1 from "@assets/Isola.jpg"
import s2 from "@assets/PieraDiStefano.png"
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
                <div className="w-full h-fit px-10 flex flex-row items-center justify-between gap-4">
                    <div className="w-1/4 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${s1.src}')`
                    }}></div>
                    <div className="w-1/4 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${s2.src}')`
                    }}></div>
                    <div className="w-1/4 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${s3.src}')`
                    }}></div>
                    <div className="w-1/4 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${s4.src}')`
                    }}></div>
                </div>
                <div className="w-full h-fit px-10 flex flex-row items-stretch justify-between gap-4">
                    <div className="w-1/4 flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Isola</h5>
                            <h5 className=" text-[#EDDB55] Medium text-lg">
                                Founder & CEO - HGVIS
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"https://hgvis.io/"}><BsGlobe color="#252525" size={26}></BsGlobe></Link>
                            <Link href={"https://www.linkedin.com/in/yiqin-isola-zhu-abb257221/?locale=en_US"}><BsLinkedin color="#252525" size={26}></BsLinkedin></Link>

                        </div>

                    </div>
                    <div className="w-1/4 flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Piera Di Stefano</h5>
                            <h5 className=" text-[#EDDB55] Medium text-lg">
                                CoFounder - Avvocato del Web®
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"https://www.avvocatodelweb.com"}><BsGlobe color="#252525" size={26}></BsGlobe></Link>
                            <Link href={"https://www.linkedin.com/in/piera-di-stefano/"}><BsLinkedin color="#252525" size={26}></BsLinkedin></Link>
                            
                        </div>

                    </div>
                    <div className="w-1/4 flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Vanina Ivanova</h5>
                            <h5 className=" text-[#EDDB55] Medium text-lg">
                            Blockchain Marketing CT
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"https://theweb3marketer.substack.com/"}><BsGlobe color="#252525" size={26}></BsGlobe></Link>
                            <Link href={"https://twitter.com/inks"}><RiTwitterXLine color="#252525" size={26}></RiTwitterXLine></Link>
                            
                        </div>

                    </div>
                    <div className="w-1/4 flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Cosimo Palma</h5>
                            <h5 className=" text-[#EDDB55] Medium text-lg">
                            Attorney - palma.partners
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"https://palma.partners/"}><BsGlobe color="#252525" size={26}></BsGlobe></Link>
                            <Link href={"https://www.linkedin.com/in/cosimobpalma/?locale=en_US"}><BsLinkedin color="#252525" size={26}></BsLinkedin></Link>
                            
                        </div>

                    </div>
                </div>


                <div className="w-full h-fit px-10 flex mt-8 flex-row items-center justify-between gap-4">
                    <div className="w-1/4 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${s5.src}')`
                    }}></div>
                    <div className="w-1/4 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${s6.src}')`
                    }}></div>
                    <div className="w-1/4 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${s7.src}')`
                    }}></div>
                    <div className="w-1/4 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${s8.src}')`
                    }}></div>
                </div>
                <div className="w-full h-fit px-10 flex flex-row items-stretch justify-between gap-4">
                    <div className="w-1/4 flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Vincenzo Rana</h5>
                            <h5 className=" text-[#EDDB55] Medium text-lg">
                                CoFounder & CEO - KNOBS
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"https://knobs.it/"}><BsGlobe color="#252525" size={26}></BsGlobe></Link>
                            <Link href={"https://www.linkedin.com/in/vincenzo-rana/"}><BsLinkedin color="#252525" size={26}></BsLinkedin></Link>

                        </div>

                    </div>
                    <div className="w-1/4 flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Sara Noggler</h5>
                            <h5 className=" text-[#EDDB55] Medium text-lg">
                                CEO - Polyhedra PR
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"https://polyhedra.studio/"}><BsGlobe color="#252525" size={26}></BsGlobe></Link>
                            <Link href={"https://twitter.com/nogglersara?lang=en"}><RiTwitterXLine color="#252525" size={26}></RiTwitterXLine></Link>
                            
                        </div>

                    </div>
                    <div className="w-1/4 flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Alessandra Brandi</h5>
                            <h5 className=" text-[#EDDB55] Medium text-lg">
                                Founder - Nifty Naples
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"https://niftynaples.it/"}><BsGlobe color="#252525" size={26}></BsGlobe></Link>
                            <Link href={"https://www.linkedin.com/in/alessandra-brandi-96001b15/"}><BsLinkedin color="#252525" size={26}></BsLinkedin></Link>
                            
                        </div>

                    </div>
                    <div className="w-1/4 flex-grow flex flex-row items-center justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Andrea Paulillo</h5>
                            <h5 className=" text-[#EDDB55] Medium text-lg">
                            CoFounder - eLoop
                            </h5>
                        </div>
                        <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                            <Link href={"http://www.eloop.it/"}><BsGlobe color="#252525" size={26}></BsGlobe></Link>
                            <Link href={"https://www.linkedin.com/in/paulilloandrea/"}><BsLinkedin color="#252525" size={26}></BsLinkedin></Link>
                            
                        </div>

                    </div>
                    
                </div>
                
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