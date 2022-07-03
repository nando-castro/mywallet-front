import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function exitApp() {
    navigate("/");
    window.location.reload();
  }

  return (
    <Container>
      <h1>Olá, fulano</h1>
      <ion-icon name="exit-outline" onClick={exitApp}></ion-icon>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position fixed;
  top: 0;
  left: 0;
  padding: 20px 20px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #FFFFFF;

  ion-icon {
    font-weight: bold;
    font-size: 26px;
  }

`;

export default Header;
