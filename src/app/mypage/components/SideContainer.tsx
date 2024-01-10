import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import { flexColumn } from "@/components/Flex/flexStyle";
type Props = {
  children: React.ReactNode;
  $width: string;
  $boxshadow?: boolean;
  $borderColor?: boolean; // boolean 타입 유지
};

const SideContainer = ({
  children,
  $width,
  $boxshadow,
  $borderColor,
}: Props) => {
  return (
    <Container
      $width={$width}
      $boxshadow={$boxshadow}
      $borderColor={$borderColor}
    >
      {children}
    </Container>
  );
};
export default SideContainer;
const Container = styled.div<{
  $width: string;
  $boxshadow?: boolean;
  $borderColor?: boolean; // boolean 타입 유지
}>`
  ${flexColumn}
  width: ${(props) => props.$width};
  padding: 20px;
  border-radius: 8px;
  border: ${(props) =>
    props.$borderColor ? `1px solid var(${colors.STROKE_10});` : "none"};

  box-shadow: ${(props) =>
    props.$boxshadow ? "0px 2px 12px 0px rgba(0, 0, 0, 0.04)" : "none"};
`;

// color: var(${colors.NEUTRAL_30});
//     font-size: var(${font_size.FONT_SIZE_12});
//     font-weight: var(${font_weight.FONT_WEIGHT_400_R});
//   }
