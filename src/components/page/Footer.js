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
        <div onClick={addFinance}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova Entrada</p>
        </div>
        <div onClick={removeFinance}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova Saída</p>
        </div>
      </Baseboard>
    </>
  );
}

const Baseboard = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position fixed;
    bottom: 0;
    left: 0;
    padding: 20px 20px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;

    color: #FFFFFF;

  div {
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: 1px solid #FFFFFF;
    padding 10px
  }

  ion-icon {
    width: 25px;
    height: 25px;

    font-weight: 700;
   }

   p {
       margin-top: 10px;
   }

`;

export default Footer;
