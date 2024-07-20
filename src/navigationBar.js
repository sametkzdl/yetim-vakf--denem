import styled from "styled-components";
import Ahref from "./ahref";
import { device } from "./device";
import { Fragment } from "react";

const WrapContent = styled.div`
  position: relative;
`;

const DropDownContentItem = styled.div`
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
`;

const DropDown = styled.div`
  display: none;
  position: absolute;
  padding: ${({ top }) => (top ? "13px 0 0 0" : "0 0 0 8px")};
  left: ${({ top }) => (top ? "0" : "100%")};
  z-index: 100;
  &:hover {
    display: block;
  }
`;

const DropDownContentItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  cursor: pointer;
  gap: 20px;
  &:hover {
    color: ${({ theme }) => theme.brand};
  }
  &:last-child {
    border: none;
    padding-bottom: 0;
  }
  &:hover,
  &:focus {
    & ${DropDown} {
      display: block;
    }
  }
`;

const DropDownContent = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const StyledAhref = styled(Ahref)`
  &:hover,
  &:focus {
    & + ${DropDown} {
      display: block;
    }
  }
`;

const StyledBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  @media ${device.laptop} {
    display: none;
  }
`;

const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #e6e6e6;
  margin: 0 15px;
  &:last-child {
    display: none;
  }
`;

const DataAhref = [
  {
    title: "Kurumsal",
    navItem: [
      { title: "Yetim Sponsorluk" },
      { title: "Adak Akika" },
      { title: "Bir Kutu Gülücük" },
      { title: "Kurban", navItem: [{ title: "Akika Kurban" }] },
      { title: "Kırtasiye Projesi" },
      { title: "Esenlik Durakları", navItem: [{ title: "Akika Kurban" }] },
      { title: "Kalkınma Projeleri" },
      { title: "Özel Gün Projesi" },
      { title: "Sırada İyilik Var" },
      { title: "Yetimhaneler" },
    ],
  },
  {
    title: "Ne Yapabilirsiniz",
    navItem: [
      { title: "Yetim Sponsorluk" },
      { title: "Adak Akika" },
      { title: "Bir Kutu Gülücük" },
      { title: "Kurban" },
    ],
  },
  {
    title: "Projeler",
    navItem: [
      { title: "Yetim Sponsorluk" },
      { title: "Adak Akika" },
      { title: "Bir Kutu Gülücük" },
      { title: "Kurban" },
      { title: "Kırtasiye Projesi" },
      { title: "Esenlik Durakları" },
      { title: "Kalkınma Projeleri" },
      { title: "Özel Gün Projesi" },
    ],
  },
  {
    title: "Faaliyetler",
    navItem: [
      { title: "Yetim Sponsorluk" },
      { title: "Adak Akika" },
      { title: "Bir Kutu Gülücük" },
      { title: "Kurban", navItem: [{ title: "Akika Kurban" }] },
    ],
  },
  {
    title: "Yayınlar",
  },
];

const NavigationBar = () => {
  return (
    <StyledBar>
      <>
        {DataAhref.map(({ title, navItem }, index) => (
          <WrapContent key={index}>
            <StyledAhref tabIndex="0">{title}</StyledAhref>
            {navItem && (
              <DropDown top>
                <DropDownContent>
                  {navItem?.map(({ title, navItem }, index) => (
                    <Fragment key={index}>
                      <DropDownContentItemWrap>
                        <DropDownContentItem tabIndex="0">
                          {title}
                        </DropDownContentItem>
                        {navItem && (
                          <>
                            <img
                              src="./photo/right-arrow.svg"
                              width={24}
                              height={24}
                            />
                            <DropDown>
                              <DropDownContent>
                                {navItem?.map(({ title }, index) => (
                                  <Fragment key={index}>
                                    <DropDownContentItemWrap tabIndex="0">
                                      <DropDownContentItem>
                                        {title}
                                      </DropDownContentItem>
                                    </DropDownContentItemWrap>
                                    <Line />
                                  </Fragment>
                                ))}
                              </DropDownContent>
                            </DropDown>
                          </>
                        )}
                      </DropDownContentItemWrap>
                      <Line />
                    </Fragment>
                  ))}
                </DropDownContent>
              </DropDown>
            )}
          </WrapContent>
        ))}
      </>
    </StyledBar>
  );
};

export default NavigationBar;
