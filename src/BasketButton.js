import styled from "styled-components";
import Button from "./button";
import { Fragment } from "react";

const WrapContent = styled.div`
  position: relative;
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

const BasketDropDownItem = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: ${({ theme }) =>
    theme.lightblue ? theme.lightblue : "inherit"};
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #0084d5;
`;

const BasketDropDownAd = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 312px;
  padding-block: 10px;
  font-size: 16px;
  border-bottom: 1px solid #eeeeee;
  &:last-child {
    border: none;
  }
`;

const BasketDropDownAdTitle = styled.div`
  white-space: nowrap;
  font-weight: 600;
  color: ${({ theme }) => theme.gray};
`;

const BasketDropDownAdImg = styled.img``;

const BasketDropDownAdPrice = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

const NumberCircle = styled.div`
  --padding: 3px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;
  aspect-ratio: 1;
  min-width: calc(1em + var(--padding) * 2);
  padding: var(--padding);
  transform: translate(50%, -50%);
  border-radius: 50%;
  background-color: #0084d5;
  font-weight: 700;
  color: #ffffff;
`;

const BasketDropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 15px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const BasketButton = styled(Button)`
  width: 50px;
  height: 50px;
  position: relative;
  &:focus ${NumberCircle} {
    box-shadow: inherit;
  }
  &:hover,
  &:focus {
    & + ${DropDown} {
      display: block;
    }
  }
`;

const ShowButton = styled(Button)`
  width: 100%;
`;

const basketDetailInfo = [
  {
    amount: [
      { value: 700, product: "Kurban" },
      { value: 200, product: "Zekat" },
      { value: 300, product: "Hac" },
      { value: 900, product: "Umre" },
      { value: 400, product: "Fitre" },
      { value: 600, product: "Sadaka" },
      { value: 700, product: "Öşür" },
    ],
  },
];

const totalValue = basketDetailInfo.reduce((acc, item) => {
  return acc + item.amount.reduce((subtotal, obj) => subtotal + obj.value, 0);
}, 0);

const WrapBasketProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RemainTitle = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.brand};
`;

const WrapBasketDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

function BasketSepet({ userName, urlImage }) {
  const BasketCount = basketDetailInfo.map(({ amount }) => amount.length);
  return (
    <WrapContent>
      <BasketButton buttonType="soft">
        <img src={urlImage} width={24} height={24}></img>
        {userName && (
          <NumberCircle>{BasketCount <= 99 ? BasketCount : "99+"}</NumberCircle>
        )}
      </BasketButton>
      <DropDown>
        <BasketDropDownContent>
          {basketDetailInfo.map(({ amount }, index) => (
            <>
              <BasketDropDownItem key={index}>
                <img src="./photo/shopping_bag_02.svg" width={24} height={24} />
                {"Sepetiniz"}
              </BasketDropDownItem>
              {amount.map(
                ({ value, product }, index) =>
                  3 > index && (
                    <BasketDropDownAd key={index}>
                      <WrapBasketProduct>
                        <BasketDropDownAdTitle>{product}</BasketDropDownAdTitle>
                        <BasketDropDownAdPrice>{value}₺</BasketDropDownAdPrice>
                      </WrapBasketProduct>
                      <BasketDropDownAdImg src="./photo/deorem-baslik.svg" />
                    </BasketDropDownAd>
                  )
              )}
              <WrapBasketDetail>
                {" "}
                <RemainTitle>Toplam : {totalValue} ₺</RemainTitle>
                {amount.length >= 3 && (
                  <RemainTitle>{amount.length - 3} Bağış Daha</RemainTitle>
                )}
              </WrapBasketDetail>
              <ShowButton themeColor="secondary">
                {"Sepeti Görüntüle"}
              </ShowButton>
            </>
          ))}
        </BasketDropDownContent>
      </DropDown>
    </WrapContent>
  );
}

export default BasketSepet;
