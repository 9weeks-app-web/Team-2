"use client";
import React from "react";
import { Tabs, ConfigProvider } from "antd";
import type { TabsProps } from "antd";
import styled from "styled-components";

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
      token: { borderRadius: 0, colorBorder: "#B3B3B3", lineWidth: 0 },
      components: {
        Tabs: {
          cardBg: "#F9F9F9;",
          cardGutter: 8,
          itemColor: "#B3B3B3",
          itemSelectedColor: "#000",
          itemHoverColor: "#000",
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
    background-color: #f9f9f9;
    padding-top: 1em;
    padding-left: 16em;
  }
`;
