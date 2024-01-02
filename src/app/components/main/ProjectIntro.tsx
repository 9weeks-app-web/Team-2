"use client";
import React from "react";
import styled from "styled-components";
import { ProjectIntroTitle } from "@/app/components/main/ProjectIntroTitle";
import { Category } from "@/components/Category/Category";
import { ProjectIntroImages } from "./ProjectIntroImages";
import Image from "next/image";
export const ProjectIntro = () => {
  const categoryList = [
    {
      title: "전체",
      name: "Category",
      id: "radioButton1",
      value: "total",
    },
    {
      title: "카테고리1",
      name: "Category",
      id: "radioButton2",
      value: "category",
    },
    {
      title: "카테고리1",
      name: "Category",
      id: "radioButton2",
      value: "category",
    },
    {
      title: "카테고리1",
      name: "Category",
      id: "radioButton2",
      value: "category",
    },
  ];

  return (
    <ProjectIntroContainer>
      <ProjectIntroTitle
        TitleA="곧 마감!"
        TitleB="실시간 인기 포트폴리오"
        SeeMoreHref="#"
      />
      <Category categoryList={categoryList} />
      <ProjectIntroImages />
    </ProjectIntroContainer>
  );
};

const ProjectIntroContainer = styled.div`
  width: 1060px;
  margin: auto;
`;
