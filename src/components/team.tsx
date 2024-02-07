/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Team() {
    return (
        <section className="w-full flex flex-col items-center justify-start pt-24">
            <h5 className=" text-black text-5xl mb-4 lg:mb-10 SemiBold leading-normal text-center">
                Our Team
            </h5>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-10/12 mb-12">
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                        <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Fabrizio R. Genovese</h5>
                        <h5 className=" text-[#606060] SemiBold text-center text-3xl">Strategy Lead</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                        <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Andrea Paesano</h5>
                        <h5 className=" text-[#606060] SemiBold text-center text-3xl">Event Lead</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                        <h5 className=" text-black SemiBold text-2xl text-center mb-2">Raffaele Orifece</h5>
                        <h5 className=" text-[#606060] SemiBold text-center text-3xl">Community Lead</h5>
                    </div>
                </div>

            </div>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-10/12 mb-12">
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                        <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Ionut Gaucan</h5>
                        <h5 className=" text-[#606060] SemiBold text-center text-3xl">Business Dev.</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                        <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Gianluca Di Bella</h5>
                        <h5 className=" text-[#606060] SemiBold text-center text-3xl">Strategic Partner</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                        <h5 className=" text-black SemiBold text-2xl text-center mb-2">Lorenzo Cappluni</h5>
                        <h5 className=" text-[#606060] SemiBold text-center text-3xl">Strategic Partner</h5>
                    </div>
                </div>

            </div>
            <div className="h-fit hidden lg:flex flex-row items-stretch justify-between w-10/12 mb-12">
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">

                </div>
                <div className="w-1/3 flex flex-col flex-grow items-center justify-center">
                    <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                    <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">

                        <h5 className=" text-black SemiBold text-center text-3xl">The Illustrator</h5>
                    </div>
                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">

                </div>

            </div>
            <Carousel className="w-full h-fit block lg:hidden" showIndicators={false} swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50} interval={3000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Fabrizio R. Genovese</h5>
                            <h5 className=" text-[#606060] SemiBold text-center text-3xl">Strategy Lead</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Andrea Paesano</h5>
                            <h5 className=" text-[#606060] SemiBold text-center text-3xl">Event Lead</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Raffaele Orifece</h5>
                            <h5 className=" text-[#606060] SemiBold text-center text-3xl">Community Lead</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Ionut Gaucan</h5>
                            <h5 className=" text-[#606060] SemiBold text-center text-3xl">Business Dev.</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">Gianluca Di Bella</h5>
                            <h5 className=" text-[#606060] SemiBold text-center text-3xl">Strategic Partner</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">
                            <h5 className=" text-black SemiBold text-2xl text-center mb-2">Lorenzo Cappluni</h5>
                            <h5 className=" text-[#606060] SemiBold text-center text-3xl">Strategic Partner</h5>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                        <div className="w-8/12 aspect-square bg-white buttonShadow mb-2"></div>
                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white buttonShadow">

                            <h5 className=" text-black SemiBold text-center text-3xl">The Illustrator</h5>
                        </div>
                    </div>
                </div>


            </Carousel>
        </section>
    )
}

export default Team