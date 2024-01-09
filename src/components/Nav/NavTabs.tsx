"use client";
import React from "react";
import { Tabs, ConfigProvider } from "antd";
import type { TabsProps } from "antd";
import styled from "styled-components";
import { colors } from "@/styles/colors";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "스팩폴리오",
  },
  {
    key: "2",
    label: "스팩로그",
  },
];

export const NavTabs: React.FC = () => (
  <ConfigProvider
    theme={{
      token: { borderRadius: 6, colorBorder: "#B3B3B3", lineWidth: 0 },
      components: {
        Tabs: {
          cardGutter: 8,
          itemColor: `var(${colors.NEUTRAL_WHITE})`,
          itemSelectedColor: `var(${colors.PRIMARY_80})`,
          itemHoverColor: `var(${colors.NEUTRAL_WHITE})`,
        },
      },
    }}
  >
    <CustomTab onChange={onChange} type="card" items={items} />
  </ConfigProvider>
);

const CustomTab = styled(Tabs)`
  width: 100%;
  .ant-tabs-nav-wrap {
    background-color: var(${colors.PRIMARY_70});
    padding-top: 1em;
    padding-left: 16em;
  }
`;
