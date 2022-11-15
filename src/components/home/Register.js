import styled from "styled-components";
import Button from "../button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Loader from "../loading/Loader";
import { api } from "../../services/api";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function register(e) {
    e.preventDefault();
    setLoading(true);

    api
      .post("sign-up", { ...userRegister })
      .then((res) => {
        navigate("/");
        setLoading(false);
        toast.success("Cadastro realizado com sucesso!");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 422) {
          return toast.error("Preencha os dados corretamente!", {
            autoClose: 3000,
          });
        }
        if (err.response.status === 401) {
          return toast.error("As senhas devem ser iguais!", {
            autoClose: 3000,
          });
        }
        toast.error("Ocorreu um erro. Tente novamente!", {
          autoClose: 2500,
        });
      });
  }

  function ChangeInput(e) {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <img src={logo} alt="Logo App" />

      <Form>
        <input
          autocomplete="off"
          type="text"
          placeholder="Nome"
          value={userRegister.name}
          name="name"
          onChange={ChangeInput}
        />
        <input
          autocomplete="off"
          type="email"
          placeholder="E-mail"
          value={userRegister.email}
          name="email"
          onChange={ChangeInput}
        />
        <input
          type="password"
          placeholder="Senha"
          value={userRegister.password}
          name="password"
          onChange={ChangeInput}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={userRegister.passwordConfirm}
          name="passwordConfirm"
          onChange={ChangeInput}
        />

        {loading === false ? (
          <Button
            type={"submit"}
            text={"Cadastrar"}
            destiny={""}
            action={register}
          />
        ) : (
          <Loader />
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
    max-width: 45vh;
    width: 80%;
    height: 45px;
    background: #a328d6;

    border: 1px solid #d5d5d5;

    padding-left: 10px;

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

export default Register;
