import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import { FiPaperclip } from "react-icons/fi";
import { AiOutlineMail,AiOutlineLinkedin } from "react-icons/ai";
import { GeralContext } from "../../context/geral/geralContext";

const Contact = () => {
  const { setCurrentOption, skills } = useContext(GeralContext);
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      name: "Email",
      value: "igorgabriel12bq@gmail.com",
      icon: <AiOutlineMail color={theme.text} size={20} />,
    },
    {
      name: "LinkedIn",
      value: "https://www.linkedin.com/in/igorgbp/",
      icon: <FiPaperclip color={theme.text} size={20} />,
    },
    {
      name: "email",
      value: "igorgabriel12bq@gmail.com",
      icon: <FiPaperclip color={theme.text} size={20} />,
    },
  ];

  const Item = ({ item }) => {
    return (
      <div class="flex flex-row items-center gap-2">
        {item.icon}
        <p class="text-l md:text-xl" style={{ color: theme.textSecondary }}>
          {item.name}:
        </p>
        <a
          class="text-l md:text-xl"
          href={item.value}
          style={{ color: theme.text }}
        >
          {" "}
          {contact.value}
        </a>
      </div>
    );
  };
  console.log(theme);
  return (
    <div
      class="  items-center flex-col   mx-auto"
      style={{ height: "100vh" }}
    >
      <div class="px-4 md:px-0">
        <p
          class="text-center md:text-start text-3xl md:text-5xl font-black"
          style={{ color: theme.text }}
        >
          Contato
        </p>
        <p
          class="text-center md:text-start mt-2"
          style={{ color: theme.textSecondary }}
        >
          Estes são meus meios de contato
        </p>
      </div>
      <div class=" mt-10 w-full">
        <div class="flex flex-row items-center gap-2">
          <AiOutlineMail color={theme.text} size={20} />
          <p class="text-l md:text-xl" style={{ color: theme.textSecondary }}>
            Email:
          </p>
          <a class="text-l md:text-xl" style={{ color: theme.text }}>
            {" "}
            igorgabriel12bq@gmail.com
          </a>
        </div>
      </div>
      <div class=" mt-2 w-full ">
        <div class="flex flex-row items-center gap-2">
        <AiOutlineLinkedin color={theme.text} size={20} />
          <p class="text-l md:text-xl " style={{ color: theme.textSecondary }}>
            LinkedIn:
          </p>
          <a class="text-l md:text-xl" style={{ color: theme.text }} href="https://www.linkedin.com/in/igorgbp/">
            {" "}
            Perfil no linkedIn
          </a>
        </div>
      </div>
      
    </div>
  );
};
export default Contact;
