"use client";
import React from "react";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { RecommendImage } from "./RecommendImage";
import styled from "styled-components";
import { portfolioRecommendData } from "@/constant/mock";
// import { RecommendCarousel } from "../HotCreatorCarousel";

export const Recommend = () => {
  return (
    <SectionContainer>
      <SectionTitle
        titleA="김평양님을 위한"
        titleB="맞춤 스팩폴리오 추천"
        linkUrl="#"
      />
      <PfImageContainer>
        {portfolioRecommendData &&
          portfolioRecommendData.map((el) => (
            <RecommendImage key={el.id} {...el} />
          ))}
      </PfImageContainer>
    </SectionContainer>
  );
};

const PfImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
