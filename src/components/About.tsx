"use client";

import Image from "next/image";
import book from "../assets/book.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import pc from "../assets/pc.png";

const About = () => {
  return (
    <div
      className="mx-auto rounded bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
      id="about"
    >
      <h1 className="text-white text-center text-6xl mx-auto font-semibold p-10 md:p-20 mb-8">
        Sobre
        <span className="text-orange-400"> mim</span>
      </h1>
      <div className="px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-8 gap-6">
        
        {/* Educação */}
        <div className="w-full col-span-1 md:col-span-5 relative bg-black backdrop-blur-lg border border-red-200 rounded-xl overflow-hidden p-2">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col ml-4 gap-4">
              <h2 className="text-2xl font-semibold text-red-200">Educação</h2>
              <p className="text-lg text-red-500">
                Sou formado em Recursos Humanos no Centro Universitário Leonardo
                da Vinci (Uniasselvi) no ano de 2013.
              </p>
              <p className="text-lg text-red-500">
                Sou formado em Sistemas de Informação pela Universidade do Sul
                de Santa Catarina (UNISUL) no ano de 2024.
              </p>
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div className="w-full col-span-1 md:col-span-3 relative bg-black backdrop-blur-lg border border-red-200 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={card} alt="experience" className="w-auto h-[130px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-2xl font-semibold text-red-200">Experiência</h2>
              <p className="text-lg text-red-500 mt-2">
                Tenho +1 ano de experiência em Front-end + Java.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Técnicas */}
        <div className="w-full col-span-1 md:col-span-5 relative bg-black backdrop-blur-lg border border-red-200 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="technical skills" className="w-auto h-[130px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-2xl font-semibold text-red-200">Technical Skills</h2>
              <p className="text-lg text-red-500 mt-2">
                Desenvolvimento Web: Experiência com HTML, CSS, Bootstrap,
                Tailwind, Next.js, Vue, React, JavaScript, entre outros.
              </p>
            </div>
          </div>
        </div>

        {/* Resolução de Problemas */}
        <div className="w-full col-span-1 md:col-span-3 relative bg-black backdrop-blur-lg border border-red-200 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={finance} alt="problem solving" className="w-auto h-[130px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-2xl font-semibold text-red-200">Resolução de Problemas</h2>
              <p className="text-lg text-red-500 mt-2">
                Sempre enfrento os desafios com uma abordagem analítica e
                sistêmica, buscando soluções eficazes e integradas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
