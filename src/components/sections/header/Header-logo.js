import { NavLink } from "react-router-dom";
import logo from "../../../img/logo.svg";

const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <NavLink className="header__logo-action" to="/">
        <img className="header__logo-img" src={logo} alt="logo"></img>
      </NavLink>
    </div>
  );
};

export default HeaderLogo;
