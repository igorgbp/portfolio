import user from "../assets/igo.jpg";
import { useContext } from "react";
import { GeralContext } from "../context/geral/geralContext";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { FaUserAlt } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { ThemeContext } from "../context/theme/themeContext";

const Leftbar = () => {
  const { updateDarkMode, isDarkMode, setCurrentOption } = useContext(GeralContext);
  const currentTheme = useContext(ThemeContext);

  const options = [
    {
      id:1,
      name: "Sobre mim",
      icon: "user",
    },
    {
      id:2,
      name: "Portifolio",
      icon: "portifolio",
    },
    {
      id:3,
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
      return <FaUserAlt color={currentTheme.text} />;
    } else if (item.icon === "portifolio") {
      return <FiPaperclip color={currentTheme.text} />;
    } else if (item.icon === "contact") {
      return <MdContacts color={currentTheme.text} />;
    }
  };

  const Link = ({ link }) => {
    if (link.name === "instagram") {
      return <AiOutlineInstagram class="w-10 h-10" color={currentTheme.text} />;
    } else if (link.name === "github") {
      return <AiOutlineGithub class="w-10 h-10" color={currentTheme.text} />;
    } else if (link.name === "linkedin") {
      return <AiOutlineLinkedin class="w-10 h-10" color={currentTheme.text} />;
    }
  };

  return (
    <div class=" justify-center p-3 ">
      <p
        class="text-center text-xl mt-2 font-bold"
        style={{ color: currentTheme.text }}
      >
        Igor Pereira
      </p>
      <img
        src={user}
        alt="Igor Pereira"
        class="mt-2 mx-auto rounded-xl w-56 h-56 object-cover"
      />
      <p class="mx-2 text-center mt-2" style={{ color: currentTheme.text }}>
        Olá meu nome é Igor, sou desenvolvedor front end. Bem vindo ao meu
        portifólio
      </p>
      <hr class="mt-2 w-full" style={{ borderColor: currentTheme.text }}></hr>
      <ul class="flex mx-4 items-center mt-2 space-x-0 justify-center">
        {links.map((link) => {
          return (
            <li
              class={`${
                isDarkMode ? "hover:bg-gray-300" : "hover:bg-zinc-700"
              } p-2 rounded-lg`}
            >
              <a href={link.href}>
                <Link link={link} />
              </a>
            </li>
          );
        })}
      </ul>
      <div class=" mt-2">
        {options.map((item) => {
          return (
            <button
              className={`flex items-center ${
                isDarkMode ? "bg-gray-300" : "bg-zinc-700"
              } mb-1 rounded-md py-3 px-4 mx-auto w-full ${
                isDarkMode ? "hover:bg-slate-400" : "hover:bg-slate-600"
              }  space-x-3 justify-center hover:cursor-pointer`}
              onClick={()=>setCurrentOption(item.id)}
            >
              <Icon item={item} />
              <p style={{ color: currentTheme.text }}>{item.name}</p>
            </button>
          );
        })}
      </div>
      <div class="flex space-x-1 mx-auto mt-4 justify-center">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={updateDarkMode}
          className={`toggle-checkbox   w-6 h-6 rounded-full ${
            isDarkMode ? "bg-gray-400" : "bg-gray-800"
          } border-4 border-gray-700 appearance-none cursor-pointer`}
        />
        <p style={{color:currentTheme.text}} class="font-semibold">Dark mode</p>
      </div>
    </div>
  );
};

export default Leftbar;
