/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { title: "Sobre", path: "#sobre" },
  { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-black text-white/70 pt-6">
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-4 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}

          <li>
            <a href="#contact" className="group">
              <h1 className="textx-lg font-bold text-white/70 cursor-pointer">
                Contato
              </h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="mt-1 absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-800 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
