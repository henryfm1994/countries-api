import { useContext } from "react";
import { CountriesContext } from "./CountriesContext/CountriesContext";
import { CountryItem } from "./CountryItem";

export const Countries = () => {
  const context: {
    countries?: [];
  } = useContext(CountriesContext);

  const { countries } = context;

  return (
    <div className="countries__container">
      {countries?.map(
        (
          country: JSX.IntrinsicAttributes & {
            name: { common: string };
            population: string;
            flags: {
              svg: string;
            };
            region: string;
            capital: string;
          }
        ) => (
          <CountryItem key={country.name.common} {...country} />
        )
      )}
    </div>
  );
};
