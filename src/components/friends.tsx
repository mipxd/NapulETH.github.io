/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'
import decripto from '@assets/decripto.webp'
import spaghett from '@assets/spaghetteth.png'

function Friends() {
    return (
        <section className="w-full flex flex-col items-center justify-start mt-16 lg:mt-32">
            <h5 className=" text-black text-4xl lg:text-5xl mb-10 SemiBold leading-normal text-center">
                Our Friends
            </h5>
            <div className="flex flex-col lg:flex-row items-stretch justify-between w-9/12 mmt-8 lg:mt-16 gap-10 lg:gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center" >
                

                </div>
                <div className="w-full lg:w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://www.spaghett-eth.com/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20 scale-[1.9] " alt="degate" src={spaghett}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    

                </div>

            </div>
        </section>
    )
}

export default Friends