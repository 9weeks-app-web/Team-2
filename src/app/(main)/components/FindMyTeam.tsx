"use client";
import React from "react";
import styled from "styled-components";
import RecommendedTeamBanner from "@/components/RecommendedMember/RecommendedTeamBanner";
export function FindMyTeam() {
  return (
    <Container>
      <RecommendedTeamBanner title={"팀원 찾으러 가기"} width={"66.25rem"} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 30px;
`;
