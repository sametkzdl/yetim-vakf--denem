import styled from "styled-components";
import { device } from "./device";

const TopHeader = styled.div`
  box-sizing: border-box;
  padding: 11px 25px;
  width: 100%;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  @media ${device.tabletL} {
    display: none;
  }
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

const InfoUrl = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: black;
  }
`;

const RollImg = styled.div`
  border-radius: 6px;
  background-color: ${({ selectColor }) => selectColor || "gray"};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 18px;
  height: 18px;
`;

const DescriptionUrl = styled.div`
  color: #a1a1a1;
  text-decoration: none;
  font-weight: 500;
`;

const leftData = [
  {
    infoUrl: "0212 970 60 60",
    selectColor: `#E7F4FB`,
    srcImage: "./photo/telephone.png",
    achiveCommunicate: `tel:0212 970 60 60`,
  },
  {
    infoUrl: "info@yetimvakfi.org.tr",
    selectColor: `#FFEEC5`,
    srcImage: "./photo/mail.png",
    achiveCommunicate: `mailto:info@yetimvakfi.org.tr`,
  },
  {
    infoUrl: "Takip Et",
    selectColor: `#D1F1DE`,
    srcImage: "./photo/check.png",
  },
];

const rightData = [
  {
    infoUrl: "TR",
    selectColor: `#F1CBFF`,
    srcImage: "./photo/world-wide-web.png",
  },
  {
    infoUrl: "TRY",
    selectColor: `#FFB6B6`,
    srcImage: "./photo/dollar-bill.png",
  },
];

export default function UrlHeader() {
  return (
    <TopHeader>
      <LeftSide>
        {leftData.map(
          ({ infoUrl, selectColor, srcImage, achiveCommunicate }, index) => (
            <InfoUrl key={index} href={achiveCommunicate}>
              <RollImg selectColor={selectColor}>
                <Image src={srcImage} />
              </RollImg>
              <DescriptionUrl>{infoUrl}</DescriptionUrl>
            </InfoUrl>
          )
        )}
      </LeftSide>
      <RightSide>
        {rightData.map(({ infoUrl, selectColor, srcImage }, index) => (
          <InfoUrl href={infoUrl} key={index}>
            <RollImg selectColor={selectColor}>
              <Image src={srcImage} />
            </RollImg>
            <DescriptionUrl>{infoUrl}</DescriptionUrl>
          </InfoUrl>
        ))}
      </RightSide>
    </TopHeader>
  );
}
