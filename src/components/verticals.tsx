/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import munaciello1 from "@assets/MUNACIELLO EDU.png"
import munaciello2 from "@assets/MUNACIELLO NFT.png"
import munaciello3 from "@assets/MUNACIELLO LAW.png"
import munaciello4 from "@assets/MUNACIELLO DEFI TTOLING.png"
import munaciello5 from "@assets/MUNACIELLO GAMING.png"
import munaciello6 from "@assets/MUNACIELLO PUBLIC.png"




function Verticals() {
    return (
        <section className="w-full flex flex-col items-center justify-start pt-12">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Verticals
            </h5>
            <div className="h-fit hidden lg:flex flex-row items-center justify-between w-10/12 mb-12">
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello1} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#50A3A4] buttonShadow">
                        <h5 className=" text-black SemiBold text-4xl">Education</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello2} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#7B5453] buttonShadow">
                        <h5 className=" text-black SemiBold text-4xl">Art / NFT</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello3} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#FF5A61] buttonShadow">
                        <h5 className=" text-black SemiBold text-4xl">Law</h5>
                    </div>
                </div>

            </div>
            <div className="h-fit hidden lg:flex flex-row items-center justify-between w-10/12">
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello4} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#2CC6FF] buttonShadow">
                        <h5 className=" text-black SemiBold text-4xl">Education</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello5} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#FFE984] buttonShadow">
                        <h5 className=" text-black SemiBold text-4xl">Art / NFT</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello6} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#FFCAD8] buttonShadow">
                        <h5 className=" text-black SemiBold text-4xl">Law</h5>
                    </div>
                </div>

            </div>
            <Carousel className="w-full h-fit block lg:hidden" showIndicators={false} swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50} interval={3000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello1} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#50A3A4] buttonShadow">
                            <h5 className=" text-black SemiBold text-4xl">Education</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello2} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#7B5453] buttonShadow">
                            <h5 className=" text-black SemiBold text-4xl">Art / NFT</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello3} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#FF5A61] buttonShadow">
                            <h5 className=" text-black SemiBold text-4xl">Law</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello4} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#2CC6FF] buttonShadow">
                            <h5 className=" text-black SemiBold text-4xl">Education</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello5} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#FFE984] buttonShadow">
                            <h5 className=" text-black SemiBold text-4xl">Art / NFT</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello6} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-24 bg-[#FFCAD8] buttonShadow">
                            <h5 className=" text-black SemiBold text-4xl">Law</h5>
                        </div>
                    </div>
                </div>

            </Carousel>
        </section>
    )
}

export default Verticals