import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "../button/Button";
import logo from "../../assets/img/logo.png";
import { useAuth } from "../../context/auth";
import Loader from "../loading/Loader";

function Login() {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  if (user !== null) {
    navigate("/home");
  }

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function login(e) {
    e.preventDefault();
    setLoading(true);

    const promise = axios.post("http://localhost:5000/sign-in", {
      ...userLogin,
    });
    promise.then((response) => {
      console.log(response.data);
      setUser(response.data);
      setLoading(true);
      navigate("/home");

      const person = {
        name: response.data.name,
        email: response.data.email,
        token: response.data.token,
        saldo: response.data.saldo,
      };
      localStorage.setItem("userLogged", JSON.stringify(person));
    });

    promise.catch((err) => {
      setLoading(false);
    });
  }

  function ChangeInput(e) {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <img src={logo} alt="Logo App" />

      <Form>
        <input
          type="email"
          disabled={loading ? true : false}
          placeholder="E-mail"
          value={userLogin.email}
          name="email"
          onChange={ChangeInput}
        />
        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="Senha"
          value={userLogin.password}
          name="password"
          onChange={ChangeInput}
        />

        {loading === false ? (
          <Button type={"submit"} text={"Entrar"} destiny={""} action={login} />
        ) : (
          <Loader />
        )}
      </Form>

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
    height: 45px;
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
