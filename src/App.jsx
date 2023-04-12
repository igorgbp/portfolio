import { useState } from "react";
import { ThemeContext, ThemeProvider } from "./context/theme/themeContext";
import { themeData } from "./context/theme/values";
import { useContext } from "react";
import { GeralContext } from "./context/geral/geralContext";
import Content from "./screens/content";
import Leftbar from "./screens/Leftbar";

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
      <div class="flex" style={{height: '100vh'}}>
        {/* <p>açsdklfj</p> */}
        <div class="w-1/4" style={{backgroundColor:currentTheme.primary}}>
          <Leftbar />
        </div>
        <div class="w-3/4 h-auto"style={{backgroundColor:currentTheme.contentPrimary}}>
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
