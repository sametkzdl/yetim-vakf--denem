import styled from "styled-components";
import { device } from "./device";

const StyledFooter = styled.div`
  max-width: 1250px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    margin: auto;
    justify-items: left;
    gap: 20px;
    padding: 60px;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-items: center;
    gap: 20px;
    padding: 20px;
  }
`;

const InfoCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const InfoCardTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 50px;
  color: ${({ selectColor }) => selectColor || "blue"};
  margin: 0;
  padding: 0;
`;

const InfoCardText = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  color: #828282;
  margin: 0;
  padding: 0;
`;

const FooterData = [
  {
    title: "Kurumsal",
    text: ["Basın açıklamaları", "Basında Biz", "Kurumsal Kimliğimiz"],
  },
  {
    title: "Bilgi edinin",
    text: ["Kişisel Verilerin Korunması", "Ahmet Yasin Dede"],
    color: "#FCB300",
  },
  {
    title: "Bağış Yapın",
    text: ["Bağış Yöntemleri", "Vakıf Destek Formu", "Sponsorluk Ödemesi"],
    color: "#219653",
  },
  {
    title: "Başvuru Formları ",
    text: [
      "Depremzede Psk. Destek Formu",
      "Psikolojik Destek Baş. Formu",
      "Depremzedeler İçin Ekonomik",
      "Destek Formu",
      "Sosyal Yardım Başvuru Formu",
    ],
    color: "#EB5757",
  },
];

export default function FooterDetail() {
  return (
    <StyledFooter>
      {FooterData.map(({ title, text, color, id }) => (
        <InfoCard key={id}>
          <InfoCardTitle selectColor={color}>{title}</InfoCardTitle>
          {text.map((content, index) => (
            <InfoCardText key={index}>{content}</InfoCardText>
          ))}
        </InfoCard>
      ))}
    </StyledFooter>
  );
}
