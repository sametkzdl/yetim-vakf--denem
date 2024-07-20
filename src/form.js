import styled from "styled-components";
import Input from "./input";
import { device } from "./device";
import Button from "./button";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 50px 70px;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media ${device.laptop} {
    max-width: 400px;
    padding: 35px 50px;
  }
  @media ${device.mobileL} {
    max-width: 300px;
    padding: 20px 30px;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  text-align: center;
  color: #fcb300;
  font-size: 36px;
  line-height: 56px;
  margin: 0 0 50px 0;
  padding: 0;
`;

const StyledButton = styled(Button)`
  margin: auto;
  width: 140px;
`;

const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
  border: 1px solid #e2e2e2;
  margin-bottom: 26px;
  padding: 10px 16px;
  min-height: 48px;
  max-height: 320px;
`;
const HeadTitle = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 8px;
`;

const DataInput = [
  {
    id: 1,
    title: "Ad Soyad",
  },
  {
    id: 2,
    title: "E-Posta Adresiniz",
  },
  {
    id: 3,
    title: "Telefon Numarası",
  },
];

export default function FormLogin() {
  return (
    <Form>
      <Title>İletişim Formu</Title>
      {DataInput.map(({ id, title }) => (
        <Input ad={title} key={id}></Input>
      ))}
      <HeadTitle>Mesajınız</HeadTitle>
      <TextArea rows={5}></TextArea>
      <StyledButton bgTheme="secondary">Gönder</StyledButton>
    </Form>
  );
}
