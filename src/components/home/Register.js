import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import axios from "axios";
import Button from "../button/Button";

function Register() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    passconfirm: "",
  });

  function signup(e) {
    e.preventDefault();
    setLoading(true);

    const API_URL = "http://localhost:5000/sign-up";

    const promise = axios.post(API_URL, { ...userRegister });
    promise.then((res) => {
      console.log(res.data);
      navigate("/");
      setLoading(false);
    });
    promise.catch((err) => {
      console.log(err);
      setLoading(false);
      //toast.error("E-mail ou senha inválidos!");
    });
  }

  function ChangeInput(e) {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet" />

      <Form>
        <input
          type="text"
          placeholder="Nome"
          value={userRegister.name}
          name="name"
          onChange={ChangeInput}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={userRegister.email}
          name="email"
          onChange={ChangeInput}
        />
        <input
          type="text"
          placeholder="Senha"
          value={userRegister.password}
          name="password"
          onChange={ChangeInput}
        />
        <input
          type="text"
          placeholder="Confirme a senha"
          value={userRegister.passconfirm}
          name="passconfirm"
          onChange={ChangeInput}
        />

        {loading === false ? (
          <Button
            type={"submit"}
            text={"Cadastrar"}
            destiny={""}
            action={signup}
          />
        ) : (
          "carregando"
          //<Loader />
        )}
      </Form>

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
