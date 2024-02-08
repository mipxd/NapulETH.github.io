/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image";

import { FaXTwitter, FaLinkedin  } from "react-icons/fa6";
import { FaTelegramPlane, FaInstagram  } from "react-icons/fa";
import footerClouds from '@assets/footerClouds.svg'


function Footer(){
    return(
        <footer className="w-full h-fit pt-32 lg:pt-60 flex flex-col items-center justify-start">
            <Image alt="footer image clouds napulEth" src={footerClouds} className="w-full h-auto scale-[1.8] lg:scale-100"></Image>
            <div className="w-full h-fit flex flex-col-reverse lg:flex-col-reverse items-center justify-between px-4 lg:px-8 py-8 lg:pt-8 lg:pb-4 bg-[#518DCA] relative z-50 mt-3 lg:-mt-5">
                <p className="text-base SemiBold text-white mt-0 lg:mt-0 text-center lg:text-left">All rights reserved - Copyright © NapulEth 2024 </p>
                <div className="h-[1px] w-8/12 lg:w-[3%] my-8 bg-white/50"></div>
                <div className="flex flex-row items-center relative z-50 justify-between w-fit h-fit gap-8 lg:gap-6">
                    <Link href={"https://twitter.com/napuleth"} target="_blank" className=" w-full h-full">
                        <FaXTwitter color="#FFFFFF" size={30} className=" scale-125 relative lg:scale-100"></FaXTwitter> 
                    </Link>
                    <Link href={"https://t.me/napuleth"} target="_blank" className=" w-full h-full">
                        <FaTelegramPlane color="#FFFFFF" size={30} className=" scale-125 lg:scale-100"></FaTelegramPlane>
                    </Link>
                    <Link href={"https://instagram.com/napuleth?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"} target="_blank" className=" w-full h-full">
                        <FaInstagram color="#FFFFFF" size={30} className=" scale-125 lg:scale-100"></FaInstagram>
                    </Link>
                    <Link href={"https://www.linkedin.com/company/napul-eth/"} target="_blank" className=" w-full h-full">
                        <FaLinkedin color="#FFFFFF" size={30} className=" scale-125 lg:scale-100"></FaLinkedin>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer