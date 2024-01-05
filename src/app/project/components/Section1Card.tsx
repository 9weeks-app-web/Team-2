import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import {
  B2_M_14,
  H3_M_18,
} from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
const Section1Card: React.FC<{ project: MyProject }> = ({ project }) => {
  return (
    <CardContainer style={{ backgroundImage: `url(${project.coverImg})` }}>
      <CardInfo>
        <AvatarContainer>
          {project.members.map((member) => {
            return <Avatar key={member.id} imgPath={member.avatarImage} />;
          })}
        </AvatarContainer>
        <TextContainer>
          <H3_M_18>{project.title}</H3_M_18>
          <B2_M_14 className="sub">{`Team. ${project.teamName}`}</B2_M_14>
        </TextContainer>
      </CardInfo>
    </CardContainer>
  );
};

export default Section1Card;

const CardContainer = styled.div`
  flex-shrink: 0;
  ${flexColumn}
  position: relative;
  row-gap: 16.0625rem;
  padding: 1.25rem;
  height: 22.5rem;
  width: 35rem;
  border-radius: 0.625rem;
  background-color: #ededed;
  background-size: cover;
  background-position: center; // 배경 이미지가 중앙에 위치하도록 설정
`;
const CoverImg = styled.img``;

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

const TextContainer = styled.div`
  ${flexColumn}
  gap: 0.25rem;
  justify-content: center;

  & > .sub {
    color: var(${colors.NEUTRAL_20});
  }
`;
