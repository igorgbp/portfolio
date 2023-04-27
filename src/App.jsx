import { useState } from "react";
import { ThemeContext, ThemeProvider } from "./context/theme/themeContext";
import { themeData } from "./context/theme/values";
import { useContext } from "react";
import { GeralContext } from "./context/geral/geralContext";
import Content from "./screens/Content";
import Leftbar from "./screens/LeftBar";

function App() {
  const [count, setCount] = useState(0);
  const { isDarkMode } = useContext(GeralContext);
  // const isDarkMode = context.isDarkMode
  // console.log('aqui',isDarkMode.isDarkMode)
  console.log("aquis", isDarkMode);

  let currentTheme;
  if (isDarkMode) currentTheme = themeData.dark;
  else currentTheme = themeData.light;

  return (
    <ThemeProvider theme={currentTheme}>
      <div class="flex min-h-screen overflow-x-hidden ">
        <aside
          class="fixed w-80  h-full transition-transform -translate-x-full md:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" style={{backgroundColor:currentTheme.primary}}>
            <Leftbar class="" />
          </div>
        </aside>
        <div class=" md:ml-80">
          <div class="p-4  border-gray-200  dark:border-gray-700"style={{backgroundColor:currentTheme.contentPrimary}}>
            <Content />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
