import { sortState } from "@/state/atom/atom";
import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
const Sort = () => {
  const [sorted, setSorted] = useRecoilState(sortState);
  const [selected, setSeleted] = useState("mating");

  const handleMatingClick = () => {
    setSorted("mating"); // 'mating'으로 정렬
    setSeleted("mating"); // 'mating'을 선택 상태로 설정
  };

  const handleDeadlineClick = () => {
    setSorted("deadline"); // 'deadline'으로 정렬
    setSeleted("deadline"); // 'deadline'을 선택 상태로 설정
  };
  return (
    <ButtonGropContainer>
      <ButtonContainer
        $selected={selected === "mating"}
        onClick={handleMatingClick}
      >
        <B2_M_14>• 매칭률</B2_M_14>
      </ButtonContainer>
      <ButtonContainer
        $selected={selected === "deadline"}
        onClick={handleDeadlineClick}
      >
        <B2_M_14>• 마감순</B2_M_14>
      </ButtonContainer>
    </ButtonGropContainer>
  );
};

export default Sort;

const ButtonGropContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  cursor: pointer;
  & {
  }
`;

const ButtonContainer = styled.div<{ $selected: boolean }>`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) =>
    props.$selected
      ? `var(${colors.NEUTRAL_90})`
      : `var(${colors.NEUTRAL_40})`};
`;
