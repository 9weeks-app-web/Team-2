import React, { useState } from "react";
import PageNavController from "@/components/Section/PageNavController";
import { PortfolioCard } from "@/app/sfacfolio/components/Portfolio/PortfolioCard";
import styled from "styled-components";
import { flexColumn } from "@/components/Flex/flexStyle";
import { PortfolioProps } from "@/types";
import { MyportfolioListData } from "@/constant/mock";

export const MyPortfolio = ({}: {}) => {
  const [listData, setListData] =
    useState<PortfolioProps[]>(MyportfolioListData);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const totalPage = Math.ceil(listData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = listData.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => {
      return prev < totalPage - 1 ? prev + 1 : prev;
    });
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <PortfolioSection>
        <PortfolioContainer>
          {displayedItems.map((el, index) => (
            <PortfolioCard key={index} {...el} />
          ))}
        </PortfolioContainer>

        <PageNavController
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </PortfolioSection>
    </>
  );
};

const PortfolioContainer = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const PortfolioSection = styled.section`
  ${flexColumn}
  align-items: center;
  gap: 72px;
`;
