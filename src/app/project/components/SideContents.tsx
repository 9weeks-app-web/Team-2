"use client";
import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  B2_M_12,
  H1_SB_24,
} from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import { CardRadius } from "@/components/Card/cardStyle";
import Category from "./SideCategory";

export const SideContents = () => {
  return (
    <SideContainer>
      <TopContentContainer>
        <B1_M_16>내 모든 프로젝트</B1_M_16>
        <TopContent>
          <div>
            <B2_M_12 className="gray">팀원 모집</B2_M_12>
            <H1_SB_24>1</H1_SB_24>
          </div>
          <div>
            <B2_M_12 className="gray">종료</B2_M_12>
            <H1_SB_24>19</H1_SB_24>
          </div>
        </TopContent>
      </TopContentContainer>

      <BtmContentContainer>
        <Title>
          <B1_M_16>팀원 평가</B1_M_16>
        </Title>
        <CategoryContainer>
          <Category></Category>
          <Category></Category>
        </CategoryContainer>
        <BtmContent>
          <UserProfile
            imageUrl={"IMG"}
            userName={"김연주"}
            onFollow={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </BtmContent>
      </BtmContentContainer>
    </SideContainer>
  );
};

export default SideContents;

const SideContainer = styled.div`
  margin-top: 5.63rem;
  margin-bottom: 5.91rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const TopContentContainer = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.12rem;
  ${CardRadius};
`;
const TopContent = styled.div`
  display: flex;
  gap: 0.5rem;
  & > div {
    flex: 1;
    border-radius: 0.5rem;
    background-color: var(${colors.BACKGROUND_5});
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.44rem;
  }
`;
const BtmContentContainer = styled.div`
  ${flexColumn}
  position: relative;
  /* overflow: hidden; */
`;
const Title = styled.div`
  margin-left: 1.25rem;
  margin-bottom: 3rem;
`;
const CategoryContainer = styled.div`
  display: flex;
  margin: 0 0.25rem;
  position: absolute;
  top: 35px;
`;

const BtmContent = styled.div`
  ${flexColumn}
  ${CardRadius};
  padding: 1.25rem;
  gap: 1rem;
  background-color: var(${colors.NEUTRAL_WHITE});
  z-index: 10;
`;
