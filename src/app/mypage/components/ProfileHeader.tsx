import React from "react";
import { UserCard } from "@/components/User/UserCard";
import { flexColumn } from "@/components/Flex/flexStyle";
import { User } from "@/app/project/types/User";
import { userInfoState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";
import {
  H3_SB_18,
  B1_M_16,
  B2_R_14,
  B2_R_12,
} from "@/styles/stylesComponents/typographyComponents";

import styled from "styled-components";

type Props = {};

const ProfileHeader = (props: Props) => {
  const userInfo = useRecoilValue(userInfoState) as User;

  return (
    <HeaderContainer>
      <UserCardContainer>
        <UserCard
          avatarSrc={userInfo.avatar}
          avatarSize={50}
          $flexDirection="row"
          $flexGap="14px"
          userName={<H3_SB_18>{userInfo.name}</H3_SB_18>}
          userJob={<B2_R_14 className="gray">{userInfo.role}</B2_R_14>}
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
  margin-bottom: 8px;
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
