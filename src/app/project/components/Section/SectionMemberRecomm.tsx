import React, { useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../../../components/Section/SectionHeader";
import MemberCard from "../MemberCard";

// MemberCard 데이터 배열 예시(가정)
const membersData: Member[] = [
  {
    id: 1,
    avatarImage: "",
    coverImage: "",
    name: "김아영",
    type: "예리한 분석가형",
    role: "개발자",
    workTendency: ["통찰력있는", "계획적인", "주도적인", "관찰력이뛰어난"],
    skills: ["notion", "slack"],
  },
  {
    id: 2,
    avatarImage: "",
    coverImage: "",
    name: "전여빈",
    type: "프로 리더형",
    role: "디자이너",
    workTendency: ["추진력 있는", "전략적인", "주도적인", "통제를 잘하는"],
    skills: ["notion", "Figma", "Photoshop", "React", "여러가지"],
  },
  {
    id: 3,
    avatarImage: "",
    coverImage: "",
    name: "전여빈",
    type: "프로 리더형",
    role: "디자이너",
    workTendency: ["추진력 있는", "전략적인", "주도적인", "통제를 잘하는"],
    skills: ["notion", "Figma", "Photoshop", "React", "여러가지"],
  },
  {
    id: 4,
    avatarImage: "",
    coverImage: "",
    name: "전여빈",
    type: "프로 리더형",
    role: "디자이너",
    workTendency: ["추진력 있는", "전략적인", "주도적인", "통제를 잘하는"],
    skills: ["notion", "Figma", "Photoshop", "React", "여러가지"],
  },
];

const SectionMemberRecomm = () => {
  // 섹션 2 팀원추천 페이지에 필요한 카테고리 목업 데이터
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

  // 페이지 상태 및 상수 설정
  const [currentPage, setCurrentPage] = useState<number>(0);
  const CARDS_PER_PAGE = 3; // 한 페이지에 보여질 카드의 수

  const currentMembers = membersData.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  const firstPage = 1;
  const totalPage = Math.floor(membersData.length / 3 + 1);

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
        headerText1={"이닷코 님과 잘 맞는"}
        headerText2={"팀원을 추천해 드려요!"}
        seeMoreHref={""}
        categoryList={categoryList}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        currentPage={currentPage}
        totalPage={Math.floor(membersData.length / 3 + 1)}
      ></SectionHeader>
      <ContentContainer>
        {currentMembers.map((member: Member) => (
          <MemberCard key={member.id} {...member} />
        ))}
        {/* <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard /> */}
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
