import { ContextProvider } from "./context/Context";
import MainPage from "./screens/mainPage";
function App() {
  return (
    <ContextProvider>
      <MainPage/>
    </ContextProvider>
  );
}

export default App;
