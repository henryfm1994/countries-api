import { useContext } from "react";
import { CountriesContext } from "./CountriesContext/CountriesContext";
import { Filters } from "./Filters";
import { Countries } from "./Countries";

export const Main = () => {
  const context: { style?: string } = useContext(CountriesContext);

  const { style } = context;

  return (
    <div className={`main__container ${style}`}>
      <div className="main__container-box">
        <Filters />
        <Countries />
      </div>
    </div>
  );
};
