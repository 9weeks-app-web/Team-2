"use client";

import React from "react";
import styled from "styled-components";
import SideContents from "./components/sideContents/SideContents";
import MainContents from "./components/mainContents/MainContents";
import { _user } from "../../constant/_[project]mockup";
import FloatingBtn from "./components/common/FloatingBtn";

function page() {
  return (
    <>
      <Inner>
        <SideContents user={_user} />
        <MainContents user={_user} />
      </Inner>
    </>
  );
}

export default page;

const Inner = styled.div`
  margin: 2.25rem 11.88rem;
  /* width: 100%; */
  display: flex;
  justify-content: center;

  gap: 1.37rem;
`;
