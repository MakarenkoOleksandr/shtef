import logo from "../../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap"></div>
        <div className="footer__socials">
          <FontAwesomeIcon
            className="footer__social"
            icon={faInstagram}
            size="2xl"
            color={{ color: "black" }}
          />
          <FontAwesomeIcon
            className="footer__social"
            icon={faFacebook}
            size="2xl"
            color={{ color: "black" }}
          />
          <FontAwesomeIcon
            className="footer__social"
            icon={faXTwitter}
            size="2xl"
            color={{ color: "black" }}
          />
        </div>
        <div className="footer__rights">© All rights reserved BLA BLA BLA</div>
      </div>
    </footer>
  );
};

export default Footer;
