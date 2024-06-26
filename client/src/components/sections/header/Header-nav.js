import { NavLink } from "react-router-dom";
import useGetNav from "../../api/useGetNav";
import { URL } from "../../../config";

const HeaderNav = ({ language, fade }) => {
  const navBtns = useGetNav(`${URL}/api/getNav`, language);

  return (
    <nav className="header__nav">
      {navBtns &&
        navBtns.map((el, idx) => (
          <NavLink
            key={idx}
            className={`header__nav-action ${fade ? "fade-out" : ""}`}
            to={`/${el.toLowerCase()}`}
          >
            {el}
          </NavLink>
        ))}
    </nav>
  );
};

export default HeaderNav;
