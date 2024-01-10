import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../../../../components/Section/SectionHeader";
import MemberCard from "./MemberCard";
import { _membersData } from "../../../../../constant/_[project]mockup";
import { useRecoilValue } from "recoil";
import { Member } from "../../../types/Member";
import { User } from "../../../types/User";
import { SectionMemberRecommCategoryState } from "../../../../../state/atom/atom";
import { SectionMemberRecommCategoryList } from "../../../../../constant/category";
import RecommendedTeamBanner from "../../../../../components/RecommendedMember/RecommendedTeamBanner";

// 한 페이지에 보여질 카드의 수
const CARDS_PER_PAGE = 3;

// 각 카테고리에 매칭되는 역할
const categoryRoleMap: { [key: string]: string | null } = {
  total: null,
  productManager: "기획자",
  designer: "디자이너",
  FEdeveloper: "프론트 개발자",
  BEdeveloper: "백엔드 개발자",
};

const SectionMemberRecomm: React.FC<{ user: User }> = ({ user }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const selectedCategory = useRecoilValue(SectionMemberRecommCategoryState);
  const [currentMembers, setCurrentMembers] = useState<Member[]>([]);

  // 선택된 카테고리에 따른 멤버 필터링 및 페이지 설정
  useEffect(() => {
    let filteredMembers = _membersData;

    if (selectedCategory !== "total") {
      filteredMembers = _membersData.filter(
        (member) => member.role === categoryRoleMap[selectedCategory]
      );
    }

    setTotalPage(Math.ceil(filteredMembers.length / CARDS_PER_PAGE));

    setCurrentMembers(
      filteredMembers.slice(
        currentPage * CARDS_PER_PAGE,
        (currentPage + 1) * CARDS_PER_PAGE
      )
    );
  }, [selectedCategory, currentPage]);

  // 페이지 변경 함수들
  const goToNextPage = () => {
    console.log(totalPage);
    setCurrentPage((prev) => {
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
        recoilState={SectionMemberRecommCategoryState}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        currentPage={currentPage}
        totalPage={totalPage}
        isPageNav={true}
      ></SectionHeader>
      <ContentContainer>
        {currentMembers.map((member: Member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </ContentContainer>
      <RecommendedTeamBanner />
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
