"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import {
  B2_M_14,
  B2_G_14,
  H1_SB_24,
  B2_R_12,
} from "@/styles/stylesComponents/typographyComponents";

type TabItem = {
  title: string;
  content: React.ReactNode;
  $padding?: string;
  $gap?: string;
  $border?: boolean;
};

type TabMenuProps = {
  tabs: TabItem[];
  $border?: boolean;
  $gap?: string;
};

function TabMenu({
  tabs,
  $padding,
  $gap,
  $border,
}: TabMenuProps & { $padding?: string; $gap: string; $border: boolean }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabsContainer $gap={$gap} $border={$border}>
        {tabs.map((tab, index) => (
          <Tab
            $padding={tab.$padding || $padding || "auto"}
            key={index}
            $isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            <B2_M_14>{tab.title}</B2_M_14>
          </Tab>
        ))}
      </TabsContainer>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </>
  );
}

export default TabMenu;

const TabsContainer = styled.div<{
  $gap: string;
  $border: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap};
  border-bottom: ${({ $border }) => ($border ? `1px solid #EDEDED;` : `none`)};
`;

const Tab = styled.div<{ $isActive: boolean; $padding: string }>`
  padding: ${(props) => props.$padding};
  cursor: pointer;
  color: ${({ $isActive }) =>
    $isActive ? " #000" : `var(${colors.NEUTRAL_40})`};
  border-bottom: ${({ $isActive }) => ($isActive ? "2px solid #000" : "none")};
`;

const TabContent = styled.div`
  margin-top: 20px;
`;
