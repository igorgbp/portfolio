import { useEffect, useState } from "react";
import { ThemeContext, ThemeProvider } from "./context/theme/themeContext";
import { themeData } from "./context/theme/values";
import { useContext } from "react";
import { GeralContext } from "./context/geral/geralContext";
import Content from "./screens/Content";
import Leftbar from "./screens/LeftBar";

import {GoThreeBars} from "react-icons/go";


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const { isDarkMode, isShowingLeftBar, updateIsShowingLeftBar } =
    useContext(GeralContext);
  // const isDarkMode = context.isDarkMode
  // console.log('aqui',isDarkMode.isDarkMode)
  console.log("aquis", isShowingLeftBar);

  let currentTheme;
  if (isDarkMode) currentTheme = themeData.dark;
  else currentTheme = themeData.light;

  const handleResize = () => {
    if (isShowingLeftBar) {
      if (window.innerWidth < 768) return updateIsShowingLeftBar();
    } else if (window.innerWidth > 768) return updateIsShowingLeftBar();
  };

  window.addEventListener("resize", handleResize);

  return (
    <ThemeProvider theme={currentTheme}>
      <div
        class="flex "
        style={{ backgroundColor: currentTheme.contentPrimary }}
      >
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
              <button onClick={() => updateIsShowingLeftBar()}><GoThreeBars size={40} className="text-gray-500 hover:text-slate-600"/></button>
            </div>
          )}

          <div class="px-4  md:ml-8 ">
            <Content />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
