import React from "react";
import styled from "styled-components";
import { font_size, font_weight } from "@/styles/typography";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: var(${font_size.FONT_SIZE_16});
  font-weight: var(${font_weight.FONT_WEIGHT_700_B});
`;

const Label: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <StyledLabel>{props.children}</StyledLabel>;
};

export default Label;
