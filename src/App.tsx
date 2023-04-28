import { useEffect, useState } from "react";
import "./App.css";
import { CountriesContext } from "./Components/CountriesContext/CountriesContext";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import {
  getCountries,
  getCountriesByInput,
  getCountriesByRegion,
} from "./helpers/getCountries";

function App() {
  const [theme, setTheme] = useState(true);
  const style = theme ? "light" : "dark";
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("");

  const [countries, setcountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) =>
      setcountries(getCountriesByInput(input, data))
    );
  }, [input]);

  useEffect(() => {
    getCountries().then((data) =>
      setcountries(getCountriesByRegion(region, data))
    );
  }, [region]);

  return (
    <>
      <CountriesContext.Provider
        value={{
          theme,
          setTheme,
          style,
          countries,
          input,
          setInput,
          region,
          setRegion,
        }}
      >
        <div className="app__container">
          <Header />
          <Main />
        </div>
      </CountriesContext.Provider>
    </>
  );
}

export default App;
