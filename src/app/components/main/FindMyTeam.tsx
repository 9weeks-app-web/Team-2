"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
export function FindMyTeam() {
  return (
    <Container>
      <ImageCircle
        src={"https://placehold.co/86x86/png"}
        alt="image"
        width={86}
        height={86}
      />
      <FlexColContainer>
        <TextA>내가 원하는 업무 성향의 팀원과 함께 하고 싶다면?</TextA>
        <TextB>1분 업무성향 테스트하고, 프로젝트 팀원을 추천 받아보세요!</TextB>
      </FlexColContainer>
      <CustomLink href="#">팀원 찾으러 가기</CustomLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  background: #f9f9f9;
  width: 1060px;
  padding: 20px;
  margin: 40px auto 30px;
`;

const ImageCircle = styled(Image)`
  width: 86px;
  height: 86px;
  border-radius: 50px;
`;

const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 24px;
  margin-right: auto;
`;

const TextA = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

const TextB = styled.div`
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
  background: #3b3b3b;
  text-decoration: none;
`;
