import { sortState } from "@/state/atom/atom";
import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
const Sort = () => {
  const [ascending, setAscending] = useRecoilState(sortState);

  const handleSortClick = () => {
    setAscending(ascending === "asc" ? "desc" : "asc"); // 정렬 상태 토글
  };

  return (
    <ButtonContainer onClick={handleSortClick}>
      <B2_M_14>매칭률</B2_M_14>
      <ArrowIconContainer isUp={ascending === "asc"}>
        <Image
          src={"/icons/down_arrow.svg"}
          alt={"아래화살표"}
          width={14}
          height={14}
        />
      </ArrowIconContainer>
    </ButtonContainer>
  );
};

export default Sort;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  & {
    color: var(${colors.PRIMARY_70});
  }
`;
const ArrowIconContainer = styled.div<{ isUp: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isUp }) => (isUp ? "scaleY(-1)" : "scaleY(1)")};
`;
