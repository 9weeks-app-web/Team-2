"use client";
import React from "react";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { PortfolioCard } from "./PortfolioCard";
import styled from "styled-components";
import { PortfolioProps } from "@/types";

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
