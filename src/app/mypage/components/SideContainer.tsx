import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { flexColumn } from "@/components/Flex/flexStyle";

type Props = {
  children: React.ReactNode;
  $width: string;
  $height?: string;
  $boxshadow?: boolean;
  $borderColor?: boolean;
};

const SideContainer = ({
  children,
  $width,
  $boxshadow,
  $height,
  $borderColor,
}: Props) => {
  return (
    <Container
      $width={$width}
      $height={$height}
      $boxshadow={$boxshadow}
      $borderColor={$borderColor}
    >
      {children}
    </Container>
  );
};

export default SideContainer;

const Container = styled.div<{
  $height?: string;
  $width: string;
  $boxshadow?: boolean;
  $borderColor?: boolean;
}>`
  ${flexColumn}
  width: ${(props) => props.$width};
  height: ${(props) => props.$height || "auto"};
  padding: 20px;
  border-radius: 8px;
  border: ${(props) =>
    props.$borderColor ? `1px solid var(${colors.STROKE_10});` : "none"};

  box-shadow: ${(props) =>
    props.$boxshadow ? "0px 2px 12px 0px rgba(0, 0, 0, 0.04)" : "none"};
`;
