import { colors } from "@/styles/colors";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
interface TagProps {
  text: string;
  blueTag?: boolean;
}

const Tag: React.FC<TagProps> = ({ text, blueTag = false }) => {
  return (
    <Container $blueTag={blueTag}>
      <B2_M_12>{text}</B2_M_12>
    </Container>
  );
};

export default Tag;

const Container = styled.div<{
  $blueTag: boolean;
}>`
  display: flex;
  padding: 0.375rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.5rem;
  border: ${(props) =>
    props.$blueTag ? "none" : `1px solid var(${colors.NEUTRAL_10})`};
  background-color: ${(props) =>
    props.$blueTag
      ? `var(${colors.BACKGROUND_BLUE})`
      : `var(${colors.NEUTRAL_WHITE})`};

  color: ${(props) =>
    props.$blueTag ? `var(${colors.PRIMARY_80})` : `var(${colors.NEUTRAL_70})`};
`;
