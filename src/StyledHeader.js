import Ahref from "./ahref";
import Button from "./button";
import styled from "styled-components";
import { device } from "./device";
import { useState } from "react";

const DataAhref = [
  { title: "Kurumsal" },
  { title: "Projeler" },
  { title: "Faaliyetler" },
  { title: "Yayınlar" },
];

const StyledHeader = styled.header`
  display: grid;
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: #e7f4fb;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 50px 45px 50px 25px;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const StyledİmgLogo = styled.img`
  width: 130px;
  height: 49px;
  justify-self: left;
  cursor: pointer;
  @media ${device.laptop} {
    justify-self: left;
  }
  @media ${device.tablet} {
    justify-self: left;
  }
`;

const StyledİmgBasket = styled.img`
  width: 18px;
  height: 16px;
  cursor: pointer;
`;

const StyledBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  @media ${device.laptop} {
    display: none;
  }
`;

const BasketButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  position: relative;
`;

const StyledBarTable = styled.div`
  display: flex;
  justify-self: right;
  gap: 20px;
  @media ${device.laptop} {
    justify-self: right;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

const StyledHamb = styled.img`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 28px;
    height: 28px;
    cursor: pointer;
    justify-self: right;
  }
`;

const NumberCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: min-content;
  aspect-ratio: 1;
  min-width: 1.2em;
  padding: 4px;
  transform: translate(50%, -50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0084d5;
`;

const NumberProduct = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
`;

const DropDownContent = styled.div`
  display: none;
  border-radius: 5px;
  position: absolute;
  background-color: #ffffff;
  overflow: hidden;
  margin-top: 13px;
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #f1f1f1;
  }
`;

const FixButton = styled(Button)`
  position: relative;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover,
  &:focus {
    & + ${DropDownContent} {
      display: block;
    }
  }
`;

const WrapContent = styled.div`
  position: relative;
`;

const DropdownItem = styled.div`
  border-bottom: 0.5px solid #eee;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
  font-weight: 700;
  cursor: pointer;
  color: #144d9a;
  &:last-child {
    border-bottom: none;
  }
`;

const UsersImages = styled.img``;

const UserDropDownTitle = styled.div`
  justify-self: left;
`;

const DataButton = ["Bağış Yap", "Oturum Aç"];

const SourceImg = [
  "./photo/shopping-basket.png",
  "./photo/more.png",
  "./photo/logo.png",
  "./photo/right-arrow.png",
];
const user = [
  {
    Name: "",
    basketCount: null,
  },
  {
    Name: "Ahmet Yasin Dede",
    basketCount: 10,
  },
  {
    Name: "Abdul Samet Kazdal",
    basketCount: 97,
  },
  {
    Name: "Abdul Baki Kazdal",
    basketCount: 12,
  },
  {
    Name: "İlyas Kazdal",
    basketCount: 15,
  },
];
const selectUser = user[0];

const userDetailInfo = [
  {
    title: "Bağışçı ve Sponsor",
    sourceImg: "./photo/user-png.png",
    borderDisplayProp: true,
  },
  {
    title: "Gönüllü Hesabı",
    sourceImg: "./photo/volunter-png.png",
    borderDisplayProp: true,
  },
  {
    title: "İnsan Kaynakları",
    sourceImg: "./photo/shop-basket.png",
    borderDisplayProp: null,
  },
];

const donateDetailInfo = [
  {
    title: "Kredi Kartı ile Bağış",
    sourceImg: "./photo/creditcard.png",
    borderDisplayProp: null,
  },
  {
    title: "Hesap Numaraları",
    sourceImg: "./photo/cardnumber.png",
    borderDisplayProp: null,
  },
];

export default function StickyHeader() {
  const [dropDownMenu, setdropDownMenu] = useState(false);
  const [dropDownMenuVolunteer, setdropDownMenuVolunteer] = useState(false);

  const toggleDropDown = () => {
    setdropDownMenu(!dropDownMenu);
  };
  const toggleDropDownVolunteer = () => {
    setdropDownMenuVolunteer(!dropDownMenuVolunteer);
  };
  return (
    <StyledHeader>
      <StyledİmgLogo src={SourceImg[2]} sizes="100" height={50} />
      <StyledBar>
        {DataAhref.map(({ title }, index) => (
          <Ahref ad={title} key={index} />
        ))}
      </StyledBar>

      <StyledBarTable>
        <WrapContent>
          <FixButton bgTheme={selectUser.Name && "success"}>
            {selectUser.Name || DataButton[1]}
          </FixButton>
          <DropDownContent>
            {userDetailInfo.map(({ title, sourceImg }, index) => (
              <DropdownItem key={index}>
                <UsersImages src={sourceImg} key={index}></UsersImages>
                <UserDropDownTitle key={index}>{title}</UserDropDownTitle>
              </DropdownItem>
            ))}
          </DropDownContent>
        </WrapContent>
        <WrapContent>
          <FixButton bgTheme="secondary">{DataButton[0]}</FixButton>
          <DropDownContent>
            {donateDetailInfo.map(({ title, sourceImg }, index) => (
              <DropdownItem key={index}>
                <UsersImages src={sourceImg} key={index}></UsersImages>
                <UserDropDownTitle key={index}>{title}</UserDropDownTitle>
              </DropdownItem>
            ))}
          </DropDownContent>
        </WrapContent>

        <BasketButton>
          <StyledİmgBasket src={SourceImg[0]}></StyledİmgBasket>
          <NumberCircle>
            <NumberProduct>
              {Number(selectUser.basketCount) <= 99
                ? selectUser.basketCount
                : "99+"}
            </NumberProduct>
          </NumberCircle>
        </BasketButton>
      </StyledBarTable>
      <StyledHamb src={SourceImg[1]}></StyledHamb>
    </StyledHeader>
  );
}
