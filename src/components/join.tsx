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
            <p className="mt-6 Medium text-2xl text-[#2E2E2E] w-11/12 lg:w-7/12 text-center leading-normal">
                Elevate your brand and shape Ethereum{"'"}s future as a sponsor for NapulETH Open Village! Gain prime visibility, showcase innovation, and be a key contributor. Apply now to secure your sponsorship and make an impact at this dynamic event!
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSe1U6zRTRp671KrtyW1U1fBvbrVal_irFUjTy5Oum_K7mVryg/viewform'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#eddb55] buttonShadow my-10">


                    <h5 className=" text-black Medium text-2xl">Join As A Sponsor</h5>
                </div>
            </Link>
            <p className="lg:mt-6 Medium text-2xl text-[#2E2E2E] w-11/12 lg:w-7/12 text-center leading-normal">
                Ignite change as a speaker at NapulETH Open Village! Share your insights, break the echo chamber, and shape the future of Ethereum. Apply now to be a catalyst for inclusivity and innovation in the web3 space. Your voice matters – join us!
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScxTrj8mKZHx_X8y7ChZoFM4TT8-rG74K2CsHz09_eXiTaqYQ/viewform'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#E38B84] buttonShadow my-10">


                    <h5 className=" text-black Medium text-2xl">Join As A Speaker</h5>
                </div>
            </Link>
            <p className="mt-6 Medium text-2xl text-[#2E2E2E] w-11/12 lg:w-7/12 text-center leading-normal">
                Fuel the NapulETH Open Village spirit as a volunteer! Shape Ethereum{"'"}s future, contribute your skills, and foster inclusivity. Apply now to make a meaningful impact and be a vital part of our dynamic team!
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLScVN8T-k_r-qMjI5Z4KFgzb1ShksHdhFMBcsWRTA1qNcrVKWw/viewform'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#9ECC51] buttonShadow my-10">


                    <h5 className=" text-black Medium text-2xl">Join As A Volunteer</h5>
                </div>
            </Link>
            <p className="mt-6 Medium text-2xl text-[#2E2E2E] w-11/12 lg:w-7/12 text-center leading-normal">
                Ignite change and elevate your brand by partnering with NapulETH Open Village! Shape the future of web3, foster innovation, and gain unparalleled visibility. Apply now to be a key partner and make a lasting impact on the evolution of Ethereum!
            </p>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSf5t-L7kW2xCzN-kggLruouCEi_hEKQFkJHjiN781r5lZyxaA/viewform'} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AA] buttonShadow my-10">


                    <h5 className=" text-black Medium text-2xl">Join As A Partner</h5>
                </div>
            </Link>
            
        </section>
    )
}

export default JoinSection