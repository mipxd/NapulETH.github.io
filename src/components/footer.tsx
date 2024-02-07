import Link from "next/link"
import Image from "next/image";

import { FaXTwitter, FaLinkedin  } from "react-icons/fa6";
import { FaTelegramPlane, FaInstagram  } from "react-icons/fa";
import footerClouds from '@assets/footerClouds.svg'


function Footer(){
    return(
        <footer className="w-full h-fit pt-32 lg:pt-60 flex flex-col items-center justify-start">
            <Image alt="footer image clouds napulEth" src={footerClouds} className="w-full h-auto scale-150 lg:scale-100"></Image>
            <div className="w-full h-fit flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-8 py-8 lg:py-14 bg-[#548DCA] relative z-50 mt-3 lg:-mt-5">
                <p className="text-base SemiBold text-white mt-8 lg:mt-0 text-center lg:text-left">All rights reserved - Copyright © NapulEth 2024 </p>
                <div className="flex flex-row items-center justify-between w-fit h-fit gap-8 lg:gap-6">
                    <Link href={"https://twitter.com/napuleth"} target="_blank" className=" w-full h-full">
                        <FaXTwitter color="#FFFFFF" size={30} className=" scale-125 lg:scale-0"></FaXTwitter> 
                    </Link>
                    <Link href={"https://t.me/napuleth"} target="_blank" className=" w-full h-full">
                        <FaTelegramPlane color="#FFFFFF" size={30} className=" scale-125 lg:scale-0"></FaTelegramPlane>
                    </Link>
                    <Link href={"https://instagram.com/napuleth?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"} target="_blank" className=" w-full h-full">
                        <FaInstagram color="#FFFFFF" size={30} className=" scale-125 lg:scale-0"></FaInstagram>
                    </Link>
                    <Link href={"https://www.linkedin.com/company/napul-eth/"} target="_blank" className=" w-full h-full">
                        <FaLinkedin color="#FFFFFF" size={30} className=" scale-125 lg:scale-0"></FaLinkedin>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer