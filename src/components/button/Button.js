import styled from "styled-components";
import { Link } from "react-router-dom";

function Button({ text, type, destiny, action, loading }) {
  return (
    <Link to={destiny}>
      <Container disabled={loading} type={type} onClick={action}>
        <span>{text}</span>
      </Container>
    </Link>
  );
}

const Container = styled.button`
  width: 45vh;
  heigth: 45px;
  padding: 10px;
  text-align: center;

  background: #a328d6;
  border-radius: 5px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;

  border: none;
  text-decoration-line: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
