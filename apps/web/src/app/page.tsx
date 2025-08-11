import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "InfraScan - AI-Powered Infrastructure Inspection Software",
  description: "InfraScan is launching an AI-powered inspection platform that enables contractors and government agencies to quickly identify, detect, and measure structural cracks using photogrammetry and digital twins.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
