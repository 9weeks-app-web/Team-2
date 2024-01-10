"use client";
import Button from "@/components/Button";
import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import {
  H3_R_18,
  H3_SB_18,
} from "@/styles/stylesComponents/typographyComponents";
import React, { useState } from "react";
import styled from "styled-components";
import RecommenMemberModal from "./RecommenMemberModal";
import { _user } from "@/constant/_[project]mockup";
interface RecommendedTeamBannerProps {
  width: string;
  title: string;
}

const RecommendedTeamBanner: React.FC<RecommendedTeamBannerProps> = ({
  width = "49.375rem;",
  title = "업무 성향 재설문",
}) => {
  const userName = _user.name;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container $width={width}>
      {isModalOpen && (
        <RecommenMemberModal onClose={closeModal} userName={userName} />
      )}
      <RowWarp>
        <ImgWrap src="/icons/recommend/Recommend_Icon.svg"></ImgWrap>
        <TextWrap>
          <H3_R_18>내가 원하는 팀원의 업무 성향이 바뀌었나요?</H3_R_18>
          <H3_SB_18>
            1분 업무 성향 테스트하고 , 프로젝트 팀원을 새로 추천 받아보세요!
          </H3_SB_18>
        </TextWrap>
      </RowWarp>
      <Button title={title} width={"9.4375rem"} onClick={openModal} />
    </Container>
  );
};
export default RecommendedTeamBanner;

const Container = styled.div<{ $width: string }>`
  display: flex;
  margin-top: 2.25rem;

  width: ${(props) => props.$width};
  height: 6.875rem;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  gap: 1.25rem;

  border-radius: 0.625rem;
  border: 1.5px solid var(${colors.PRIMARY_20});
  background: var(${colors.BACKGROUND_BLUE});
`;
const RowWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

const ImgWrap = styled.img`
  width: 5.21181rem;
  height: 4.40019rem;
`;

const TextWrap = styled.div`
  ${flexColumn}
  align-items: flex-start;
  gap: 0.75rem;
`;
