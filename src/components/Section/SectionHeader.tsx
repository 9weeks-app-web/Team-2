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

const SectionHeader = ({
  headerText1,
  headerText2,
  seeMoreHref,
  categoryList,
}: sectionHeaderProps) => {
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
          <PageNavController></PageNavController>
        </MenuPanelContainer>
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
