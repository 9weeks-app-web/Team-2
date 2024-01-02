import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../../components/Section/SectionHeader";
const SectionAllProjects = () => {
  return (
    <Section3>
      <SectionHeader
        headerText2={"전체 프로젝트 공고"}
        seeMoreHref={""}
        categoryList={[]}
      ></SectionHeader>
    </Section3>
  );
};

export default SectionAllProjects;

const Section3 = styled.section``;
