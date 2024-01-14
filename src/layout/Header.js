import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSliceactions } from "../redux/user";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const check = useSelector((state) => state.user.count);
  const out = () => {
    dispatch(userSliceactions.logout());
    navigate("/");
  };

  return (
    <div className="flex justify-around">
      <Link to="/">Home</Link>
      headertest
      {check === -1 ? (
        <Link to="/login">
          <button>로그인</button>
        </Link>
      ) : (
        <button onClick={out}>로그아웃</button>
      )}
    </div>
  );
};

export default Header;
