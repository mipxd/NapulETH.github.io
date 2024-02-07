import Link from "next/link";
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
