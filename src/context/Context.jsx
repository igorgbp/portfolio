import React, { createContext, useState } from 'react';
import { themes } from './themes';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentOption, setCurrentOption] = useState(1);
  const [isShowingLeftBar, setIsShowingLeftBar] = useState(true)
  const [theme, setTheme] = useState(themes.dark);

  const updateDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const updateIsShowingLeftBar = () =>{
    setIsShowingLeftBar(!isShowingLeftBar)
  }
  const changeTheme = () => {
    if(theme == themes.dark) setTheme(themes.light)
      else setTheme(themes.dark)
  }
  const skills = [
    {
      name: "Javascript",
      description:
        "Tive contato com Javascript já a quase dois anos, adquiri bastante experiencia durante este tempo.",
    },
    {
      name: "Typescript",
      description:
        "Comecei a utilizar typescript, assim que inicei o meu primeiro projeto com React Native Cli, nos meus primeiros projetos utilizada o expo.",
    },
    {
      name: "React Native",
      description:
        "Foi o primeiro framework que usei, é o que mais tenho experiência e familiaridade, uso diariamente no trabalho na 'Preço do Gás'.",
    },
    {
      name: "Angular",
      description:
        "Tive vontade de aprender por causa do trabalho, mas depois procurei independente disto, agora estou desenolvendo um pojeto afim de aumentar o conhecimento nesta tecnologia.",
    },
    {
      name: "Tailwind",
      description:
        "Tive o primeiro contato a não muito tempo, mas me adaptei rapidamente e uso em quase todos os meus projetos, inclusive neste Portfólio.",
    },
    {
      name: "React",
      description:
        "Comecei a aprender devido a uma demanda no trabalho, gostei do framework e estou utilizando em projetos pessoais e projetos da faculdade.",
    },

    {
      name: "HTML",
      description:
        "Tive contato ao mesmo tempo que com Javascript e CSS, rapidamente entendi os conceitos por trás.",
    },
    {
      name: "CSS",
      description:
        "Assim como o HTML comecei a usar junto do Javascript, e como tempo fui evoluindo cada vez mais.",
    },
  ];

  return (
    <Context.Provider value={{ isDarkMode, updateDarkMode, currentOption, setCurrentOption, isShowingLeftBar, updateIsShowingLeftBar,skills, theme, changeTheme}}>
      {children}
    </Context.Provider>
  );
};