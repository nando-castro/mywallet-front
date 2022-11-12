import styled from "styled-components";
import { useAuth } from "../../context/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

function Finance() {
  const { user, setId, setData } = useAuth();
  const [transations, setTransations] = useState([]);
  const [update, setUpdate] = useState(false);

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
  }, [update]);

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

  function editAdd(id, value, description) {
    setId(id);
    setData({
      value: value,
      text: description,
    });
    navigate("/put-add");
  }
  function editExit(id, value, description) {
    setId(id);
    setData({
      value,
      description,
    });
    navigate("/put-exit");
  }

  function handleDelete(id) {
    const response = window.confirm(
      "Voce tem certeza que gostaria de apagar o registro?"
    );

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    if (response === true) {
      api
        .delete(`finances/${id}`, config)
        .then((res) => {
          setUpdate(!update);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function renderFinances() {
    return transations.map((i) => (
      <Li key={i._id}>
        <Date
          onClick={
            i.type === "exit"
              ? () => editExit(i._id, i.value, i.description)
              : () => editAdd(i._id, i.value, i.description)
          }
        >
          {i.time}
        </Date>
        <Text
          onClick={
            i.type === "exit"
              ? () => editExit(i._id, i.value, i.description)
              : () => editAdd(i._id, i.value, i.description)
          }
        >
          {i.description}
        </Text>
        <Value
          onClick={
            i.type === "exit"
              ? () => editExit(i._id, i.value, i.description)
              : () => editAdd(i._id, i.value, i.description)
          }
          style={
            i.type === "exit" ? { color: "#C70000" } : { color: "#03AC00" }
          }
        >
          {i.value}
        </Value>
        <span onClick={() => handleDelete(i._id)}>X</span>
      </Li>
    ));
  }

  return (
    <>
      {user && transations.length > 0 ? (
        <Container>
          <Content>{renderFinances()}</Content>
          <BalanceContent color={balance > 0 ? "#03AC00" : "#C70000"}>
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
  color: ${(props) => props.color};

  p {
    width: 70%;
    font-weight: bold;

    padding-left: 12px;

    color: #000;

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

  cursor: default;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    color: #c6c6c6;
    cursor: pointer;
  }
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
