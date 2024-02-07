import Link from "next/link"
import Image from "next/image";

import { FaXTwitter, FaLinkedin  } from "react-icons/fa6";
import { FaTelegramPlane, FaInstagram  } from "react-icons/fa";
import footerClouds from '@assets/footerClouds.svg'


function Footer(){
    return(
        <footer className="w-full h-fit pt-60 flex flex-col items-center justify-start">
            <Image alt="footer image clouds napulEth" src={footerClouds} className="w-full h-auto"></Image>
            <div className="w-full h-fit flex flex-row items-center justify-between px-8 py-14 bg-[#548DCA] relative z-50 -mt-5">
                <p className="text-base SemiBold text-white">All rights reserved - Copyright © NapulEth 2024 </p>
                <div className="flex flex-row items-center justify-between w-fit h-fit gap-6">
                    <Link href={""} target="_blank" className=" w-full h-full">
                        <FaXTwitter color="#FFFFFF" size={30}></FaXTwitter>
                    </Link>
                    <Link href={""} target="_blank" className=" w-full h-full">
                        <FaTelegramPlane color="#FFFFFF" size={30}></FaTelegramPlane>
                    </Link>
                    <Link href={""} target="_blank" className=" w-full h-full">
                        <FaInstagram color="#FFFFFF" size={30}></FaInstagram>
                    </Link>
                    <Link href={""} target="_blank" className=" w-full h-full">
                        <FaLinkedin color="#FFFFFF" size={30}></FaLinkedin>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer