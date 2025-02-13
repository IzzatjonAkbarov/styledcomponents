import GlobalStyle from ".";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";

const App = () => {
  return (
    <>
      <div>
        <GlobalStyle />

        <FirstPage />
        <br />
        <br />
        <SecondPage />
      </div>
    </>
  );
};

export default App;
