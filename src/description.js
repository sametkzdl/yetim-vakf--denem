import styled from "styled-components";
import LocationComponent from "./locationcomponent";
import { device } from "./device";

const LocatinInfo = styled.div`
  display: grid;
  max-width: 537px;
  gap: 20px;
  @media ${device.laptop} {
    align-items: center;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 40px;
  max-width: 550px;
`;

const Text = styled.p`
  margin: 25px 0 0 0;
  font-size: 24px;
`;

const InfoText = styled.div`
  color: #144d9a;
`;

const RollDescribe = styled.div`
  display: grid;
  gap: 80px;
`;

const LocationSource = [
  {
    id: 1,
    title: "Nerdeyiz?",
    text: `Karagümrük Mah. Muhtar 
Muhiddin Sok. No:11 34091 
Fatih/İstanbul
`,
    ImgSource: "email.png",
  },
  {
    id: 2,
    title: "Bize e-posta gönderin?",
    text: `info @yetimvakfi .org.tr`,
    ImgSource: "gps.png",
  },
  {
    id: 1,
    title: "İletişim Merkezimize Ulaş",
    text: `0212 970 60 60`,
    ImgSource: "telephone.png",
  },
];

export default function Description() {
  return (
    <LocatinInfo>
      <InfoText>
        <Title>İletişime Geçin</Title>
        <Text>
          Görüş, öneri ve sorularınızı aşağıdaki bilgileri kullanarak bize
          iletebilirsiniz.
        </Text>
      </InfoText>
      <RollDescribe>
        {LocationSource.map(({ id, title, text, ImgSource }) => (
          <LocationComponent
            ad={title}
            key={id}
            metin={text}
            url={ImgSource}
          ></LocationComponent>
        ))}
      </RollDescribe>
    </LocatinInfo>
  );
}
