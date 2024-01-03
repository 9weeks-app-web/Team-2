import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
const Sort = () => {
  return (
    <ButtonContainer>
      <B2_M_14>매칭률</B2_M_14>
      <Image
        src={"/icons/down_arrow.svg"}
        alt={"아래화살표"}
        width={14}
        height={14}
      ></Image>
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
  & {
    color: var(${colors.PRIMARY_70});
  }
`;
