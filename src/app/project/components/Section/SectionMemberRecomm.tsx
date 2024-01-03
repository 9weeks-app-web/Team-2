import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../../components/Section/SectionHeader";
import MemberCard from "../MemberCard";
const SectionMemberRecomm = () => {
  const categoryList = [
    {
      title: "전체",
      name: "total",
      id: "radioButton1",
      value: "total",
    },
    {
      title: "기획자",
      name: "productManager",
      id: "radioButton2",
      value: "productManager",
    },
    {
      title: "디자이너",
      name: "designer",
      id: "radioButton3",
      value: "designer",
    },
    {
      title: "개발자",
      name: "developer",
      id: "radioButton4",
      value: "developer",
    },
  ];

  return (
    <Section2>
      <SectionHeader
        headerText1={"이닷코 님과 잘 맞는"}
        headerText2={"팀원을 추천해 드려요!"}
        seeMoreHref={""}
        categoryList={categoryList}
      ></SectionHeader>
      <ContentContainer>
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </ContentContainer>
    </Section2>
  );
};
export default SectionMemberRecomm;

const Section2 = styled.section``;

const ContentContainer = styled.div`
  width: 49.375rem;
  display: flex;
  gap: 1.25rem;
  flex-wrap: nowrap;
  overflow: hidden;
  
`;
