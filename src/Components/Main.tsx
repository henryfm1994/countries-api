import { useContext } from "react";
import { CountriesContext } from "./CountriesContext/CountriesContext";
import { Filters } from "./Filters";
import { Countries } from "./Countries";

export const Main = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const context: { theme: string; setTheme: any; style: string } =
    useContext(CountriesContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, setTheme, style } = context;

  return (
    <div className={`main__container ${style}`}>
      <div className="main__container-box">
        <Filters />
        <Countries />
      </div>
    </div>
  );
};
