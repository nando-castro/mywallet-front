import styled from "styled-components";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Finance() {
  const { user, saldo, setSaldo } = useAuth();
  const [transation, setTransation] = useState([]);

  const API_URL = "http://localhost:5000/finances";

  useEffect(() => {
    if (user) {
      function getTransation() {
        const promise = axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        promise
          .then((res) => {
            console.log(res.data);
            setTransation(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getTransation();
    }
  }, []);

  function renderFinances() {
    return transation.map((i, index) => (
      <Li key={index}>
        <Data>{i.time}</Data>
        <Text>{i.description}</Text>
        <Value
          style={i.type === "exit" ? { color: "red" } : { color: "green" }}
        >
          {i.value}
        </Value>
      </Li>
    ));
  }

  return (
    <>
      {transation.length !== 0 ? (
        <Content>
          <Div>
            <p>{renderFinances()}</p>
          </Div>
          <Saldo>
            <p>Saldo: </p>
            <p className="value">{saldo}</p>
          </Saldo>
        </Content>
      ) : (
        <Content>
          <p>Não há registros de entrada ou saída</p>
        </Content>
      )}
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

const Div = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  display: flex;

  p {
    width: 100%;
    margin: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Li = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

const Text = styled.p`
  width: 100%;
  overflow: hidden;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;

const Data = styled.p`
  width: 100%;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #c6c6c6;
`;

const Value = styled.p`
  width: 100%;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  color: #cccccc;
`;

const Saldo = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  color: black;

  p {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .value {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Finance;
