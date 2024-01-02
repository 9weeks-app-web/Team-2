import { colors } from "@/styles/colors";
import {
  B2_M_14,
  B2_R_14,
} from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
const PageNavController = () => {
  return (
    <PageNavContainer>
      <Btn>{"<"}</Btn>
      <TextBox>
        <B2_M_14>1</B2_M_14>
        <B2_R_14 className="gray">/</B2_R_14>
        <B2_R_14 className="gray">3</B2_R_14>
      </TextBox>
      <Btn>{">"}</Btn>
    </PageNavContainer>
  );
};

export default PageNavController;

const PageNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Btn = styled.div`
  display: flex;
  width: 2.75rem;
  height: 2.125rem;
  padding: 0.5rem 0.8125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--Neutral-10, #e6e6e6);
  background: #fff;
  cursor: pointer;
`;
const TextBox = styled.div`
  display: flex;
  gap: 0.25rem;

  & > .gray {
    color: var(${colors.NEUTRAL_30});
  }
`;
