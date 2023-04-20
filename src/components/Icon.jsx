import { FaReact, FaAngular, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { SiTypescript, SiJavascript,SiReactquery } from "react-icons/si";

export default function Icon({item}){
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
          return <SiReactquery class="w-14 h-14" color="#4fd1e2" />;
        case "Javascript":
          return <SiJavascript class="w-14 h-14" color="#d1b310" />;
          case "Typescript":
            return <SiTypescript class="w-14 h-14" color="#4292e1" />
      }
}