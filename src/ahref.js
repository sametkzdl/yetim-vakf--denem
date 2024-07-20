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

export default function Ahref({ children, ...rest }) {
  return (
    <Link {...rest}>
      {children}
      <img width={24} height={24} alt="" src="./photo/create-down.svg"></img>
    </Link>
  );
}
