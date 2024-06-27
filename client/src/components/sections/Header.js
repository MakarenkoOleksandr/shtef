import HeaderNav from "./header/Header-nav";
import HeaderLogo from "./header/Header-logo";
import HeaderActions from "./header/Header-actions";

const Header = ({ language, setLanguage, fade, setFade }) => {
  return (
    <header className="header">
      <div className="header-wrap">
        <HeaderLogo />
        <HeaderNav language={language} fade={fade} />
        <HeaderActions
          language={language}
          setLanguage={setLanguage}
          fade={fade}
          setFade={setFade}
        />
      </div>
    </header>
  );
};

export default Header;
