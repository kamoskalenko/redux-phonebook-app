import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.container}>
      <p className={s.username}>Hi {user.name}! Welcome on board!</p>
      <button type="button" onClick={handleLogout} className={s.button}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
