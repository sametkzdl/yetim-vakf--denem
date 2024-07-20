import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  height: 50px;
  border-radius: 5px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  &:focus {
    box-shadow: ${({ theme, themeColor }) =>
        theme[themeColor || "primary"] + "60"}
      0px 0px 0px 0.2rem;
  }
  ${({ theme, buttonType = "default", themeColor }) =>
    ({
      default: css`
        padding-inline: 15px;
        color: #fff;
        background-color: ${theme[themeColor || "primary"]};
      `,
      soft: css`
        color: ${theme[themeColor || "primary"]};
        background-color: ${theme.background};
      `,
      link: css`
        color: ${theme.text};
        font-weight: 500;
        &&:hover {
          color: ${({ theme, themeColor }) => theme[themeColor || "primary"]};
        }
      `,
    }[buttonType])}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
