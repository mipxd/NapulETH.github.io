/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image";

import { FaXTwitter, FaLinkedin  } from "react-icons/fa6";
import { FaTelegramPlane, FaInstagram  } from "react-icons/fa";
import footerClouds from '@assets/footerGR.svg'
import { useTranslation } from "react-i18next";

import pescatroie from '@assets/pescatroie 2.svg'
import cloudBase from '@assets/cloud base2.svg'
import totano from '@assets/totano funk 2.svg'
import nonnetto from '@assets/nonnetto 3.svg'

function Footer(){
    const { t, i18n } = useTranslation();
    return(
        <footer className="w-full h-fit pt-32 lg:pt-60 flex flex-col items-center justify-start">
            <Image alt="footer image clouds napulEth" src={footerClouds} className="w-full h-auto scale-[1.3] lg:scale-90 lg:-mt-40 -mb-10 lg:-mb-[8%]"></Image>
            <div className="w-full h-fit flex flex-col lg:flex-col items-center justify-between px-4 lg:px-8 py-8 lg:pt-8 lg:pb-4 bg-[#518DCA] relative z-50 mt-3 lg:-mt-5">
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
                <div className="h-[1px] w-8/12 lg:w-[3%] my-8 bg-white/50"></div>
                <p className="text-base SemiBold text-white mt-0 lg:mt-0 text-center lg:text-left">
                    {t('copy')} | <Link href="https://napul.eth.limo/terms.html">{t('terms')}</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer