import { colors } from "@/styles/colors";
import { font_size } from "@/styles/typography";
import React from "react";
import styled from "styled-components";

export const Button = ({ title, width }: { title: string; width: string }) => {
  return <GalobalButton width={width}>{title}</GalobalButton>;
};

const GalobalButton = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  /* background-color: ${({ theme }) => theme.color}; */
  background-color: var(${colors.NEUTRAL_10});
`;

export default Button;
