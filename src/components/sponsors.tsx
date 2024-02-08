/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import commune from "@assets/commune.png"
import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'

function Sponsors() {
    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Sponsors
            </h5>
            <div className="hidden lg:block w-full h-fit relative my-4">
                <Marquee>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-9/12 h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">
                            
                            <Image className=" w-auto h-20 scale-125" alt="degate" src={commune}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={degate}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={square}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={wovlabs}></Image>
                        </div>
                    </Link>



                </Marquee>
            </div>
            <Carousel className="w-full h-fit block lg:hidden" showIndicators={false} swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50} interval={3000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="p-0 w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">
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
                            <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="p-0 w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                                    <Image className=" w-10 h-20" alt="degate" src={degate}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://wehub.it/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className="w-auto h-20" alt="degate" src={square}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://mego.tickets/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" w-auto h-20" alt="degate" src={wovlabs}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                
                

            </Carousel>
            
        </section>
    )
}

export default Sponsors