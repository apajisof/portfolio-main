"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
    const [cursorAnimation, setCursorAnimation] = useState({ x: 0 });
    const [lightningAnimation, setLightningAnimation] = useState({ x: 0 });
  
    useEffect(() => {
      const moveCursor = () => {
        setCursorAnimation((prev) => ({ x: prev.x === 0 ? 20 : 0 }));
      };
  
      const moveLightning = () => {
        setLightningAnimation((prev) => ({ x: prev.x === 0 ? -20 : 0 }));
      };
  
      const cursorInterval = setInterval(moveCursor, 1000);
      const lightningInterval = setInterval(moveLightning, 1000);
  
      return () => {
        clearInterval(cursorInterval);
        clearInterval(lightningInterval);
      };
    }, []);

  return (
    <div
      className="bg-black py-24 relative overflow-clip"
      style={{
        background:
          "linear-gradient(to bottom, #000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)",
      }}
    >
     <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]">
     </div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Prazer,</h1>
          <h1 className="text-[#e48a57]">Sou o Reginaldo</h1>
        </div>

        <motion.div
          className="hidden md:block absolute left-[220px] top-[170px]"
          animate={{ x: cursorAnimation.x }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Image
            src={cursor}
            height="190"
            width="190"
            alt="cursor"
            draggable="false"
          />
        </motion.div>
        
        <motion.div
          className="hidden md:block absolute right-[220px] top-[20px]"
          animate={{ x: lightningAnimation.x }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Image
            src={lightning}
            height="120"
            width="120"
            alt="lightning"
            draggable="false"
          />
        </motion.div>
    
      <p className="text-center text-xl max-w-[500px] mx-auto mt-8 - text-white/80">
        Navegando pelo universo do Front-End e Java, meu objetivo é criar
        websites que não apenas impressionem, mas que também ofereçam uma
        experiência memorável ao usuário.
      </p>
      <Image
        src={profilepic}
        alt="profilepic"
        className="h-auto, w-auto mx-auto"
        draggable="false"
      />
        </div>
    </div>
  );
};

export default Hero;
