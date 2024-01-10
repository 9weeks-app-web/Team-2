import { flexColumn } from "@/components/Flex/flexStyle";
import {
  H1_L_24,
  H1_SB_24,
} from "@/styles/stylesComponents/typographyComponents";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import PageNavController from "./PageNavController";
import Filter from "@/app/project/components/common/Filter";
import Sort from "@/app/project/components/common/Sort";
import { Category } from "../Category/Category";
import { SectionHeaderProps } from "@/app/project/types/SectionHeader.props";

const SectionHeader = ({
  headerText1,
  headerText2,
  seeMoreHref,
  categoryList,
  currentPage,
  totalPage,
  filterList,
  recoilState,
  isSort,
  isPageNav,
  onCategoryChange,
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
      {categoryList && recoilState ? (
        <MenuPanelContainer>
          <Category
            categoryInfo={categoryList}
            recoilState={recoilState}
            radius={"0.625rem"}
          ></Category>
          {isSort && <Sort />}
          {isPageNav && (
            <PageNavController
              goToNextPage={goToNextPage!}
              goToPrevPage={goToPrevPage!}
              currentPage={currentPage!}
              totalPage={totalPage!}
            />
          )}
        </MenuPanelContainer>
      ) : null}

      {filterList ? (
        <FilterMenuPanelContainer>
          <Filter filterList={filterList} />
          <Sort />
        </FilterMenuPanelContainer>
      ) : null}

      {/* {isSort && <RightContainer></RightContainer>} */}
    </>
  );
};

export default SectionHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.62rem;
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
  margin-top: 1.62rem;
  display: flex;
  justify-content: space-between;
`;

const FilterMenuPanelContainer = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  margin: 1.62rem 0;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: end;
`;
