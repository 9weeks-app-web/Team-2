"use client";
import { colors } from "@/styles/colors";
import React from "react";
import styled from "styled-components";

export const RoundButton = ({
  children,
  $BgColor,
  $color,
  $BorderColor,
  onClick,
}: {
  children: React.ReactNode;
  $BgColor: string;
  $color?: string;
  $BorderColor?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      $BgColor={$BgColor}
      $color={$color}
      $BorderColor={$BorderColor}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const Button = styled.button<{
  $BgColor: string;
  $color?: string;
  $BorderColor?: string;
}>`
  color: ${(props) => (props.$color ? `var(${props.$color})` : "")};
  background-color: ${(props) => `var(${props.$BgColor})`};
  border-radius: 50%;
  padding: 10px;
  border: 0;
  width: 56px;
  height: 56px;
  cursor: pointer;
  border: ${(props) =>
    props.$BorderColor ? `1px solid var(${props.$BorderColor})` : ""};
  display: flex;
  align-items: center;
  justify-content: center;
`;
