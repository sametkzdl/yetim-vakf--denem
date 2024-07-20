import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadTitle = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 18px;
  color: #333333;
  font-weight: 500;

  margin-bottom: 8px;
`;

const StyleInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 300;
  border: 1px solid #e2e2e2;
  color: #333333;
  margin-bottom: 26px;
  border-radius: 4px;
`;

export default function Input({ ad }) {
  return (
    <StyledInput>
      <HeadTitle>{ad}</HeadTitle>
      <StyleInput type="text"></StyleInput>
    </StyledInput>
  );
}
