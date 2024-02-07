/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image"
import Link from "next/link"
import megoNapulEth from '@assets/megoNapulEth.svg'

function TicketingPartner() {
    return (
        <section className="w-full flex flex-col items-center justify-start pt-24 lg:pt-40">
            <h5 className=" text-black text-5xl mb-6 SemiBold leading-normal text-center">
                Ticketing Partner
            </h5>
            <Image src={megoNapulEth} alt="mego and NapulEth" className="scale-75 mb-10"></Image>
            <div className="w-10/12 lg:w-8/12 h-fit flex flex-col items-start justify-start">
                <p className="w-full h-fit text-[#606060] text-2xl Medium text-center lg:text-justify mb-2 leading-normal">
                    MEGO Tickets has built  revolutionary ticketing system that allows users and creators to create, manage, sell and buy NFT tickets with ease.
                </p>
                <p className="w-full h-fit text-[#606060] text-2xl Medium text-center lg:text-justify leading-normal">
                    MEGO is a multichain system:  Ethereum, Tezos, Solana, Optimism, Arbitrum, Quadrans: doesn’t matter what network you like to use, you can choose the blockchain you like to create tickets and users can choose how to pay, even in a different coin, also in FIAT.
                </p>
                <Link href={"https://mego.tickets/#/"} target="_blank" className="w-fit h-fit"></Link>
                <div className="w-full lg:w-4/12 h-fit flex flex-row items-center justify-center gap-2 mt-6 py-6 px-20 bg-[#548DCA] buttonShadow">


                    <h5 className=" text-black Medium text-2xl">Check MEGO</h5>
                </div>
            </div>

        </section>
    )
}

export default TicketingPartner