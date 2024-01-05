"use client";

import React from "react";
import styled from "styled-components";
import SideContents from "./components/SideContents";
import MainContents from "./components/MainContents";
import { _user } from "./data/mockupData";
import { colors } from "@/styles/colors";
import FloatingBtn from "./components/FloatingBtn";
export const ProjectPage = () => {
  return (
    <>
      <Inner>
        <SideContents user={_user} />
        <MainContents user={_user} />
        <FloatingBtn title={"새 프로젝트 업로드"} />
      </Inner>
    </>
  );
};

export default ProjectPage;

const Inner = styled.div`
  margin: 2.25rem 11.88rem;
  /* width: 100%; */
  display: flex;
  gap: 1.37rem;
`;
