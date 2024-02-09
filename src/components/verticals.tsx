/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import munaciello1 from "@assets/MUNACIELLO EDU.png"
import munaciello2 from "@assets/MUNACIELLO NFT.png"
import munaciello3 from "@assets/MUNACIELLO LAW.png"
import munaciello4 from "@assets/MUNACIELLO DEFI TTOLING.png"
import munaciello5 from "@assets/MUNACIELLO GAMING.png"
import munaciello6 from "@assets/MUNACIELLO PUBLIC.png"
import { useState } from "react";

import { useTranslation } from "react-i18next";


function Verticals() {
    const { t, i18n } = useTranslation();

    const [selectedSliderIndex, setSelectedSliderIndex] = useState<number>(0)
    const indices = [0, 1, 2, 3, 4, 5]
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
        <section className="w-full flex flex-col items-center justify-start pt-12">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {t('verticals')}
            </h5>
            <div className="h-fit hidden lg:flex flex-row items-center justify-between w-10/12 mb-12">
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello1} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-4 glassy buttonShadow">
                        <h5 className=" text-black SemiBold text-2xl">
                            {t('edu')}
                        </h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello2} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-4 glassy buttonShadow">
                        <h5 className=" text-black SemiBold text-2xl">
                            {t('art')}
                        </h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello3} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-4 glassy buttonShadow">
                        <h5 className=" text-black SemiBold text-2xl">
                            {t('law')}
                        </h5>
                    </div>
                </div>

            </div>
            <div className="h-fit hidden lg:flex flex-row items-center justify-between w-10/12">
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello4} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-4 glassy buttonShadow ">
                        <h5 className=" text-black SemiBold text-2xl">
                            Defi
                        </h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello5} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-16 -mt-4 glassy buttonShadow">
                        <h5 className=" text-black SemiBold text-2xl">Gaming</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <Image alt="munaciello" src={munaciello6} className=""></Image>
                    <div className="w-8/12 h-fit flex flex-row items-center justify-center py-6 px-8 -mt-4 glassy buttonShadow">
                        <h5 className=" text-black SemiBold whitespace-nowrap text-2xl">
                            {t('public')}
                        </h5>
                    </div>
                </div>

            </div>
            <div className="w-full h-fit block lg:hidden">
            <Carousel className="w-full h-fit block lg:hidden" showDots renderDotsOutside renderButtonGroupOutside swipeable  autoPlay arrows={false} infinite responsive={responsive}>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello1} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-6 mb-4 glassy buttonShadow">
                            <h5 className=" text-black SemiBold text-3xl">
                                {t('edu')}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello2} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-6 mb-4 glassy buttonShadow">
                            <h5 className=" text-black SemiBold text-3xl">
                                {t('art')}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello3} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-6 mb-4 glassy buttonShadow">
                            <h5 className=" text-black SemiBold text-3xl">
                                {t('law')}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello4} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-6 mb-4 glassy buttonShadow">
                            <h5 className=" text-black SemiBold text-3xl">
                                Defi
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello5} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-6 mb-4 glassy buttonShadow">
                            <h5 className=" text-black SemiBold text-3xl">Gaming</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <Image alt="munaciello" src={munaciello6} className=""></Image>
                        <div className="w-full h-fit flex flex-row items-center justify-center py-6 px-16 -mt-6 mb-4 glassy buttonShadow">
                            <h5 className=" text-black SemiBold text-3xl">
                                {t('public')}
                            </h5>
                        </div>
                    </div>
                </div>

            </Carousel>
            </div>
            
            

        </section>
    )
}

export default Verticals