import GlobalStyle from ".";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import StyledComponents from "./Components/StyledComponents/inedx";

const App = () => {
  return (
    <>
      <div>
        <GlobalStyle />

        <FirstPage />
        <br />
        <br />
        <SecondPage />
        <br />
        <StyledComponents />
      </div>
    </>
  );
};

export default App;
