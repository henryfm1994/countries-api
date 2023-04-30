import { useContext } from "react";
import { CountriesContext } from "./CountriesContext/CountriesContext";

export const CountryDetails = () => {
  const context: {
    countries?: [];
    style?: string;
    details?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setDetails?: any;
  } = useContext(CountriesContext);

  const { countries, style, details, setDetails } = context;

  const country = countries
    ? countries.filter((country: { name: { common: string } }) => {
        return country.name.common === details;
      })
    : [];

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country[0];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bor: any[] = [];

  const getBorders = (borders: string[] | undefined) => {
    if (country[0] && borders) {
      borders.forEach((element: string) => {
        countries?.map((ctr: { cca3: string; name: { common: string } }) => {
          if (ctr.cca3 === element) {
            return bor.push(ctr.name.common);
          }
          return bor;
        });
      });
    } else return (bor[0] = false);
  };

  const { svg } = flags;
  const { common, official } = name;

  const lang = Object.values(languages);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cur: any[] = Object.values(currencies);

  getBorders(borders);

  return (
    <div className="country__details">
      <img
        className="country__details-flag"
        src={svg}
        alt={`{name.common} flag`}
      />
      <div className="country__details-country">
        <div className="country__details-country-lists">
          <ul>
            <li className="country__name">{common}</li>
            <li>
              <span>Native Name:</span> {official}
            </li>
            <li>
              <span>Population:</span> {population}
            </li>
            <li>
              <span>Region:</span> {region}
            </li>
            <li>
              <span>Subregion:</span> {subregion}
            </li>
            <li>
              <span>Capital:</span> {capital}
            </li>
          </ul>
          <ul>
            <li>
              <span>Top Level Domain:</span> {tld[0]}
            </li>
            <li>
              <span>Currencies:</span> {cur[0].name}
            </li>
            <li>
              <span>Languages:</span> {lang.join(", ")}
            </li>
          </ul>
        </div>
        <div className="country__details-borders">
          <span>Border Countries:</span>
          <div
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
          >
            {bor[0]
              ? bor.map((b) => (
                  <div
                    key={b}
                    className={`button ${style}`}
                    onClick={() => setDetails(b)}
                  >
                    {b}
                  </div>
                ))
              : "No borders"}
          </div>
        </div>
      </div>
    </div>
  );
};
