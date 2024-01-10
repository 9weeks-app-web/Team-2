"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { Category } from "@/components/Category/Category";
import { PopularPortfolioImages } from "./PopularPortfolioImages";
import { useRecoilValue } from "recoil";
import { portFolioCategoryState } from "@/state/atom/atom";
import { PopularPortfolioImagesObjProps } from "@/types";
import { PopularPFImagesSkeleton } from "./PopularPFImagesSkeleton";
import { popularPortfolioCategoryList } from "@/constant/category";
import styled from "styled-components";

export const PopularPortfolio = () => {
  const [imagesInfo, setImagesInfo] =
    useState<PopularPortfolioImagesObjProps[]>();
  const portfolioValue = useRecoilValue(portFolioCategoryState);

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch(
        `/api/main/popularportfolio/${portfolioValue}`
      );
      if (!response.ok) {
        throw Error("something went wrong, please check again portfolio value");
      }
      const result = await response.json();
      setImagesInfo(result.result);
    };
    fetchFn();
  }, [portfolioValue]);

  return (
    <SectionContainer>
      <SectionTitle
        titleA="2023년 1월"
        titleB="이 달의 BEST 포트폴리오"
        linkUrl="#"
      />
      <CategoryWrapper>
        <Category
          categoryInfo={popularPortfolioCategoryList}
          recoilState={portFolioCategoryState}
        />
      </CategoryWrapper>
      {imagesInfo && <PopularPortfolioImages imagesInfo={imagesInfo} />}
      {!imagesInfo && <PopularPFImagesSkeleton />}
    </SectionContainer>
  );
};

const CategoryWrapper = styled.div`
  margin-bottom: 24px;
`;
