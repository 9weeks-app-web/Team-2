import React, { useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../../../components/Section/SectionHeader";
import MemberCard from "../MemberCard";
import { _membersData } from "../../../../constant/_[project]mockup";
import { SectionMemberRecommCategoryList } from "@/constant/category";
const SectionMemberRecomm: React.FC<{ user: User }> = ({ user }) => {
  // 페이지 상태 및 상수 설정
  const [currentPage, setCurrentPage] = useState<number>(0);
  const CARDS_PER_PAGE = 3; // 한 페이지에 보여질 카드의 수

  const currentMembers = _membersData.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  const totalPage = Math.floor(_membersData.length / 3 + 1);

  // 페이지 변경 함수
  const goToNextPage = () => {
    console.log(totalPage);
    setCurrentPage((prev) => {
      // 현재 페이지가 총 페이지 수보다 작을 경우에만 다음 페이지로 이동
      return prev < totalPage - 1 ? prev + 1 : prev;
    });
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <Section2>
      <SectionHeader
        headerText1={`${user.name} 님과 잘 맞는`}
        headerText2={"팀원을 추천해 드려요!"}
        seeMoreHref={""}
        categoryList={SectionMemberRecommCategoryList}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        currentPage={currentPage}
        totalPage={Math.floor(_membersData.length / 3 + 1)}
      ></SectionHeader>
      <ContentContainer>
        {currentMembers.map((member: Member) => (
          <MemberCard key={member.id} {...member} />
        ))}
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
