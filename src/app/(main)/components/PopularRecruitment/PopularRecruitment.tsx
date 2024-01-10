"use client";
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
import { JobcategoryVerticalList } from "@/constant/category";
import { CategoryVertical } from "@/components/Category/CategoryVertical";
export const PopularRecruitment = () => {
  const recruitmentValue = useRecoilValue(RecruitmentCategoryState);
  const [recruitmentInfo, setRecruitmentInfo] =
    useState<PopularRecruitmentObjProps[]>();
  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch(
        `/api/main/popularrecruitment/${recruitmentValue}`
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
        <SectionTitle linkUrl="#" titleB="직무별 인기 채용 공고" />
        <FlexRow>
          <CategoryVertical
            categoryInfo={JobcategoryVerticalList}
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
