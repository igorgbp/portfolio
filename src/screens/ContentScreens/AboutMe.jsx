import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import aboutMePic from "../../assets/igor.png";
import { FaReact, FaAngular, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative, TbBrandJavascript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import {MdContacts} from 'react-icons/md'
import { FiPaperclip } from "react-icons/fi";

import { GeralContext } from "../../context/geral/geralContext";

const AboutMe = () => {
  const {setCurrentOption} = useContext(GeralContext)
  const theme = useContext(ThemeContext);
  console.log(theme);
  const skills = [
    {
      name: "Javascript",
      description:
        "Tive contato com Javascript já a quase dois anos, adquiri bastante experiencia durante este tempo.",
    },
    {
      name: "React Native",
      description: "Foi o primeiro framework que usei, é o que mais tenho experiência e familiaridade, uso diariamente no trabalho na 'Preço do Gás'.",
    },
    {
      name: "Angular",
      description: "Tive vontade de aprender por causa do trabalho, mas depois procurei independente disto, agora estou desenolvendo um pojeto afim de aumentar o conhecimento nesta tecnologia.",
    },
    {
      name: "Tailwind",
      description: "Tive o primeiro contato a não muito tempo, mas me adaptei rapidamente e uso em quase todos os meus projetos, inclusive neste Portfólio.",
    },
    {
      name: "React",
      description: "Comecei a aprender devido a uma demanda no trabalho, gostei do framework e estou utilizando em projetos pessoais e projetos da faculdade.",
    },

    {
      name: "HTML",
      description: "Tive contato ao mesmo tempo que com Javascript e CSS, rapidamente entendi os conceitos por trás.",
    },
    {
      name: "CSS",
      description: "Assim como o HTML comecei a usar junto do Javascript, e como tempo fui evoluindo cada vez mais.",
    },
  ];
  const Icon = ({ item }) => {
    // return <FaReact class="w-10 h-10" color='#66BEDB'/>
    switch (item.name) {
      case "React":
        return <FaReact class="w-14 h-14" color="#66BEDB" />;
      case "Angular":
        return <FaAngular class="w-14 h-14" color="#c44343" />;
      case "HTML":
        return <FaHtml5 class="w-14 h-14" color="#eca41d" />;
      case "CSS":
        return <FaCss3Alt class="w-14 h-14" color="#4775f7" />;
      case "Tailwind":
        return <SiTailwindcss class="w-14 h-14" color="#33b3c4" />;
      case "React Native":
        return <TbBrandReactNative class="w-14 h-14" color="#4fd1e2" />;
      case "Javascript":
        return <IoLogoJavascript class="w-14 h-14" color="#c4b10b" />;
    }
  };

  const Item = ({ item }) => {
    return (
      <div class="w-80  rounded-md   flex flex-col p-4  mt-4">
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
            <button class="p-2  rounded-lg w-44 bg-slate-600 hover:bg-gray-700  hover:font-bold flex items-center justify-center"
            onClick={()=>setCurrentOption(2)}>
              <FiPaperclip color={'white'}/>
              <p class="ml-2" style={{ color: "#FFF" }}>Ver meu potfolio</p>
            </button>
            <button class="p-2  rounded-lg w-44 bg-slate-600 hover:bg-gray-700  hover:font-bold flex items-center justify-center"
            onClick={()=>setCurrentOption(3)}>
              <MdContacts color={'white'}/>
              <p class="ml-2" style={{ color: "#FFF" }}> Entrar em contato</p>
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
          Desenvolvo em javascript a quase dois anos, atualmente atuo na "Preço
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
        <ul class="flex   flex-wrap h-full justify-start ">
          {skills.map((item) => {
            return (
              <li class="mr-24">
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
