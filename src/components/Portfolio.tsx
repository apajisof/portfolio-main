"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import project1 from "../assets/barber.png";
import project from "../assets/patrulhacanina.png";
import project2 from '../assets/project.jpg';

const projects = [
  {
    title: "Barba Brutal - Barber shop",
    desc: "Loja de Barberia",
    devStack: "Nextjs, Tailwind, React, Prisma, Neon",
    link: "#",
    git: "#",
    src: project1,
  },
  {
    title: "Pet Life",
    desc: "Loja de Pets",
    devStack: "HTML, CSS, Bootstrap",
    link: "#",
    git: "#",
    src: project,
  },
  {
    title: "Redesign do site WebJasper",
    desc: "Redesigner (direitos autorais não permitidos)",
    devStack: "Bootstrap, Javascript, Jquery",
    link: "#",
    git: "#",
    src: project2,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-8 mt-0"
      id="portfolio"
    >
      <h1 className="text-white text-center text-6xl mx-auto font-semibold my-8">
        {" "}
        Meus
        <span className="text-orange-400 p-5">Projetos</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto  mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={` mt-2 flex flex-col ${
              index % 2 === 1
                ? "md:flex-row-reverse gap-12"
                : "flex-col md:flex-row gap-12"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">
                {" "}
                {`0${index + 1}`}
              </h2>
              <h2 className="text-4x1"> {project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {" "}
                {project.desc}
              </p>
              <p className="text-xl text-orange-500 font-semibold">
                {" "}
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6 text-base text-white/50">
                  Link
                </a>
                <a href={project.git} className="mr-6 text-base text-white/50">Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px]  w-[500px] object-cover *:
                        border

                        rounded-lg border-gray-700
                        
                        "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
