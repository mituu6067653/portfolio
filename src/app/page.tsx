import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import FeaturedWork from "@/components/FeaturedWork";
import { Services, Process, AboutAndTech } from "@/components/Sections";
import Contact from "@/components/Contact";
import FAQChatbot from "@/components/FAQChatbot";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meet Bhandari — Full-Stack Web Developer",
  description: "I build modern websites and custom web applications for businesses. Full-stack developer specializing in Next.js, React, Node.js, and custom workflows.",
  openGraph: {
    title: "Meet Bhandari — Full-Stack Web Developer",
    description: "Modern websites and custom web applications for businesses.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white clean-grid-bg text-[#0F172A]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TechMarquee />
        <FeaturedWork />
        <Services />
        <Process />
        <AboutAndTech />
        <Contact />
      </main>
      <FAQChatbot />
      <Footer />
    </div>
  );
}
