import React from "react";
import { useContext } from "react";
import aboutMePic from "../assets/igor.png";
import { MdContacts } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import Icon from "../components/Icon";
import flutuante from "../assets/segunda.png";
import { Context } from "../context/Context";

const AboutMe = () => {
  const { setCurrentOption, skills, theme } = useContext(Context);
  const currentTheme = theme;
  console.log(currentTheme);

  const Item = ({ item }) => {
    return (
      <div class=" w-full md:w-72  rounded-md   flex flex-col p-4  md:mt-4 items-center md:items-start">
        <div class=" w-fit"><Icon item={item} /></div>
        <p class="mt-2 text-lg font-bold text-center md:text-start" style={{ color: currentTheme.text }}>
          {item.name}
        </p>
        <p class="text-center md:text-start" style={{ color: currentTheme.textSecondary }}>{item.description}</p>
      </div>
    );
  };


  return (
    <div class=" flex flex-col  lg:pr-24">
      <div class="flex space-x-6 ">
        <div class="h-auto  flex flex-col">
          <div class=" mb-4">
            <p class=" text-3xl md:text-5xl font-black mx-auto md:mx-0 w-fit" style={{ color: currentTheme.text }}>
              Igor Pereira
            </p>
            <p
              class=" text-xl md:text-2xl font-bold mt-1 mx-auto md:mx-0 w-fit"
              style={{ color: currentTheme.textSecondary }}
            >
              Desenvolvedor Front-end
            </p>
            <p class="mt-4 mx-auto md:mx-0 w-fit text-center md:text-start" style={{ color: currentTheme.textSecondary }}>
              Sou um desenvolvedor front end para aplicações web e mobile. Quer
              saber como posso ajudar seu projeto? Confira meu portfólio de
              projetos e currículo online.
            </p>
          </div>

          <div class="flex gap-2 flex-wrap justify-center md:justify-start ">
            <button
              class="p-2  rounded-lg w-44   hover:font-bold flex items-center justify-center"
              onClick={() => setCurrentOption(2)}
              style={{backgroundColor: currentTheme.secondary}}
            >
              <FiPaperclip color={currentTheme.text} />
              <p class="ml-2" style={{color:currentTheme.text}}>
                Ver meu potfolio
              </p>
            </button>
            <button
              class="p-2  rounded-lg w-44   hover:font-bold flex items-center justify-center"
              onClick={() => setCurrentOption(3)}
              style={{backgroundColor: currentTheme.secondary}}

            >
              <MdContacts color={currentTheme.text} />
              <p class="ml-2" style={{ color: currentTheme.text }}>
                {" "}
                Entrar em contato
              </p>
            </button>
          </div>
          <div class="mt-8 md:mt-20">
            <p class="text-xl md:text-3xl font-bold mx-auto md:mx-0 w-fit" style={{ color: currentTheme.text }}>
              O que eu faço?
            </p>
            <p class="mt-2 text-center md:text-start" style={{ color: currentTheme.textSecondary }}>
              Desenvolvo em javascript há quase dois anos, atualmente atuo na
              "Preço do Gás LTDA" como desenvolvedor front end mobile, usando
              React Native. Abaixo tem um pequeno resumo das tecnologias em que
              tenho experiência.
            </p>
          </div>
        </div>
        <img
          src={flutuante}
          class="w-11/12 object-contain h-96 lg:block hidden"
        />
      </div>

      {/* <div class="flex space-x-4 mt-4 border-2 border-blue-600 flex-wrap h-full justify-center p-5">
        {skills.map((item) => {
          return <Item item={item} />
        })}
      </div> */}
      <div class=" mt-5">
        <ul class=" flex flex-wrap  h-full justify-center md:justify-start gap-2">
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
