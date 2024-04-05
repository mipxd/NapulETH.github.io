// Designed and coded by Med Newton
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Verticals from "@/components/verticals";
import Where from "@/components/where";
import Sponsors from "@/components/sponsors";
import Partners from "@/components/partners";
import MediaPartners from "@/components/mediaPartners";
import Pricing from "@/components/pricing";
import Speakers from "@/components/speakers";
import Footer from "@/components/footer";
import Meetups from "@/components/meetups";
import dynamic from "next/dynamic";

const StamenTonerMap = dynamic(
  () => import('@components/meetups'), // Replace with your component path
  { ssr: false } // Disable SSR for this component
);

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Head> 
      <title>NapulETH - The Biggest Web3 Event In Southern Italy</title>
				<meta
					name="description"
					content="The Biggest Blockchain Event in Southern Italy, an international Web3 showcase, connects global innovators to explore Defi potential and the future of digital economy."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <Navbar />
      
      <Hero />
      <StamenTonerMap />
      <Pricing />
      <Verticals />
      <Where />
      
      <Speakers />
      <Sponsors />
      <Partners />
      <MediaPartners />
      <Footer />
    </main>
  );
}
