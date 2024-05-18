import { useState } from "react";
import { useContext } from "react";
import Content from "./Content";
import Leftbar from "./infoModal";

import { GoThreeBars } from "react-icons/go";
import { Context } from "../context/Context";


function MainPage() {
    const [width, setWidth] = useState(window.innerWidth);
    const { isDarkMode, isShowingLeftBar, updateIsShowingLeftBar, theme } =
        useContext(Context);

    let currentTheme;
    if (isDarkMode) currentTheme = theme;
    else currentTheme = theme;

    const handleResize = () => {
        if (isShowingLeftBar) {
            if (window.innerWidth < 768) return updateIsShowingLeftBar();
        } else if (window.innerWidth > 768) return updateIsShowingLeftBar();
    };
    window.addEventListener("resize", handleResize);

    return (
        <div
            class="flex "
            style={{ backgroundColor: currentTheme.contentPrimary }}>
            {isShowingLeftBar && (
                <aside class="fixed w-80  h-full " aria-label="Sidebar">
                    <div
                        class={`h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800`}
                        style={{ backgroundColor: currentTheme.primary }}
                    >
                        <Leftbar class="" />
                    </div>
                </aside>
            )}
            <div
                class={`${isShowingLeftBar && "md:ml-80"} `}
            >
                {!isShowingLeftBar && (
                    <div class=" absolute left-4 top-9">
                        <button onClick={() => updateIsShowingLeftBar()}><GoThreeBars size={40} className="text-gray-500 hover:text-slate-600" /></button>
                    </div>
                )}

                <div class="px-4  md:ml-8 ">
                    <Content />
                </div>
            </div>
        </div>

    );
}

export default MainPage;
