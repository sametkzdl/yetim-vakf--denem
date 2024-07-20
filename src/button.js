import styled from "styled-components";

const StyledButton = styled.button`
  padding-inline: 15px;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ theme, bgTheme }) => theme[bgTheme || "primary"]};
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
  &:focus {
    box-shadow: ${({ theme, bgTheme }) => theme[bgTheme || "primary"] + "80"}
      0px 0px 0px 0.2rem;
  }
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
