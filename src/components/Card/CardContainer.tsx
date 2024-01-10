import React from "react";
import styled from "styled-components";
import Link from "next/link";
interface CardContainerProps {
  children: React.ReactNode;
  linkUrl?: string;
  $width: string;
  $borderColor?: string;
}
export const CardContainer = ({
  children,
  linkUrl,
  $width,
  $borderColor,
}: CardContainerProps) => {
  if (linkUrl) {
    return (
      <ContainerLink href={linkUrl} $width={$width} $borderColor={$borderColor}>
        {children}
      </ContainerLink>
    );
  } else {
    return (
      <Container $width={$width} $borderColor={$borderColor}>
        {children}
      </Container>
    );
  }
};

const Container = styled.div<{ $width: string; $borderColor?: string }>`
  display: inline-block;
  width: ${(props) => props.$width};
  border: ${(props) =>
    props.$borderColor ? `1px solid var(${props.$borderColor})` : ""};
  border-radius: 8px;
  z-index: 1;
`;

const ContainerLink = styled(Link)<{ $width: string; $borderColor?: string }>`
  display: inline-block;
  width: ${(props) => props.$width};
  border: ${(props) =>
    props.$borderColor ? `1px solid var(${props.$borderColor})` : ""};
  border-radius: 8px;
  z-index: 1;
`;
