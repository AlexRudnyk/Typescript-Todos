import styled from "styled-components";

type Props = {
  done: boolean;
};

export const TitleText = styled.p<Props>`
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  margin-right: 30px;
  width: 110px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckInput = styled.input`
  margin-right: 20px;
`;
