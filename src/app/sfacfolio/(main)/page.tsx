"use client";
import { Recommend } from "../components/RecommendPortfolio/Recommend";
import { SearchBarPortfolio } from "../components/SearchBarPortfolio";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { HotCreatorCarousel } from "../components/HotCreatorCarousel";
import { UploadButton } from "../components/Button/UploadButton";
import { portfolioListData } from "@/constant/mock";
import { pfPageCategoryState } from "@/state/atom/atom";
import { Category } from "@/components/Category/Category";
import { categoryPfPageList } from "@/constant/category";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
interface PortfolioProps {
  id: string;
  likes: number;
  bookmark: number;
  category: string;
  label: string;
  username: string;
  title: string;
  src: string;
  avatarSrc: string;
}
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
