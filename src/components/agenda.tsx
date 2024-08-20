import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { MdOutlinePlace } from "react-icons/md";

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

import s39 from '@assets/FrancescoBritti.png'
import s40 from '@assets/DavideGhezzi.png'
import s41 from '@assets/FrancescoBianchi.png'
import s42 from '@assets/MarekKowalski.png'
import s43 from '@assets/MariaMagenes.jpg.jpeg'
import s44 from '@assets/FriscoDAnconia.jpg.jpeg'
import s45 from '@assets/VladyslavDudchenko.png'
import s46 from '@assets/QiZhou.png'
import s47 from '@assets/BenedettoBiondi.png'
import s48 from '@assets/SilvioVentre.jpg.jpeg'
import s49 from '@assets/LuigiSenese.png'
import s50 from '@assets/JulieBettens.jpg'
import s51 from '@assets/AlessandroBrigato.png'
import s52 from '@assets/LimoneEth.png'
import s53 from '@assets/FedericoCosta.png'
import s54 from '@assets/Bock.jpg.jpeg'
import s55 from '@assets/FabrizioMaiocco.jpg'
import s56 from '@assets/DanielePinna.jpg'
import s57 from '@assets/FrancescoVincenti.png'
import s58 from '@assets/Marsili.png'
import s59 from '@assets/AntonioRamicello.jpg'
import s60 from '@assets/DamianRusinek.jpg'
import s61 from '@assets/ValentinaMarzioni.png'
import s62 from '@assets/QJ.jpeg'
import s63 from '@assets/PhilippPieper.jpg'
import s64 from '@assets/LorenzoAmoroso.jpg'
import s65 from '@assets/Viktor.jpg'
import s66 from '@assets/DavideMilani.jpg'
import s67 from '@assets/DavidCarvalho.jpg'
import lilic from '@assets/johnLilic.jpg'

