/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import t1 from '@assets/FabrizioGenovese.jpg'
import t2 from '@assets/andrea.jpeg'
import t3 from '@assets/raffa.jpg'
import t4 from '@assets/ionut.jpeg'
import t5 from '@assets/gianluca.jpeg'
import t6 from '@assets/lore.jpeg'
import t7 from '@assets/masha.png'
import t8 from '@assets/med.jpg'
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Team() {

    const [selectedSliderIndex, setSelectedSliderIndex] = useState<number>(0)
    const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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
        <section className="w-full flex flex-col items-center justify-start pt-24">
            <h5 className=" text-black text-4xl mb-4 lg:mb-10 SemiBold leading-normal text-center">
                {t('team')}
            </h5>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-10/12 mb-12">
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-cover bg-top bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t1.src}')`
                    }}></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Fabrizio R. Genovese</h5>
                        <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                            {
                                t('t1')
                            }
                        </h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t2.src}')`
                    }}></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Andrea Paesano</h5>
                        <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                            {
                                t('t2')
                            }
                        </h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t3.src}')`
                    }}></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <h5 className=" text-black SemiBold text-2xl text-center mb-2">Raffaele Orefice</h5>
                        <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                            {t('t3')}
                        </h5>
                    </div>
                </div>

            </div>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-10/12 mb-12">
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t4.src}')`
                    }}></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Ionut Gaucan</h5>
                        <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">Business Dev.</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t5.src}')`
                    }}></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Gianluca Di Bella</h5>
                        <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                            {t('t5')}
                        </h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t6.src}')`
                    }}></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                        <h5 className=" text-black SemiBold text-2xl text-center mb-2">Lorenzo Ceppaluni</h5>
                        <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                            {t('t6')}
                        </h5>
                    </div>
                </div>
                

            </div>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-10/12 mb-12">
            <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-cotain bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t7.src}')`
                    }}></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                        <h5 className=" text-black SemiBold text-2xl text-center mb-2">Masha</h5>
                        <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                            The Illustrator
                        </h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t8.src}')`,
                        backgroundSize: "160%",
                        backgroundPosition: "70% 20%"
                    }}></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                        <h5 className=" text-black SemiBold text-2xl text-center mb-2">Med Ben Moussa</h5>
                        <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                            Web Dev.
                        </h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    
                </div>
                

            </div>
            <div className='w-full h-fit block lg:hidden'>
                <Carousel className="w-full h-fit block lg:hidden" showDots renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-top bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${t1.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Fabrizio R. Genovese</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                                    {t('t1')}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${t2.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Andrea Paesano</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                                    {t('t2')}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${t3.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black SemiBold text-2xl text-center mb-2">Raffaele Orefice</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                                    {t('t3')}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${t4.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Ionut Gaucan</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">Business Dev.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${t5.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Gianluca Di Bella</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                                    {t('t5')}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${t6.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                <h5 className=" text-black SemiBold text-2xl text-center mb-2">Lorenzo Ceppaluni</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                                    {t('t6')}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${t7.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                <h5 className=" text-black SemiBold text-2xl text-center mb-2">Masha</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                                    The Illustrator
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                            <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                backgroundImage: `url('${t8.src}')`
                            }}></div>
                            <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                                <h5 className=" text-black SemiBold text-2xl text-center mb-2">Med Ben Moussa</h5>
                                <h5 className=" text-[#EDDB55] SemiBold text-center text-2xl">
                                    Web Dev.
                                </h5>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

            {
                /*
                Carousel className="w-full h-fit block lg:hidden" showIndicators={false} swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50} interval={3000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}
                onChange={(index: number)=>{setSelectedSliderIndex(index)}} selectedItem={selectedSliderIndex}
                >
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-cover bg-top bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t1.src}')`
                    }}></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Fabrizio R. Genovese</h5>
                            <h5 className=" text-[#EDDB55] SemiBold text-center text-3xl">Strategy Lead</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t2.src}')`
                    }}></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Andrea Paesano</h5>
                            <h5 className=" text-[#EDDB55] SemiBold text-center text-3xl">Event Lead</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t3.src}')`
                    }}></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Raffaele Orifece</h5>
                            <h5 className=" text-[#EDDB55] SemiBold text-center text-3xl">Community Lead</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t4.src}')`
                    }}></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Ionut Gaucan</h5>
                            <h5 className=" text-[#EDDB55] SemiBold text-center text-3xl">Business Dev.</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t5.src}')`
                    }}></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Gianluca Di Bella</h5>
                            <h5 className=" text-[#EDDB55] SemiBold text-center text-3xl">Strategic Partner</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t6.src}')`
                    }}></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Lorenzo Cappluni</h5>
                            <h5 className=" text-[#EDDB55] SemiBold text-center text-3xl">Strategic Partner</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                        backgroundImage: `url('${t7.src}')`
                    }}></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">

                            <h5 className=" text-black SemiBold text-center text-3xl">The Illustrator</h5>
                        </div>
                    </div>
                </div>


            </Carousel>
                */
            }



        </section>
    )
}

export default Team
