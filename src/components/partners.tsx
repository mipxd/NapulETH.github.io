/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'

import spaghett from '@assets/spaghetteth.png'
import wehub from '@assets/wehub.svg'
import mego from '@assets/mego.svg'
import mood from '@assets/mood.svg'
import gate from '@assets/gate.svg'
import canal from '@assets/canal.svg'
import nexlabs from '@assets/nexlabs.webp'
import hg from '@assets/hg.png'
import evLabs from '@assets/ev labs.webp'
import niftyz from '@/assets/Niftyz.webp'

function Partners() {
    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Partners
            </h5>
            <div className="hidden lg:flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center" >
                    <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={spaghett}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://wehub.it/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20" alt="degate" src={wehub}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://mego.tickets/'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" invert w-auto h-20" alt="degate" src={mego}></Image>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center">
                    <Link href={'http://moodglobalservices.com/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={mood}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://thecryptogateway.it/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20" alt="degate" src={gate}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.cryptocanal.org/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" invert w-auto h-20 scale-150" alt="degate" src={canal}></Image>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center">
                    <Link href={'https://www.nexlabs.io/'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={nexlabs}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://hgvis.io/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20" alt="degate" src={hg}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.3vlabs.io/'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" invert w-auto h-20" alt="degate" src={evLabs}></Image>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center">

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.niftyz.io/'} target="_blank" className="w-full h-full">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20" alt="degate" src={niftyz}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">

                </div>

            </div>
            <Carousel className="w-full h-fit block lg:hidden" showIndicators={false} swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50} interval={3000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="p-0 w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                                    <Image className=" w-10 h-20" alt="degate" src={spaghett}></Image>
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

                                    <Image className="w-auto h-20" alt="degate" src={wehub}></Image>
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

                                    <Image className=" invert w-auto h-20" alt="degate" src={mego}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'http://moodglobalservices.com/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" w-auto h-20" alt="degate" src={mood}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://thecryptogateway.it/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

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
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" invert w-auto h-20 scale-150" alt="degate" src={canal}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.nexlabs.io/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" w-auto h-20" alt="degate" src={nexlabs}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://hgvis.io/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className="w-auto h-20" alt="degate" src={hg}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.3vlabs.io/'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className=" invert w-auto h-20" alt="degate" src={evLabs}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.niftyz.io/'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                                    <Image className="w-auto h-20" alt="degate" src={niftyz}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

            </Carousel>
        </section>
    )
}

export default Partners