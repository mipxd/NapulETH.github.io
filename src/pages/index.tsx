import Link from "next/link";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Verticals from "@/components/verticals";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Navbar />
      <Hero />
      <Verticals />
    </main>
  );
}
