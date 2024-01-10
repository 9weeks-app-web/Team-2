import React from "react";
import TabMenu from "@/components/TabMenu";
import { MyPortfolio } from "../../MyPortfolio";
import MyProject from "../../MyProject";
import MyCommunity from "../../MyCommunity";
const TabBody = () => {
  const tabData = [
    {
      title: "스팩폴리오",
      content: <MyPortfolio />,
    },
    {
      title: "프로젝트",
      content: <MyProject />,
    },
    {
      title: "커뮤니티",
      content: <MyCommunity />,
    },
    {
      title: "학습일지",
      content: <div></div>,
    },
  ];

  return (
    <>
      <TabMenu $border tabs={tabData} $padding="12px 73px" $gap="" header />
    </>
  );
};

export default TabBody;
