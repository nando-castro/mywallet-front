import styled from "styled-components";
import { useAuth } from "../../context/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

function Finance() {
  const { user } = useAuth();
  const [transations, setTransations] = useState([]);

  const navigate = useNavigate();

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    async function getTransations() {
      await api
        .get("finances", CONFIG)
        .then((res) => {
          setTransations(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTransations();
    // eslint-disable-next-line
  }, []);

  function getBalance() {
    if (transations.length > 0) {
      return transations.reduce((previous, current) => {
        if (current.type === "add") {
          return previous + current.value;
        }

        return previous - current.value;
      }, 0);
    } else {
      return 0;
    }
  }

  const balance = getBalance();

  function editValues() {
    if (transations.type === "add") {
      navigate("/put-add");
    } else {
      navigate("/put-exit");
    }
  }

  function renderFinances() {
    return transations.map((i) => (
      <Li key={i.id} onClick={editValues}>
        <Date>{i.time}</Date>
        <Text>{i.description}</Text>
        <Value
          style={
            i.type === "exit" ? { color: "#C70000" } : { color: "#03AC00" }
          }
        >
          {i.value}
        </Value>
      </Li>
    ));
  }

  return (
    <>
      {user && transations.length > 0 ? (
        <Container>
          <Content>{renderFinances()}</Content>
          <BalanceContent>
            <p>SALDO</p>
            {balance}
          </BalanceContent>
        </Container>
      ) : (
        <Container>
          <WarningBalance>
            <p>Não há registros de entrada ou saída</p>
          </WarningBalance>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  margin-top: 80px;
  margin-bottom: 140px;
`;

const Content = styled.div`
  width: 90%;
  height: 95%;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #868686;

  background: #ffffff;
  border-radius: 5px 5px 0 0;
`;

const WarningBalance = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: #868686;

  background: #ffffff;
  border-radius: 5px;
`;

const BalanceContent = styled.div`
  width: 90%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 5px;

  text-align: right;

  border-radius: 0 0 5px 5px;

  p {
    width: 70%;
    font-weight: bold;

    padding-left: 12px;

    text-align: left;
  }

  background-color: #ffffff;

  cursor: default;
`;

const Li = styled.div`
  width: 100%;
  height: 40px;
  display: flex;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  padding: 10px 5px 0 5px;

  color: #000000;

  cursor: pointer;
`;

const Date = styled.p`
  width: 40%;

  text-align: center;

  color: #c6c6c6;
`;

const Text = styled.p`
  width: 100%;

  text-align: left;
  padding-left: 10px;
`;

const Value = styled.p`
  width: 70%;

  padding-right: 10px;

  text-align: right;
`;

export default Finance;
