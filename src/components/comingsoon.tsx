/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import ticketsBoat from '@assets/ticketsBoat.svg'
import { useTranslation } from "react-i18next";

function ComingSoon() {
    const { t, i18n } = useTranslation();
    return (
        <section className="w-full h-fit relative flex flex-col items-center justify-start pt-24 lg:pt-40">
            <div className="w-full h-fit px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-8 justify-between">
                <div className="w-full lg:w-1/2 h-fit">
                    <p className="text-3xl text-center lg:text-left text-black SemiBold mb-4 mt-16 lg:mt-0">
                        {t('tickets')}
                    </p>
                    <h5 className="text-7xl lg:text-8xl text-black Bold mb-8 w-full text-center lg:text-left lg:w-4/5">
                        {t('coming')}
                    </h5>
                    <div className="flex lg:hidden w-full flex-row items-center justify-center mb-10">
                    <Image alt="boat napulEth " src={ticketsBoat}></Image>
                    </div>
                    <p className="text-2xl Medium text-center lg:text-justify text-[#2E2E2E] leading-normal mb-2 w-full lg:w-4/5">
                        {t('comingpara1')}
                    </p>
                    <p className="text-2xl text-[#2E2E2E] text-center lg:text-justify leading-normal Medium w-full lg:w-4/5">
                        {t('comingpara2')}
                    </p>
                    <input type="email" name="email" id="email" placeholder={t('email')} className=" bg-white rounded-none buttonShadow w-full lg:w-4/5 mt-12 mb-3 px-2 py-6 text-black text-3xl outline-none Medium" />
                    <div className="w-full lg:w-4/5 h-fit flex flex-row items-center justify-center gap-2 py-6 px-12 bg-[#CA75AB] buttonShadow">


                        <h5 className=" text-black Medium text-2xl">
                            {t('send')}
                        </h5>
                    </div>
                </div>
                <div className="w-1/2 h-fit hidden lg:flex flex-row items-center justify-center">
                    <Image alt="boat napulEth scale-50 " src={ticketsBoat}></Image>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon