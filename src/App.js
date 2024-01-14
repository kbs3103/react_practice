import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import Login from "./component/Login";
import Header from "./layout/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
