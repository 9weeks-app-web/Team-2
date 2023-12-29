"use client";
import React from "react";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
import styled from "styled-components";
import { H1_B_24 } from "@/styles/stylesComponents/typographyComponents";

import { CustomCarousel } from "@/components/CustomCarousel";
import { ProjectIntro } from "./components/main/ProjectIntro";
import { FindMyTeam } from "./components/main/FindMyTeam";
import { CategoryVetical } from "@/components/Category/CategoryVetical";
export default function Home() {
  return (
    <>
      <CustomCarousel />
      <ProjectIntro />
      <FindMyTeam />
      <div style={{ margin: "auto", width: "500px" }}>
        <CategoryVetical />
      </div>
      <Text>dd</Text>
      <H1_B_24>안녕하세요</H1_B_24>
    </>
  );
}
// 사용법
const Text = styled.p`
  font-size: var(${font_size.FONT_SIZE_20});
  color: var(${colors.PRIMARY_100});
  background-color: var(${colors.PRIMARY_30});
`;
