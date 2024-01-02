import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import {
  B2_M_14,
  H3_M_18,
} from "@/styles/stylesComponents/typographyComponents";
import { font_weight } from "@/styles/typography";
import React from "react";
import styled from "styled-components";
const BigCard = () => {
  return (
    <CardContainer>
      <CardInfo>
        <AvatarContainer>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
        </AvatarContainer>
        <TextContainer>
          <H3_M_18>포트폴리오 아카이빙 서비스 개발</H3_M_18>
          <B2_M_14 className="sub">Team. YooHoo</B2_M_14>
        </TextContainer>
      </CardInfo>
    </CardContainer>
  );
};

export default BigCard;

const CardContainer = styled.div`
  flex-shrink: 0;
  ${flexColumn}
  position: relative;
  /* align-items: flex-end;
  align-content: flex-end;
  justify-content: space-between; */
  row-gap: 16.0625rem;
  padding: 1.25rem;
  height: 22.5rem;
  width: 35rem;
  border-radius: 0.625rem;
  background-color: #ededed;
`;

const CardInfo = styled.div`
  display: flex;
  gap: 0.62rem;
  position: absolute;
  bottom: 1.25rem;
`;

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid #bcbcbc;
  background: #d1d1d1;
  &:not(:first-child) {
    margin-left: -1.75rem; /* 겹치는 정도를 조절 */
  }
`;

const TextContainer = styled.div`
  ${flexColumn}
  gap: 0.25rem;
  justify-content: center;

  & > .sub {
    color: var(${colors.NEUTRAL_20});
  }
`;
