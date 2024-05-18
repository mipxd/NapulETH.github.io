import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import ComingSoon from "@/components/comingsoon";
import Phases from "@/components/phases";
import TicketingPartner from "@/components/ticketingPartner";
import Footer from "@/components/footer";

export default function Tickets() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Head>
        <title>NapulETH - The Biggest Web3 Event In Southern Italy</title>
        <meta
          name="description"
          content="Offering a real incentive for those not yet familiar with web3 to participate in significant events, both accessible and high-profile."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Phases />
      <TicketingPartner />
      <Footer />
    </main>
  );
}
