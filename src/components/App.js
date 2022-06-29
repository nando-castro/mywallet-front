import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Login from "./home/Login";
import Register from "./home/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /* setToken={setToken} */ />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
