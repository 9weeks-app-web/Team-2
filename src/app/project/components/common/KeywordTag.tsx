import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import React, { useState } from "react";
import styled from "styled-components";

interface KeywordTagProps {
  title: string;
  onClick: (keyword: string, isSelected: boolean) => void;
  isLimitReached: boolean;
}

const KeywordTag: React.FC<KeywordTagProps> = ({
  title,
  onClick,
  isLimitReached,
}) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (!selected && isLimitReached) {
      return;
    }
    setSelected(!selected);
    onClick(title, !selected);
  };

  return (
    <KeywordTagWrap onClick={handleClick} $selected={selected}>
      <B2_M_14>{title}</B2_M_14>
    </KeywordTagWrap>
  );
};

export default KeywordTag;

const KeywordTagWrap = styled.div<{ $selected: boolean }>`
  display: flex;
  padding: 0.625rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  border: 1px solid var(--stroke-line-grey, #e6e6e6);
  background: ${(props) =>
    props.$selected
      ? `var(${colors.PRIMARY_70})`
      : `var(${colors.NEUTRAL_WHITE})`};
  color: ${(props) =>
    props.$selected
      ? `var(${colors.NEUTRAL_WHITE})`
      : `var(${colors.NEUTRAL_60})`};
  cursor: pointer;
`;
