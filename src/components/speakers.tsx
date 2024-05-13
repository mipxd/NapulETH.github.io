/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import mood from '@assets/mood.svg'
import commune from "@assets/commune.png"
import degate from '@assets/degate.svg'
import square from '@assets/sq20.svg'
import wovlabs from '@assets/wovlabs.svg'
import nifty from '@assets/nifty.svg'
import { useTranslation } from "react-i18next";
import yh from '@assets/mark+word-colorful.svg'
import socialSquare from '@assets/socialSquare.svg'
import money from "@assets/money.svg"
import vault from "@assets/CriptovalutaIt marchio registrato.jpg"

import { BsGlobe, BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";




import s1 from "@assets/Isola.jpg"
import s2 from "@assets/PieraDiStefano.png"
import s3 from "@assets/VaninaIvanova.png"
import s4 from "@assets/CosimoPalma.jpeg"
import s5 from "@assets/VincenzoRana.png"
import s6 from "@assets/SaraNoggler.jpg.jpeg"
import s7 from "@assets/AlessandraBrandi.jpg"
import s8 from "@assets/AndreaPaulillo.jpg"
import s9 from '@assets/JenAlbert.png'
import s10 from '@assets/MarcoTullioGiordano.jpeg'
import s11 from "@assets/ExWhyZee.jpg"
import s12 from "@assets/DavideZanichelli.png"
import s13 from "@assets/LorenzoRigatti.jpg"
import s14 from '@assets/IreneGuarnieri.jpg.jpeg'
import s15 from '@assets/MarcoCastignoli.jpg'
import s16 from '@assets/MarkRichardson.jpg'
import s17 from '@assets/PietroRossetto.jpg.jpeg'
import s18 from '@assets/StefanoDeAngelis.jpg.jpeg'
import s19 from '@assets/HemillyRodrigues.jpg.jpeg'
import s20 from '@assets/Alena.jpg'
import s21 from '@assets/GabrieleAlagna.jpg'
import s22 from '@assets/LucaBoiardi.jpg'
import s23 from '@assets/GianfrancoLeone.jpg.jpeg'
import s24 from '@assets/BrunoMiranda.jpg'
import s25 from '@assets/DayanaAleksandrova.jpg'
import s26 from '@assets/JamesRae.jpg'
import s27 from '@assets/WilliamNonnis.jpg'
import s28 from '@assets/MicheleIaselli.jpg'
import s29 from '@assets/ChristianSantagata.jpeg'
import s30 from '@assets/LazarBucan.jpg'
import s31 from '@assets/OrnellaVallana.jpg'
import s32 from '@assets/MiroRadenovic.jpg'
import s33 from '@assets/MatteoTambussi.png'
import s34 from '@assets/FilippoChiricozzi.png'
import s35 from '@assets/FrancescoFontana.jpeg'
import s36 from '@assets/AmericoCacciapuoti.jpeg'
import s37 from '@assets/ElioBarbera.jpg'
import s38 from '@assets/AndreeaCia.png'

function Speakers() {
    const { t, i18n } = useTranslation();

    const Rawspeakers = [
        {
            link : "https://hgvis.io/",
            img: s1.src,
            name: "Isola",
            aff : "HGVIS"
        },
        {
            link : "https://www.linkedin.com/in/piera-di-stefano/",
            img: s2.src,
            name: "Piera Di Stefano",
            aff : "Avvocato del Web®"
        },
        {
            link : "https://twitter.com/inks",
            img: s3.src,
            name: "Vanina Ivanova",
            aff : "Blockchain Marketing CT"
        },
        {
            link : "https://palma.partners/",
            img: s4.src,
            name: "Cosimo Palma",
            aff : "palma.partners"
        },
        {
            link : "https://it.linkedin.com/in/vincenzo-rana",
            img: s5.src,
            name: "Vincenzo Rana",
            aff : "KNOBS"
        },
        {
            link : "https://twitter.com/nogglersara?lang=en",
            img: s6.src,
            name: "Sara Noggler",
            aff : "Polyhedra"
        },
        {
            link : "https://x.com/niftynaples?t=hQSGX3McewjQFWs-UffHOg&s=09",
            img: s7.src,
            name: "Alessandra Brandi",
            aff : "Nifty Naples"
        },
        {
            link : "http://www.eloop.it/",
            img: s8.src,
            name: "Andrea Paulillo",
            aff : "eLoop"
        },
        {
            link : "https://twitter.com/Here2DeFi",
            img: s9.src,
            name: "Jen Albert",
            aff : "Bancor"
        },
        {
            link : "https://twitter.com/emmetiggi",
            img: s10.src,
            name: "Marco T. Giordano",
            aff : "42 Law Firm"
        },
        {
            link : "https://twitter.com/exxyzee",
            img: s11.src,
            name: "ExWhyZee",
            aff : "Eden Protocol"
        },
        {
            link : "https://www.linkedin.com/in/davide-zanichelli/",
            img: s12.src,
            name: "Davide Zanichelli",
            aff : ""
        },
        {
            link : "https://www.linkedin.com/in/lorenzo-rigatti-1a317994/",
            img: s13.src,
            name: "Lorenzo Rigatti",
            aff : "BlockInvest"
        },
        {
            link : "https://www.howtoweb3.xyz/",
            img: s14.src,
            name: "Irene Guarnieri",
            aff : "How To Web 3.0"
        },
        {
            link : "https://twitter.com/castignolimarco",
            img: s15.src,
            name: "Marco Castignoli",
            aff : "Sourcify"
        },
        {
            link : "https://twitter.com/MBRichardson87",
            img: s16.src,
            name: "Mark Richardson",
            aff : "Bancor/Carbon Defi"
        },
        {
            link : "https://www.linkedin.com/in/pietro-rossetto-lawtech/",
            img: s17.src,
            name: "Pietro Rossetto",
            aff : "Independent"
        },
        {
            link : "https://twitter.com/_deanstef",
            img: s18.src,
            name: "Stefano De Angelis",
            aff : "University of Salerno"
        },
        {
            link : "https://linktr.ee/thebitblond",
            img: s19.src,
            name: "Hemilly Rodrigues",
            aff : "R&CO"
        },
        {
            link : "https://twitter.com/alenka_w3",
            img: s20.src,
            name: "Alena",
            aff : "TON Foundation"
        },
        {
            link : "https://www.howtoweb3.xyz/",
            img: s21.src,
            name: "Gabriele Alagna",
            aff : "How To Web 3.0"
        },
        {
            link : "https://thecryptogateway.it/",
            img: s22.src,
            name: "Luca Boiardi",
            aff : "The Crypto Gateway"
        },
        {
            link : "https://b3yond.io/",
            img: s23.src,
            name: "Gianfranco Leone",
            aff : "B3yond.io"
        },
        {
            link : "https://twitter.com/chilibangs",
            img: s24.src,
            name: "Bruno Miranda",
            aff : "ChiliBangs"
        },
        {
            link : "https://twitter.com/dee_centralized",
            img: s25.src,
            name: "Dayana Aleksandrova",
            aff : "Activated Community "
        },
        {
            link : "https://twitter.com/jayrae21212",
            img: s26.src,
            name: "James Rae",
            aff : "AdvocateAgency "
        },
        {
            link : "https://twitter.com/William_Nonnis",
            img: s27.src,
            name: "William Nonnis",
            aff : "Presidenza del Consiglio dei Ministri "
        },
        {
            link : "https://twitter.com/infomicheleias1",
            img: s28.src,
            name: "Michele Iaselli",
            aff : "LUISS"
        },
        {
            link : "https://twitter.com/christian_defi",
            img: s29.src,
            name: "Christian Santagata",
            aff : "re.al"
        },
        {
            link : "http://twitter.com/0xeleazar",
            img: s30.src,
            name: "Lazar Bucan",
            aff : "Cookbook.dev "
        },
        {
            link : "http://www.twitter.com/ornellaweb3",
            img: s31.src,
            name: "Ornella Vallana",
            aff : "Bankless Academy "
        },
        {
            link : "https://www.linkedin.com/in/miroradenovic/",
            img: s32.src,
            name: "Miro Radenovic",
            aff : "ucollect.me "
        },
        {
            link : "http://www.twitter.com/ornellaweb3",
            img: s33.src,
            name: "Matteo Tambussi",
            aff : "Stake Capital, SpaghettETH"
        },
        {
            link : "https://www.linkedin.com/in/filippochiricozzi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            img: s34.src,
            name: "Filippo Chiricozzi",
            aff : "Banca Sella"
        },
        {
            link : "https://linkedin.com/in/francesco-fontana",
            img: s35.src,
            name: "Francesco Fontana",
            aff : "Fontana Art Advisory, aegis.art"
        },
        {
            link : "https://twitter.com/italiancollecto",
            img: s36.src,
            name: "Americo Cacciapuoti",
            aff : "WoV Labs"
        },
        {
            link : "http://www.caffebarbera.com",
            img: s37.src,
            name: "Elio Barbera",
            aff : "Caffè Barbera 1870"
        },
        {
            link : "https://twitter.com/iandreeacia",
            img: s38.src,
            name: "Andreea Cia",
            aff : "ETH Bucarest"
        },
        
    ]

    const speakers = [...Rawspeakers].sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0; // names must be equal
    });

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

    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {
                    t('speakers')
                }
            </h5>
            <h6 className=" xl:w-1/2 w-8/12 text-black p-4 bg-white border-4 border-[#eddb55] text-xl xl:text-2xl Medium leading-normal text-center my-6">
                {
                    t('speakersSoon')
                } ⏳⌛
            </h6>
            <div className="grid-cols-4 auto-rows-auto gap-4 w-full px-8 hidden lg:grid">
            {
                    speakers.map((speaker, index) => {
                        return(
                            <div className="flex flex-col items-center justify-center ">
                                <Link href={speaker.link} target="_blank" className="w-full aspect-square">
                                    <div className="w-full aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                        backgroundImage: `url('${speaker.img}')`
                                    }}></div>
                                </Link>
                                <div className="w-full flex-grow flex flex-row items-start justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                                    <div className="h-fit w-10/12 flex flex-col items-start justify-center">
                                        <h5 className=" text-black SemiBold text-2xl text-center mb-2">
                                            {speaker.name}
                                        </h5>
                                        <h5 className=" text-[#EDDB55] Medium text-lg">
                                            {speaker.aff}
                                        </h5>
                                    </div>
                                    <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                                        <Link href={speaker.link} target="_blank"><BsGlobe color="#252525" size={26}></BsGlobe></Link>

                                    </div>

                                </div>
                            </div>
                               
                                                     
                        )
                    })
                }
            </div>
            
            <div className='w-full h-fit block lg:hidden'>
                <Carousel className="w-full h-fit block lg:hidden" showDots renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                    {
                        speakers.map((speaker, index) => {
                            return(
                                <Link href={speaker.link} key={index} target="_blank" className="w-full h-fit">
                                <div className="w-full h-fit flex flex-row items-center justify-center">
                                    <div className="w-full flex flex-col flex-grow items-center justify-center">
                                        <div className="w-8/12 aspect-square bg-cover bg-top bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                    backgroundImage: `url('${speaker.img}')`
                                        }}></div>
                                        <div className="w-8/12 h-1/3 flex flex-col items-center justify-center py-2 px-4 bg-white border-4 border-[#eddb55]">
                                            <h5 className=" text-black w-full SemiBold text-2xl text-center mb-2">
                                                {speaker.name}
                                            </h5>
                                            <h5 className=" text-[#EDDB55] SemiBold text-center text-xl">
                                                {speaker.aff}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            )
                        })
                    }
                    
                </Carousel>
            </div>

            
        </section>
    )
}

export default Speakers