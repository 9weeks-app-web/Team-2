import { colors } from "@/styles/colors";
import {
  B2_M_14,
  B2_R_14,
} from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";

interface PageNavControllerProps {
  goToNextPage: () => void;
  goToPrevPage: () => void;
  currentPage: number;
  totalPage: number;
}

/** 페이지네비게이션
 * 사용할페이지의 현재페이지 , 전체페이지 , 이전페이지, 다음페이지 를 Props 로 넘겨주면된다.
 */

const PageNavController: React.FC<PageNavControllerProps> = ({
  goToNextPage,
  goToPrevPage,
  currentPage,
  totalPage,
}) => {
  return (
    <PageNavContainer>
      <Wrap>
        <Btn onClick={goToPrevPage}>{"<"}</Btn>
        <TextBox>
          <B2_M_14>{currentPage + 1}</B2_M_14>
          <B2_R_14 className="gray">/</B2_R_14>
          <B2_R_14 className="gray">{totalPage}</B2_R_14>
        </TextBox>
        <Btn onClick={goToNextPage}>{">"}</Btn>
      </Wrap>
    </PageNavContainer>
  );
};

export default PageNavController;

const PageNavContainer = styled.div`
  display: flex;
  align-items: start;
`;

const Wrap = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const Btn = styled.div`
  display: flex;
  width: 1.875rem;
  height: 1.875rem;
  padding: 0.5rem 0.8125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid var(--Neutral-10, #e6e6e6);
  color: var(${colors.PRIMARY_50});
  background: #fff;
  cursor: pointer;
`;
const TextBox = styled.div`
  display: flex;
  gap: 0.25rem;

  & > .gray {
    color: var(${colors.NEUTRAL_30});
  }
`;
