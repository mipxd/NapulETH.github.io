/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"

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

function MediaPartners() {
    return (
        <section className="w-full flex flex-col items-center justify-start mt-32">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Media Partners
            </h5>
            <div className="flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center" >
                    <Link href={'https://cryptogirl.it/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={cryptoGirl}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://decripto.org/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20" alt="degate" src={decripto}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.youtube.com/channel/UCj9aWwSuPvHvXH-iSfc3ZUA'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={sc}></Image>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="h-fit flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center">
                    <Link href={'https://www.instagram.com/cryptoromaofficial/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20 scale-[2] " alt="degate" src={cryptorama}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.instagram.com/coinstudy/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20 scale-[2]" alt="degate" src={coinstudy}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://instagram.com/crypto_agora?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20 scale-[2]" alt="degate" src={agora}></Image>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="h-fit flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center">
                    <Link href={'https://m.youtube.com/channel/UCxJcRPk2BkYT4Tihz9kxi0w'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={confidential}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://instagram.com/albertogarlaschi.crypto?igshid=M2RkZGJiMzhjOQ=='} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20 scale-150 " alt="degate" src={alberto}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://m.youtube.com/@mzmastercrypto'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={mz}></Image>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="h-fit flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center">
                    <Link href={'https://www.instagram.com/0xbusiness/'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20 scale-150 " alt="degate" src={xb}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.cryptoexpomilan.com/it'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20 scale-150 " alt="degate" src={cem}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://m.youtube.com/@BernardoMascellani'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20 scale-125 " alt="degate" src={be}></Image>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="h-fit flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center">
                    <Link href={'https://instagram.com/defi_italia_?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20 scale-150" alt="degate" src={defi}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.instagram.com/onchain_podcast?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20 scale-150" alt="degate" src={onchain}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.youtube.com/@HardRockCrypto'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className=" w-auto h-20 scale-150 " alt="degate" src={hrc}></Image>
                        </div>
                    </Link>

                </div>

            </div>
        </section>
    )
}

export default MediaPartners