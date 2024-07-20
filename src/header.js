import styled from "styled-components";
import { device } from "./device";

const Row = styled.div`
  margin: auto;
  max-width: 1440px;
`;

const LineTable = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLine = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  height: 5px;
  background-image: linear-gradient(to right, transparent, #fff, transparent);

  @media ${device.mobileL} {
    display: none;
  }
`;

const HeaderPagination = styled.div`
  padding: 10px 30px;
  border-radius: 10px;
  min-width: 245px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  gap: 25px;
  z-index: 1;
  background-color: #fff;
  @media ${device.mobileL} {
    display: none;
  }
`;

const HeaderPaginationTitle = styled.div`
  color: #a4a4a4;
`;

const ArrowImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: #e8f5fc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderPaginationTitle2 = styled.div`
  color: #144d9a;
`;

const TableMap = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
`;

const MapImg = styled.iframe`
  margin-inline: auto;
  max-width: 92%;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid transparent;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 8px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SourceImg = [
  "./photo/shopping-basket.png",
  "./photo/more.png",
  "./photo/logo.png",
  "./photo/right-arrow.svg",
];

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #e7f4fb, #e6f3fb00)",
      }}
    >
      <Row>
        <LineTable>
          <StyledLine />
          <HeaderPagination>
            <HeaderPaginationTitle>Ana Sayfa</HeaderPaginationTitle>
            <ArrowImg>
              <img src={SourceImg[3]} alt="" width={24} height={24}></img>
            </ArrowImg>
            <HeaderPaginationTitle2>İletişim</HeaderPaginationTitle2>
          </HeaderPagination>
        </LineTable>
        <TableMap>
          <MapImg
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12039.452974934837!2d28.9352378!3d41.0282478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba16a09bec3d%3A0xa69d8c7433dc9c51!2sYetim%20Vakf%C4%B1!5e0!3m2!1str!2str!4v1709554829852!5m2!1str!2str"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="540"
          ></MapImg>
        </TableMap>
      </Row>
    </div>
  );
}
