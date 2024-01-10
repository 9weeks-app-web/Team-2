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
import { useRecoilValue } from "recoil";
import { _user } from "@/constant/_[project]mockup";

const RecommendedTeamBanner = () => {
  const userName = _user.name;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      {isModalOpen && (
        <RecommenMemberModal onClose={closeModal} userName={userName} />
      )}

      <ImgWrap src="/icons/recommend/Recommend_Icon.svg"></ImgWrap>
      <TextWrap>
        <H3_R_18>내가 원하는 팀원의 업무 성향이 바뀌었나요?</H3_R_18>
        <H3_SB_18>
          1분 업무 성향 테스트하고 , 프로젝트 팀원을 새로 추천 받아보세요!
        </H3_SB_18>
      </TextWrap>
      <Button
        title={"업무 성향 재설정"}
        width={"9.4375rem"}
        onClick={openModal}
      />
    </Container>
  );
};
export default RecommendedTeamBanner;

const Container = styled.div`
  display: flex;
  margin-top: 2.25rem;

  width: 49.375rem;
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

const ImgWrap = styled.img`
  width: 5.21181rem;
  height: 4.40019rem;
`;

const TextWrap = styled.div`
  ${flexColumn}
  align-items: flex-start;
  gap: 0.75rem;
`;
