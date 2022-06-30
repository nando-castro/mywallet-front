import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Login from "./home/Login";
import Register from "./home/Register";
import Main from "./page/Main";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /* setToken={setToken} */ />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/home" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
