import styled from "styled-components";
import { device } from "./device";

const FormCard = styled.div`
  display: flex;
  gap: 32px;
`;

const Title = styled.h2`
  color: #d6d6d6;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

const Adress = styled.p`
  color: #818181;
  font-weight: 500;
  margin: 0;
  font-size: 24px;
  max-width: 322px;
  overflow-wrap: break-word;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

const StyledImgDiv = styled.div`
  width: 90px;
  height: 90px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 10px 0px;
  border: none;
  flex-shrink: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailImg = styled.img``;

const Rollİtem = styled.div`
  display: flex;
  flex-shrink: 10;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
`;

export default function LocationComponent({ ad, metin, url }) {
  return (
    <FormCard>
      <StyledImgDiv>
        <DetailImg src={`./photo/${url}`} width={30} height={30}></DetailImg>
      </StyledImgDiv>
      <Rollİtem>
        <Title>{ad}</Title>
        <Adress>{metin}</Adress>
      </Rollİtem>
    </FormCard>
  );
}
