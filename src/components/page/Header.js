import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/auth.js';

function Header() {
  const navigate = useNavigate();

  const { user, setNavbar } = useAuth();

  function exitApp() {
    setNavbar(false);
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Heade>
      <h1>Olá, {user.name}</h1>
      <ion-icon name="exit-outline" onClick={exitApp}></ion-icon>
    </Heade>
  );
}

const Heade = styled.header`
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
