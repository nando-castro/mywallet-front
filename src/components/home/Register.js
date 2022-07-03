import styled from "styled-components";
import axios from "axios";
import Button from "../button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Register() {
  const API_URL = "http://localhost:5000/sign-up";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setConfirm] = useState("");
  const navigate = useNavigate();
  function Navigate() {
    navigate("/");
  }

  function signup() {
    const body = {
      name: name,
      email: email,
      password: password,
      passconfirm: passconfirm,
    };
    const promise = axios.post(API_URL, body);
    promise
      .then((res) => {
        console.log(res.data);
        Navigate();
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
          placeholder="Nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="text"
          placeholder="Confirme a senha"
          required
          value={passconfirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </Form>
      <div className="button" onClick={signup}>
        Cadastrar
      </div>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
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

    margin-bottom: 6px;

    background: #ffffff;
    border-radius: 5px;

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

export default Register;
