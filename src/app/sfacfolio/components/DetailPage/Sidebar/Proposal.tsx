import { UserCard } from "@/components/User/UserCard";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  B2_M_12,
} from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";

export const Proposal = () => {
  return (
    <ProposalContainer>
      <UserCard
        avatarSize={64}
        avatarSrc="/portfolioPageImg/avatarImg/profile_detail.png"
        $flexDirection="column"
        $flexGap="10px"
        userName={<UserName>김아영</UserName>}
        userJob={<UserJob>끊임없이 배우고 성장하는 디자이너입니다.</UserJob>}
      />
      <ProposalList>
        <ProposalItemWrapper>
          <ProposalItem>
            <ProposalItemText>프로젝트 제안</ProposalItemText>
            <ProposalButton>&gt;</ProposalButton>
          </ProposalItem>
        </ProposalItemWrapper>
        <ProposalItemWrapper>
          <ProposalItem>
            <ProposalItemText>채용 제안</ProposalItemText>
            <ProposalButton>&gt;</ProposalButton>
          </ProposalItem>
        </ProposalItemWrapper>
        <ProposalItemWrapper>
          <ProposalItem>
            <ProposalItemText>메세지 보내기</ProposalItemText>
            <ProposalButton>&gt;</ProposalButton>
          </ProposalItem>
        </ProposalItemWrapper>
      </ProposalList>
    </ProposalContainer>
  );
};

const ProposalContainer = styled.div`
  position: absolute;
  right: 130px;
  bottom: 10px;
  display: flex;
  width: 358px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  border-radius: 24px;
  background-color: var(${colors.NEUTRAL_WHITE});
  border: 1px solid var(${colors.NEUTRAL_10});
`;

const ProposalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProposalItemWrapper = styled.div`
  width: 294px;
  height: 32px;
  padding: 5px 7px;
  border-radius: 10px;
  background-color: var(${colors.NEUTRAL_WHITE});
  border: 1px solid var(${colors.NEUTRAL_10});
`;

const ProposalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const ProposalItemText = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_50});
`;

const ProposalButton = styled.button`
  display: flex;
  width: 23px;
  height: 23px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: var(${colors.PRIMARY_80});
  font-size: 14px;
  border: 0;
  background-color: var(${colors.PRIMARY_10});
  cursor: pointer;
`;

const UserName = styled(B1_M_16)`
  color: var(${colors.NEUTRAL_50});
`;

const UserJob = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_90});
`;
