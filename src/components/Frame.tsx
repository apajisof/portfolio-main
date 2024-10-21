import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const frameIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaReact size={140} />, label: "REACT" },
  { icon: <FaJsSquare size={140} />, label: "JAVASCRIPT" },
  { icon: <FaBootstrap size={140} />, label: "BOOTSTRAP" },
  { icon: <RiTailwindCssFill size={140} />, label: "TAILWIND" },
  { icon: <RiNextjsFill size={140} />, label: "NEXTJS" },
  { icon: <FaVuejs size={140} />, label: "VUE" },
];

const Frame = () => {
  return (
    <div className="bg-gradient-to-t  from-black to-[#381a5f] py-28">
      <div className="text-white/70 max-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-8 "> Frameworks </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6  ">
          {frameIcons.map((frame, index) => (
            <div
              key={index}
              className="j-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-black p-4 rounded-xl"
            >
              {frame.icon}
              <p className="mt-2">{frame.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame;
