import { useSelector } from "react-redux";
import "../index.css";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1 className="flex justify-around py-8 text-3xl font-bold underline">아마도 메인화면</h1>
      <p>count = {user.count}</p>
    </div>
  );
}

export default App;
