import React from "react";
import TabMenu from "@/components/TabMenu";
import MyProject from "../components/MyProject";
type Props = {};

const SectionTab = (props: Props) => {
  const tabData = [
    {
      title: "스팩폴리오",
      content: <MyProject />,
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
  return (
    <div>
      <TabMenu $border tabs={tabData} $padding="12px 73px" $gap="" />
    </div>
  );
};

export default SectionTab;
