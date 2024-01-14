import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSliceactions } from "../redux/user";
import { useNavigate } from "react-router-dom";

const App = () => {
  // 권장하지 않음 되도록 피하기
  // 해야만 한다면 의존관계 확실히 하기
  // const Test2 = useCallback((e) => {
  //   return <div>123</div>;
  // }, []);

  const test = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [id, setId] = useState("");
  // const [pwd, setPwd] = useState("");

  const [userInput, setUserInput] = useState({ id: "", pwd: "" });

  // const idChange = (e) => setId(e.target.value);
  // const pwdChange = (e) => setPwd(e.target.value);

  // setState 콜백할때 원자성 보장
  // 다른 setState하면 안됨
  const idChange = (e) =>
    setUserInput((v) => {
      v.id = e.target.value;
      return { ...v };
    });
  const pwdChange = (e) => setUserInput({ id: userInput.id, pwd: e.target.value });

  const LoginFunc = useCallback(
    (e) => {
      e.preventDefault();
      if (userInput.id === "ssafy" && userInput.pwd === "ssafy") {
        dispatch(userSliceactions.login({ id: userInput.id, pwd: userInput.pwd }));
        navigate("/");
      } else {
        alert("아이디나 비번이 잘못되었습니다.");
      }
    },
    [dispatch, navigate, userInput.id, userInput.pwd]
  );

  /*
  // 
  useEffect(
    (e) => {
      console.log(userInput.id);
      console.log(userInput.pwd);
    },
    [userInput.id, userInput.pwd]
  );

  // 배치(?)의 범위가 달라짐
  const userId = useMemo(
    (e) => {
      return userInput.id + "1";
    },
    [userInput.id]
  );

  const LoginFunc2 = (e) => {
    e.preventDefault();
    // console.log(`${id}`);
    // console.log(`${pwd}`);
    if (userInput.id === "ssafy" && userInput.pwd === "ssafy") {
      // navigate("/");
      dispatch(userSliceactions.login({ id: userInput.id, pwd: userInput.pwd, count: test.count }));
    } else {
      alert("아이디나 비번이 잘못되었습니다.");
    }
  };
  */
  return (
    <div>
      <form onSubmit={LoginFunc}>
        <div>
          <label>id</label>
          <input id="id" name="id" type="id" value={userInput.id} onChange={idChange} required />
        </div>

        <div>
          <label>password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={userInput.pwd}
            onChange={pwdChange}
            required
          />
        </div>

        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
      <div>{test.count}</div>
      {/* {Test2()} */}
    </div>
  );
};

export default App;
