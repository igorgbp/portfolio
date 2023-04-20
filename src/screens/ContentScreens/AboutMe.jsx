import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import aboutMePic from "../../assets/igor.png";

import { MdContacts } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { GeralContext } from "../../context/geral/geralContext";
import Icon from "../../components/Icon";

const AboutMe = () => {
  const { setCurrentOption, skills } = useContext(GeralContext);
  const theme = useContext(ThemeContext);
  console.log(theme);
  
  const Item = ({ item }) => {
    return (
      <div class="w-72  rounded-md   flex flex-col p-4  mt-4">
        <Icon item={item} />
        <p class="mt-2 text-lg font-bold" style={{ color: theme.text }}>
          {item.name}
        </p>
        <p style={{ color: theme.textSecondary }}>{item.description}</p>
      </div>
    );
  };
  return (
    <div class=" flex flex-col">
      <div class="flex space-x-6">
        <div class="h-auto justify-between flex flex-col">
          <div class=" mb-4">
            <p class="text-5xl font-black" style={{ color: theme.text }}>
              Igor Pereira
            </p>
            <p
              class="text-2xl font-bold mt-1"
              style={{ color: theme.textSecondary }}
            >
              Desenvolvedor Front-end
            </p>
            <p class="mt-4" style={{ color: theme.textSecondary }}>
              Sou um desenvolvedor front end para aplicações web e mobile. Quer
              saber como posso ajudar seu projeto? Confira meu portfólio de
              projetos e currículo online.
            </p>
          </div>

          <div class="flex space-x-4 ">
            <button
              class="p-2  rounded-lg w-44 bg-slate-600 hover:bg-gray-700  hover:font-bold flex items-center justify-center"
              onClick={() => setCurrentOption(2)}
            >
              <FiPaperclip color={"white"} />
              <p class="ml-2" style={{ color: "#FFF" }}>
                Ver meu potfolio
              </p>
            </button>
            <button
              class="p-2  rounded-lg w-44 bg-slate-600 hover:bg-gray-700  hover:font-bold flex items-center justify-center"
              onClick={() => setCurrentOption(3)}
            >
              <MdContacts color={"white"} />
              <p class="ml-2" style={{ color: "#FFF" }}>
                {" "}
                Entrar em contato
              </p>
            </button>
          </div>
        </div>
        <img
          src={aboutMePic}
          class="w-11/12 object-cover h-72 lg:block hidden"
        />
      </div>
      <div class="mt-20">
        <p class="text-3xl font-bold" style={{ color: theme.text }}>
          O que eu faço?
        </p>
        <p class="mt-2" style={{ color: theme.textSecondary }}>
          Desenvolvo em javascript há quase dois anos, atualmente atuo na "Preço
          do Gás LTDA" como desenvolvedor front end mobile, usando React Native.
          Abaixo tem um pequeno resumo das tecnologias em que tenho experiência.
        </p>
      </div>
      {/* <div class="flex space-x-4 mt-4 border-2 border-blue-600 flex-wrap h-full justify-center p-5">
        {skills.map((item) => {
          return <Item item={item} />
        })}
      </div> */}
      <div class="mt-2">
        <ul class=" flex flex-wrap  h-full justify-start gap-2">
          {skills.map((item) => {
            return (
              <li >
                <Item item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default AboutMe;
