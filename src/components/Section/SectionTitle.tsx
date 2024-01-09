"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  H1_L_24,
  H1_SB_24,
} from "@/styles/stylesComponents/typographyComponents";
import { RightOutlined } from "@ant-design/icons";
/**
 *
 * @param titleA  optional props
 * @param linkPath  optional props
 *
 */
export const SectionTitle = ({
  titleA,
  titleB,
  linkPath,
}: {
  titleA?: string;
  titleB: string;
  linkPath?: string;
}) => {
  return (
    <TitleContainer>
      {titleA && <H1_L_24>{titleA}</H1_L_24>}
      <TitleBContainer>
        <H1_SB_24>{titleB}</H1_SB_24>
        {linkPath && (
          <SeeMoreLink href={linkPath}>
            더보기
            <RightOutlined />
          </SeeMoreLink>
        )}
      </TitleBContainer>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  width: 1060px;
  margin-bottom: 26px;
`;

const TitleBContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const SeeMoreLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #b3b3b3;
  text-decoration: none;
`;
