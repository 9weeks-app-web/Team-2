"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import SearchIconGrey from "../../../public/Icon/Icon_searchGrey.svg";
export const SearchBar = () => {
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
    <SearchBarWrapper>
      <Input
        placeholder="검색어를 입력하세요"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <SearchButton onClick={handleSearch} /> */}
      <SearchButton>
        <SearchIconGrey />
      </SearchButton>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  position: relative;
  margin-left: auto;
`;

const Input = styled.input.attrs({ type: "text" })`
  width: 403px;
  height: 38px;
  border-radius: 50px;
  border: none;
  background: #f9f9f9;
  padding-right: 18px;
  padding-left: 18px;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  position: absolute;
  right: 18px;
  top: 8px;
  cursor: pointer;
  border: 0;
  background-color: inherit;
`;
