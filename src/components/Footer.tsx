import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:p-0  text-white/70 py-8  w-full 
    mx-auto bg-gradient-to-t from-black to-[#381a5f] flex flex-col md:flex-row justify-around items-center">
      <h1 className="text-base text-center md:text-left">
        © Todos os direitos reservados a Apaji Desenvolvimentos.
      </h1>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/in/reginaldo-da-rosa-correa-junior-190799218/"
          className="hover:text-gray-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/correajapa_/"
          className="hover:text-gray-300 text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
