"use client";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
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
      <SearchButton onClick={handleSearch} />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  position: relative;
  margin-left: auto;
`;

const SearchButton = styled(SearchOutlined)`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 18px;
  top: 8px;
`;

const Input = styled.input`
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
