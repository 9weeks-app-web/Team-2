import { colors } from "@/styles/colors";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
const Tag = ({ text }: { text: string }) => {
  return (
    <Container>
      <B2_M_12>{text}</B2_M_12>
    </Container>
  );
};

export default Tag;

const Container = styled.div`
  display: flex;
  padding: 0.375rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(${colors.NEUTRAL_10});
`;
