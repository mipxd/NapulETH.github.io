/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import commune from "@assets/commune.png"
import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'
import { useTranslation } from "react-i18next";

function Sponsors() {
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
                    t('sponsors')
                }
            </h5>
            <div className="hidden lg:block w-full h-fit relative my-4">
                <Marquee pauseOnHover>
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
            <div className="w-full h-fit block lg:hidden">
            <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable  autoPlay arrows={false} infinite responsive={responsive}>
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

                                    <Image className=" w-10 scale-[4] h-20" alt="degate" src={degate}></Image>
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
            </div>
            
            
        </section>
    )
}

export default Sponsors