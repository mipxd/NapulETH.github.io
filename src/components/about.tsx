import Link from "next/link"
import Image from "next/image"
import Marquee from "react-fast-marquee";



import commune from "@assets/commune.png"
import logo from '@assets/bigLogo.svg'

import cloud1 from '@assets/cloud1.svg'
import cloud2 from '@assets/cloud2.svg'
import boatOncloud from '@assets/boatonCloud1.svg'
import castleOncloud from '@assets/castleonCloud.svg'
import templeOncloud from '@assets/templeOnCloud.svg'
import stampOnCloud from '@assets/stampOnCloud.svg'

function About() {
    
    return (
        <section className="w-full h-fit relative flex flex-col items-center justify-start pt-6 lg:pt-40">
            
            <Image src={boatOncloud} alt="cloud" className=" hidden lg:block boat absolute -left-[5%] top-[27%] scale-[.5] "></Image>
            <Image src={castleOncloud} alt="cloud" className="hidden lg:block castle absolute -right-[7%] top-[40%] scale-[.4] "></Image>
            <Image src={templeOncloud} alt="cloud" className="hidden lg:block boat absolute -left-[8%] top-[65%] scale-[.5] "></Image>
            <Image src={stampOnCloud} alt="cloud" className="hidden lg:block castle absolute -right-[7%] top-[70%] scale-[.4] "></Image>
            <h5 className=" text-black text-5xl SemiBold leading-normal text-center mt-20 mb-6">
            Beyond the Familiar Faces
            </h5>
            <p className=" text-[#606060] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-7/12">
            Diverse Events for a Diverse Community - Unlocking the Potential of Uncharted Perspectives
            </p>

            <p className=" text-[#606060] Medium text-2xl lg:text-3xl text-center leading-normal mt-8 lg:mt-20 w-11/12 lg:w-7/12">
            In the Ethereum ecosystem, everyone is constantly talking about onboarding for the masses, but at conferences, it{"'"}s always the same faces: the marketing officer of that project, the lead developer of another project, the head ambassador of yet another project. All these individuals are obviously already onboarded, and as meaningful and interesting as their experiences may be to share, a conference filled only with them risks turning into an echo chamber where everyone is just echoing each other.
            </p>

            <p className=" text-[#606060] Medium text-2xl lg:text-3xl text-center leading-normal mt-8 lg:mt-20 w-11/12 lg:w-7/12">
            We believe that this loop can{"'"}t be broken without offering a real incentive for those not yet familiar with web3 to participate in significant events.
            </p>

            <p className=" text-[#606060] Medium text-2xl lg:text-3xl text-center leading-normal mt-8 lg:mt-20 w-11/12 lg:w-7/12">
            In short, the issue we aim to address is to bring actually new faces into the Ethereum ecosystem. We are convinced that this can only be achieved by creating events that are both accessible and high-profile. If you think the same, NapulEth Open Village is waiting for you...
            </p>



        </section>
    )
}

export default About