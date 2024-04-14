

import React, { useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { FaMapPin } from "react-icons/fa6";

import dynamic from 'next/dynamic';
import Link from 'next/link';

const GoogleMapReact = dynamic(() => import('google-map-react'), {
  ssr: false
});


interface MarkerProps {
    lat: number;
    lng: number;
    text: string;
  }

  const Marker: React.FC<MarkerProps> = ({ text }) => (
    <div style={{ color: 'pink', fontSize: '24px' }}>
        <div className='w-fit h-fit p-3 flex flex-row items-center justify-center marker-icon'>
        <FaMapPin size={40} color="#ECDA55" />
        </div>
        <Link target='_blank' href={"https://www.eventbrite.co.uk/e/biglietti-napuleth-the-spark-blockchain-and-ai-informal-meetup-863746387697?aff=ebdssbcategorybrowse&keep_tld=1"} className='w-fit h-fit relative z-[9999] tooltip '>
        <div className=" px-3 py-2 w-fit">
            <h5 className='text-lg Medium whitespace-nowrap text-blue-900 mb-2'>NapulETH & The Spark - Blockchain and AI informal Meetup</h5>
            <h5 className='text-sm Medium whitespace-nowrap text-gray-500 mb-4'>17/04/2024</h5>
            <h5 className='text-sm Medium whitespace-nowrap text-black'>The Spark Creative Hub - Mondadori Bookstore</h5>
            <h5 className='text-sm Medium whitespace-nowrap text-black mb-4'>17/04/2024</h5>
        </div></Link>
        
    </div>
  );


function Meetups() {
    const { t, i18n } = useTranslation();

    const stamenTonerTiles = 'https://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png';
    const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const mapCenter = [39.9528, -75.1638];
    const zoomLevel = 12;

    const mapRef = useRef(null);

    const defaultCenter = {
        lat: 40.8444313,
        lng: 14.2582646
      };
    
      const defaultZoom = 12;

      const mapStyles = [
        { elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#ffffff' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#000000' }] },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#000000', visibility: "off" }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#000000', visibility: "off" }]
        },
        {
          featureType: 'administrative.province',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#000000', visibility: "off" }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#000000', visibility: "off" }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ffffff', visibility: "off" }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#000000',visibility: "off" }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ffffff',visibility: "off" }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ffffff', visibility: "off" }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ffffff',visibility: "off" }]
        }
      ];

      const key= "AIzaSyDHgb9aAKiHEcu67OHEMXEGwvTy8GIr6F8"
    
    return (
        <section className="w-full flex flex-col items-center justify-start pt-12 mb-14">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {t('meetups')}
            </h5>
            <h6 className=" xl:w-1/2 w-8/12 text-black p-4 bg-white border-4 border-[#eddb55] text-xl xl:text-2xl Medium leading-normal text-center my-6">
                {
                    t('meetupsPara')
                } 👇
            </h6>
            <div className=" mx-auto w-11/12 h-[50vh] lg:h-[85vh] border-4 border-[#eddb55]">
            <iframe
              width="100%"
              height="100%"
              className=' border-none border-transparent w-full h-full'
              src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=via+degli+acquari+80133+,Napoli,Italia`}
            ></iframe>
            </div>
            
            
            

        </section>
    )
}

export default Meetups