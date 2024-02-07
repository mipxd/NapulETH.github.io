/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'
import decripto from '@assets/decripto.webp'
import spaghett from '@assets/spaghetteth.png'

function JoinSection() {
    return (
        <section className="w-full flex flex-col items-center justify-start mt-24 lg:mt-32">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Join Us
            </h5>
            <p className="lg:mt-6 Medium text-2xl text-[#606060] w-11/12 lg:w-7/12 text-center leading-normal">
                Ignite change as a speaker at NapulEth Open Village! Share your insights, break the echo chamber, and shape the future of Ethereum. Apply now to be a catalyst for inclusivity and innovation in the web3 space. Your voice matters – join us!
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSebPS1os6-3I58rzMkJ6U8WuYrjUOW-JCS0x5zwUyN-5WVTIQ/viewform?usp=sf_link'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#E38B84] buttonShadow my-10">


                    <h5 className=" text-black Medium text-2xl">Join as a speaker</h5>
                </div>
            </Link>
            <p className="mt-6 Medium text-2xl text-[#606060] w-11/12 lg:w-7/12 text-center leading-normal">
                Fuel the NapulEth Open Village spirit as a volunteer! Shape Ethereum's future, contribute your skills, and foster inclusivity. Apply now to make a meaningful impact and be a vital part of our dynamic team!
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSe3xQnG0J07EjzZk6JgFJP-udLBY80XlE89X_gnz08Mhxm7_Q/viewform?usp=sf_link'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#9ECC51] buttonShadow my-10">


                    <h5 className=" text-black Medium text-2xl">Join as a volunteer</h5>
                </div>
            </Link>
            <p className="mt-6 Medium text-2xl text-[#606060] w-11/12 lg:w-7/12 text-center leading-normal">
                Ignite change and elevate your brand by partnering with NapulEth Open Village! Shape the future of web3, foster innovation, and gain unparalleled visibility. Apply now to be a key partner and make a lasting impact on the evolution of Ethereum!
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSd9V2x7BYFgbbmmbsUJvVlaFVwfNhfL5ImIdHz0S2oc2GRQ6A/viewform?usp=sf_link'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AA] buttonShadow my-10">


                    <h5 className=" text-black Medium text-2xl">Join as a partner</h5>
                </div>
            </Link>
            <p className="mt-6 Medium text-2xl text-[#606060] w-11/12 lg:w-7/12 text-center leading-normal">
                Elevate your brand and shape Ethereum's future as a sponsor for NapulEth Open Village! Gain prime visibility, showcase innovation, and be a key contributor. Apply now to secure your sponsorship and make an impact at this dynamic event!
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSduNXY2e1NHhEWNfVyXZ_7oDzNGrl7YIo1UwxDu2VNcDWhvfg/viewform?usp=sf_link'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#70C9F2] buttonShadow my-10">


                    <h5 className=" text-black Medium text-2xl">Join as a sponsor</h5>
                </div>
            </Link>
        </section>
    )
}

export default JoinSection