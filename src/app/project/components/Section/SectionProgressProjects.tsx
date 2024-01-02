import React from "react";
import styled from "styled-components";
import BigCard from "../BigCard";
import SectionHeader from "../../../../components/Section/SectionHeader";

const SectionProgressProjects = () => {
  return (
    <Section1>
      <SectionHeader
        headerText1={"이닷코님의"}
        headerText2={"진행 중인 프로젝트"}
        seeMoreHref={"#"}
      ></SectionHeader>
      <ContentContainer>
        <BigCard></BigCard>
        <BigCard></BigCard>
        <BigCard></BigCard>
        <BigCard></BigCard>
      </ContentContainer>
    </Section1>
  );
};

export default SectionProgressProjects;

// Section1
const Section1 = styled.section`
  width: 49.25rem;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;
  margin-top: 1.5rem;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
