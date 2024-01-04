import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../../components/Section/SectionHeader";
import Section3Card from "../ProjectCard";
const SectionAllProjects = () => {
  const filterList = [
    {
      title: "직무",
      id: 1,
    },
    {
      title: "상세직무",
      id: 2,
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "기 개발된 사이트의 고도화 디자인, 개발",
      description:
        "이미 운영 중인 인지 훈련 웹사이트가 있고, 그 내용을 어플로 제작하고 싶습니다. 보유 중인 소스코드는 없으며, 모바일 기획부터 어려움을 느껴",
      // recruitmentStatus: null,
      recruitmentPeriod: "1주",
      memberQuota: { 프론트: 2, 디자이너: 3 },
      currentMemberCount: 3,
      totalMemberCount: 4,
      workTendencyMatchingRate: 98,
    },
    {
      id: 2,
      title: "새로운 모바일 앱 UI/UX 디자인",
      description:
        "혁신적인 사용자 경험을 제공할 모바일 앱의 UI/UX 디자인 프로젝트입니다. 사용자 중심의 디자인을 추구하며, 창의적인 아이디어가 많은 디자이너를 기다립니다.",
      recruitmentStatus: new Date(
        new Date().getTime() + 5 * 24 * 60 * 60 * 1000
      ), // 5일 후
      recruitmentPeriod: "2주",
      memberQuota: { 프론트: 1, 디자이너: 2 },
      currentMemberCount: 1,
      totalMemberCount: 3,
      workTendencyMatchingRate: 92,
    },
    {
      id: 3,
      title: "웹 기반 데이터 분석 플랫폼 개발",
      description:
        "데이터 분석을 위한 웹 기반 플랫폼 개발 프로젝트입니다. 빅데이터 처리와 분석에 관심이 있는 백엔드 개발자와 데이터 과학자를 찾고 있습니다.",
      recruitmentStatus: new Date(
        new Date().getTime() + 10 * 24 * 60 * 60 * 1000
      ), // 10일 후
      recruitmentPeriod: "3주",
      memberQuota: { 백엔드: 2, 데이터과학자: 1 },
      currentMemberCount: 2,
      totalMemberCount: 3,
      workTendencyMatchingRate: 85,
    },
  ];
  return (
    <Section3>
      <SectionHeader
        headerText2={"전체 프로젝트 공고"}
        seeMoreHref={""}
        filterList={filterList}
      ></SectionHeader>
      <ContentContainer>
        {projects.map((project) => {
          return <Section3Card key={project.id} project={project} />;
        })}
      </ContentContainer>
    </Section3>
  );
};

export default SectionAllProjects;

const Section3 = styled.section``;
const ContentContainer = styled.div`
  display: flex;
  width: 49.375rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 1.25rem;
  flex-wrap: wrap;
`;
