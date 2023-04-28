import { useContext } from "react";
import { CountriesContext } from "./CountriesContext/CountriesContext";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const context: { theme?: string; setTheme?: any; style?: string } =
    useContext(CountriesContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, setTheme, style } = context;

  return (
    <div className={`header__container ${style}`}>
      <div className="header__container-box">
        <div className="header__title">Where in the world?</div>
        <div className="header__mode" onClick={() => setTheme(!theme)}>
          {theme ? <HiOutlineMoon /> : <HiMoon />}
          Dark Mode
        </div>
      </div>
    </div>
  );
};
