import React, { useContext }  from "react";
import AboutMe from "./ContentScreens/AboutMe";
import Portifolio from "./ContentScreens/Portifolio";
import Contact from "./ContentScreens/Contact";
import { GeralContext } from "../context/geral/geralContext";

const Content = () => {
  const {currentOption} = useContext(GeralContext)
  console.log('current e tals',currentOption);

  return (
    <div class="py-10">
     { currentOption == 1 && <AboutMe/>}
     { currentOption == 2 && <Portifolio/>}
     { currentOption == 3 && <Contact/>}
    </div>
    
  );
};

export default Content;
