"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { SearchBar } from "@/components/Nav/SearchBar";
export const Navigation = () => {
  return (
    <NavContainer>
      <UlContainer>
        <LogoWrapper>
          <CustomLink href="/">
            <Image src="/logo.svg" alt="logo" width={108} height={28} />
          </CustomLink>
        </LogoWrapper>
        <LinkWrapper>
          <CustomLink href="#">스팩폴리오</CustomLink>
        </LinkWrapper>
        <LinkWrapper>
          <CustomLink href="/project">프로젝트</CustomLink>
        </LinkWrapper>
        <LinkWrapper>
          <CustomLink href="#">커뮤니티</CustomLink>
        </LinkWrapper>
        <LinkWrapper>
          <CustomLink href="#">채용</CustomLink>
        </LinkWrapper>
      </UlContainer>
      <SearchBar />
      <Button $bgColor="#f9f9f9" $Color="#B3B3B3" href="#">
        로그인
      </Button>
      <Button $bgColor="#3B3B3B" $Color="#FFFFFF" href="#">
        회원가입
      </Button>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 1060px;
  height: 68px;
  margin: auto;
`;
const UlContainer = styled.ul`
  display: flex;
`;
const LogoWrapper = styled.li`
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkWrapper = styled.li`
  padding: 10px;
  width: fit-content;
  height: 36px;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  text-align: center;
  margin-right: 4px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

//높이 넓의 임의설정, 차후 수정예상
const Button = styled(Link)<{ $bgColor: string; $Color: string }>`
  width: 90px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$Color};
  margin-left: 18px;
  text-decoration: none;
`;
