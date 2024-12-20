import css from "./Header.module.css";
import Container from "../Container/Container";
import logo from "../../assets/svg/logo.svg";

import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className={css.header}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Navigation />
      </div>
    </Container>
  );
};

export default Header;
