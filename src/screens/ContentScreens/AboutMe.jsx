import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import aboutMePic from "../../assets/igor.png";

const AboutMe = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
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
            <button class="p-2  rounded-lg w-44 bg-slate-600">
              <p style={{ color: "#FFF" }}>Ver meu potifólio</p> 
            </button>
            <button class="p-2  rounded-lg w-44 bg-slate-600">
              <p style={{ color: "#FFF" }}> Entrar em contato</p>
            </button>
          </div>
        </div>
        <img
          src={aboutMePic}
          class="w-11/12 object-cover h-72 lg:block hidden"
        />
      </div>
      <div class="mt-20">
        <p class="text-3xl font-bold" style={{color:theme.text}}>O que eu faço?</p>
        <p class="mt-2" style={{color:theme.textSecondary}}>
          Desenvolvo em javascript a quase dois anos, atualmente atuo na "Preço
          do Gás LTDA" como desenvolvedor front end mobile, usando React Native.
          Abaixo tem um pequeno resumo das tecnologias em que tenho experiência.
        </p>
      </div>
    </>
  );
};
export default AboutMe;
