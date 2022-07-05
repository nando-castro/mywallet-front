import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const { token, user, setToken } = useAuth();
  const [loading, setLoading] = useState(false);

  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Container>
      <Top>{user && <p>Olá, {user.name}</p>}</Top>
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

const Top = styled.div``;

export default Header;
