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
          console.log(res.data);
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
      <Div key={i.id}>
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
      </Div>
    ));
  }

  return (
    <>
      {user ? (
        <Content>
          {renderFinances()}
          <Saldo>
            <p>Saldo: </p>
            <p className="value">{balance}</p>
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
  height: 80%;

  background-color: aliceblue;
`;

const Li = styled.div`
  width: 100%;
  height: 40px;
  display: flex;

  border: 1px solid #000;
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

const Date = styled.p`
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
