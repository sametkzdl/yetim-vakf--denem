import styled from "styled-components";

const Link = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: #144d9a;
  font-weight: 500;
  line-height: 30px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 12px;
  transition: all 0.5s;
  &:hover {
    background-color: rgba(252, 179, 0, 0.6);
  }
`;

const Arrowİmg = styled.img`
  width: 10px;
  height: 6px;
`;

const SourceImg = ["./photo/arrow1.png"];

export default function Ahref({ ad }) {
  return (
    <Link>
      {ad}
      <Arrowİmg src={SourceImg[0]}></Arrowİmg>
    </Link>
  );
}
