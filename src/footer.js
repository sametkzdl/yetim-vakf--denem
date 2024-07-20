import styled from "styled-components";
import FooterDetail from "./footer-detail";

const FooterRoll = styled.div`
  margin-top: 50px;
  overflow: hidden;
`;

const LineDiv = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  margin-block: 50px;
`;

const LogoImgRolll = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const LogoImg = styled.img`
  margin: auto;
`;

const FooterText = styled.p`
  max-width: 1250px;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #828282;
  text-align: center;
`;

const LogoLetterImg = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

export default function Footer() {
  return (
    <FooterRoll>
      <FooterDetail></FooterDetail>
      <LineDiv></LineDiv>
      <LogoImgRolll>
        <LogoImg src="./photo/logo.png"></LogoImg>
        <FooterText>
          T.C. İstanbul Valiliği’nin 02.03.2022 tarih ve 185615 sayılı olurları
          ile 1 yıl süreli yardım toplama izni, 28.02.2023 tarih ve 392724
          sayılı olurları ile 1 yıl daha uzatılmış olup 02.03.2022-01.03.2024
          tarihleri arasında 2 yıl süreyle Türkiye genelinde yurtiçi yardım
          toplama iznimiz bulunmaktadır.© Copyright 2023 Tüm Hakları Saklıdır
        </FooterText>
        <LogoLetterImg>
          <svg
            width="779"
            height="504"
            viewBox="0 0 779 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.1">
              <path
                d="M558.357 447.697L409.44 132.45L404.928 122.897L41.9168 294.377C-118.572 370.19 -55.353 558.439 -3.68214 643.087L110.953 588.935C71.2417 504.869 95.013 456.249 133.225 438.199L362.495 329.896L443.722 501.848L558.357 447.697Z"
                fill="url(#paint0_linear_3190_3167)"
              />
              <circle
                cx="565.216"
                cy="140.656"
                r="105.651"
                transform="rotate(64.7148 565.216 140.656)"
                fill="url(#paint1_linear_3190_3167)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_3190_3167"
                x1="437.001"
                y1="76.9995"
                x2="366.145"
                y2="433.641"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0084D5" />
                <stop offset="1" stop-color="#0084D5" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3190_3167"
                x1="520.911"
                y1="95.3994"
                x2="401.56"
                y2="414.569"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0084D5" />
                <stop offset="1" stop-color="#0084D5" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </LogoLetterImg>
      </LogoImgRolll>
    </FooterRoll>
  );
}
