"use client";
import { UserCard } from "@/components/UserCard/UserCard";
import { colors } from "@/styles/colors";
import {
  B2_M_14,
  H3_SB_18,
} from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const HotCreatorCard = ({
  userName,
  userJob,
  imageUrl,
  avatarSrc,
}: {
  userName: string;
  userJob: string;
  imageUrl: Array<string>;
  avatarSrc: string;
}) => {
  return (
    <CardContainer>
      <UserCard
        avatarSize={48}
        avatarSrc={avatarSrc}
        $flexDirection="row"
        $flexGap="12px"
        userName={<UserName>{userName}</UserName>}
        userJob={<UserJob>{userJob}</UserJob>}
      />
      <FlexRow>
        <StyledImage height={96} width={96} alt="image" src={imageUrl[0]} />
        <StyledImage height={96} width={96} alt="image" src={imageUrl[1]} />
        <StyledImage height={96} width={96} alt="image" src={imageUrl[2]} />
      </FlexRow>
    </CardContainer>
  );
};

const StyledImage = styled(Image)`
  border-radius: 8px;
`;
const FlexRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 8px;
  margin-top: 12px;
  justify-content: space-between;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 186px;
  border-radius: 8px;
  padding: 12px 16px;
  background-color: var(${colors.NEUTRAL_WHITE});
  /* margin-right: 20px; */
`;

const UserName = styled(H3_SB_18)`
  color: var(${colors.NEUTRAL_90});
`;

const UserJob = styled(B2_M_14)`
  color: var(${colors.NEUTRAL_50});
`;
