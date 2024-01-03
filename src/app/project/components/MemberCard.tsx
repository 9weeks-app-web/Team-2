import { CardRadius } from "@/components/Card/cardStyle";
import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
const MemberCard = () => {
  return (
    <MemberContainer>
      <ImgContainer></ImgContainer>
      <ProfileContainer>
        <Profile>
          <Avatar />
        </Profile>
        <TextBox>
          <B2_M_12>프로 리더형</B2_M_12>
          <p className="subTxt">기획자 | 김잇기</p>
        </TextBox>
        <InfoContainer>
          {/* 업무성향 */}
          <RowContainer>
            <B2_M_12 className="neutral20">업무성향</B2_M_12>
            <B2_M_12 className="neutral40">
              매칭률 <span className="neutral100">98%</span>
            </B2_M_12>
          </RowContainer>
          <WorkContainer>
            <Tag>
              <B2_M_12>계획은 필수예요</B2_M_12>
            </Tag>
            <Tag>
              <B2_M_12>계획은 필수예요</B2_M_12>
            </Tag>
            <Tag>
              <B2_M_12>계획은 필수예요</B2_M_12>
            </Tag>
            <Tag>
              <B2_M_12>계획은 필수예요</B2_M_12>
            </Tag>
            <Tag>
              <B2_M_12>계획은 필수예요</B2_M_12>
            </Tag>
            <Tag>
              <B2_M_12>계획은 필수예요</B2_M_12>
            </Tag>
          </WorkContainer>
          {/* 스킬 */}
          <B2_M_12 className="neutral20">스킬</B2_M_12>
          <SkillContainer>
            {/* @TODO 범위 초과시  외 몇명 구현해야됨 */}
            <Tag>
              <B2_M_12>Notion</B2_M_12>
            </Tag>
            <Tag>
              <B2_M_12>Slack</B2_M_12>
            </Tag>
            <Tag>
              <B2_M_12>Figma</B2_M_12>
            </Tag>
          </SkillContainer>
        </InfoContainer>
      </ProfileContainer>
    </MemberContainer>
  );
};

export default MemberCard;

const MemberContainer = styled.div`
  ${flexColumn};
  ${CardRadius};
  width: 15.6rem;
  height: 17.4rem;
  flex-shrink: 0;
`;
const ImgContainer = styled.div`
  display: flex;
  height: 5.25rem;
  padding: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  background: #ededed;
`;
const ProfileContainer = styled.div`
  position: relative;
`;
const Profile = styled.div`
  position: absolute;
  display: flex;

  top: -2rem;
  left: 0.75rem;
`;
const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 6.25rem;
  background: #d9d9d9;
`;
const TextBox = styled.div`
  position: absolute;
  ${flexColumn}
  padding: 0.38rem;
  gap: 0.25rem;
  left: 5rem;

  & > .subTxt {
    color: var(${colors.NEUTRAL_40});
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 0.625rem */
    letter-spacing: -0.0125rem;
  }
`;
const InfoContainer = styled.div`
  ${flexColumn}
  padding: 3.25rem 0.75rem 0.75rem 0.75rem;
  gap: 0.875rem;
  flex: 1 0 0;
  align-self: stretch;
  & .neutral20 {
    color: var(${colors.NEUTRAL_20});
  }
  & .neutral40 {
    color: var(${colors.NEUTRAL_40});
  }
  & .neutral100 {
    color: var(${colors.NEUTRAL_100});
  }
`;

const WorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  height: 3.25rem;
  overflow: hidden;
`;

const Tag = styled.div`
  display: flex;
  padding: 0.375rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Neutral-10, #e6e6e6);
  background: var(--Neutral-white, #fff);
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SkillContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;
