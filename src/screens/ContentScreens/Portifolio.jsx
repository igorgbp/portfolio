import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import ReminderVid from "../../assets/reminder-vid.mp4";
import Clube_one from "../../assets/clube-1.png";
import Clube_two from "../../assets/clube-2.png";
import Quiz from '../../assets/quiz.png'
import { GeralContext } from "../../context/geral/geralContext";
import { BsFillCalendarWeekFill, BsGit } from "react-icons/bs";
const Portifolio = () => {
  const { isDarkMode } = useContext(GeralContext);
  const theme = useContext(ThemeContext);

  const projs = [
    {
      name: "Reminder",
      media: { type: "vid", content: ReminderVid },
      link: "https://github.com/igorgbp/reminder-2.0",
      tec: "Javascript, React Native e Firebase",
      description:
        "Foi o primeiro projeto que desenvolvi em Javascript, e consequentemente o primerio em React Native, me ajudou muito a entender alguns conceitos e a me familiarizar com npm, componentização, hooks, e muito mais. Utilizei o firebase como banco para o projeto.",
      date: "07/22 - 08/22",
    },
    {
      name: "Clube do livro",
      media: { type: "img", content: [Clube_two, Clube_one]  },
      link: "https://github.com/igorgbp/Clube-do-Livro",
      tec: "HTML, CSS e PHP",
      description:
        "Outro projeto desenvolvido para a faculdade, onde não utilizei nenhum framework, o projeto foi feito apenas com HTML, CSS e Javascript, e PHP no back-end, que neste caso é dentro do mesmo projeto.",
      date: "11/22 - 12/22",
    },
    {
      name: "Quiz",
      media: { type: "img", content: [Quiz] },
      link: "https://github.com/igorgbp/quiz",
      tec: "Javascript e React",
      description:
        "Projeto desenvolvido para um trabalho da faculdade, que consistiu em entender conceitos sobre React.",
      date: "03/22",
    },
   
  ];
 
  const Item = ({ item }) => {
    let images = item.media.content;
    return (
      <div
        class=" mb-8 md:p-7 p-4 rounded-xl"
        style={{ backgroundColor: theme.secondary }}
      >
        <p
          class=" text-xl text-center md:text-start"
          style={{ color: theme.text }}
        >
          {item.name}
        </p>
        <p
          class="text-center md:text-start"
          style={{ color: theme.textSecondary }}
        >
          {" "}
          {item.description}
        </p>
        <div class="mt-4  gap-1 ">
          {item.media.type == "vid" && (
            <video controls className=" mx-auto h-96 ">
              <source src={item.media.content} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          )}
          {item.media.type == "img" &&
            images.map((atual) => {
              return (
                <a href={atual} target="blank">
                  <img
                    src={atual}
                    class="mb-1 rounded-md border-2 border-slate-500"
                  />
                </a>
              );
            })}
        </div>

        <p
          class="mt-2 md:text-start text-center"
          style={{ color: theme.textSecondary }}
        >
          {item.tec}
        </p>
        <div className="flex flex-row items-center gap-2 w-fit md:mx-0 mx-auto mt-2">
          <BsGit size={20} color={theme.textSecondary} />
          <a
            href={item.link}
            target="blank"
            class={` ${
              isDarkMode
                ? "text-blue-300 hover:text-slate-400"
                : "text-blue-950 hover:text-slate-500"
            } `}
          >
            Respositório
          </a>
        </div>
        <div className="flex flex-row items-center gap-2 w-fit md:mx-0 mx-auto mt-1">
          <BsFillCalendarWeekFill size={20} color={theme.textSecondary} />
          <p style={{ color: theme.textSecondary }}>{item.date}</p>
        </div>
      </div>
    );
  };
  return (
    <div class=" flex items-center flex-col">
      <div class="px-4 md:px-0">
        <p
          class="text-center md:text-start text-3xl md:text-5xl font-black"
          style={{ color: theme.text }}
        >
        Portfólio
        </p>
        <p
          class="text-center md:text-start mt-2"
          style={{ color: theme.textSecondary }}
        >
          Bem vindo ao meu portifólio online, aqui você encontra alguns dos meus
          projetos pessoais. Quer ajuda construindo sua aplicação?
        </p>
      </div>
      <div class=" mt-10 w-full">
        {projs.map((item) => {
          return <Item item={item} />;
        })}
      </div>
    </div>
  );
};
export default Portifolio;
