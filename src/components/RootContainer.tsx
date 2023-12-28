"use client";
import React from "react";
import styled from "styled-components";
const RootContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default RootContainer;
const Container = styled.div`
  min-width: 1440px;
  margin: auto;
`;
