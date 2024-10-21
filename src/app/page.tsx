/* eslint-disable @typescript-eslint/no-unused-expressions */
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Frame from "@/components/Frame";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  return (
   <>
   
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Frame/>
    <Contact/>
    <Footer/>
    
   </>
  );
}
