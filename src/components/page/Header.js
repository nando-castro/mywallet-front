import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Container>
      <Content>
        <div>{user && <p>Olá, {user.name}</p>}</div>
        <ion-icon name="exit-outline" onClick={exitApp}></ion-icon>
      </Content>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;

  ion-icon {
    font-weight: bold;
    font-size: 26px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
