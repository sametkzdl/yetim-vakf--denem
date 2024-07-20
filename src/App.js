import "./App.css";
import Header from "./header";
import Description from "./description";
import { device } from "./device";
import styled from "styled-components";
import FormLogin from "./form";
import Footer from "./footer";
import StickyHeader from "./StyledHeader";
import UrlHeader from "./TopHeader";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  max-width: 1250px;
  padding: 80px;
  gap: 80px;
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    flex-direction: column;
    gap: 80px;
  }
  @media ${device.mobileL} {
    justify-content: space-around;
    padding: 60px;
    flex-direction: column;
    gap: 60px;
  }
`;

const Origin = styled.div`
  position: relative;
  background-image: linear-gradient(to bottom, #e7f4fb, #e6f3fb00);
  color: ${({ theme }) => theme.text};
`;

const App = () => (
  <Origin>
    <UrlHeader></UrlHeader>
    <StickyHeader></StickyHeader>
    <Header></Header>
    <Layout>
      <Description></Description>
      <FormLogin></FormLogin>
    </Layout>
    <Footer></Footer>
  </Origin>
);

export default App;
