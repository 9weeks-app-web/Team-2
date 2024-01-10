"use client";
import { UserCard } from "@/components/User/UserCard";
import React, { useState } from "react";
import styled from "styled-components";
import { RoundButton } from "../Button/RoundButton";
import { colors } from "@/styles/colors";
import Image from "next/image";
import {
  ProposalIcon,
  BookmarkIcon,
  CaptureIcon,
  CommentsIcon,
  FeedbackIcon,
  LikesIcon,
  ShareIcon,
  ToolsIcon,
  Tools,
} from "./Sidebar";
import { Comments } from "./Sidebar/Comments";
import { Proposal } from "./Sidebar/Proposal";
import { createPortal } from "react-dom";
import { Feedback } from "./Sidebar/Feedback";

export const DetailSideBar = ({
  sidebarTxtColor,
  $isModal,
  isClickButtonFn,
}: {
  sidebarTxtColor: "black" | "white";
  $isModal: boolean;
  isClickButtonFn: () => void;
}) => {
  const [isClick, setIsClick] = useState({
    tools: false,
    bookmark: false,
    capture: false,
    likes: false,
    comments: false,
    feedback: false,
    share: false,
    proposal: false,
  }); //사이드바 버튼 클릭시 색상변경
  const handleComments = () => {
    isClickButtonFn();
    setIsClick((prev) => ({ ...prev, comments: !prev.comments }));
  };
  return (
    <DetailSideBarContainer $isModal={$isModal}>
      <FlexCol>
        <RoundButton
          $BgColor={isClick.bookmark ? colors.PRIMARY_70 : colors.NEUTRAL_WHITE}
          $BorderColor={colors.BACKGROUND_GRAY}
          $color={colors.NEUTRAL_90}
          onClick={() =>
            setIsClick((prev) => ({ ...prev, bookmark: !prev.bookmark }))
          }
        >
          <BookmarkIcon
            width={20}
            height={20}
            fill={isClick.bookmark ? "#FFFFFF" : "#1A1A1A"}
          />
        </RoundButton>
        <DetailSideBarText $isModal={$isModal}>스크랩</DetailSideBarText>
      </FlexCol>

      <FlexCol>
        <RoundButton
          $BgColor={isClick.likes ? colors.PRIMARY_70 : colors.NEUTRAL_WHITE}
          $BorderColor={colors.BACKGROUND_GRAY}
          $color={colors.NEUTRAL_90}
          onClick={() =>
            setIsClick((prev) => ({ ...prev, likes: !prev.likes }))
          }
        >
          <LikesIcon stroke={isClick.likes ? "#FFFFFF" : "#1A1A1A"} />
        </RoundButton>
        <DetailSideBarText $isModal={$isModal}>좋아요</DetailSideBarText>
      </FlexCol>
      <FlexCol>
        {isClick.comments && <Comments />}
        <RoundButton
          $BgColor={isClick.comments ? colors.PRIMARY_70 : colors.NEUTRAL_WHITE}
          $BorderColor={colors.BACKGROUND_GRAY}
          $color={colors.NEUTRAL_90}
          onClick={() => {
            setIsClick((prev) => ({ ...prev, comments: !prev.comments }));
          }}
        >
          <CommentsIcon fill={isClick.comments ? "#FFFFFF" : "#1A1A1A"} />
        </RoundButton>
        <DetailSideBarText $isModal={$isModal}>댓글</DetailSideBarText>
      </FlexCol>
      <FlexCol>
        {isClick.feedback && <Feedback />}
        <RoundButton
          $BgColor={isClick.feedback ? colors.PRIMARY_70 : colors.NEUTRAL_WHITE}
          $BorderColor={colors.BACKGROUND_GRAY}
          $color={colors.NEUTRAL_90}
          onClick={() =>
            setIsClick((prev) => ({ ...prev, feedback: !prev.feedback }))
          }
        >
          <FeedbackIcon fill={isClick.feedback ? "#FFFFFF" : "#1A1A1A"} />
        </RoundButton>
        <DetailSideBarText $isModal={$isModal}>피드백</DetailSideBarText>
      </FlexCol>
      <FlexCol>
        <RoundButton
          $BgColor={isClick.share ? colors.PRIMARY_70 : colors.NEUTRAL_WHITE}
          $BorderColor={colors.BACKGROUND_GRAY}
          $color={colors.NEUTRAL_90}
          onClick={() =>
            setIsClick((prev) => ({ ...prev, share: !prev.share }))
          }
        >
          <ShareIcon stroke={isClick.share ? "#FFFFFF" : "#1A1A1A"} />
        </RoundButton>
        <DetailSideBarText $isModal={$isModal}>공유하기</DetailSideBarText>
      </FlexCol>
      <FlexCol>
        {isClick.proposal && <Proposal />}
        <RoundButton
          $BgColor={isClick.proposal ? colors.PRIMARY_70 : colors.NEUTRAL_WHITE}
          $BorderColor={colors.BACKGROUND_GRAY}
          $color={colors.NEUTRAL_90}
          onClick={() =>
            setIsClick((prev) => ({ ...prev, proposal: !prev.proposal }))
          }
        >
          <ProposalIcon fill={isClick.proposal ? "#FFFFFF" : "#1A1A1A"} />
        </RoundButton>
        <DetailSideBarText $isModal={$isModal}>제안</DetailSideBarText>
      </FlexCol>
    </DetailSideBarContainer>
  );
};

const DetailSideBarContainer = styled.aside<{ $isModal: boolean }>`
  position: fixed;
  top: ${(props) => (props.$isModal ? "15%" : "25%")};
  right: ${(props) => (props.$isModal ? "-12%" : "7%")};
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 120px;
  z-index: 7;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  position: relative;
`;

const DetailSideBarText = styled.p<{ $isModal: boolean }>`
  //임시 수정예정
  color: ${(props) => (props.$isModal ? "#ffffff" : "#000000")};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  width: max-content;
`;

{
  /* <FlexCol>
        <UserCard onlyAvatar avatarSize={56} avatarSrc="/" />
        <DetailSideBarText $isModal={isModal}>작성자</DetailSideBarText>
      </FlexCol> */
}
{
  /* <FlexCol>
        {isClick.tools && <Tools />}
        <RoundButton
          $BgColor={isClick.tools ? colors.PRIMARY_70 : colors.NEUTRAL_WHITE}
          $BorderColor={colors.BACKGROUND_GRAY}
          $color={colors.NEUTRAL_90}
          onClick={() =>
            setIsClick((prev) => ({ ...prev, tools: !prev.tools }))
          }
        >
          <ToolsIcon stroke={isClick.tools ? "#FFFFFF" : "#1A1A1A"} />
        </RoundButton>
        <DetailSideBarText $isModal={isModal}>사용 툴</DetailSideBarText>
      </FlexCol> */
}

{
  /* <FlexCol>
        <RoundButton
          $BgColor={isClick.capture ? colors.PRIMARY_70 : colors.NEUTRAL_WHITE}
          $BorderColor={colors.BACKGROUND_GRAY}
          $color={colors.NEUTRAL_90}
          onClick={() =>
            setIsClick((prev) => ({ ...prev, capture: !prev.capture }))
          }
        >
          <CaptureIcon stroke={isClick.capture ? "#FFFFFF" : "#1A1A1A"} />
        </RoundButton>
        <DetailSideBarText $isModal={isModal}>부분 스크랩</DetailSideBarText>
      </FlexCol> */
}
