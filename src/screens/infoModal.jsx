import user from "../assets/igorpic2.png";
import usert from "../assets/igorpic3.png";

import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillCaretLeft,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Context } from "../context/Context";
import  "../../il8n";
import { MdTranslate } from "react-icons/md";
const InfoModal = () => {
  const {
    changeTheme,
    isDarkMode,
    updateIsShowingLeftBar,
    smallScreen,
    theme
  } = useContext(Context);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [language, setLanguage] = useState('en');

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    console.log('change language ', lng)
    setLanguage(lng)
    i18n.changeLanguage(lng);
  };
  return (
    <div class=" justify-center px-4 py-2 items-center rounded-3xl flex flex-col relative" style={{backgroundColor: theme.primary}}>
      {
        smallScreen ? (
          <button className="w-6 h-6 absolute right-4 top-4 bg-blue-300 bg-opacity-30 rounded-full items-center justify-center flex" onClick={()=>updateIsShowingLeftBar()}><div className="bg-white w-3 h-0.5"></div></button>
        ) : 
        (
          <button
          onClick={() => changeTheme()}
          className=" rounded-full w-12 h-12 p-0.5 absolute top-4 right-4 bg-black bg-opacity-40 transition ease-in-out hover:scale-110 group" 
        >
          {isDarkMode ? (
            <BsSunFill  color={'#ffd16e'} className="mx-auto  animate-spin-super-slow" size={24}/>
          ) : (
            <BsSunFill  color={'#afa9ff'} className="mx-auto animate-wiggle-slow " size={24} />
          )}

        </button>
        )
      }
      <div className="flex-col flex top-4 left-4 absolute items-center">

    
        <button
          onClick={() => changeLanguage(language == 'pt' ? 'en': 'pt')}
          className=" rounded-full w-12 h-12 p-0.5   bg-black bg-opacity-40 hover:scale-110 group" 
        >
          {isDarkMode ? (
            <MdTranslate color={'#ffd16e'} className="mx-auto " size={24}/>
          ) : (
            <MdTranslate color={'#afa9ff'} className="mx-auto " size={24} />
          )}

        </button>
        <p style={{color: theme.text }}>{language}</p>

        </div>
      <img
        src={isDarkMode? user : usert}
        alt="Igor Pereira"
        class="mt-2 mx-auto rounded-3xl w-56 h-56 object-cover"
      />
      <p class="mx-2 text-center mt-2" style={{ color: theme.text }}>
        {t("info_bar_text")}
      </p>
      {/* <hr class="mt-2 w-full" style={{ borderColor: theme.text }}></hr> */}
      <ul class="flex mx-2 items-center mt-2 space-x-1 justify-center h-14">
        <li class=" p-1 rounded-lg w-12 h-12 hover:scale-125 transition ease-in-out duration-150">
          <a href='https://instagram.com/igor.gbp' target="blank">
            <AiOutlineInstagram class="w-full h-full" color={theme.text} />
          </a>
        </li>
        <li class=" p-1 rounded-lg w-12 h-12 hover:scale-125 transition ease-in-out duration-150" >
          <a href='https://github.com/igorgbp' target="blank">
            <AiOutlineGithub class="w-full h-full" color={theme.text} />
          </a>
        </li>
        <li class=" p-1 rounded-lg w-12 h-12 hover:scale-125 transition ease-in-out duration-150 ">
          <a href='https://www.linkedin.com/in/igorgbp/' target="blank">
            <AiOutlineLinkedin class="w-full h-full" color={theme.text} />
          </a>
        </li>
        <li class=" p-1 rounded-lg w-12 h-12 hover:scale-125 transition ease-in-out duration-150 ">
          <a href='https://api.whatsapp.com/send/?phone=5533999007564&text=Ol%C3%A1+Igor%2C+vim+do+seu+portf%C3%B3lio%21%21%21&type=phone_number&app_absent=0' target="blank">
            <AiOutlineWhatsApp class="w-full h-full" color={theme.text} />
          </a>
        </li>
      </ul>

    </div>
  );
};

export default InfoModal;
