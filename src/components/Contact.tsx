import Image from "next/image";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";

const Contact = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row lg:flex-row text-white p-8
       space-y-8 lg:space-y-0 lg:space-x-8 bg-gradient-to-b from-black to-[#381a5f]"
      id="contact"
    >
      <div className="flex justify-center items-center flex-1 gap-6">
        <ul className="space-y-2 text-center ">
          <li className="flex items-center justify-center">
            <Image src={phone} alt="phone" className="h-[80px] w-auto mr-2" />
            <p className="text-lg"> + 55 (48) 996151778</p>
          </li>
          <li className="flex items-center justify-center">
            <Image src={mail} alt="mail" className="h-[110px] w-auto mr-2" />
            <p className="text-lg">reginaldodarosacorreajr@gmail.com</p>
          </li>
        </ul>
      
      
      <div className="bg-white/10 p-6 rounded-xl max-w-[550px] flex-1">
        <h2 className="text-3xl font-bold text-orange-400 mb-4 text-center">
          Deixe a sua mensagem!
        </h2>

        <form
          className="space-y-4"
          action="https://getform.io/f/awngpgwb"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-2">
            <input
              type="text"
              name="name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Primeiro nome"
            />
            <input
              type="text"
              name="surname"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Sobrenome"
            />
            <input
              type="email"
              name="email"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="E-mail"
            />
            <input
              type="tel"
              name="phone"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Telefone"
            />
          </div>
          <textarea
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2"
            placeholder="Sua mensagem"
          
          />
          <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-lg rounded-xl">
            Enviar
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
