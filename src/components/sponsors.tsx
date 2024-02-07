import Image from "next/image"
import Link from "next/link"

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'

function Sponsors() {
    return (
        <section className="w-full flex flex-col items-center justify-start mt-32">
            <h5 className=" text-black text-5xl mb-10 SemiBold leading-normal text-center">
                Sponsors
            </h5>
            <div className="flex flex-row items-stretch justify-between w-9/12 mt-16 gap-24">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-center" >
                    <Link href={'http://degate.com/'} target="_blank" className="p-0 w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16 bg-white buttonShadow">

                            <Image className=" w-auto h-20" alt="degate" src={degate}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://20squares.xyz/'} target="_blank" className="w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="w-auto h-20" alt="degate" src={square}></Image>
                        </div>
                    </Link>

                </div>
                <div className="w-1/3 flex flex-grow flex-col items-center justify-center">
                    <Link href={'https://wovlabs.com/'} target="_blank" className=" w-full h-fit">
                        <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white buttonShadow">

                            <Image className="  w-auto h-20" alt="degate" src={wovlabs}></Image>
                        </div>
                    </Link>

                </div>

            </div>
        </section>
    )
}

export default Sponsors