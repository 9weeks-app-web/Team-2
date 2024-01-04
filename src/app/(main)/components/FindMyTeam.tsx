"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/styles/colors";
import {
  H3_R_18,
  H3_SB_18,
} from "@/styles/stylesComponents/typographyComponents";
export function FindMyTeam({ url }: { url: string }) {
  return (
    <Container>
      <Image
        src={"/illustration.svg"}
        alt="image"
        width={83.389}
        height={70.403}
      />
      <FlexColContainer>
        <TextA>내가 원하는 업무 성향의 팀원과 함께 하고 싶다면?</TextA>
        <TextB>1분 업무성향 테스트하고, 프로젝트 팀원을 추천 받아보세요!</TextB>
      </FlexColContainer>
      <CustomLink href={url || "#"}>팀원 찾으러 가기</CustomLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  background: var(${colors.BACKGROUND_BLUE});
  border: 1.5px solid var(${colors.PRIMARY_20});
  width: 1060px;
  padding: 20px;
  margin: 40px auto 30px;
`;

const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 24px;
  margin-right: auto;
`;

const TextA = styled(H3_R_18)`
  font-size: 18px;
  font-weight: 400;
`;

const TextB = styled(H3_SB_18)`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 600;
`;

const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 12px 24px;
  color: #fff;
  font: 500 16px;
  border-radius: 8px;
  background: var(${colors.PRIMARY_70});
  text-decoration: none;
`;
