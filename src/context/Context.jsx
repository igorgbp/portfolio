import React, { createContext, useState } from 'react';
import { themes } from './themes';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentOption, setCurrentOption] = useState(1);
  const [isShowingLeftBar, setIsShowingLeftBar] = useState(true)
  const [theme, setTheme] = useState(themes.dark);
  const [smallScreen, setSmallScreen] = useState(false)

  const updateDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const updateIsShowingLeftBar = () =>{
    setIsShowingLeftBar(!isShowingLeftBar)
  }
  const changeTheme = () => {
    if(theme == themes.dark){ setTheme(themes.light); setIsDarkMode(false);}
      else {setTheme(themes.dark); setIsDarkMode(true)}
  }
  
  return (
    <Context.Provider value={{ isDarkMode, updateDarkMode, currentOption, setCurrentOption, isShowingLeftBar, updateIsShowingLeftBar, theme, changeTheme, smallScreen, setSmallScreen}}>
      {children}
    </Context.Provider>
  );
};