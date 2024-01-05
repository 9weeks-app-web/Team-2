import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../../components/Section/SectionHeader";
import Section3Card from "../ProjectCard";
import { _allprojects } from "../../data/mockupData";
import { useRecoilValue } from "recoil";
import { sortState } from "../../state/\bsortState";
const SectionAllProjects = () => {
  const sortOrder = useRecoilValue(sortState);

  // Recoil 정렬 상태에 따라 프로젝트 목록 정렬
  const sortedProjects = React.useMemo(() => {
    return [..._allprojects].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.workTendencyMatchingRate - b.workTendencyMatchingRate;
      } else {
        return b.workTendencyMatchingRate - a.workTendencyMatchingRate;
      }
    });
  }, [sortOrder, _allprojects]);

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
        {sortedProjects.map((project) => {
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
