"use client";
import { Recommend } from "../components/RecommendPortfolio/Recommend";
import { SearchBarPortfolio } from "../components/SearchBarPortfolio";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { HotCreatorCarousel } from "../components/HotCreator/HotCreatorCarousel";
import { UploadButton } from "../components/Button/UploadButton";
import { portfolioListData } from "@/constant/mock";
import { pfPageCategoryState } from "@/state/atom/atom";
import { Category } from "@/components/Category/Category";
import { categoryPfPageList } from "@/constant/category";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { PortfolioProps } from "@/types";

const Page = () => {
  const [listData, setListData] = useState<PortfolioProps[]>(portfolioListData);
  const categoryValue = useRecoilValue(pfPageCategoryState);
  // console.log(listData);
  useEffect(() => {
    // console.log(categoryValue);
    if (categoryValue === "total") {
      setListData(() => portfolioListData);
    } else {
      setListData(() =>
        portfolioListData.filter((el) => el.category === categoryValue)
      );
    }
  }, [categoryValue]);
  return (
    <div>
      <Recommend />;
      <SearchBarPortfolio />
      <CategoryWrapper>
        <Category
          categoryInfo={categoryPfPageList}
          recoilState={pfPageCategoryState}
        />
      </CategoryWrapper>
      {listData && <Portfolio portfolioData={listData.slice(0, 8)} />}
      <HotCreatorCarousel />
      {listData && <Portfolio portfolioData={listData.slice(8, 24)} />}
      <UploadButton />
    </div>
  );
};

export default Page;

const CategoryWrapper = styled.div`
  width: 1060px;
  margin: auto;
`;
