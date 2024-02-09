/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Marquee from "react-fast-marquee";

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'

import spaghett from '@assets/spaghetteth.png'
import wehub from '@assets/wehub.svg'
import mego from '@assets/mego.svg'
import mood from '@assets/mood.svg'
import gate from '@assets/gate.svg'
import canal from '@assets/canal.svg'
import nexlabs from '@assets/nexlabs.webp'
import hg from '@assets/hg.png'
import evLabs from '@assets/ev labs.webp'
import niftyz from '@/assets/Niftyz.webp'

import cryptoGirl from '@assets/cryptogirl.webp'
import decripto from '@assets/decripto.webp'
import sc from '@assets/sc.webp'
import cryptorama from '@assets/cryptoroma.webp'
import coinstudy from '@assets/Coinstudy.webp'
import agora from '@assets/CryptoAgora.webp'
import confidential from '@assets/CryptoConfidential.webp'
import alberto from '@assets/AlbertoGarlaschi.webp'
import mz from '@assets/mz-master-crypto.webp'
import xb from '@assets/0xB.webp'
import cem from "@assets/cem.webp"
import be from "@assets/BE.webp"
import defi from "@assets/DeFi-Italia.webp"
import onchain from '@assets/OnChain-podcast.webp'
import hrc from '@assets/HRC.webp'
import spazio from "@assets/spazio.png"
import { useTranslation } from "react-i18next";

function MediaPartners() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const { t, i18n } = useTranslation();
    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {t('media')}
            </h5>
            <div className="hidden lg:block w-full h-fit relative my-4">
                <Marquee direction="left" className=" overflow-hidden" pauseOnHover>
                    
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={cryptoGirl}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={decripto}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={sc}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={cryptorama}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20 scale-150" alt="degate" src={coinstudy}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" scale-150 w-auto h-20" alt="degate" src={agora}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={confidential}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" scale-125 w-auto h-20" alt="degate" src={alberto}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={mz}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={xb}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" scale-125 w-auto h-20" alt="degate" src={cem}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={be}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white border-4 border-[#CA75AB]">

                            <Image className=" w-auto h-20" alt="degate" src={defi}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={onchain}></Image>
                        </div>
                    </Link>
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={hrc}></Image>
                        </div>
                    </Link>
                    <Link href={'https://www.spaziocrypto.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full lg:w-[20vw] mx-4 lg:mx-8 h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20 scale-150" alt="degate" src={spazio}></Image>
                        </div>
                    </Link>



                </Marquee>
            </div>
            <div className="w-full h-fit block lg:hidden">
            <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable  autoPlay arrows={false} infinite responsive={responsive}>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://cryptogirl.it/'} target="_blank" className="p-0 w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                                    <Image className=" w-auto h-20" alt="degate" src={cryptoGirl}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://decripto.org/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${decripto.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.youtube.com/channel/UCj9aWwSuPvHvXH-iSfc3ZUA'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">

                                    <Image className=" invert w-auto h-20" alt="degate" src={sc}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.instagram.com/cryptoromaofficial/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 bg-contain scale-150 bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${cryptorama.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.instagram.com/coinstudy/'} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${coinstudy.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://instagram.com/crypto_agora?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${agora.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://m.youtube.com/channel/UCxJcRPk2BkYT4Tihz9kxi0w'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">

                                    <Image className=" w-auto h-20" alt="degate" src={confidential}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://instagram.com/albertogarlaschi.crypto?igshid=M2RkZGJiMzhjOQ=='} target="_blank" className="w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-125 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${alberto.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://m.youtube.com/@mzmastercrypto'} target="_blank" className=" w-full h-fit">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">

                                    <Image className="  w-auto h-20" alt="degate" src={mz}></Image>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.instagram.com/0xbusiness/'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-125 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${xb.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.cryptoexpomilan.com/it'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${cem.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://m.youtube.com/@BernardoMascellani'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-125 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${be.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://instagram.com/defi_italia_?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 scale-125 h-20 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${defi.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.instagram.com/onchain_podcast?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-125 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${onchain.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.youtube.com/@HardRockCrypto'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-125 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${hrc.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row items-center justify-center">
                    <div className="w-10/12 flex flex-col items-center justify-center">
                        <div className="w-full flex-grow flex flex-col items-center justify-center" >
                            <Link href={'https://www.spaziocrypto.com/'} target="_blank" className="w-full h-full">
                                <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#CA75AB]">
                                <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                        backgroundImage: `url('${spazio.src}')`
                                    }}></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

            </Carousel>
            </div>
            
        </section>
    )
}

export default MediaPartners