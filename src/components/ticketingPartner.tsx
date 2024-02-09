/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import megoNapulEth from '@assets/megoNapulEth.svg'
import { useTranslation } from "react-i18next";

function TicketingPartner() {
    const { t, i18n } = useTranslation();
    return (
        <section className="w-full flex flex-col items-center justify-start pt-24 lg:pt-40">
            <h5 className=" text-black text-4xl mb-6 SemiBold leading-normal text-center">
                {t('tipartner')}
            </h5>
            <Image src={megoNapulEth} alt="mego and NapulEth" className="scale-75 mb-10"></Image>
            <div className="w-10/12 lg:w-8/12 h-fit flex flex-col items-start justify-start">
                <p className="w-full h-fit text-[#2E2E2E] text-2xl Medium text-center lg:text-justify mb-2 leading-normal">
                    {t('tipartnerpara1')}
                </p>
                <p className="w-full h-fit text-[#2E2E2E] text-2xl Medium text-center lg:text-justify leading-normal">
                    {t('tipartnerpara2')}
                </p>
                <Link href={"https://mego.tickets/#/"} target="_blank" className="w-fit h-fit"></Link>
                <div className="w-full lg:w-4/12 h-fit flex flex-row items-center justify-center gap-2 mt-6 py-6 px-20 bg-[#CA75AB] border-4 border-[#eddb55]">


                    <h5 className=" text-black Medium whitespace-nowrap text-2xl">
                        {t('check')}
                    </h5>
                </div>
            </div>

        </section>
    )
}

export default TicketingPartner