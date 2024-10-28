import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./HomePage.module.css";
import backgroundImage from "../../assets/images/bg.png";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Parallax bgImage={backgroundImage} strength={300}>
      <div className={s.container}>
        <h1 className={s.title}>Welcome to Phonebook App</h1>
        <p className={s.subtitle}>Manage your contacts easily and securely</p>
        <Link to={isLoggedIn ? "/contacts" : "/register"} className={s.button}>
          {isLoggedIn ? "Go to Contacts" : "Get Started"}
        </Link>
      </div>
    </Parallax>
  );
}
