import Button from "./button";
import styled from "styled-components";
import { device } from "./device";
import BasketSepet from "./BasketButton";
import NavigationBar from "./navigationBar";

const StyledHeader = styled.header`
  box-sizing: border-box;
  display: grid;
  position: sticky;
  z-index: 10;
  top: 0;
  min-height: 140px;
  gap: 20px;
  background-color: #e7f4fb;
  grid-template-columns: min-content 1fr min-content;
  padding: 45px 50px;
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

const DropDownContent = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const DropDown = styled.div`
  display: none;
  position: absolute;
  right: 0;
  padding-top: 13px;
  &:hover,
  &:focus {
    display: block;
  }
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

const FixButton = styled(Button)`
  position: relative;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover,
  &:focus {
    & + ${DropDown} {
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
  white-space: nowrap;
  align-items: center;
  padding-block: 16px;
  margin-inline: 16px;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  color: #144d9a;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: ${({ themeColor, theme }) => themeColor || theme.secondary};
  }
`;

const DataButton = ["Bağış Yap", "Oturum Aç"];

const SourceImg = [
  "./photo/shopping_bag_02.svg",
  "./photo/more.png",
  "./photo/logo.png",
  "./photo/right-arrow.png",
];
const user = [
  {
    Name: "",
  },
  {
    Name: "Ahmet Yasin Dede",
  },
  {
    Name: "Abdul Samet Kazdal",
  },
  {
    Name: "Abdul Baki Kazdal",
  },
  {
    Name: "İlyas Kazdal",
  },
  {
    Name: "Mustafa Madanoğlu",
  },
];
const selectUser = user[3];

const userDetailInfo = [
  {
    title: "Bağışçı ve Sponsor",
    sourceImg: "./photo/user_02.svg",
    themeColor: "#fcb300",
  },
  {
    title: "Gönüllü Hesabı",
    sourceImg: "./photo/heart_01.svg",
    themeColor: "#eb5757",
  },
  {
    title: "İnsan Kaynakları",
    sourceImg: "./photo/suitcase_.svg",
    themeColor: "#9b51e0",
  },
];

const donateDetailInfo = [
  {
    title: "Kredi Kartı ile Bağış",
    sourceImg: "./photo/credit_card_01.svg",
    themeColor: "#eb5757",
  },
  {
    title: "Hesap Numaraları",
    sourceImg: "./photo/credit_card_02.svg",
    themeColor: "#219653",
  },
];

export default function StickyHeader() {
  // const [dropDownMenu, setdropDownMenu] = useState(false);
  // const [dropDownMenuVolunteer, setdropDownMenuVolunteer] = useState(false);

  // const toggleDropDown = () => {
  //   setdropDownMenu(!dropDownMenu);
  // };
  // const toggleDropDownVolunteer = () => {
  //   setdropDownMenuVolunteer(!dropDownMenuVolunteer);
  // };
  return (
    <StyledHeader>
      <StyledİmgLogo src={SourceImg[2]} sizes="100" height={50} />
      <NavigationBar></NavigationBar>
      <StyledBarTable>
        <WrapContent>
          <FixButton themeColor={selectUser.Name && "success"}>
            {selectUser.Name || DataButton[1]}
          </FixButton>
          <DropDown>
            <DropDownContent>
              {userDetailInfo.map(({ title, sourceImg, themeColor }, index) => (
                <DropdownItem key={index} themeColor={themeColor}>
                  <img src={sourceImg} width={24} height={24} key={index} />
                  <div key={index}>{title}</div>
                </DropdownItem>
              ))}
            </DropDownContent>
          </DropDown>
        </WrapContent>
        <WrapContent>
          <FixButton themeColor="secondary">{DataButton[0]}</FixButton>
          <DropDown>
            <DropDownContent>
              {donateDetailInfo.map(
                ({ title, sourceImg, themeColor }, index) => (
                  <DropdownItem key={index} themeColor={themeColor}>
                    <img
                      src={sourceImg}
                      width={24}
                      height={24}
                      key={index}
                    ></img>
                    <div key={index}>{title}</div>
                  </DropdownItem>
                )
              )}
            </DropDownContent>
          </DropDown>
        </WrapContent>
        <BasketSepet
          userName={selectUser.Name}
          urlImage={SourceImg[0]}
        ></BasketSepet>
      </StyledBarTable>
      <StyledHamb src={SourceImg[1]}></StyledHamb>
    </StyledHeader>
  );
}
