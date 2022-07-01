import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import { useAuth } from '../../context/auth.js';
import axios from "axios";
import Button from "../button/Button";

function Login({setToken}) {
  const API_URL = "http://localhost:5000/sign-in";

 /*  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();

  if (user !== null) {
    navigate("/home");
  }

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function signin(e) {
    e.preventDefault();
    setLoading(true);

    const promise = axios.post(
      API_URL,
      { ...userLogin }
    );
    promise.then((response) => {
      navigate("/home");
      setLoading(false);
      setUser(response.data);

      const person = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        image: response.data.image,
        token: response.data.token,
      };
      localStorage.setItem("userLogged", JSON.stringify(person));
    });
    promise.catch((err) => {
      setLoading(false);
      //toast.error("Email ou senha inválidos!");
    });
  }

  function ChangeInput(e) {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet" />

      <Form>
        <input
          type="email"
          placeholder="E-mail"
          value={userLogin.email}
          name="email"
          onChange={ChangeInput}
        />
        <input
          type="password"
          placeholder="Senha"
          value={userLogin.password}
          name="password"
          onChange={ChangeInput}
        />

        {loading === false ? (
          <Button type={"submit"} text={"Entrar"} destiny={""} action={signin} />
        ) : (
          'carregando'
          //<Loader />
        )}
      </Form>
      <Link to="/sign-up">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
      <ToastContainer limit={1} />
    </Container>
  ); */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignIn() {
    const body = {
      email: email,
      password: password,
    };

    const promise = axios.post(API_URL, body);

    promise
      .then((res) => {
        console.log(res.data);
        setToken(res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet" />
      <Form>
        <input
          type="text"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>
      <div className="button" onClick={handleSignIn}>
        Entrar
      </div>
      <Link to="/sign-up">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #8c11be;

  img {
    width: 147px;
    height: 50px;
    margin-bottom: 32px;
  }

  input {
    width: 80%;
    height: 45px;
    background: #a328d6;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;

    background: #ffffff;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }

  input::placeholder {
    padding-left: 10px;
  }

  .button {
    width: 80%;
    heigth: 45px;
    padding: 10px;
    text-align: center;

    background: #a328d6;
    border-radius: 5px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }

  p {
    margin-top: 20px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #ffffff;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Login;
