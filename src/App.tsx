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
import { APICountry } from "./types";

function App() {
  const [theme, setTheme] = useState(true);
  const style = theme ? "light" : "dark";
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("");
  const [details, setDetails] = useState("");

  const [countries, setcountries] = useState<APICountry[]>([]);

  useEffect(() => {
    getCountries().then((data) => {
      const test = getCountriesByRegion(region, data);

      setcountries(getCountriesByInput(input, test));
    });
  }, [input, region]);

  // useEffect(() => {
  //   const filteredCountry = [...countries];
  //   // getCountries().then((data) =>
  //   setcountries(getCountriesByInput(input, filteredCountry));
  // }, [countries, input]);

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
          details,
          setDetails,
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
