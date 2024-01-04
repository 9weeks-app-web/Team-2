import { Category } from "@/components/Category/Category";
import { flexColumn } from "@/components/Flex/flexStyle";
import {
  H1_L_24,
  H1_SB_24,
} from "@/styles/stylesComponents/typographyComponents";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import PageNavController from "./PageNavController";
import Filter from "@/app/project/components/Filter";
import Sort from "@/app/project/components/Sort";

const SectionHeader = ({
  headerText1,
  headerText2,
  seeMoreHref,
  categoryList,
  currentPage,
  totalPage,
  filterList,
  goToNextPage,
  goToPrevPage,
}: SectionHeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <Header>
          {headerText1 ? <H1_L_24>{headerText1}</H1_L_24> : null}
          <H1_SB_24>{headerText2}</H1_SB_24>
        </Header>
        {seeMoreHref ? (
          <SeeMoreLink href={seeMoreHref}>더보기</SeeMoreLink>
        ) : null}
      </HeaderContainer>
      {categoryList ? (
        <MenuPanelContainer>
          <Category categoryList={categoryList}></Category>
          <PageNavController
            goToNextPage={goToNextPage!}
            goToPrevPage={goToPrevPage!}
            currentPage={currentPage!}
            totalPage={totalPage!}
          />
        </MenuPanelContainer>
      ) : null}

      {filterList ? (
        <FilterMenuPanelContainer>
          <Filter filterList={filterList} />
          <Sort />
        </FilterMenuPanelContainer>
      ) : null}
    </>
  );
};

export default SectionHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.div`
  ${flexColumn}
  gap: 0.75rem;
`;

const SeeMoreLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #b3b3b3;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const MenuPanelContainer = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
`;

const FilterMenuPanelContainer = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  margin: 1.62rem 0;
`;
