import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  function addFinance() {
    navigate("/add");
  }

  function removeFinance() {
    navigate("/exit");
  }

  return (
    <>
      <Baseboard>
        <Content>
          <div onClick={addFinance}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Nova Entrada</p>
          </div>
          <div onClick={removeFinance}>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova Saída</p>
          </div>
        </Content>
      </Baseboard>
    </>
  );
}

const Baseboard = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20px 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;

  color: #ffffff;

  ion-icon {
    width: 25px;
    height: 25px;

    font-weight: 700;
  }

  p {
    margin-top: 10px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 155px;
    height: 114px;
    background: #a328d6;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding: 10px;
  }
`;

export default Footer;
