import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../button/Button";
import logo from "../../assets/img/logo.png";
import { useAuth } from "../../context/auth";
import Loader from "../loading/Loader";
import { api } from "../../services/api";
import { toast } from "react-toastify";

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

    api
      .post("sign-in", { ...userLogin })
      .then((response) => {
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
        toast.success("Login realizado!", {
          autoClose: 2500,
        });
      })

      .catch((err) => {
        toast.error("Dados incorretos!", {
          autoClose: 3000,
        });
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
          autocomplete="off"
          type="email"
          disabled={loading ? true : false}
          placeholder="E-mail"
          value={userLogin.email}
          name="email"
          onChange={ChangeInput}
        />
        <input
          autocomplete="off"
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
    max-width: 45vh;
    width: 80%;
    height: 45px;
    background: #a328d6;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;

    padding-left: 10px;

    background: #ffffff;

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

export default Login;
