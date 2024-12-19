import css from "./Header.module.css";
import Container from "../Container/Container";
import logo from "../../assets/svg/logo.svg";

import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <Container>
      <div className={css.header}>
        <img src={logo} alt="Logo" />
        <Navigation />
      </div>
    </Container>
  );
};

export default Header;
