import styled from "styled-components";
import Finance from "./Finance";
import Footer from "./Footer";
import Header from "./Header";

function Main() {
  return (
    <>
      <Home>
        <Header />
        <Finance />
        <Footer />
      </Home>
    </>
  );
}

const Home = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #8c11be;
`;

export default Main;
