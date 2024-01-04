import { colors } from "@/styles/colors";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
/**
 * use Tag Component with TagWrapper
 * Props Ex) $setBgColor={colors.BACKGROUND_BLUE}
 */
export const Tag = ({
  children,
  $setColor,
  $setBgColor,
  $setBorderColor,
}: {
  children: React.ReactNode;
  $setColor?: string;
  $setBgColor?: string;
  $setBorderColor?: string;
}) => {
  return (
    <StyledTag
      $setColor={$setColor}
      $setBgColor={$setBgColor}
      $setBorderColor={$setBorderColor}
    >
      {children}
    </StyledTag>
  );
};

const StyledTag = styled(B2_M_12)<{
  $setColor?: string;
  $setBgColor?: string;
  $setBorderColor?: string;
}>`
  width: fit-content;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${(props) =>
    props.$setColor ? `var(${props.$setColor})` : `var(${colors.NEUTRAL_90})`};
  background-color: ${(props) =>
    props.$setBgColor
      ? `var(${props.$setBgColor})`
      : `var(${colors.NEUTRAL_WHITE})`};
  border: ${(props) =>
    props.$setBorderColor ? `1px solid var(${props.$setBorderColor})` : ""};
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
