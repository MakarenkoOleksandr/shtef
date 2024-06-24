import HeaderNav from "./header/Header-nav";
import HeaderLogo from "./header/Header-logo";
import HeaderActions from "./header/Header-actions";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <HeaderLogo />
        <HeaderNav />
        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
