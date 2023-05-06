import user from "../assets/igo.jpg";
import { useContext, useState } from "react";
import { GeralContext } from "../context/geral/geralContext";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillCaretLeft,
} from "react-icons/ai";
import {TbArrowBarLeft} from 'react-icons/tb';
import { FaUserAlt } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/theme/themeContext";

const Leftbar = () => {
  const {
    updateDarkMode,
    isDarkMode,
    setCurrentOption,
    isShowingLeftBar,
    updateIsShowingLeftBar,
  } = useContext(GeralContext);
  const [width, setWidth] = useState(window.innerWidth);
  const currentTheme = useContext(ThemeContext);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  const HideLeftBar = () => {
    if (width < 768) {
      return (
        <button
          class="absolute right-2 top-1/2"
          onClick={() => updateIsShowingLeftBar()}
        >
          <AiFillCaretLeft size={30}  className=" text-gray-500 hover:text-slate-700"/>
          
        </button>
      );
    }else return null
  } 
  const handleShowLeftBarOnOptionClick = () =>{
    if(window.innerWidth<768) updateIsShowingLeftBar()
  }
  const options = [
    {
      id: 1,
      name: "Sobre mim",
      icon: "user",
    },
    {
      id: 2,
      name: "Portfolio",
      icon: "portfolio",
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
      case "portfolio":
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
    <div class=" justify-center px-3 py-6 items-center">
      <HideLeftBar />
      {/* <p
        class="text-center text-xl mt-2 font-bold"
        style={{ color: currentTheme.text }}
      >
        Igor Pereira
      </p> */}
      <img
        src={user}
        alt="Igor Pereira"
        class="mt-2 mx-auto rounded-xl w-56 h-56 object-cover"
      />
      <p class="mx-2 text-center mt-2" style={{ color: currentTheme.text }}>
        Olá meu nome é Igor, sou desenvolvedor front end. Bem vindo ao meu
        portfolio
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
      <div class=" mt-2 ">
        {options.map((item) => {
          return (
            <button
              className={`flex items-center ${
                isDarkMode ? "bg-gray-300" : "bg-gray-600"
              } mb-1 rounded-md py-3 px-4 mx-auto w-full ${
                isDarkMode ? "hover:bg-slate-400" : "hover:bg-slate-500"
              }  space-x-3 justify-start hover:cursor-pointer`}
              onClick={() => {setCurrentOption(item.id);handleShowLeftBarOnOptionClick()}}
            >
              <Icon item={item} />
              <p style={{ color: currentTheme.text }}>{item.name}</p>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => updateDarkMode()}
        class={`flex space-x-1 mx-auto  mt-4 justify-center w-fit px-2 py-1 items-center rounded-md ${
          isDarkMode
            ? "bg-gray-300 hover:bg-slate-400"
            : "bg-gray-700 hover:bg-slate-600"
        }`}
      >
        {isDarkMode ? (
          <BsMoonFill color={currentTheme.text} />
        ) : (
          <BsSunFill color={currentTheme.text} />
        )}

        <p style={{ color: currentTheme.text }} class="font-semibold">
          {isDarkMode ? "Dark" : "Light"} mode
        </p>
      </button>
    </div>
  );
};

export default Leftbar;
