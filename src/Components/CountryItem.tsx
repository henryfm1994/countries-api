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
  } = useContext(CountriesContext);

  const { style } = context;

  return (
    <div className={`country__box ${style}`}>
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
