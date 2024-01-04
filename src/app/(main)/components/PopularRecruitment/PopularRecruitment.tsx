"use client";
import { CategoryVetical } from "@/components/Category/CategoryVetical";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { colors } from "@/styles/colors";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PopularRecruitmentCard } from "./PopularRecruitmentCard";
import { PopularRecruitmentCarousel } from "./PopularRecruitmentCarousel";
import { RecruitmentCategoryState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";
import { PopularRecruitmentObjProps } from "@/types";
export const PopularRecruitment = () => {
  const recruitmentValue = useRecoilValue(RecruitmentCategoryState);
  const [recruitmentInfo, setRecruitmentInfo] =
    useState<PopularRecruitmentObjProps[]>();
  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch(
        `http://localhost:3000/api/main/popularrecruitment/${recruitmentValue}`
      );
      if (!response.ok) {
        throw Error("something went wrong, please check again portfolio value");
      }
      const result = await response.json();
      setRecruitmentInfo(result.result);
    };
    fetchFn();
  }, [recruitmentValue]);
  return (
    <Container>
      <SectionContainer>
        <SectionTitle linkPath="#" titleB="직무별 인기 채용 공고" />
        <FlexRow>
          <CategoryVetical
            categoryInfo={categoryVerticalInfo}
            recoilState={RecruitmentCategoryState}
          />
          {recruitmentInfo && (
            <PopularRecruitmentCarousel recruitmentInfo={recruitmentInfo} />
          )}
          <Mask />
        </FlexRow>
      </SectionContainer>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  background-color: var(${colors.NEUTRAL_5});
  padding: 36px 0 36px;
  margin-bottom: 50px;
`;

const Mask = styled.div`
  display: block;
  width: 88px;
  height: 182px;
  position: absolute;
  background: linear-gradient(
    277deg,
    #f3f3f3 5.4%,
    rgba(255, 255, 255, 0) 101.14%
  );
  /* background-color: blue; */
  z-index: 1;
  right: 0;
`;

const FlexRow = styled.div`
  display: flex;
  position: relative;
`;
const categoryVerticalInfo = [
  {
    id: "verticalButton1",
    name: "verticalCategory",
    title: "서비스 기획자",
    value: "planner",
  },
  {
    id: "verticalButton2",
    name: "verticalCategory",
    title: "디자이너",
    value: "designer",
  },
  {
    id: "verticalButton3",
    name: "verticalCategory",
    title: "프론트 개발자",
    value: "frontend",
  },
  {
    id: "verticalButton4",
    name: "verticalCategory",
    title: "백엔드 개발자",
    value: "backend",
  },
];
