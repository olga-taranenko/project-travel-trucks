import css from "./HomePage.module.css";
import { StyledButton } from "../../components/StyledButton/StyledButton";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <Link to="/catalog">
        <StyledButton>View Now</StyledButton>
      </Link>
    </div>
  );
};

export default HomePage;
