import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    <div>
      <p>Welcome, {user.name}! </p>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
