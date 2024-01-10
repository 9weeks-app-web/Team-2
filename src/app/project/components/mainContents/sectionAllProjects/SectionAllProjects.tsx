import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../../../components/Section/SectionHeader";
import Section3Card from "./ProjectCard";
import { _allprojects } from "../../../../../constant/_[project]mockup";
import { useRecoilValue } from "recoil";
import {
  SectionAllProjectsCategoryState,
  sortState,
} from "../../../../../state/atom/atom";
import { SectionAllProjectsCategoryList } from "../../../../../constant/category";
const SectionAllProjects = () => {
  // Recoil 정렬 상태에 따라 프로젝트 목록 정렬
  const sortOrder = useRecoilValue(sortState);
  const sortedProjects = React.useMemo(() => {
    return [..._allprojects].sort((a, b) => {
      if (sortOrder === "mating") {
        return b.workTendencyMatchingRate - a.workTendencyMatchingRate;
      } else {
        if (!a.recruitmentStatus) return 1;
        if (!b.recruitmentStatus) return -1;

        return (
          new Date(a.recruitmentStatus).getTime() -
          new Date().getTime() -
          (new Date(b.recruitmentStatus).getTime() - new Date().getTime())
        ); // 마감이 가까운 순으로 정렬
      }
    });
  }, [sortOrder, _allprojects]);

  // 카테고리 변환 로직
  const categoryRoleMap: { [key: string]: string | null } = {
    total: null,
    productManager: "기획자",
    designer: "디자이너",
    FEdeveloper: "프론트",
    BEdeveloper: "백엔드",
  };

  // 카테고리 로직
  //@TODO 없으면 데이터 없는 페이지 개발 필요
  const categoryState = useRecoilValue(SectionAllProjectsCategoryState);
  const filteredProjects = React.useMemo(() => {
    if (categoryState === "total") return sortedProjects;
    else {
      const role = categoryRoleMap[categoryState];
      return sortedProjects.filter(
        (project) => project.memberQuota[role!] !== undefined
      );
    }
  }, [categoryState, sortedProjects]);

  return (
    <Section3>
      <SectionHeader
        headerText2={"전체 프로젝트 공고"}
        seeMoreHref={""}
        isSort={true}
        categoryList={SectionAllProjectsCategoryList}
        recoilState={SectionAllProjectsCategoryState}
      ></SectionHeader>
      <ContentContainer>
        {filteredProjects.map((project) => {
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
