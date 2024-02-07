import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import JoinSection from "@/components/join";
import Affiliated from "@/components/affiliated";
import Friends from "@/components/friends";
import Footer from "@/components/footer";

export default function Join() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Head> 
				<title>NapulEth - First Web3 Event In Naples</title>
				<meta
					name="description"
					content="offering a real incentive for those not yet familiar with web3 to participate in significant events, both accessible and high-profile."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <Navbar />
      <About />
      <JoinSection />
      <Affiliated />
      <Friends />
      <Footer />
    </main>
  );
}
