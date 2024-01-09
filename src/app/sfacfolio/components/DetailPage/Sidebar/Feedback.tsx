import { colors } from "@/styles/colors";
import { H3_SB_18 } from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";

export const Feedback = () => {
  return (
    <FeedBackContainer>
      <FeebackHeader>
        <FeedbackTitle>김아영 님에게 피드백을 남겨보세요!</FeedbackTitle>
        <FeedbackInput placeholder="키워드를 입력하세요" />
      </FeebackHeader>
      <FeedbackButton>완료하기</FeedbackButton>
    </FeedBackContainer>
  );
};

const FeedBackContainer = styled.div`
  position: absolute;
  right: 130px;
  bottom: -200px;
  display: flex;
  width: 358px;
  height: 528px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 24px;
  background: #fff;
`;
const FeebackHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  align-self: stretch;
`;
const FeedbackTitle = styled(H3_SB_18)`
  color: var(${colors.NEUTRAL_100});
`;

const FeedbackInput = styled.input.attrs({ type: "text" })`
  display: flex;
  padding: 14px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--stroke-line-grey, #e6e6e6);
`;

const FeedbackButton = styled.button`
  display: flex;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid var(--Primary-50, #7facff);
  background: var(--Background-Blue, #f5f8ff);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: var(--Primary-50, #7facff);
  text-align: center;
  cursor: pointer;
`;
