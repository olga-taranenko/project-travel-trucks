import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx(css.navLink, isActive && css.navLinkActive)
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          clsx(css.navLink, isActive && css.navLinkActive)
        }
      >
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
