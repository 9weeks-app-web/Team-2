"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import SearchIcon from "../../../../public/Icon/Icon_search.svg";
export const SearchBarPortfolio = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    searchParams.append("query", query);
    console.log(query);
    console.log("new path = ", `${pathname}search?${searchParams}`);
    router.push(`${pathname}search?${searchParams}`);
  };
  return (
    <SearchBarContainer>
      <Input
        placeholder="원하는 포트폴리오, 키워드, 제작 툴을 검색하세요."
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <SearchButton onClick={handleSearch} /> */}
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <TextContainer>
        <Text $isBlack={false}>추천 키워드</Text>
        <Text $isBlack>#페르소나</Text>
        <Text $isBlack>#디자인 시스템</Text>
        <Text $isBlack>#컴포넌트</Text>
        <Text $isBlack>#포지셔닝맵</Text>
        <Text $isBlack>#데스크리서치</Text>
        <Text $isBlack={false}>인기 제작 툴</Text>
        <Text $isBlack>#Figma</Text>
        <Text $isBlack>#illustrator</Text>
        <Text $isBlack>#Photoshop</Text>
      </TextContainer>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  position: relative;
  width: 1060px;
  margin: 40px auto 24px;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
  border: 0;
  background-color: inherit;
`;

const Input = styled.input`
  width: 1060px;
  height: 60px;
  padding: 20px;
  border-radius: 50px;
  border: none;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 17px;
  font-style: normal;
  line-height: 100%;
  background: var(${colors.BACKGROUND_BLUE});
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(${colors.PRIMARY_50});
    font-weight: 500;
    font-size: 20px;
    font-style: normal;
    line-height: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  margin-top: 18px;
`;

const Text = styled(B2_M_14)<{ $isBlack: boolean }>`
  color: ${(props) =>
    props.$isBlack ? `var(${colors.NEUTRAL_90})` : `var(${colors.PRIMARY_80})`};
`;
