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
  const { updateDarkMode, isDarkMode, setCurrentOption } =
    useContext(GeralContext);
  const currentTheme = useContext(ThemeContext);

  const options = [
    {
      id: 1,
      name: "Sobre mim",
      icon: "user",
    },
    {
      id: 2,
      name: "Portifolio",
      icon: "portifolio",
    },
    {
      id: 3,
      name: "Contato",
      icon: "contact",
    },
  ];

  const links = [
    {
      icon: "instagram",
      href: "https://instagram.com/igor.gbp",
    },
    {
      icon: "github",
      href: "https://github.com/igorgbp",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/igorgbp/",
    },
  ];

  const Icon = ({ item }) => {
    console.log("açsdflkj", item);
    switch (item.icon) {
      case "user":
        return <FaUserAlt color={currentTheme.text} />;
      case "portifolio":
        return <FiPaperclip color={currentTheme.text} />;
      case "contact":
        return <MdContacts color={currentTheme.text} />;
      case "instagram":
        return (
          <AiOutlineInstagram class="w-full h-full" color={currentTheme.text} />
        );
      case "github":
        return (
          <AiOutlineGithub class="w-full h-full" color={currentTheme.text} />
        );
      case "linkedin":
        return (
          <AiOutlineLinkedin class="w-full h-full" color={currentTheme.text} />
        );
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
      {/* <hr class="mt-2 w-full" style={{ borderColor: currentTheme.text }}></hr> */}
      <ul class="flex mx-2 items-center mt-2 space-x-1 justify-center h-14">
        {links.map((link) => {
          return (
            <li
              class={`${
                isDarkMode ? "" : ""
              } p-1 rounded-lg w-12 h-12 hover:w-14 hover:h-14`}
            >
              <a href={link.href}>
                <Icon item={link} />
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
                isDarkMode ? "bg-gray-300" : "bg-gray-600"
              } mb-1 rounded-md py-3 px-4 mx-auto w-full ${
                isDarkMode ? "hover:bg-slate-400" : "hover:bg-slate-500"
              }  space-x-3 justify-center hover:cursor-pointer`}
              onClick={() => setCurrentOption(item.id)}
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
        <p style={{ color: currentTheme.text }} class="font-semibold">
          Dark mode
        </p>
      </div>
    </div>
  );
};

export default Leftbar;
