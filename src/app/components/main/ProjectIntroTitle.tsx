"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
export const ProjectIntroTitle = ({
  TitleA,
  TitleB,
  SeeMoreHref,
}: {
  TitleA: string;
  TitleB: string;
  SeeMoreHref: string;
}) => {
  return (
    <TitleContainer>
      <TitleAStyle>{TitleA}</TitleAStyle>
      <TitleBStyle>
        <TitleB1>{TitleB}</TitleB1>
        <SeeMoreLink href={SeeMoreHref}>더보기</SeeMoreLink>
      </TitleBStyle>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  width: 1060px;
`;

const TitleAStyle = styled.div`
  font-size: 24px;
  font-weight: 300;
`;

const TitleBStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const TitleB1 = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const SeeMoreLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #b3b3b3;
  text-decoration: none;
`;
