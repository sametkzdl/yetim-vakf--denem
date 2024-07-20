import styled from "styled-components";
import { device } from "./device";
import Button from "./button";
import { Fragment } from "react";

const TopHeader = styled.div`
  box-sizing: border-box;
  padding: 20px 50px;
  height: 80px;
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
const DropDown = styled.div`
  padding-top: 15px;
  position: absolute;
  left: 0;
  z-index: 100;
  display: none;
  &:hover {
    display: block;
  }
`;
const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 8px;
`;
const DropDownItem = styled.div`
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: ${({ theme, selectColor }) => theme[selectColor]};
  }
`;

const InfoButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #a1a1a1;
  &:hover,
  &:focus {
    & + ${DropDown} {
      display: block;
    }
  }
`;

const RollImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: color-mix(
    in srgb,
    ${({ theme, selectColor = "blue" }) => theme[selectColor]} 20%,
    white
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapSide = styled.div`
  position: relative;
`;

const leftData = [
  {
    infoUrl: "0212 970 60 60",
    selectColor: "blue",
    srcImage: "./photo/phone.svg",
    contactCommunicate: `tel:0212 970 60 60`,
  },
  {
    infoUrl: "info@yetimvakfi.org.tr",
    selectColor: `yellow`,
    srcImage: "./photo/mail.svg",
    contactCommunicate: `mailto:info@yetimvakfi.org.tr`,
  },
  {
    infoUrl: "Takip Et",
    selectColor: "green",
    srcImage: "./photo/check.svg",
    dropDownInfo: [
      { socialMedia: "Twitter" },
      { socialMedia: "Facebook" },
      { socialMedia: "İnstagram" },
      { socialMedia: "Youtube" },
    ],
  },
];

const rightData = [
  {
    infoUrl: "TR",
    selectColor: "purple",
    srcImage: "./photo/globe.svg",
    dropDownInfo: [
      { link: "Türkçe (TR)" },
      { link: "العربية (AR)" },
      { link: "Türkçe (EN)" },
    ],
  },
  {
    infoUrl: "TRY",
    selectColor: "red",
    srcImage: "./photo/component-2.svg",
    dropDownInfo: [
      { link: "TRY" },
      { link: "USD" },
      { link: "EURO" },
      { link: "GBP" },
    ],
  },
];

export default function UrlHeader() {
  return (
    <TopHeader>
      <LeftSide>
        {leftData.map(
          (
            {
              infoUrl,
              selectColor,
              srcImage,
              contactCommunicate,
              dropDownInfo,
            },
            index
          ) => (
            <WrapSide>
              <InfoButton
                forwardedAs={contactCommunicate && "a"}
                buttonType="link"
                href={contactCommunicate}
                themeColor={selectColor}
                key={index}
                tabIndex="0"
              >
                <RollImg selectColor={selectColor}>
                  <img src={srcImage} width={24} height={24} alt="" />
                </RollImg>
                {infoUrl}
              </InfoButton>
              {dropDownInfo && (
                <DropDown>
                  <DropDownContent>
                    {dropDownInfo?.map(({ socialMedia }, index) => (
                      <DropDownItem key={index} selectColor={selectColor}>
                        {socialMedia}
                      </DropDownItem>
                    ))}
                  </DropDownContent>
                </DropDown>
              )}
            </WrapSide>
          )
        )}
      </LeftSide>
      <RightSide>
        {rightData.map(
          ({ infoUrl, selectColor, srcImage, dropDownInfo }, index) => (
            <WrapSide>
              <InfoButton
                tabIndex="0"
                buttonType="link"
                themeColor={selectColor}
                key={index}
              >
                <RollImg selectColor={selectColor}>
                  <img src={srcImage} width={24} height={24} alt="" />
                </RollImg>
                {infoUrl}
              </InfoButton>
              {dropDownInfo && (
                <DropDown>
                  <DropDownContent>
                    {dropDownInfo?.map(({ link }, index) => (
                      <DropDownItem key={index} selectColor={selectColor}>
                        {link}
                      </DropDownItem>
                    ))}
                  </DropDownContent>
                </DropDown>
              )}
            </WrapSide>
          )
        )}
      </RightSide>
    </TopHeader>
  );
}
