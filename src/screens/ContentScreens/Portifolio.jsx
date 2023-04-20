import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import Image from "../../assets/igor.png";
import Clube from '../../assets/clube2.png'
import { GeralContext } from "../../context/geral/geralContext";

const Portifolio = () => {
  const { isDarkMode } = useContext(GeralContext);
  const theme = useContext(ThemeContext);

  const projs = [
    {
      name: "Reminder",
      pic: Image,
      link: 'açslkdfj',
      tec: "Javascript, React Native e Firebase",
      description:
        "Foi o primeiro projeto que desenvolvi em Javascript, e consequentemente o primerio em React Native, me ajudou muito a entender alguns conceitos e a me familiarizar com npm, componentização, hooks, e muito mais. Utilizei o firebase como banco para o projeto.",
    },
    {
      name: "Quiz",
      pic: '../../assets/clube1.png',
      link: Clube,
      tec: "Javascript e React",
      description:
        "Projeto desenvolvido para um trabalho da faculdade, que consistiu em entender conceitos sobre React.",
    },
    {
      name: "Reminder",
      pic: '../../assets/clube1.png',
      link: "https://github.com/igorgbp/Clube-do-Livro",
      tec: "Javascript, React Native e Firebase",
      description:
        "Outro projeto desenvolvido para a faculdade, onde não utilizei nenhum framework, o projeto foi feito apenas com HTML, CSS e Javascript, e PHP no back-end, que neste caso é dentro do mesmo projeto.",
    },
  ];

  const Item = ({ item }) => {
    return (
      <div
        class=" mb-4 p-7 rounded-xl"
        style={{ backgroundColor: theme.secondary }}
      >
        <p class=" text-xl " style={{ color: theme.text }}>
          {item.name}
        </p>
        <p style={{ color: theme.textSecondary }}> {item.description}</p>
        <img src={item.pic} class="h-96 w-full object-cover rounded-lg mt-2"></img>
        <p class="mt-2" style={{ color: theme.textSecondary }}>
          Tecnologias utilizadas:{" "}
          <span class="" style={{ color: theme.text }}>
            {item.tec}
          </span>
        </p>
        <p style={{ color: theme.textSecondary }}>
          Repositório:{" "}
          <a
            href={item.link}
            class={` ${
              isDarkMode ? "text-slate-700 hover:text-slate-500" : "text-gray-50 hover:text-gray-400"
            } `}
          >
            {item.link}
          </a>
        </p>
      </div>
    );
  }; 
  return (
    <div class=" flex items-center flex-col">
      <div class="w-2/3  ">
        <p class="text-center text-5xl font-bold" style={{ color: theme.text }}>
          Portfólio
        </p>
        <p class="text-center mt-2" style={{ color: theme.textSecondary }}>
          Bem vindo ao meu portifólio online, aqui você encontra alguns dos meus
          projetos pessoais. Quer ajuda construindo sua aplicação?
        </p>
      </div>
      <div class=" mt-4 w-full">
        {projs.map((item) => {
          return <Item item={item} />;
        })}
      </div>
    </div>
  );
};
export default Portifolio;
