import { useContext } from "react";
import { CountriesContext } from "./CountriesContext/CountriesContext";
import { CountryItem } from "./CountryItem";

export const Countries = () => {
  const context: {
    countries: [];
  } = useContext(CountriesContext);

  const { countries } = context;

  return (
    <div className="countries__container">
      {countries.map((country: { name: { common: string } }) => (
        <CountryItem key={country.name.common} country={country} />
      ))}
    </div>
  );
};
