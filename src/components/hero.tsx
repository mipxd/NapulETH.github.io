import Link from "next/link"
import Image from "next/image"
import Marquee from "react-fast-marquee";



import commune from "@assets/commune.png"
import logo from '@assets/bigLogo.svg'

import cloud1 from '@assets/cloud1.svg'
import cloud2 from '@assets/cloud2.svg'
import boatOncloud from '@assets/boatonCloud1.svg'
import castleOncloud from '@assets/castleonCloud.svg'
import templeOncloud from '@assets/templeOnCloud.svg'
import stampOnCloud from '@assets/stampOnCloud.svg'

function Hero() {
    
    return (
        <section className="w-full h-fit relative flex flex-col items-center justify-start pt-40">
            
            <Image src={cloud1} alt="cloud" className=" cloud absolute -left-24 scale-50 lg:scale-100 lg:-left-10 top-[12%] "></Image>
            <Image src={cloud2} alt="cloud" className=" cloud absolute -right-10 top-40"></Image>
            <Image src={boatOncloud} alt="cloud" className=" boat absolute -left-[5%] top-[27%] scale-[.5] "></Image>
            <Image src={castleOncloud} alt="cloud" className=" castle absolute -right-[7%] top-[40%] scale-[.4] "></Image>
            <Image src={templeOncloud} alt="cloud" className=" boat absolute -left-[8%] top-[65%] scale-[.5] "></Image>
            <Image src={stampOnCloud} alt="cloud" className=" castle absolute -right-[7%] top-[70%] scale-[.4] "></Image>
            <h5 className=" text-black text-5xl SemiBold leading-normal text-center relative z-50">
                The First Web3 Event<br />in Naples
            </h5>
            <p className=" text-[#606060] Medium text-3xl mt-6 relative z-50">
                12th - 14th September, 2024
            </p>
            <p className=" text-[#606060] Medium text-3xl mt-2 relative z-50s">
                Santa Maria la Nova, Naples
            </p>
            <Link href={'/tickets'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#E38B84] buttonShadow my-10">
                    <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6_362)">
                            <path d="M37.1874 0H16.9219C15.0456 0 13.2474 0.712784 11.9183 1.96397C8.32417 5.37095 5.67745 7.89076 2.08104 11.2912C0.751935 12.5402 0 14.2535 0 16.0322V32.5374C0 33.3439 0.694448 34 1.55446 34H20.8127C22.6984 34 24.4965 33.2872 25.8257 32.0273C29.7923 28.2672 32.685 25.5338 36.6609 21.765C37.9808 20.5051 38.7327 18.8005 38.7327 17.0218V1.47352C38.7327 0.65829 38.0382 0 37.1874 0ZM34.6074 11.1517L26.9662 27.5457C25.8026 30.0568 22.7168 31.1859 20.0677 30.083L5.04049 23.7943C4.14139 23.4151 3.74128 22.4233 4.13219 21.571L11.7734 5.17695C12.9369 2.66803 16.0229 1.53674 18.6719 2.6397L33.6991 8.92832C34.5982 9.3076 34.9983 10.2994 34.6074 11.1517Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_362">
                                <rect width="38.9575" height="34" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h5 className=" text-black Medium text-2xl">Apply Now</h5>
                </div>
            </Link>

            <Link href={'/apply'} className=" relative z-50 p-0 w-fit h-fit">
                <p className=" text-black Regular text-xl mt-2 underline">
                    Interested in sponsoring us?
                </p>
            </Link>

            <p className=" text-black text-2xl Medium mt-16">Powered by</p>

            <Image src={commune} alt="commune de napoli" className=" scale-50 -mt-20 ml-4"></Image>

            <Image src={logo} alt="big logo" className=" mt-20"></Image>

            <h5 className=" text-black text-5xl SemiBold leading-normal text-center mt-20 mb-6">
                Bringing new faces to Ethereum
            </h5>
            <p className=" text-[#606060] Medium text-3xl text-center leading-normal w-5/12">
                offering a real incentive for those not yet familiar with web3 to participate in significant events, both accessible and high-profile
            </p>

            <div className="w-[200vw] h-fit my-40 relative flex flex-row items-center justify-center">
                <div className="w-[200vw] h-fit relative rotate-6 bg-[#E38B84] border-t-4 border-b-4 border-t-black border-b-black my-4">
                    <Marquee className=" overflow-hidden my-4">
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                    </Marquee>
                </div>
                <div className="w-[200vw] h-fit absolute z-50 -rotate-6 bg-[#E38B84] border-t-4 border-b-4 border-t-black border-b-black my-4">
                    <Marquee className=" overflow-hidden my-4" direction="right">
                    <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Workshops</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Courses</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Art Camps</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Challenges</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Talks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                        <h5 className=" text-black text-3xl SemiBold">Pizza & Drinks</h5>
                        <div className="w-4 h-4 rounded-full bg-black mx-4"></div>
                    </Marquee>
                </div>
                
            </div>



        </section>
    )
}

export default Hero