import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import ua from "../../../img/ua.gif";
import pl from "../../../img/pl.gif";

const HeaderActions = ({ language, setLanguage, fade, setFade }) => {
  const handleChangeLanguage = () => {
    setFade(true);
    setTimeout(() => {
      setLanguage((prevLanguage) => (prevLanguage === "UA" ? "PL" : "UA"));
      setFade(false);
    }, 300);
  };

  return (
    <div className="header__actions-wrap">
      <div className="header__action">
        <FontAwesomeIcon
          className="header__action-item"
          icon={faUser}
          size="2xl"
          style={{ color: "black" }}
        />
      </div>
      <div className="header__action">
        <FontAwesomeIcon
          className="header__action-item"
          icon={faCartShopping}
          size="2xl"
          style={{ color: "black" }}
        />
      </div>
      <div className="header__action" onClick={handleChangeLanguage}>
        <img
          className={`header__action-langimg ${fade ? "fade-out" : ""}`}
          src={language === "UA" ? ua : pl}
          alt="img"
        />
      </div>
    </div>
  );
};

export default HeaderActions;
