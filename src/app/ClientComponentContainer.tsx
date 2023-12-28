"use client";
import React from "react";
import GlobalStyle from "../styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import StyledComponentsRegistry from "./registry";

interface ClientComponentContainerProps {
  children: React.ReactNode;
}
export default function ClientComponentContainer({
  children,
}: ClientComponentContainerProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
