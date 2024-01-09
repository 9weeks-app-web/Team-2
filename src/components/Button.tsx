import { colors } from "@/styles/colors";
import React from "react";
import styled from "styled-components";
interface ButtonProps {
  title: string;
  width: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, width, onClick }) => {
  return (
    <GalobalButton $width={width} onClick={onClick}>
      <TextWrap>{title}</TextWrap>
    </GalobalButton>
  );
};

const GalobalButton = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  cursor: pointer;
  display: flex;
  height: 3rem;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  color: var(${colors.PRIMARY_WHITE});
  background: var(${colors.PRIMARY_70});
`;

const TextWrap = styled.p`
  color: var(${colors.NEUTRAL_WHITE});
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

export default Button;
