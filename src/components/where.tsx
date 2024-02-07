/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import p1 from "@assets/p1.jpeg"
import p2 from "@assets/p2.jpeg"
import p3 from "@assets/p3.jpeg"
import p4 from "@assets/p4.jpeg"
import p5 from "@assets/p5.jpeg"
import p6 from "@assets/p6.jpeg"
import p7 from "@assets/p7.jpeg"
import p8 from "@assets/p8.jpeg"
import p9 from "@assets/p9.jpeg"

function Where() {

    const [selectedSliderIndex, setSelectedSliderIndex] = useState<number>(0)
    const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <section className="w-full flex flex-col items-center justify-start mt-40">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Where
            </h5>
            <p className=" text-[#606060] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-8/12 mb-2">
                Discover Naples{"'"} rich history at the Monumental Complex of Santa Maria la Nova. With its iconic church and a blend of Gothic and Baroque styles, this site showcases centuries of cultural heritage through artifacts and frescoes.
            </p>
            <p className=" text-[#606060] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-7/12">
                It is here where the infamous Count Dracula is thought to be buried.
            </p>

            <div className="mt-8 w-10/12 lg:w-6/12 h-fit flex flex-row items-center justify-center">
                <Carousel className="w-full h-fit buttonShadow" onChange={(index: number)=>{setSelectedSliderIndex(index)}} showIndicators={false} swipeable={true}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50} interval={3000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false} selectedItem={selectedSliderIndex}>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p1.src}')`
                    }}>

                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p2.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p3.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p4.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p5.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p6.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p7.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p8.src}')`
                    }}>


                    </div>
                    <div className="w-full aspect-square bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url('${p9.src}')`
                    }}>


                    </div>


                </Carousel>
            </div>

            <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 my-6">
                {
                    indices.map((index: number) => (
                        <div key={index} onClick={()=>{setSelectedSliderIndex(index)}} className={`${index == selectedSliderIndex ? " bg-gray-200 " : " bg-white"} cursor-pointer buttonShadow h-5 aspect-square`}></div>
                    ))
                }
            </div>

        </section>
    )
}

export default Where