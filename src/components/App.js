import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Exit from "./control/Exit";
import Post from "./control/Post";
import PutExit from "./control/PutExit";
import PutPost from "./control/PutPost";
import Login from "./home/Login";
import Register from "./home/Register";
import Main from "./page/Main";


function App() {

  const [token, setToken] = useState('');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/home" element={<Main />} />
        <Route path="/add" element={<Post />} />
        <Route path="/remove" element={<Exit />} />
        <Route path="/atualiza-entrada" element={<PutPost />} />
        <Route path="/atualiza-saida" element={<PutExit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
