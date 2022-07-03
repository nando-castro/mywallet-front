import styled from "styled-components";

function Finance() {
  return (
    <>
      <Content>
        <p>Não há registros de entrada ou saída</p>
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 326px;
  height: 63%;
  margin-bottom: 20px;
  margin-top: -40px;

  display: flex;
  align-items: center;
  justify-content: center;
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

export default Finance;
