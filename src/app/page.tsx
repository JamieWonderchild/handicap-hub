import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Trust from "@/components/Trust";
import Pricing from "@/components/Pricing";
import Audience from "@/components/Audience";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Comparison />
      <Trust />
      <Pricing />
      <Audience />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
