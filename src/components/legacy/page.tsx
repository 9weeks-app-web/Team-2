"use client";
import React from "react";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
import styled from "styled-components";
export default function Home() {
  return <div>Home</div>;
}
// 사용법
const Text = styled.p`
  font-size: var(${font_size.FONT_SIZE_20});
  color: var(${colors.PRIMARY_100});
  background-color: var(${colors.PRIMARY_30});
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
`;
