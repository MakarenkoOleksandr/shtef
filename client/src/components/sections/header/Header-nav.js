import { NavLink } from "react-router-dom";
import useGetNav from "../../api/useGetNav";

const HeaderNav = ({ language, fade }) => {
  const navBtns = useGetNav(
    "https://shnyrki-552c68a5b166.herokuapp.com/api/getNav",
    language
  );

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
