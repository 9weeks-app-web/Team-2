"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { Category } from "@/components/Category/Category";
import { PopularPortfolioImages } from "./PopularPortfolioImages";
import { useRecoilValue } from "recoil";
import { portFolioCategoryState } from "@/state/atom/atom";
import {
  PopularPortfolioImagesObjProps,
  PopularPortfolioImagesProps,
} from "@/types";
import { PopularPFImagesSkeleton } from "./PopularPFImagesSkeleton";

export const PopularPortfolio = () => {
  const [imagesInfo, setImagesInfo] =
    useState<PopularPortfolioImagesObjProps[]>();
  const portfolioValue = useRecoilValue(portFolioCategoryState);

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch(
        `http://localhost:3000/api/main/popularportfolio/${portfolioValue}`
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
        linkPath="#"
      />
      <Category
        categoryInfo={categoryInfo}
        recoilState={portFolioCategoryState}
      />
      {imagesInfo && <PopularPortfolioImages imagesInfo={imagesInfo} />}
      {!imagesInfo && <PopularPFImagesSkeleton />}
    </SectionContainer>
  );
};
const categoryInfo = [
  {
    title: "전체",
    name: "pfCategory",
    id: "pfRadio1",
    value: "total",
  },
  {
    title: "서비스 기획",
    name: "pfCategory",
    id: "pfRadio2",
    value: "serviceplan",
  },
  {
    title: "웹 기획",
    name: "pfCategory",
    id: "pfRadio3",
    value: "webplan",
  },
  {
    title: "앱 기획",
    name: "pfCategory",
    id: "pfRadio4",
    value: "appplan",
  },
  {
    title: "웹 디자인",
    name: "pfCategory",
    id: "pfRadio5",
    value: "webdesign",
  },
  {
    title: "앱 디자인",
    name: "pfCategory",
    id: "pfRadio6",
    value: "appdesign",
  },
];