const Agenda = () => {

    const { t, i18n } = useTranslation();

    const [day, setDay] = useState(1)

    const events = [
        // Starting with Day 1, Stage 1 (Main)
        {
            id: 0,
            title: 'Opening',
            subtitle: "Opening event of the NapulETH",
            stage: "main",
            speakers: [],
            day: 1,
            start: "09:40",
            end: "10:20",
        },
        {
            id: 1,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Matteo Tambussi",
                    image: s33.src
                }
            ],
            day: 1,
            start: "10:20",
            end: "10:40",
        },
        {
            id: 2,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Limone.eth",
                    image: s52.src
                }
            ],
            day: 1,
            start: "10:40",
            end: "11:00",
        },
        {
            id: 3,
            title: 'Unlocking the Code: Breaking Barriers with Tech Education for Women in Afghanistan',
            subtitle: "Breaking Barriers with Tech Education for Women in Afghanistan",
            stage: "main",
            speakers: [
                {
                    name: "John Lilic",
                    image: lilic.src
                }
            ],
            day: 1,
            start: "11:00",
            end: "11:20",
        },
        {
            id: 4,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "QJ",
                    image: s62.src
                },
                {
                    name: "Francesco Vincenti",
                    image: s57.src
                }
            ],
            day: 1,
            start: "11:00",
            end: "11:20",
        },
        {
            id: 5,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Luca Boiardi",
                    image: s22.src
                }
            ],
            day: 1,
            start: "14:00",
            end: "14:20",
        },
        {
            id: 6,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Bruno Miranda",
                    image: s24.src
                }
            ],
            day: 1,
            start: "14:20",
            end: "14:40",
        },
        {
            id: 7,
            title: 'EthCommunity',
            subtitle: "Tambussi, Cia, Limone, Marsili, Paesano (Community)(Modera Raffaele)",
            stage: "main",
            speakers: [
                {
                    name: "Matteo Tambussi",
                    image: s33.src
                },
                {
                    name: "Andreea Cia",
                    image: s38.src
                },
                {
                    name: "Andrea Marsili",
                    image: s58.src
                },
            ],
            day: 1,
            start: "15:00",
            end: "16:00",
        },
        {
            id: 8,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Ornella Vallana",
                    image: ""
                }
            ],
            day: 1,
            start: "16:00",
            end: "16:20",
        },
        {
            id: 9,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Paolo Schiattarella",
                    image: ""
                }
            ],
            day: 1,
            start: "16:20",
            end: "16:40",
        },
        {
            id: 9,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Suning Yao",
                    image: ""
                }
            ],
            day: 1,
            start: "16:40",
            end: "17:00",
        },

        // Day 1, Stage 2
        {
            id: 10,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "William Nonnis",
                    image: ""
                }
            ],
            day: 1,
            start: "10:20",
            end: "10:40",
        },
        {
            id: 11,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Vincenzo Rana",
                    image: ""
                },
                {
                    name: "Piera Di Stefano",
                    image: ""
                },
                {
                    name: "MTG",
                    image: ""
                }
            ],
            day: 1,
            start: "10:40",
            end: "11:20",
        },
        {
            id: 12,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Cosimo Palma",
                    image: ""
                }
            ],
            day: 1,
            start: "11:20",
            end: "11:40",
        },
        {
            id: 13,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Michele Iaselli",
                    image: ""
                }
            ],
            day: 1,
            start: "11:40",
            end: "12:00",
        },
        {
            id: 14,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Marek Kowalski",
                    image: ""
                }
            ],
            day: 1,
            start: "14:00",
            end: "14:20",
        },
        {
            id: 15,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Marco Castignoli",
                    image: ""
                }
            ],
            day: 1,
            start: "14:20",
            end: "14:40",
        },
        {
            id: 16,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Stefano De Angelis",
                    image: ""
                }
            ],
            day: 1,
            start: "14:40",
            end: "15:00",
        },
        {
            id: 17,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Qi Zhou",
                    image: ""
                }
            ],
            day: 1,
            start: "15:00",
            end: "15:20",
        },
        {
            id: 18,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Vanina Ivanova",
                    image: ""
                }
            ],
            day: 1,
            start: "15:20",
            end: "15:40",
        },
        {
            id: 19,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Davide Carboni",
                    image: ""
                }
            ],
            day: 1,
            start: "15:40",
            end: "16:00",
        },
        {
            id: 20,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Damian Rusinek",
                    image: ""
                }
            ],
            day: 1,
            start: "16:00",
            end: "16:20",
        },
        {
            id: 21,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Mark Richardson",
                    image: ""
                }
            ],
            day: 1,
            start: "16:20",
            end: "16:40",
        },
        {
            id: 22,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Bock",
                    image: ""
                }
            ],
            day: 1,
            start: "16:40",
            end: "17:00",
        },

        // Day 1, Stage 3
        {
            id: 23,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "James Rae",
                    image: ""
                },
                {
                    name: "Viktor",
                    image: ""
                },
                {
                    name: "Hemilly Rodrigues",
                    image: ""
                }
            ],
            day: 1,
            start: "10:40",
            end: "11:20",
        },
        {
            id: 24,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Gianfranco Leone",
                    image: ""
                }
            ],
            day: 1,
            start: "10:20",
            end: "11:40",
        },
        {
            id: 25,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Dayana Aleksandrova",
                    image: ""
                }
            ],
            day: 1,
            start: "10:40",
            end: "12:00",
        },
        {
            id: 26,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Andrea Paulillo",
                    image: ""
                }
            ],
            day: 1,
            start: "14:20",
            end: "15:00",
        },
        {
            id: 27,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Mood Global Services",
                    image: ""
                }
            ],
            day: 1,
            start: "15:00",
            end: "16:00",
        },
        {
            id: 28,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Davide Milani",
                    image: ""
                }
            ],
            day: 1,
            start: "16:00",
            end: "16:40",
        },

        // Day 2, Stage 1 (Main)
        {
            id: 29,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "APEX",
                    image: ""
                }
            ],
            day: 2,
            start: "10:20",
            end: "10:40",
        },
        {
            id: 30,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Michele Lotta",
                    image: ""
                },
                {
                    name: "Viktor",
                    image: ""
                }
            ],
            day: 2,
            start: "10:40",
            end: "11:20",
        },
        {
            id: 31,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Philipp Zahn",
                    image: ""
                }
            ],
            day: 2,
            start: "11:40",
            end: "12:00",
        },
        {
            id: 32,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Francesco Britti",
                    image: ""
                }
            ],
            day: 2,
            start: "14:00",
            end: "15:40",
        },
        {
            id: 33,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Francesco Bianchi",
                    image: ""
                },
                {
                    name: "Rosario Napolano",
                    image: ""
                },
                {
                    name: "Gianluca Di Bella",
                    image: "https://napul.eth.limo/_next/static/media/gianluca.ad2208c0.jpeg"
                }
            ],
            day: 2,
            start: "14:40",
            end: "15:20",
        },
        {
            id: 34,
            title: 'Why we Need Trustless Finance',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Cryptocuty ",
                    image: ""
                }
            ],
            day: 2,
            start: "15:20",
            end: "15:40",
        },
        {
            id: 35,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Carlo Parisi",
                    image: ""
                }
            ],
            day: 2,
            start: "15:40",
            end: "16:00",
        },
        {
            id: 36,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Filippo Moraschi",
                    image: ""
                }
            ],
            day: 2,
            start: "16:00",
            end: "16:20",
        },
        {
            id: 37,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Valentina Marzioni ",
                    image: ""
                }
            ],
            day: 2,
            start: "16:20",
            end: "16:40",
        },
        {
            id: 38,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Mario Giovanni Figlioli",
                    image: ""
                },
                {
                    name: "Malek Almsaddi",
                    image: ""
                }
            ],
            day: 2,
            start: "16:40",
            end: "17:00",
        },

        // Day 2, Stage 2

        {
            id: 39,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Elio Barbera",
                    image: ""
                }
            ],
            day: 2,
            start: "10:00",
            end: "10:20",
        },
        {
            id: 40,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Lorenzo Rigatti",
                    image: ""
                }
            ],
            day: 2,
            start: "10:20",
            end: "10:40",
        },
        {
            id: 41,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Silvio Ventre",
                    image: ""
                },
                {
                    name: "Lorenzo Amoroso ",
                    image: ""
                },
                {
                    name: "Philipp Pieperi",
                    image: ""
                },
                {
                    name: "Lorenzo Rigatti",
                    image: ""
                }
            ],
            day: 2,
            start: "10:40",
            end: "11:20",
        },
        {
            id: 42,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Pietro Rossetto",
                    image: ""
                }
            ],
            day: 2,
            start: "11:20",
            end: "11:40",
        },
        {
            id: 43,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Christian Santagata",
                    image: ""
                }
            ],
            day: 2,
            start: "11:40",
            end: "12:00",
        },
        {
            id: 44,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Filippo Chiricozzi",
                    image: ""
                }
            ],
            day: 2,
            start: "14:00",
            end: "14:20",
        },
        {
            id: 45,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Giovanni Piccirillo",
                    image: ""
                }
            ],
            day: 2,
            start: "14:20",
            end: "14:40",
        },
        {
            id: 46,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Davide Ghezzi",
                    image: ""
                }
            ],
            day: 2,
            start: "14:40",
            end: "15:00",
        },
        {
            id: 47,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Marina",
                    image: ""
                }
            ],
            day: 2,
            start: "15:00",
            end: "15:40",
        },
        {
            id: 48,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Piera Di Stefano",
                    image: ""
                }
            ],
            day: 2,
            start: "15:40",
            end: "16:00",
        },
        {
            id: 49,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Davide Zanichelli",
                    image: ""
                },
                {
                    name: "MTG",
                    image: ""
                }
            ],
            day: 2,
            start: "16:00",
            end: "16:40",
        },

        // Day 2, Stage 3

        {
            id: 50,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Sundaram Jha",
                    image: ""
                }
            ],
            day: 2,
            start: "10:00",
            end: "11:00",
        },
        {
            id: 51,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Lazar Bucan",
                    image: ""
                }
            ],
            day: 2,
            start: "11:00",
            end: "12:00",
        },
        {
            id: 52,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Laurence Kirk",
                    image: ""
                }
            ],
            day: 2,
            start: "14:00",
            end: "15:00",
        },
        {
            id: 53,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "HEVM Workshop",
                    image: ""
                }
            ],
            day: 2,
            start: "15:00",
            end: "16:00",
        },
        {
            id: 54,
            title: '',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Martin Leclerq",
                    image: ""
                }
            ],
            day: 2,
            start: "16:00",
            end: "17:00",
        },

        // Day 3 , Stage 1 (Main)

        {
            id: 55,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "David Carvalho",
                    image: ""
                }
            ],
            day: 3,
            start: "10:00",
            end: "10:20",
        },
        {
            id: 56,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Fabrizio Genovese",
                    image: ""
                }
            ],
            day: 3,
            start: "10:20",
            end: "10:40",
        },
        {
            id: 57,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Stefano",
                    image: ""
                },
                {
                    name: "Ian",
                    image: ""
                },
                {
                    name: "David Carvalho",
                    image: ""
                }
            ],
            day: 3,
            start: "10:40",
            end: "11:20",
        },
        {
            id: 58,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Stefano Gogioso",
                    image: ""
                }
            ],
            day: 3,
            start: "11:20",
            end: "11:40",
        },
        {
            id: 59,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Ian Smith",
                    image: ""
                }
            ],
            day: 3,
            start: "11:40",
            end: "12:00",
        },
        {
            id: 60,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Pino",
                    image: ""
                }
            ],
            day: 3,
            start: "14:00",
            end: "14:20",
        },
        {
            id: 61,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Sara Noggler",
                    image: ""
                }
            ],
            day: 3,
            start: "14:20",
            end: "14:40",
        },
        {
            id: 62,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Alessandro Brigato",
                    image: ""
                },
                {
                    name: "Anotnio Ramicello",
                    image: ""
                },
                {
                    name: "Alessandra Brandi",
                    image: ""
                }
            ],
            day: 3,
            start: "14:40",
            end: "15:20",
        },
        {
            id: 63,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Alessandra Brandi",
                    image: ""
                }
            ],
            day: 3,
            start: "15:20",
            end: "15:40",
        },
        {
            id: 64,
            title: '',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Morteza Khezri",
                    image: ""
                }
            ],
            day: 3,
            start: "15:40",
            end: "16:00",
        },
        {
            id: 65,
            title: 'CLOSING + VINCITORE STARTUP',
            subtitle: "",
            stage: "main",
            speakers: [],
            day: 3,
            start: "16:20",
            end: "17:00",
        },

        // Day 3 , Stage 2

        {
            id: 66,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Isola",
                    image: ""
                }
            ],
            day: 3,
            start: "10:00",
            end: "10:20",
        },
        {
            id: 67,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Miro Radenovic",
                    image: ""
                }
            ],
            day: 3,
            start: "10:20",
            end: "10:40",
        },
        {
            id: 68,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Fabrizio Maiocco",
                    image: ""
                }
            ],
            day: 3,
            start: "10:40",
            end: "11:20",
        },
        {
            id: 69,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Francesco Fontana",
                    image: ""
                }
            ],
            day: 3,
            start: "11:20",
            end: "11:40",
        },
        {
            id: 70,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Americo Cacciapuoti",
                    image: ""
                }
            ],
            day: 3,
            start: "11:40",
            end: "12:00",
        },
        {
            id: 71,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Luigi Senese",
                    image: ""
                }
            ],
            day: 3,
            start: "14:00",
            end: "14:20",
        },
        {
            id: 72,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Julie Bettens",
                    image: ""
                }
            ],
            day: 3,
            start: "14:20",
            end: "14:40",
        },
        {
            id: 73,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Vladyslav Dudchenko",
                    image: ""
                },
                {
                    name: " Daniele Pinn + Daniele Palombi",
                    image: ""
                },
                {
                    name: "Daniele Palombi",
                    image: ""
                }
            ],
            day: 3,
            start: "14:40",
            end: "15:20",
        },
        {
            id: 74,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Gavin Thomas",
                    image: ""
                }
            ],
            day: 3,
            start: "15:20",
            end: "15:40",
        },
        {
            id: 75,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Raffaele Orefice",
                    image: ""
                }
            ],
            day: 3,
            start: "15:40",
            end: "16:00",
        },
        {
            id: 76,
            title: '',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Federico Costa",
                    image: ""
                }
            ],
            day: 3,
            start: "16:00",
            end: "16:20",
        },
    ]

    const [filteredEvents, setFilteredEvents] = useState(events);

    return (
        <section className="w-10/12 mx-auto flex flex-col items-center justify-start mt-20 gap-2">
            <input type="text" className="w-10/12 mx-auto bg-white border border-white p-4 rounded-md mb-2" placeholder="Search..." />
            <div className="w-10/12 h-fit flex flex-row items-center justify-start gap-4 mb-4 ">
                <Link href="" onClick={(e) => { e.preventDefault(); setDay(1) }}>
                    <p className={`text-black text-xl Medium p-2 ${day == 1 ? 'bg-white shadow-md rounded-md' : ''}`}>Day 1</p>
                </Link>
                <Link href="" onClick={(e) => { e.preventDefault(); setDay(2) }}>
                    <p className={`text-black text-xl Medium p-2 ${day == 2 ? 'bg-white shadow-md rounded-md' : ''} `}>Day 2</p>
                </Link>
                <Link href="" onClick={(e) => { e.preventDefault(); setDay(3) }}>
                    <p className={`text-black text-xl Medium p-2 ${day == 3 ? 'bg-white shadow-md rounded-md' : ''}`}>Day 3</p>
                </Link>
            </div>
            {
                filteredEvents.filter(event => event.day === day).map((event, key) => {
                    let speakersString = '';
                    if (event.speakers.length > 1) {
                        speakersString = event.speakers.map(speaker => speaker.name).join(', ');
                    } else if (event.speakers.length === 1) {
                        speakersString = event.speakers[0].name;
                    }

                    let place = event.stage == "main" ? "Main Stage" : event.stage == "stage 2" ? "Stage 2" : "Stage 3"
                    return (
                        <div key={key} className="w-11/12 h-fit flex flex-row items-start justify-start gap-2">
                            <p className="text-lg text-black text-center Medium p-1 rounded min-w-[5%] bg-[#eddb55]">{event.start}</p>
                            <div className="w-[90%] bg-slate-200 rounded-md shadow-sm flex flex-col items-start justify-start py-3 px-4">
                                <p className="text-sm text-black Medium mb-3">{event.start + " - " + event.end}</p>
                                {
                                    event.title != "" ? (
                                        <p className="text-2xl text-black Medium mb-2">{event.title}</p>
                                    ) : (
                                        <p className="text-xl text-gray-400 Medium italic mb-2">Title to be announced later...</p>
                                    )
                                }
                                <div className="w-full h-fit flex flex-row items-center justify-start gap-1 mb-12">
                                    <MdOutlinePlace size={20} color="#252525" />
                                    <p className="text-xs text-black Medium">
                                        {place}
                                    </p>
                                </div>
                                {
                                    event.speakers.length != 0 ? (
                                        <p className="text-md text-gray-700 mb-2">
                                            Speakers: {
                                                speakersString
                                            }
                                        </p>
                                    ) :
                                        ("")
                                }

                                {
                                    event.speakers.length != 0 ? (
                                        <div className="flex flex-row items-center justify-start w-full h-fit">
                                            {
                                                event.speakers.map((speaker, speakerKey) => {
                                                    return (
                                                        <div key={speakerKey} className={`w-10 aspect-square rounded-full bg-white bg-center bg-cover bg-no-repeat shadow-lg `} style={{
                                                            marginLeft: `${speakerKey / 2 * 15 * -1}px`,
                                                            backgroundImage: speaker.image != "" ? `url('${speaker.image}')` : "url('https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=')"
                                                        }}></div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ) : ("")
                                }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Agenda;