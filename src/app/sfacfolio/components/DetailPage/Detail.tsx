"use client";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { Tag, TagWrapper } from "@/components/Tag";
import { UserCard } from "@/components/UserCard/UserCard";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  B2_M_12,
  D_M_10,
} from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { DetailCarousel } from "./DetailCarousel";
import { DetailSideBar } from "./DetailSideBar";
import { DetailBadge } from "./DetailBadge";
import HeartIcon from "../../../../../public/Icon/Icon_heart.svg";
import RemoveIcon from "../../../../../public/Icon/Icon_remove.svg";
import { useRouter } from "next/navigation";
export const Detail = ({ isModal }: { isModal: boolean }) => {
  const router = useRouter();
  const [isClick, setIsClick] = useState(false); // 맨밑 좋아요 버튼 상태관리
  const [isClickSidebar, setIsClickSidebar] = useState(false); //모달 사이드바 클릭시 모달창 백드랍 구현아직안함
  const handleSidebarButtonClick = () => {
    setIsClickSidebar((prev) => !prev);
  };
  const handleHeartButton = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <SectionContainer>
      {/* {isClickSidebar && <BackDrop onClick={handleSidebarButtonClick} />} */}
      <DetailSideBar
        sidebarTxtColor="black"
        $isModal={isModal}
        isClickButtonFn={handleSidebarButtonClick}
      />
      <Container $isModal={isModal} $isClickSidebar={isClickSidebar}>
        <UserContainerRow>
          <FlexRow>
            <UserCard
              avatarSize={64}
              avatarSrc="/portfolioPageImg/avatarImg/profile_detail.png"
              userName={<UserName>Kim&apos;s 2023 포트폴리오</UserName>}
              userJob={<UserJob>김아영|UXUI 디자이너</UserJob>}
              $flexDirection="row"
              $flexGap="6px"
            />
            <Chip>팔로우</Chip>
          </FlexRow>
          <IconWrapper onClick={() => router.back()}>
            {/* 모달종료버튼 라우터 뒤로가기 적용 */}
            <RemoveIcon />
          </IconWrapper>
        </UserContainerRow>

        {Array.from({ length: 4 }, () => {}).map((el, idx) => (
          <StyledImage
            key={idx}
            width={1060}
            height={570}
            alt="image"
            src={`/portfolioDetail/detail${idx + 1}.png`}
          />
        ))}

        <PortfolioInfo>
          <HeartButton onClick={handleHeartButton} $isClick={isClick}>
            <HeartIcon width={40} height={40} fill="white" />
          </HeartButton>
          <B1_M_16 style={{ color: `var(${colors.NEUTRAL_WHITE})` }}>
            Kim&apos;s 2023 포트폴리오
          </B1_M_16>
          <B2_M_12
            style={{ color: `var(${colors.NEUTRAL_WHITE})`, marginTop: "8px" }}
          >
            UXUI 디자이너
          </B2_M_12>
          <DetailBadge />
        </PortfolioInfo>
        <UserContainerCol>
          <UserCard
            avatarSize={64}
            avatarSrc="/portfolioPageImg/avatarImg/profile_detail.png"
            userName={<UserName>김아영</UserName>}
            userJob={
              <UserJob>끊임없이 배우고 성장하는 디자이너입니다.</UserJob>
            }
            $flexDirection="column"
            $flexGap="6px"
          />
          <Tag
            $setBorderColor={colors.PRIMARY_50}
            $setColor={colors.PRIMARY_50}
          >
            + 팔로우
          </Tag>
        </UserContainerCol>
        <DetailCarousel />
      </Container>
    </SectionContainer>
  );
};

const Container = styled.div<{ $isModal: boolean; $isClickSidebar: boolean }>`
  /* background: ${(props) =>
    props.$isClickSidebar ? "rgba(0, 0, 0, 0.5)" : ""}; */
  position: relative;
  height: ${(props) => (props.$isModal ? "650px" : "fit-content")};
  border-radius: 10px;
  background-color: var(${colors.NEUTRAL_WHITE});
  display: flex;
  flex-direction: column;
  /* z-index: 12; */
  justify-content: flex-start;

  overflow-y: ${(props) => (props.$isModal ? "auto" : "visible")};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserContainerRow = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 80px 18px 80px;
  height: 100px;
  width: 100%;
  justify-content: space-between;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const UserName = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_90});
`;

const UserJob = styled(D_M_10)`
  color: var(${colors.NEUTRAL_40});
`;

const Chip = styled(B2_M_12)`
  display: flex;
  width: 55px;
  height: 25px;
  padding: 5px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: var(${colors.NEUTRAL_WHITE});
  border: 1px solid var(${colors.PRIMARY_50});
  color: var(${colors.PRIMARY_50});
  letter-spacing: -0.24px;
  margin-left: 12px;
  cursor: pointer;
`;

const PortfolioInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 225px;
  width: 100%;
  background-color: var(${colors.NEUTRAL_100});
  padding: 36px 0 36px;
`;

const UserContainerCol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 36px 0 36px;
  gap: 16px;
`;

const Temp = styled.div`
  color: var(${colors.NEUTRAL_WHITE});
`;

//배경색만 변하도록 설정함, 기능구현 미완성
const HeartButton = styled.button<{ $isClick: boolean }>`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${(props) =>
    props.$isClick
      ? `var(${colors.PRIMARY_100})`
      : `var(${colors.NEUTRAL_80})`};
  border: 0;
  cursor: pointer;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  border-radius: 6px;
`;
