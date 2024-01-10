import React, { useState, useEffect } from "react";
import PageNavController from "@/components/Section/PageNavController";
import { PortfolioCard } from "@/app/sfacfolio/components/Portfolio/PortfolioCard";
import styled from "styled-components";
import InterestButton from "@/app/auth/components/InterestButton";
import { H1_SB_24 } from "@/styles/stylesComponents/typographyComponents";
import { flexColumn } from "@/components/Flex/flexStyle";
import { PortfolioProps } from "@/types";
import Image from "next/image";

export const MyPortfolio = ({
  portfolioData,
}: {
  portfolioData: PortfolioProps[];
}) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const totalPage = Math.ceil(portfolioData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = portfolioData.slice(startIndex, endIndex);

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
      <PortfolioHeader>
        <Title>
          <H1_SB_24>내 스팩폴리오</H1_SB_24>
          <Image
            src={"/authImg/arrow.svg"}
            alt="자세히 보기"
            width={24}
            height={24}
          />
        </Title>
        <InterestButton
          label="업로드"
          variant="active"
          size="ss"
          $borderRadius="10"
          imagePath="/authImg/write.svg"
          imageSize="14"
        />
      </PortfolioHeader>
      <PortfolioSection>
        <PortfolioContainer>
          {displayedItems.map((el) => (
            <PortfolioCard key={el.id} {...el} />
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

const PortfolioHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
  button {
    display: flex;
    gap: 4px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
