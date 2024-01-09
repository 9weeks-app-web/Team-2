"use client";
import React from "react";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { PortfolioCard } from "./PortfolioCard";
import styled from "styled-components";
//임시
interface PortfolioProps {
  id: string;
  likes: number;
  bookmark: number;
  category: string;
  label: string;
  username: string;
  title: string;
  src: string;
  avatarSrc: string;
}
export const Portfolio = ({
  portfolioData,
}: {
  portfolioData: PortfolioProps[];
}) => {
  return (
    <SectionContainer>
      <PortfolioContainer>
        {portfolioData.map((el) => (
          <PortfolioCard key={el.id} {...el} />
        ))}
      </PortfolioContainer>
    </SectionContainer>
  );
};

const PortfolioContainer = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
