"use client";
import React from "react";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
import styled from "styled-components";
import { H1_B_24 } from "@/styles/stylesComponents/typographyComponents";
import { NewNoticeList } from "@/components/NewNotice/NewNoticeList";
import { PopRecruitList } from "@/components/PopRecruit/PopRecruitList";
import { PopTopicList } from "@/components/PopTopics/PopTopicList";

export default function Home() {
  return (
    <Main>
      <Text>dd</Text>
      <H1_B_24>안녕하세요</H1_B_24>
      <PopTopicList />
      <PopRecruitList />
      <NewNoticeList />
    </Main>
  );
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
