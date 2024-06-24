import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="header__nav">
      <NavLink className="header__nav-action" to="/about">
        About
      </NavLink>
      <NavLink className="header__nav-action" to="/contacts">
        Contacts
      </NavLink>
      <NavLink className="header__nav-action" to="/contacts">
        Categories
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
