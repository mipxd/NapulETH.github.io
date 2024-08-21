import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { MdOutlinePlace } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";


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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 1,
            title: 'Decentralized Media: Stack Convergence for a Product',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 2,
            title: 'Social Media Protocols: Why Decentralization Matters in Social Networks',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 4,
            title: 'The Network State',
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
            isWorkshop: false,
            type: "panel",
            lang: "en"
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 6,
            title: 'The Power of Web3 and how you Need to Drive your Community',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 86,
            title: 'Digitalia: Starting the Network State in Italy',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Francesco Vincenti",
                    image: s57.src
                }
            ],
            day: 1,
            start: "14:40",
            end: "15:00",
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 7,
            title: 'Eth Community Panel',
            subtitle: "",
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
            isWorkshop: false,
            type: "panel",
            lang: "en"
        },
        {
            id: 8,
            title: 'Education & Public Goods in the Ethereum Ecosystem',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 9,
            title: 'Napoli Blockchain introduction',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 9,
            title: 'Protocol Asset and Sovereign Token',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },

        // Day 1, Stage 2
        {
            id: 10,
            title: 'Blockchain e Cybersecurity nella Pubblica Amminsitrazione',
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
            isWorkshop: false,
            type: "talk",
            lang: "it"
        },
        {
            id: 11,
            title: 'Mamma, ho Perso la Chiave Privata',
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
            isWorkshop: false,
            end: "11:20",
            type: "panel",
            lang: "it"
        },
        {
            id: 12,
            title: 'Smart Contract and Blockchain in the European Legal Space',
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
            isWorkshop: false,
            end: "11:40",
            type: "talk",
            lang: "en"
        },
        {
            id: 13,
            title: 'Privacy e blockchain: connubio difficile ma possibile',
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
            isWorkshop: false,
            end: "12:00",
            type: "talk",
            lang: "it"
        },
        {
            id: 14,
            title: 'What to do when tx Reverts and the Revert Reason is Swallowed',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 15,
            title: 'Introducing the Verifier Alliance',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Marco Castignoli",
                    image: ""
                }
            ],
            day: 1,
            isWorkshop: false,
            start: "14:20",
            end: "14:40",
            type: "talk",
            lang: "en"
        },
        {
            id: 16,
            title: 'Havoc Network: how to spot consensus bugs in large-scale decentralised infrastructures',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 17,
            title: 'Building a Modular Storage Layer for Ethereum on EIP-4844',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 18,
            title: 'Trust-Driven Web3 Marketing: Security Audits as a Marketing Tactic',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 19,
            title: 'Facts and Figures about Web3 Security: Where Do We Stand?',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 20,
            title: 'Secrets of Uniswap V4: A Deep Dive into Hooks Security',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 21,
            title: 'DeFi Exchange Protocols 101: Precision and Accuracy in Fixed-Point Arithmetic ',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },
        {
            id: 22,
            title: 'Algorithmic Risk Pricing: Keeping yourself safe in the ecosystem ',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },

        // Day 1, Stage 3
        {
            id: 23,
            title: 'Web3 Marketing: Strategies for B2B and B2C in the Decentralized Era',
            subtitle: "",
            isWorkshop: false,
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
            type: "panel",
            lang: "en"
        },
        {
            id: 24,
            title: 'Web3 for Education and Recruiting',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: false,
            speakers: [
                {
                    name: "Gianfranco Leone",
                    image: ""
                }
            ],
            day: 1,
            start: "10:20",
            end: "11:40",
            type: "talk",
            lang: "en"
        },
        {
            id: 25,
            title: 'Web3 Marketing: How Projects can Leverage the Hourglass ',
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
            isWorkshop: false,
            end: "12:00",
            type: "talk",
            lang: "en"
        },
        {
            id: 26,
            title: '',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: false,
            speakers: [
                {
                    name: "Andrea Paulillo",
                    image: ""
                }
            ],
            day: 1,
            start: "14:20",
            end: "15:00",
            type: "workshop",
            lang: "en"
        },
        {
            id: 27,
            title: 'ERC-7007: Verifiable AI-Generated Content Token',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: true,
            speakers: [
                {
                    name: "Gianluca Di Bella",
                    image: ""
                },
                {
                    name: "Lorenzo Ceppaluni",
                    image: ""
                }
            ],
            day: 1,
            start: "15:00",
            end: "16:00",
            type: "workshop",
            lang: "en"
        },
        {
            id: 28,
            title: 'Solo Staking is Dead? Crypto Passive Incomes.',
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
            isWorkshop: false,
            type: "talk",
            lang: "en"
        },

        // Day 2, Stage 1 (Main)
        {
            id: 29,
            title: '',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 30,
            title: '',
            subtitle: "",
            isWorkshop: false,
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
            type: "panel",
            lang: "en"
        },
        {
            id: 31,
            title: '',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 32,
            title: ' La semplicità, dalla Finanza Tradizionale a Youhodler',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "Francesco Britti",
                    image: ""
                }
            ],
            day: 2,
            start: "14:00",
            end: "15:40",
            type: "talk",
            lang: "it"
        },
        {
            id: 33,
            title: 'Bridging TradFi and DeFi: Challenges, Gaps, and the Path Forward',
            subtitle: "",
            isWorkshop: false,
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
            type: "panel",
            lang: "en"
        },
        {
            id: 34,
            title: 'Why we Need Trustless Finance',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 35,
            isWorkshop: false,
            title: 'Risks in DeFi',
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
            type: "talk",
            lang: "en"
        },
        {
            id: 36,
            title: 'Crosschain DeFi to Compete with CeFi',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 37,
            title: 'How Geopolitics and Macroeconomics Influence Token Volatility',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 38,
            isWorkshop: false,
            title: 'Innovation and the Financial Future',
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
            type: "talk",
            lang: "en"
        },

        // Day 2, Stage 2

        {
            id: 39,
            title: 'How to Use Blockchain Tech for a Supply Chain System',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 40,
            title: 'On-chain Finance: One Block at a Time',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 41,
            title: '',
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
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
            type: "panel",
            lang: "en"
        },
        {
            id: 42,
            isWorkshop: false,
            title: ' Tokenization Unfolding: the Merge of TradFi and DeFi',
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
            type: "talk",
            lang: "en"
        },
        {
            id: 43,
            title: 'Bringing Real World Assets to DeFi',
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Christian Santagata",
                    image: ""
                }
            ],
            day: 2,
            start: "11:40",
            end: "12:00",
            type: "talk",
            lang: "en"
        },
        {
            id: 44,
            title: "Evoluzione dell'Identità Digitale: eiDAS2 e l'Ascesa della Self Sovereign Identity",
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "it"
        },
        {
            id: 45,
            title: 'Considerazioni su MICAr',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "it"
        },
        {
            id: 46,
            title: 'Blockchain, Web3 e Criptovalute: Stato di Adozione e Sviluppi Futuri',
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Davide Ghezzi",
                    image: ""
                }
            ],
            day: 2,
            start: "14:40",
            end: "15:00",
            type: "talk",
            lang: "it"
        },
        {
            id: 47,
            title: '',
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 48,
            title: 'Quando lo Scam Danneggia la Tua Reputazione',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "it"
        },
        {
            id: 49,
            title: '',
            subtitle: "",
            isWorkshop: false,
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
            type: "panel",
            lang: "en"
        },

        // Day 2, Stage 3

        {
            id: 50,
            title: 'Empowering Devs: A Practical Guide to User-Centric UI/UX Design in Web3',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: false,
            speakers: [
                {
                    name: "Sundaram Jha",
                    image: ""
                }
            ],
            day: 2,
            start: "10:00",
            end: "11:00",
            type: "talk",
            lang: "en"
        },
        {
            id: 51,
            title: 'Find and Research any Smart Contract & Blockchain Protocol with Cookbook.dev',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: true,
            badge: "workshop",
            speakers: [
                {
                    name: "Lazar Bucan",
                    image: ""
                }
            ],
            day: 2,
            start: "11:00",
            end: "12:00",
            type: "workshop",
            lang: "en"
        },
        {
            id: 52,
            title: 'Essential Maths for Zero Knowledge Proofs',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 53,
            title: 'HEVM Workshop',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: true,
            speakers: [],
            day: 2,
            start: "15:00",
            end: "16:00",
            type: "workshop",
            lang: "en"
        },
        {
            id: 54,
            title: 'Monetize and Protect Data: A Web3 Developer Toolkit',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },

        // Day 3 , Stage 1 (Main)

        {
            id: 55,
            title: 'Post-Quantum World: Are We Ready?',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 56,
            title: 'The Future is Quantum',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "Fabrizio Genovese",
                    image: ""
                }
            ],
            day: 3,
            start: "10:20",
            end: "10:40",
            type: "talk",
            lang: "en"
        },
        {
            id: 57,
            title: 'Quantum Doom Vs, Quantum Optimism',
            subtitle: "",
            isWorkshop: false,
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
            type: "panel",
            lang: "en"
        },
        {
            id: 58,
            title: 'Device-Independent Quantum Cryptography',
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 59,
            title: 'Quantum Computing vs Web3 Cryptography: Risks, Challenges and Opportunities',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "Ian Smith",
                    image: ""
                }
            ],
            day: 3,
            start: "11:40",
            end: "12:00",
            type: "talk",
            lang: "en"
        },
        {
            id: 60,
            title: 'NFT on Bitcoin',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "Pino",
                    image: ""
                }
            ],
            day: 3,
            start: "14:00",
            end: "14:20",
            type: "talk",
            lang: "en"
        },
        {
            id: 61,
            title: 'Branding in the Blockchain Era: Navigating NFTs and Web3 for Business Innovation',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "Sara Noggler",
                    image: ""
                }
            ],
            day: 3,
            start: "14:20",
            end: "14:40",
            type: "talk",
            lang: "en"
        },
        {
            id: 62,
            title: 'NFTs for a Better World: Tokenization, Gaming, and Charity in the Future of Blockchain',
            isWorkshop: false,
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
            type: "panel",
            lang: "en"
        },
        {
            id: 63,
            title: 'Web3 #tarantellafriendly',
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 64,
            title: 'Gaming: The New Frontier of Engagement and the Next Social Media Revolution',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Morteza Shahini",
                    image: ""
                }
            ],
            day: 3,
            start: "15:40",
            end: "16:00",
            type: "talk",
            lang: "en"
        },
        {
            id: 65,
            title: 'CLOSING + VINCITORE STARTUP',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [],
            day: 3,
            start: "16:20",
            end: "17:00",
            type: "talk",
            lang: "en"
        },

        // Day 3 , Stage 2

        {
            id: 66,
            title: 'Investigating the Prospects of Web3, NFTs, and the Metaverse',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 67,
            title: 'NFT and Utilities: Building Memberships and Loyalty Programs',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 68,
            title: 'Le Fasi del Web dal 1990 al 2030',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "it"
        },
        {
            id: 69,
            title: 'A New Patronage Class in the Digital Art World',
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Francesco Fontana",
                    image: ""
                }
            ],
            day: 3,
            start: "11:20",
            end: "11:40",
            type: "talk",
            lang: "en"
        },
        {
            id: 70,
            title: 'How Web3 is Reshaping Fashion and Luxury',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 71,
            title: 'AI Singularity: AI x Crypto Convergence',
            subtitle: "",
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 72,
            title: 'Optimizing Commit-and-Reveal for Smart Contracts',
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 73,
            title: 'The Future of Privacy: Exploring ZK, Quantum, and Beyond',
            isWorkshop: false,
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
            type: "panel",
            lang: "en"
        },
        {
            id: 74,
            title: "It's Time for TEEs",
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Gavin Thomas",
                    image: ""
                }
            ],
            day: 3,
            start: "15:20",
            end: "15:40",
            type: "talk",
            lang: "en"
        },
        {
            id: 75,
            title: 'Zero-Knowledge Proofs Demystified: A Beginner’s Guide',
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
        {
            id: 76,
            title: 'Digital Identity of Businesses and Employees: Key Technology in Fighting AI Phishing and Control of Digital Assets',
            isWorkshop: false,
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
            type: "talk",
            lang: "en"
        },
    ]

    const { t, i18n } = useTranslation();

    const [day, setDay] = useState(1)

    const [filtersOpened, setFiltersOpened] = useState(false);

    const [typeFilter, setTypeFilter] = useState(['talk', 'panel', 'workshop']);
    const [languageFilter, setLanguageFilter] = useState(['it', 'en']);

    const [filteredEvents, setFilteredEvents] = useState(events);

    function toggleType(property: string) {
        setTypeFilter((prevTypeFilter) => {
            if (prevTypeFilter.includes(property)) {
                return prevTypeFilter.filter((type) => type !== property);
            } else {
                return [...prevTypeFilter, property];
            }
        });
    }

    function toggleLang(language: string) {
        setLanguageFilter((prevLanguageFilter) => {
            if (prevLanguageFilter.includes(language)) {
                return prevLanguageFilter.filter((lang) => lang !== language);
            } else {
                return [...prevLanguageFilter, language];
            }
        });
    }

    function filterEvents() {
        return events.filter((event) => typeFilter.includes(event.type) && languageFilter.includes(event.lang));
    }


    function toggleFilters() {
        if (filtersOpened) setFiltersOpened(false)
        else setFiltersOpened(true)
    }

    useEffect(() => {
        console.log(typeFilter);
        console.log(filteredEvents);
        console.log(languageFilter)
        const newFilteredEvents = filterEvents();
        setFilteredEvents(newFilteredEvents);
    }, [typeFilter, languageFilter]);

    return (
        <section className="w-10/12 mx-auto flex flex-col items-center justify-start mt-20 gap-2">
            <div className="w-10/12 h-fit flex flex-col items-center justify-start">

                <div className="w-full h-fit flex flex-row items-center justify-stretch">
                    <input type="text" className="w-full mx-auto bg-white border border-white p-4 rounded-md mb-4" placeholder="Search..." />

                </div>
                <div className="w-full h-fit flex flex-row items-center justify-between gap-4 mb-2 ">
                    <div className="w-[95%] flex flex-row items-center justify-start gap-4">
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
                    <button className=" bg-white rounded-md py-2 flex flex-row items-center justify-center flex-grow w-[5%]" onClick={toggleFilters}>
                        <IoFilterOutline size={26} color="#252525" />
                    </button>
                </div>
            </div>
            {
                filtersOpened ? (
                    <div className="w-10/12 h-fit bg-white rounded-md p-4 mb-2 flex flex-col items-start justify-start">
                        <p className="text-xl text-black Medium mb-3">Filters:</p>
                        <p className="text-lg text-black Medium mb-2">Type:</p>
                        <div className="w-full h-fit flex flex-row items-center justify-start gap-2 mb-3">
                            <button className={`py-1 px-3 rounded-full border border-black ${typeFilter.includes('talk') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleType('talk'); }}>Talks</button>
                            <button className={`py-1 px-3 rounded-full border border-black ${typeFilter.includes('panel') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleType('panel'); }}>Panels</button>
                            <button className={`py-1 px-3 rounded-full border border-black ${typeFilter.includes('workshop') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleType('workshop'); }}>Workshops</button>
                        </div>
                        <p className="text-lg text-black Medium mb-2">Language:</p>
                        <div className="w-full hèfit flex flex-row items-center justify-start gap-2">
                            <button className={`py-1 px-3 rounded-full border border-black ${languageFilter.includes('it') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleLang('it'); }}>Italian</button>
                            <button className={`py-1 px-3 rounded-full border border-black ${languageFilter.includes('en') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleLang('en'); }}>English</button>
                        </div>
                    </div>
                ) : ("")
            }
            <div className="w-10/12 h-fit flex flex-row items-start justify-center gap-2">
                <div className="flex w-1/3 py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Main Stage</div>
                <div className="flex w-1/3 py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Stage 2</div>
                <div className="flex w-1/3 py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Stage 3</div>
            </div>
            <div className="w-10/12 h-fit flex flex-row items-start justify-center gap-2">
                <div className="w-1/3 h-fit flex flex-col items-center justify-start gap-1">
                    {
                        filteredEvents.filter(event => event.day === day && event.stage == "main").map((event, key) => {
                            return (
                                <div key={key} className="w-full h-fit flex flex-row items-start justify-start gap-2">
                                    <div className="w-full bg-slate-100 rounded-md shadow-sm flex flex-col items-start justify-start py-3 px-4">
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-2 mb-3">
                                            <p className="text-sm text-black Medium ">
                                                {event.start + " - " + event.end}
                                            </p>
                                            <p className="text-sm px-2 py-1 rounded shadow text-white Medium" style={{
                                                backgroundColor: event.type == "talk" ? "#FFAC1C" : event.type == "panel" ? "#1d427f" : "#7f1d44"
                                            }}>
                                                {event.type.toUpperCase()}
                                            </p>
                                            {
                                                event.lang == "it" ? (
                                                    <div className="h-[1.6rem] w-[2.4rem] rounded bg-red-400 bg-center bg-cover" style={{
                                                        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/320px-Flag_of_Italy.svg.png')"
                                                    }}></div>
                                                ) : ("")
                                            }
                                        </div>
                                        {
                                            event.title != "" ? (
                                                <p className="text-xl text-black Medium mb-2">{event.title}</p>
                                            ) : (
                                                <p className="text-xl text-gray-400 Medium italic mb-2">Title to be announced later...</p>
                                            )
                                        }
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-1 mb-12">
                                            <MdOutlinePlace size={20} color="#252525" />
                                            <p className="text-xs text-black Medium">
                                                {event.stage == "main" ? "Main Stage" : event.stage == "stage 2" ? "Stage 2" : "Stage 3"}
                                            </p>
                                        </div>
                                        {
                                            event.speakers.length != 0 ? (
                                                <p className="text-md text-gray-700 mb-2">
                                                    Speakers: {
                                                        event.speakers.map(speaker => speaker.name).join(', ')
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
                </div>
                <div className="w-1/3 h-fit flex flex-col items-center justify-start gap-1">
                    {
                        filteredEvents.filter(event => event.day === day && event.stage == "stage 2").map((event, key) => {
                            return (
                                <div key={key} className="w-full h-fit flex flex-row items-start justify-start gap-2">
                                    <div className="w-full bg-slate-100 rounded-md shadow-sm flex flex-col items-start justify-start py-3 px-4">
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-2 mb-3">
                                            <p className="text-sm text-black Medium">
                                                {event.start + " - " + event.end}
                                            </p>
                                            <p className="text-sm px-2 py-1 rounded shadow text-white Medium" style={{
                                                backgroundColor: event.type == "talk" ? "#FFAC1C" : event.type == "panel" ? "#1d427f" : "#7f1d44"
                                            }}>
                                                {event.type.toUpperCase()}
                                            </p>
                                            {
                                                event.lang == "it" ? (
                                                    <div className="h-[1.6rem] w-[2.4rem] rounded bg-red-400 bg-center bg-cover" style={{
                                                        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/320px-Flag_of_Italy.svg.png')"
                                                    }}></div>
                                                ) : ("")
                                            }
                                        </div>
                                        {
                                            event.title != "" ? (
                                                <p className="text-xl text-black Medium mb-2">{event.title}</p>
                                            ) : (
                                                <p className="text-xl text-gray-400 Medium italic mb-2">Title to be announced later...</p>
                                            )
                                        }
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-1 mb-12">
                                            <MdOutlinePlace size={20} color="#252525" />
                                            <p className="text-xs text-black Medium">
                                                {event.stage == "main" ? "Main Stage" : event.stage == "stage 2" ? "Stage 2" : "Stage 3"}
                                            </p>
                                        </div>
                                        {
                                            event.speakers.length != 0 ? (
                                                <p className="text-md text-gray-700 mb-2">
                                                    Speakers: {
                                                        event.speakers.map(speaker => speaker.name).join(', ')
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
                </div>
                <div className="w-1/3 h-fit flex flex-col items-center justify-start gap-1">
                    {
                        filteredEvents.filter(event => event.day === day && event.stage == "stage 3").map((event, key) => {

                            return (
                                <div key={key} className="w-full h-fit flex flex-row items-start justify-start gap-2">
                                    <div className="w-full bg-slate-100 rounded-md shadow-sm flex flex-col items-start justify-start py-3 px-4">
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-2 mb-3">
                                            <p className="text-sm text-black Medium">
                                                {event.start + " - " + event.end}
                                            </p>
                                            <p className="text-sm px-2 py-1 rounded shadow text-white Medium" style={{
                                                backgroundColor: event.type == "talk" ? "#FFAC1C" : event.type == "panel" ? "#1d427f" : "#7f1d44"
                                            }}>
                                                {event.type.toUpperCase()}
                                            </p>
                                            {
                                                event.lang == "it" ? (
                                                    <div className="h-[1.6rem] w-[2.4rem] rounded bg-red-400 bg-center bg-cover" style={{
                                                        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/320px-Flag_of_Italy.svg.png')"
                                                    }}></div>
                                                ) : ("")
                                            }
                                        </div>
                                        {
                                            event.title != "" ? (
                                                <p className="text-xl text-black Medium mb-2">{event.title}</p>
                                            ) : (
                                                <p className="text-xl text-gray-400 Medium italic mb-2">Title to be announced later...</p>
                                            )
                                        }
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-1 mb-12">
                                            <MdOutlinePlace size={20} color="#252525" />
                                            <p className="text-xs text-black Medium">
                                                {event.stage == "main" ? "Main Stage" : event.stage == "stage 2" ? "Stage 2" : "Stage 3"}
                                            </p>
                                        </div>

                                        {
                                            event.speakers.length != 0 ? (
                                                <p className="text-md text-gray-700 mb-2">
                                                    Speakers: {
                                                        event.speakers.map(speaker => speaker.name).join(', ')
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
                </div>
            </div>
        </section>
    )
}

export default Agenda;