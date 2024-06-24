import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const HeaderActions = () => {
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
    </div>
  );
};

export default HeaderActions;
