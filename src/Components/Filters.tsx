import { HiSearch } from "react-icons/hi";
import { CountriesContext } from "./CountriesContext/CountriesContext";
import { useContext } from "react";

export const Filters = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const context: {
    theme: string;
    setTheme: never;
    style: string;
    countries: [];
    input: string;
    setInput: any;
    setRegion: any;
  } = useContext(CountriesContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, setTheme, style, countries, input, setInput, setRegion } =
    context;

  const classname = theme
    ? { background: "hsl(0, 0%, 100%)", color: "hsl(209, 23%, 22%)" }
    : { background: "hsl(209, 23%, 22%)", color: "hsl(0, 0%, 100%)" };

  // const filteredUsers = () => {
  //   return typeof input === "string" && input.length > 0
  //     ? countries.filter((country) => {
  //         return country.name.common
  //           .toLowerCase()
  //           .includes(input.toLowerCase());
  //       })
  //     : countries;
  // };

  // console.log(input);
  // console.log(filteredUsers());

  return (
    <div className={`filters__container ${style}`}>
      <div className={`filter__input ${style}`}>
        <HiSearch style={{ fontSize: "1.5rem" }} />
        <input
          style={{
            background: "transparent",
            color: theme ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 100%)",
          }}
          type="text"
          autoComplete="false"
          placeholder="Search for country"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className={`filter__regions ${style}`}>
        <select
          name="regions"
          id="regions"
          style={classname}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="" hidden>
            Select by Region
          </option>
          <option className="filter__option" value="Africa">
            Africa
          </option>
          <option className="filter__option" value="Americas">
            Americas
          </option>
          <option className="filter__option" value="Asia">
            Asia
          </option>
          <option className="filter__option" value="Europe">
            Europe
          </option>
          <option className="filter__option" value="Oceania">
            Oceania
          </option>
        </select>
        {/* <HiChevronDown /> */}
      </div>
    </div>
  );
};
