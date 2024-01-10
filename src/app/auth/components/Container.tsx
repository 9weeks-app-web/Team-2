"use client";
import React from "react";
import styled from "styled-components";

export const Container = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <ContainerSection>
      <Title>{title}</Title>
      {children}
    </ContainerSection>
  );
};

const ContainerSection = styled.section`
  width: 520px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.64px;
  margin: 80px 0px;
`;
