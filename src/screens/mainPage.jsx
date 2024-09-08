import { useState } from "react";
import { useContext } from "react";
import Content from "./Content";
import Leftbar from "./infoModal";
import user from "../assets/igorpic2.png";
import usert from "../assets/igorpic3.png";

import { GoThreeBars } from "react-icons/go";
import { Context } from "../context/Context";
import { TbInnerShadowBottom } from "react-icons/tb";
import { BsMoonFill, BsSunFill } from "react-icons/bs";


function MainPage() {
    const [width, setWidth] = useState(window.innerWidth);
    const { isDarkMode, isShowingLeftBar, updateIsShowingLeftBar, theme, smallScreen, setSmallScreen, changeTheme } =
        useContext(Context);
    // let currentTheme;
    // if (isDarkMode) currentTheme = theme;
    // else currentTheme = theme;

    const handleResize = () => {
        if (isShowingLeftBar) {
            if (window.innerWidth < 768) return updateIsShowingLeftBar();
        } else if (window.innerWidth > 768) return updateIsShowingLeftBar();
        //////////
        if (window.innerWidth < 768) setSmallScreen(true); else setSmallScreen(false)
    };
    window.addEventListener("resize", handleResize);

    return (
        <div
            class="flex h-screen"
            style={{ backgroundColor: theme.contentPrimary }}>
            {!isShowingLeftBar && (
                <button onClick={updateIsShowingLeftBar} className=" rounded-full w-12 h-12 fixed top-8 left-4 bg-black bg-opacity-50 transition ease-in-out hover:scale-110">
                    <img
                        src={isDarkMode ? user : usert}
                        alt="Igor Pereira"
                        class="rounded-full  object-contain"
                    />
                </button>)}
            {smallScreen && (
                <button
                onClick={() => changeTheme()}
                className=" rounded-full w-12 h-12 p-0.5 absolute top-8 right-4 bg-black bg-opacity-40 transition ease-in-out hover:scale-110 group" 
        >
          {isDarkMode ? (
            <BsSunFill color={'#ffd16e'} className="mx-auto group-hover:animate-spin-slow animate-spin-super-slow" size={24}/>
          ) : (
            <BsMoonFill color={'#bdb9f1'} className="mx-auto animate-wiggle-slow group-hover:animate-wiggle" size={24} />
          )}

              </button>
            )}
            {isShowingLeftBar && (<div class=' px-4 md:pr-0 lg:pl-8 xl:pl-12 2xl:pl-20 py-6 xl:pt-16 pt-12'><Leftbar /></div>)}
            {smallScreen && isShowingLeftBar ? <div></div> : <div class='h-screen overflow-auto '> <Content /></div>}

        </div>

    );
}

export default MainPage;
