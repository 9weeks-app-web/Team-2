"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { SearchBar } from "@/components/Nav/SearchBar";
import { colors } from "@/styles/colors";
import { useSession, signOut } from "next-auth/react";
export const Navigation = () => {
  const { data: session } = useSession();
  console.log(session?.user?.image);
  //  sns 로그인시 기본 이미지로 보여짐
  const userImg = session?.user?.image
    ? session?.user?.image
    : "/authImg/userImg.svg";
  return (
    <NavContainer>
      <UlContainer>
        <LogoWrapper>
          <CustomLink href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={108}
              height={28}
              priority
            />
          </CustomLink>
        </LogoWrapper>
        <LinkWrapper>
          <CustomLink href="/sfacfolio">스팩폴리오</CustomLink>
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
      {session && session.user ? (
        <UserInfo>
          <Image src={"/authImg/bell.svg"} alt="알람" width={24} height={24} />
          <Link href={"/mypage"}>
            <Image src={userImg} alt="유저 이미지" width={32} height={32} />
          </Link>
        </UserInfo>
      ) : (
        <>
          <Button
            $bgColor={`${colors.NEUTRAL_WHITE}`}
            $Color={`${colors.PRIMARY_80}`}
            href="/auth/login"
          >
            로그인
          </Button>

          <Button
            $Color={`${colors.NEUTRAL_WHITE}`}
            $bgColor={`${colors.PRIMARY_80}`}
            href="/auth/signup/terms"
          >
            회원가입
          </Button>
        </>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 1060px;
  height: 68px;
  margin: auto;
  margin-bottom: 36px;
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
  height: 33px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => `var(${props.$bgColor})`};
  color: ${(props) => `var(${props.$Color})`};
  margin-left: 18px;
  text-decoration: none;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 24px;
  img {
    border-radius: 50%;
  }
`;
