import React from "react";
import styled from "styled-components";
import { font_size, font_weight } from "@/styles/typography";
import { colors } from "@/styles/colors";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <InputFild {...props} />;
};

export default Input;

const InputFild = styled.input`
  width: 100%;
  font-size: var(${font_size.FONT_SIZE_16});
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(${colors.NEUTRAL_70});
  padding: 8px 12px;
  &::placeholder {
    color: var(${colors.NEUTRAL_20});
  }
  outline: none;
`;
