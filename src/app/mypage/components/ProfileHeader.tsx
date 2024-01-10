import React from "react";
import { UserCard } from "@/components/UserCard/UserCard";
import { flexColumn } from "@/components/Flex/flexStyle";
import { User } from "@/app/project/types/User";
import { userInfoState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";
import {
  B2_R_12,
  B1_M_16,
} from "@/styles/stylesComponents/typographyComponents";

import styled from "styled-components";

type Props = {};

const ProfileHeader = (props: Props) => {
  const userInfo = useRecoilValue(userInfoState) as User;

  return (
    <HeaderContainer>
      <UserCardContainer>
        <UserCard
          userName={userInfo.name}
          avatarSrc={userInfo.avatar}
          userJob={userInfo.role}
        />
      </UserCardContainer>
      <SocialInfoContainer>
        <div>
          <B1_M_16>{userInfo.followers?.length}</B1_M_16>
          <B2_R_12>팔로워</B2_R_12>
        </div>
        <div>
          <B1_M_16>{userInfo.following?.length}</B1_M_16>
          <B2_R_12>팔로잉</B2_R_12>
        </div>
      </SocialInfoContainer>
    </HeaderContainer>
  );
};

export default ProfileHeader;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    &:nth-child(2) {
      align-items: center;
      div {
        gap: 6px;
      }
    }
  }
`;

const UserCardContainer = styled.div``;

const SocialInfoContainer = styled.div`
  text-align: center;
  display: inline-flex;
  gap: 20px;

  div {
    ${flexColumn}
    gap: 6px;
  }
`;
