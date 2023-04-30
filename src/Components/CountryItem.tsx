import { useContext } from "react";
import { CountriesContext } from "./CountriesContext/CountriesContext";

export const CountryItem = (country: {
  name: { common: string };
  population: string;
  flags: { svg: string };
  region: string;
  capital: string;
}) => {
  const context: {
    style?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setDetails?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setInput?: any;
  } = useContext(CountriesContext);

  const { style, setDetails, setInput } = context;

  const handleCountry = () => {
    setDetails(country.name.common);
    setInput("");
  };

  return (
    <div className={`country__box ${style}`} onClick={() => handleCountry()}>
      <img src={country.flags.svg} alt="flag" />
      <ul>
        <li className="country__name">{country.name.common}</li>
        <li>
          <span>Population:</span> {country.population}
        </li>
        <li>
          <span>Region:</span> {country.region}
        </li>
        <li>
          <span>Capital:</span> {country.capital}
        </li>
      </ul>
    </div>
  );
};
