import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";

function PutPost() {
  const { user, id, data } = useAuth();
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  function handleAdd() {
    const body = {
      value: parseFloat(value.replace(",", ".")).toFixed(2),
      description: text,
      type: "add",
    };

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    api
      .put(`finances/${id}`, body, config)
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Poster>
        <h1>Editar Entrada</h1>
        <Form>
          <input
            type="text"
            placeholder={id !== null ? data.value : "Valor"}
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="text"
            placeholder={id !== null ? data.text : "Descrição"}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="button" onClick={handleAdd}>
            Atualizar entrada
          </div>
        </Form>
      </Poster>
    </>
  );
}

const Poster = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #8c11be;

  h1 {
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }

  input {
    width: 326px;
    height: 58px;

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

    margin-top: 10px;
  }

  input::placeholder {
    padding-left: 10px;
  }

  .button {
    width: 326px;
    height: 46px;
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

    margin-top: 10px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  top: 100px;
`;

export default PutPost;
