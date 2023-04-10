import user from "../../assets/igo.jpg";
import { useContext } from "react";
import { GeralContext } from "../../context/geral/geralContext";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { FaUserAlt } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";

const Leftbar = () => {
  const options = [
    {
      name: "Sobre mim",
      icon: "user",
    },
    {
      name: "Portifolio",
      icon: "portifolio",
    },
    {
      name: "Contato",
      icon: "contact",
    },
  ];

  const links = [
    {
      name: "instagram",
      href: "https://instagram.com/igor.gbp",
    },
    {
      name: "github",
      href: "https://github.com/igorgbp",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/igorgbp/",
    },
  ];

  const Icon = ({ item }) => {
    console.log("açsdflkj", item);
    if (item.icon === "user") {
      return <FaUserAlt color="white" />;
    } else if (item.icon === "portifolio") {
      return <FiPaperclip color="white" />;
    } else if (item.icon === "contact") {
      return <MdContacts color="white" />;
    }
  };

  const Link = ({ link }) => {
    if (link.name === "instagram") {
      return <AiOutlineInstagram class="w-10 h-10" color="white" />;
    } else if (link.name === "github") {
      return <AiOutlineGithub class="w-10 h-10" color="white" />;
    } else if (link.name === "linkedin") {
      return <AiOutlineLinkedin class="w-10 h-10" color="white" />;
    }
  };

  return (
    <div class=" justify-center p-3">
      <p class="text-center text-xl mt-4 text-white font-bold">Igor Pereira</p>
      <img
        src={user}
        alt="Igor Pereira"
        class="mt-2 mx-auto rounded-full w-56 h-56"
      />
      <p class="mx-2 text-center mt-2 text-white">
        Olá meu nome é Igor, sou desenvolvedor front end. Bem vindo ao meu
        portifólio
      </p>
      <hr class="mt-2 w-full"></hr>
      <ul class="flex mx-4 items-center mt-2 space-x-0 justify-center">
        {links.map((link) => {
          return (
            <li class="hover:bg-slate-700 p-2 rounded-lg">
              <a href={link.href}>
                <Link link={link} />
              </a>
            </li>
          );
        })}
      </ul>
      <div class=" mt-6">
        {options.map((item) => {
          return (
            <div class="flex items-center bg-zinc-700 mb-1 rounded-md py-3 px-4 mx-auto w-full hover:bg-slate-600 space-x-3 justify-center hover:cursor-pointer">
              <Icon item={item} />
              <p class="text-white">{item.name}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => updateDarkMode()}></button>
    </div>
  );
};

export default Leftbar;
