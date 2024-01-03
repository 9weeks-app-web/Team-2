import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../../components/Section/SectionHeader";
import Section3Card from "../Section3Card";
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
  return (
    <Section3>
      <SectionHeader
        headerText2={"전체 프로젝트 공고"}
        seeMoreHref={""}
        filterList={filterList}
      ></SectionHeader>
      <ContentContainer>
        <Section3Card />
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
