"use client";
import React from "react";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { NewsCard } from "./NewsCard";
import styled from "styled-components";
export const News = () => {
  const notices = [
    {
      label: "News",
      heading: "실시간 해외주식 정보제공 서비스,“장전” 정식 오픈",
      company: "와이엠에스닷코",
      time: "2023-12-21",
      imageUrl: "/newsImg/newsImg1.png",
    },
    {
      label: "Project",
      heading: "네이버쇼핑 쿠폰북 프로모션 디자인",
      company: "스튜디오 제이티",
      time: "2023-12-22",
      imageUrl: "/newsImg/newsImg2.png",
    },
    {
      label: "Service",
      heading: "카카오클라우드,AWD 협업 확대로 클라우드 고도화",
      company: "카카오엔터프라이즈",
      time: "2023-12-23",
      imageUrl: "/newsImg/newsImg3.png",
    },
  ];
  return (
    <SectionContainer>
      <SectionTitle
        titleA="기업 · 에이전시 NEW 소식"
        titleB="관심있는 곳의 최신 경향을 확인해 보세요!"
        linkPath="#"
      />
      <Body>
        {notices.map((notice, index) => (
          <NewsCard key={index} {...notice} />
        ))}
      </Body>
    </SectionContainer>
  );
};
const Body = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0;
`;
