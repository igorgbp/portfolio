import { useState } from "react";
import { ThemeProvider } from "./context/theme/themeContext";
import { themeData } from "./context/theme/values";
import { useContext } from "react";
import { GeralContext } from "./context/geral/geralContext";
import Content from "./screens/content";
import Leftbar from "./screens/Leftbar";

function App() {
  const [count, setCount] = useState(0);
  const {isDarkMode}= useContext(GeralContext);
  // const isDarkMode = context.isDarkMode
  // console.log('aqui',isDarkMode.isDarkMode)
  console.log('aquis', isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode?themeData.dark:themeData.light}>
      <div class="flex">
        {/* <p>açsdklfj</p> */}
        <div class="w-1/4 bg-zinc-800">
          <Leftbar />
        </div>
        <div class="w-3/4 border-amber-600 border-2">
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
