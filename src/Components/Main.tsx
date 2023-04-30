import { useContext } from "react";
import { CountriesContext } from "./CountriesContext/CountriesContext";
import { Filters } from "./Filters";
import { Countries } from "./Countries";
import { CountryDetails } from "./CountryDetails";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const Main = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const context: { style?: string; details?: string; setDetails?: any } =
    useContext(CountriesContext);

  const { style, details, setDetails } = context;

  return (
    <div className={`main__container ${style}`}>
      <div className="main__container-box">
        {details ? (
          <div
            style={{ width: "6em" }}
            className={`button ${style}`}
            onClick={() => setDetails("")}
          >
            <HiArrowNarrowLeft />
            Atras
          </div>
        ) : (
          <Filters />
        )}

        {details ? <CountryDetails /> : <Countries />}
      </div>
    </div>
  );
};
