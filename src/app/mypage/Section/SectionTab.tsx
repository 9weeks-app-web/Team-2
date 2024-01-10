"use client";

import React, { useState } from "react";
import TabMenu from "@/components/TabMenu";
import { MyPortfolio } from "../components/MyPortfolio";
import { MyportfolioListData } from "@/constant/mock";
import { PortfolioProps } from "@/types";

type Props = {};

const SectionTab = (props: Props) => {
  const [listData, setListData] =
    useState<PortfolioProps[]>(MyportfolioListData);
  const tabData = [
    {
      title: "스팩폴리오",
      content: <MyPortfolio portfolioData={listData} />,
    },
    {
      title: "프로젝트",
      content: <div></div>,
    },
    {
      title: "커뮤니티",
      content: <div></div>,
    },
    {
      title: "학습일지",
      content: <div></div>,
    },
  ];
  return <TabMenu $border tabs={tabData} $padding="12px 73px" $gap="" />;
};

export default SectionTab;
