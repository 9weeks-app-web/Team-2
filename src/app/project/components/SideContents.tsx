"use client";
import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  B2_M_12,
  H1_SB_24,
} from "@/styles/stylesComponents/typographyComponents";
import React, { useState } from "react";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import { CardRadius } from "@/styles/stylesComponents/cardStyle";
import Category from "./SideCategory";

export const SideContents: React.FC<{ user: User }> = ({ user }) => {
  const [selectedProjectName, setSelectedProjectName] = useState<string>(
    user.myProjects[0].title
  );
  // 선택된 프로젝트 ID에 따른 멤버 데이터를 필터링하는 함수
  const getMembersByProjectId = (projectId: string): Member[] => {
    const project = user.myProjects.find((project) => project.id === projectId);
    return project ? project.members : [];
  };

  // 선택된 프로젝트의 멤버 데이터를 상태로 관리
  const [membersToShow, setMembersToShow] = useState<Member[]>(
    user.myProjects[0].members
  );

  // 프로젝트 카테고리 클릭 핸들러
  const handleProjectClick = (projectId: string, projectName: string) => {
    const members = getMembersByProjectId(projectId);
    setSelectedProjectName(projectId);
    setMembersToShow(members);
  };

  return (
    <SideContainer>
      <TopContentContainer>
        <B1_M_16>내 모든 프로젝트</B1_M_16>
        <TopContent>
          <div>
            <B2_M_12 className="gray">팀원 모집</B2_M_12>
            <H1_SB_24>{user.recruitingMembers.length}</H1_SB_24>
          </div>
          <div>
            <B2_M_12 className="gray">종료</B2_M_12>
            <H1_SB_24>19</H1_SB_24>
          </div>
        </TopContent>
      </TopContentContainer>

      <BtmContentContainer>
        <Title>
          <B1_M_16>팀원 평가</B1_M_16>
        </Title>
        <CategoryContainer>
          {user.myProjects.map((project, index) => (
            <Category
              key={project.id}
              index={index}
              onClick={() => handleProjectClick(project.id, project.title)}
            />
          ))}
        </CategoryContainer>
        <BtmContent>
          {membersToShow.map((member) => (
            <UserProfile
              key={member.id}
              member={member}
              handleEvaluation={() => {
                console.log("평가하기 클릭");
              }}
              projectName={selectedProjectName}
            />
          ))}
        </BtmContent>
      </BtmContentContainer>
    </SideContainer>
  );
};

export default SideContents;

const SideContainer = styled.div`
  margin-top: 5.63rem;
  margin-bottom: 5.91rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const TopContentContainer = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.12rem;
  ${CardRadius};
`;
const TopContent = styled.div`
  display: flex;
  gap: 0.5rem;
  & > div {
    flex: 1;
    border-radius: 0.5rem;
    background-color: var(${colors.BACKGROUND_5});
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.44rem;
  }
`;
const BtmContentContainer = styled.div`
  ${flexColumn}
  position: relative;
  /* overflow: hidden; */
`;
const Title = styled.div`
  margin-left: 1.25rem;
  margin-bottom: 3rem;
`;
const CategoryContainer = styled.div`
  display: flex;
  margin: 0 0.25rem;
  position: absolute;
  cursor: pointer;
  top: 35px;
`;

const BtmContent = styled.div`
  ${flexColumn}
  ${CardRadius};
  padding: 1.25rem;
  gap: 1rem;
  background-color: var(${colors.NEUTRAL_WHITE});
  z-index: 10;
`;
