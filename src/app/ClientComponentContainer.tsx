"use client";
import React from "react";
import GlobalStyle from "../styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import StyledComponentsRegistry from "./registry";
import StyledComponentsAntdRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";
interface ClientComponentContainerProps {
  children: React.ReactNode;
}
export default function ClientComponentContainer({
  children,
}: ClientComponentContainerProps) {
  return (
    <StyledComponentsRegistry>
      <StyledComponentsAntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "", // 기본설정 없애면 next.js 폰트설정이 적용됨
            },
          }}
        >
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </ConfigProvider>
      </StyledComponentsAntdRegistry>
    </StyledComponentsRegistry>
  );
}
