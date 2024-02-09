import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Verticals from "@/components/verticals";
import Where from "@/components/where";
import Sponsors from "@/components/sponsors";
import Partners from "@/components/partners";
import MediaPartners from "@/components/mediaPartners";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Head> 
				<title>NapulETH - First Web3 Event In Naples</title>
				<meta
					name="description"
					content="offering a real incentive for those not yet familiar with web3 to participate in significant events, both accessible and high-profile."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <Navbar />
      <Hero />
      <Verticals />
      <Where />
      <Sponsors />
      <Partners />
      <MediaPartners />
      <Footer />
    </main>
  );
}
