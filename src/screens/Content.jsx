import React, { useEffect, useState } from "react";
import { useContext, useRef } from "react";
import aboutMePic from "../assets/igor.png";
import { MdContacts } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import Icon from "../components/Icon";
import flutuante from "../assets/und3.png";
import flutuantet from "../assets/und4.png";
import pdg from "../assets/pdg-blocs.png";

import tela_direita from "../assets/pdg/tela_direita.png";
import tela_esquerda from "../assets/pdg/tela_esquerda.png";
import tela_centro from "../assets/pdg/tela_centro.png";
import square1 from "../assets/pdg/square1.png";
import square2 from "../assets/pdg/square2.png";
import square3 from "../assets/pdg/square3.png";
import pv_game from "../assets/planet_vortex/game.png";
import pv_menu from "../assets/planet_vortex/menu.png";
import pv_ranking from "../assets/planet_vortex/ranking.png";
import pa_centro from "../assets/procuraqui/pa_centro3.png";
import pa_direita from "../assets/procuraqui/pa_direita.png";
import pa_esquerda from "../assets/procuraqui/pa_esquerda.png";




import { Context } from "../context/Context";
import { skills } from "../data/skills";

const Content = () => {
  const { setCurrentOption, theme, updateIsShowingLeftBar, isDarkMode } = useContext(Context);
  const currentTheme = theme;
  console.log(currentTheme);


  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();


  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);



  function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
      }
      );

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }


  return (
    //screen
    <div class="  flex-col p-4 pl:6 md:pl-10 xl:pl-16">
      <div class="flex space-x-6 lg:pr-10 pr-0 xl:pr-32 2xl:pr-44">
        <div class="xl:pt-12 pt-8 " style={{ width: '100%' }}>
          <p class=" text-3xl md:text-5xl font-black mx-auto md:mx-0 w-fit" style={{ color: currentTheme.text }}>
            Igor Pereira
          </p>
          <p
            class=" text-xl md:text-2xl font-bold mt-1 mx-auto md:mx-0 w-fit"
            style={{ color: currentTheme.textSecondary }}
          >
            Desenvolvedor Mobile
          </p>
          <p class="mt-4 text-center md:text-start" style={{ color: currentTheme.textSecondary }}>
            Sou desenvolvedor mobile, atualmente focado em Flutter. Sou formado em Sistemas de Informação pelo Instituto Federal de Minas Gerais onde tive o primeiro contato com programação no geral. Tenho quase três anos de experiência com desenvolvimento mobile, meus maiores projetos desenvolvi em flutter, que é a tecnologia que foco hoje em dia e a que mais me aprofundei, além disso tive um período de experiência com React Native.
          </p>
          <p class="mt-4 text-center md:text-start" style={{ color: currentTheme.textSecondary }}>
            Usando flutter tenho experiência com Bloc, APIs de localização do google, além da integração com serviços do Firebase como Crashlytics, Push notifications e Firestore. Participei do desenvolvimento de ao menos 3 projetos usando Flutter, além dos projetos pessoais. Usando React Native tive experiências tanto com React Native cli quanto com Expo, onde também utilizei tecnologias como Firebase e Apis de localização do Google, além de Redux para gerenciamento de estado.
          </p>

        </div>
        <img
          src={isDarkMode ? flutuante : flutuantet}
          class=" object-contain lg:flex hidden md:pt-12 pt-6 "
          style={{ width: '50%' }}
        />
      </div>
      <p class=" text-3xl md:text-4xl font-black mx-auto md:mx-0 w-fit  mt-8 lg:mt-6 xl:mt-8" style={{ color: currentTheme.text }}>
        Principais trabalhos
      </p>
      <div className="lg:pr-16 pr-0 mt-4">
        <p
          class=" text-xl md:text-2xl font-bold mt-1 mx-auto md:mx-0 w-fit"
          style={{ color: currentTheme.textSecondary }}
        >
          Aplicativo Preço do Gás
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          Meu principal trabalho até o momento foi na Preço do Gás, onde desenvolvi um aplicativo em que os clientes podem comprar gás de cozinha. Tenho muito orgulho desse trabalho, não apenas porque o desenvolvi do zero, escrevendo praticamente todas as linhas de código, mas também porque ele se tornou o principal ponto de acesso dos clientes à empresa, com mais de <span className="font-bold text-lg" style={{ color: theme.text }}>1 milhão de downloads</span>. Além disso foi uma experiência e tanto desenvolver uma aplicação que é usando por tanta gente em todo o Brasil. Participei também do processo de deploy na App Store e na Play Store.
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          <span class="font-bold " style={{ color: currentTheme.text }}>Disponível em</span>: <a class="mt-2 text-center md:text-start text-md underline" style={{ color: currentTheme.link }} href="https://play.google.com/store/apps/details?id=br.com.precodogas&hl=pt_BR" target="_blank">Play store</a> e <a class="mt-2 text-center md:text-start text-md underline" style={{ color: currentTheme.link }} href="https://apps.apple.com/br/app/pre%C3%A7o-do-g%C3%A1s/id1457067935" target="_blank">App Store</a>
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          <span class="mt-2 text-center md:text-start text-md font-bold" style={{ color: theme.text }}> Tecnologias utilizadas: </span>Flutter, Bloc e Firebase.
        </p>

        <div
          className="xl:w-3/5 lg:w-3/4 w-full relative h-auto h-calc-w group mt-4" ref={ref1}>
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:translate-x-0 duration-200 ${isVisible1 ? "translate-y-0 translate-x-0" : "translate-y-14 -translate-x-8"}`} src={square3} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-105 group-hover:-translate-x-6 duration-400 ${isVisible1 ? "translate-x-0" : "-translate-x-16"}`} src={square2} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:-translate-x-5 duration-430 ${isVisible1 ? "translate-x-0" : "translate-x-14"}`} src={square1} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:-translate-x-3 duration-200 ${isVisible1 ? "translate-x-0" : "-translate-x-14"}`} src={tela_esquerda} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-125 group-hover:-translate-y-4 duration-400 ${isVisible1 ? "translate-x-0" : " translate-x-10"}`} src={tela_centro} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:translate-x-3 duration-400 ${isVisible1 ? "translate-x-0" : "translate-x-14"}`} src={tela_direita} alt="" />
        </div>
      </div>

      <div className="lg:pr-16 pr-0 mt-12">
        <p
          class=" text-xl md:text-2xl font-bold mt-1 mx-auto md:mx-0 w-fit"
          style={{ color: currentTheme.textSecondary }}
        >
          Planet Vortex
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          Planet vortex é um game que venho desenvolvendo há algum tempo. Sempre quis desenvolver algum tipo de jogo, e quando soube de um motor gráfico no Flutter, fui pesquisar mais a fundo e comecei experimentar. Criei todos os assets do jogo no photoshop e usei audios livres de copyright que encontrei online. Atualmente o jogo tem uma versão de testes que foi distribuída para alguns poucos usuários. A partir disso, coletei informações e estou trabalhando em melhorias de layout, jogabilidade e desempenho para publicar uma versão oficial na Play Store.
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          <span class="font-bold" style={{ color: currentTheme.text }}>Versão beta disponível em</span>: <a class="mt-2 text-center md:text-start text-md underline" style={{ color: currentTheme.link }} href="https://drive.google.com/file/d/1JOa72ED-Stafx7Ns1x3cyNjtdSRZ_Ifn/view?usp=sharing" target="_blank">Drive</a>
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          <span class="mt-2 text-center md:text-start text-md font-bold" style={{ color: theme.text }}> Tecnologias utilizadas: </span>Flutter, Flame Engine e Firebase.
        </p>
        <div
          className="xl:w-3/5 lg:w-3/4 w-full relative h-auto h-calc-w group mt-4" ref={ref2}>
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:translate-x-0 duration-200 ${isVisible2 ? "translate-y-0 translate-x-0" : "translate-y-14 -translate-x-8"}`} src={square3} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-105 group-hover:-translate-x-6 duration-400 ${isVisible2 ? "translate-x-0" : "-translate-x-16"}`} src={square2} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:-translate-x-5 duration-430 ${isVisible2 ? "translate-x-0" : "translate-x-14"}`} src={square1} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:-translate-x-3 duration-200 ${isVisible2 ? "translate-x-0" : "-translate-x-14"}`} src={pv_menu} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-125 group-hover:-translate-y-4 duration-400 ${isVisible2 ? "translate-x-0" : " translate-x-10"}`} src={pv_game} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:translate-x-3 duration-400 ${isVisible2 ? "translate-x-0" : "translate-x-14"}`} src={pv_ranking} alt="" />
        </div>
      </div>

      <div className="lg:pr-16 pr-0 mt-12">
        <p
          class=" text-xl md:text-2xl font-bold mt-1 mx-auto md:mx-0 w-fit"
          style={{ color: currentTheme.textSecondary }}
        >
          ProcurAqui
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          ProcurAqui é um projeto inicialmente pensado para um trabalho de conclusão de curso, foi realizado junto a um colega de faculdade. Posteriormente a ideia se desenvolveu como um empreendimento para além da universidade. Consistem em um aplicativo que foca em melhorar a busca por informação a cerca de profissionais, estabelecimentos e orgãos públicos, na cidade de São João Evangeslita. No aplicativo o usuário encontra uma lista de contatos com diversas informações como endereço, meios de contato, e avaliações. Além disso qualquer pessoa que tenha conta no aplicativo pode cadastrar seu próprio negócio, tendo informações sobre engajamento dos usuários e avaliações. Após a apresentação e aprovação do projeto na faculdade, iniciamos o desenvolvimento da versão final, o que se segue até o momento.
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          <span class="font-bold" style={{ color: currentTheme.text }}>Vídeo demonstrativo da primeira versão da aplicação disponível em</span>: <a class="mt-2 text-center md:text-start text-md underline" style={{ color: currentTheme.link }} href="https://www.youtube.com/watch?v=hirUK43gZ2I" target="_blank">Youtube</a>
        </p>
        <p class="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          <span class="mt-2 text-center md:text-start text-md font-bold" style={{ color: theme.text }}> Tecnologias utilizadas: </span>React Native e Firebase.
        </p>
        <div
          className="xl:w-3/5 lg:w-3/4 w-full relative h-auto h-calc-w group mt-4" ref={ref3}>
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:translate-x-0 duration-200 ${isVisible3 ? "translate-y-0 translate-x-0" : "translate-y-14 -translate-x-8"}`} src={square3} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-105 group-hover:-translate-x-6 duration-400 ${isVisible3 ? "translate-x-0" : "-translate-x-16"}`} src={square2} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:-translate-x-5 duration-430 ${isVisible3 ? "translate-x-0" : "translate-x-14"}`} src={square1} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:-translate-x-3 duration-200 ${isVisible3 ? "translate-x-0" : "-translate-x-14"}`} src={pa_esquerda} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-125 group-hover:-translate-y-4 duration-400 ${isVisible3 ? "translate-x-0" : " translate-x-10"}`} src={pa_centro} alt="" />
          <img className={`absolute h-max object-contain transition-transform ease-in group-hover:scale-110 group-hover:translate-x-3 duration-400 ${isVisible3 ? "translate-x-0" : "translate-x-14"}`} src={pa_direita} alt="" />
        </div>
      </div>

      <div className="lg:pr-16 pr-0 mt-28 mb-40  bg-opacity-50 inline-block px-10 py-6 rounded-lg" style={{background: currentTheme.primary}}>
        <p className="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          Desenvolvi este porfólio usando React e Tailwind
        </p>
        <p className="mt-2 text-center md:text-start text-md" style={{ color: currentTheme.textSecondary }}>
          Além de programar, ás vezes faço algumas artes que podem ser conferidas em <a className="underline" style={{ color: currentTheme.link }} href="https://www.instagram.com/nobodyartt/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </div>

    </div>
  );
};
export default Content;
