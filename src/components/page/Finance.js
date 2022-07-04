import styled from "styled-components";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { useEffect } from "react";

function Finance() {
  const { user, setEntrada } = useAuth();

  const API_URL = "http://localhost:5000/finances";
  /* function handleFinances() {

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const promise = axios.get(API_URL, config);

    promise
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } */

/*   useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(API_URL, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []); */

  return (
    <>
      <Content>
        <p>Não há registros de entrada ou saída</p>
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 326px;
  height: 63%;
  margin-bottom: 20px;
  margin-top: -40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;

  background: #ffffff;
  border-radius: 5px;

  p {
    width: 180px;
    height: 46px;
  }
`;

export default Finance;
