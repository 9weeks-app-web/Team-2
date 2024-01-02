import { CardRadius } from "@/components/Card/cardStyle";
import { colors } from "@/styles/colors";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
export const SideCategory = () => {
  return (
    <CategoryItem>
      <B2_M_12>프로젝트 1</B2_M_12>
    </CategoryItem>
  );
};

export default SideCategory;

const CategoryItem = styled.div`
  ${CardRadius}
  width: 4.9375rem;
  height: 2.25rem;
  flex-shrink: 0;
  padding: 0.69rem 0.62rem 1.19rem 0.87rem;
`;
