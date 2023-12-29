"use client";
import React from "react";
import styled from "styled-components";
import { ProjectIntroTitle } from "@/app/components/main/ProjectIntroTitle";
import { Category } from "@/components/Category/Category";
import { ProjectIntroImages } from "./ProjectIntroImages";
import Image from "next/image";
export const ProjectIntro = () => {
  return (
    <ProjectIntroContainer>
      <ProjectIntroTitle
        TitleA="곧 마감!"
        TitleB="실시간 인기 포트폴리오"
        SeeMoreHref="#"
      />
      <Category />
      <ProjectIntroImages />
    </ProjectIntroContainer>
  );
};

const ProjectIntroContainer = styled.div`
  width: 1060px;
  margin: auto;
`;
