import { UserCard } from "@/components/UserCard/UserCard";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  B2_M_12,
  B2_M_14,
  D_M_10,
  H3_SB_18,
} from "@/styles/stylesComponents/typographyComponents";
import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";

export const Comments = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);
  const [comments, setComments] = useState([
    {
      userName: "코기쿠키",
      UserJob: "UXUI 디자이너",
      description: "잘 보고 갑니다!",
      creationTime: "3시간 전",
      avatarSrc: `/portfolioPageImg/carouselAvatar-4.png`,
    },
  ]);
  const handleConfirm = () => {
    if (textRef.current) {
      const commentValue = textRef.current.value;
      textRef.current.value = "";
      setComments((prev) => [
        ...prev,
        {
          userName: "김원훈",
          UserJob: "UXUI 디자이너",
          description: commentValue,
          creationTime: "3시간 전",
          avatarSrc: `/portfolioPageImg/carouselAvatar-${
            Math.floor(Math.random() * 4) + 1
          }.png`,
        },
      ]);
      if (commentRef.current) {
        commentRef.current.scrollTop = commentRef.current.scrollHeight;
      }
    }
  };
  if (!commentRef) return <></>;
  return (
    <Container>
      <UserCard
        avatarSize={64}
        avatarSrc="/portfolioPageImg/avatarImg/profile_detail.png"
        $flexGap="8px"
        $flexDirection="row"
        userName={<UserName>Kim&apos;s 2023 포트폴리오</UserName>}
        userJob={<UserJob>김아영|UXUI 다지이너</UserJob>}
      />
      <CommentTitle>댓글({comments.length})</CommentTitle>
      <FlexCol>
        <Textarea
          name="comments"
          id=""
          cols={37}
          rows={5}
          placeholder="댓글을 남겨주세요."
          ref={textRef}
        />
        <FlexRow>
          <CancelButton>
            <CancelButtonText>취소</CancelButtonText>
          </CancelButton>
          <ConfirmButton>
            <ConfirmButtonText onClick={handleConfirm}>
              댓글 등록
            </ConfirmButtonText>
          </ConfirmButton>
        </FlexRow>
      </FlexCol>
      <Hr />
      <CommentContainer ref={commentRef}>
        {comments.map((comment, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: `1px solid var(${colors.STROKE_5})`,
              marginBottom: "10px",
            }}
          >
            <CommentUserContainer>
              <UserCard
                avatarSize={48}
                avatarSrc={comment.avatarSrc}
                $flexDirection="row"
                $flexGap="12px"
                userName={<CommentUserName>코키쿠키</CommentUserName>}
                userJob={<CommentUserJob>UXUI 디자이너</CommentUserJob>}
              />
              <CommentTime>4시간 전</CommentTime>
            </CommentUserContainer>
            <CommentDescription>{comment.description}</CommentDescription>
          </div>
        ))}
      </CommentContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 140px;
  display: flex;
  width: 358px;
  height: 536px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid var(${colors.NEUTRAL_10});
  /* z-index: 12; */
`;

const UserName = styled(B1_M_16)`
  color: var(${colors.NEUTRAL_90});
`;

const UserJob = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_40});
`;

const CommentTitle = styled(H3_SB_18)`
  color: var(${colors.NEUTRAL_100});
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
`;

const Textarea = styled.textarea`
  padding: 16px;
  border: 1px solid var(${colors.NEUTRAL_30});
  border-radius: 8px;
  resize: none;
  &:focus {
    outline: var(${colors.NEUTRAL_50}) solid 1px;
  }
  margin-bottom: 16px;
`;

const CancelButton = styled.button`
  display: flex;
  width: 90px;
  height: 32px;
  padding: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid var(${colors.PRIMARY_50});
  background-color: var(${colors.BACKGROUND_BLUE});
  cursor: pointer;
`;

const CancelButtonText = styled(B2_M_12)`
  color: var(${colors.PRIMARY_50});
`;

const ConfirmButton = styled.button`
  display: flex;
  width: 90px;
  height: 32px;
  padding: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid var(${colors.PRIMARY_70});
  background-color: var(${colors.PRIMARY_70});
  cursor: pointer;
`;

const ConfirmButtonText = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_WHITE});
`;

const Hr = styled.hr`
  width: 100%;
  border: 1px solid var(${colors.STROKE_10});
`;
const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: fit-content;
  justify-content: flex-start;
`;

const CommentUserContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CommentUserName = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_90});
`;

const CommentUserJob = styled(D_M_10)`
  color: var(${colors.NEUTRAL_30});
`;

const CommentTime = styled(D_M_10)`
  color: var(${colors.NEUTRAL_30});
  padding-right: 10px;
`;

const CommentDescription = styled(B2_M_14)`
  color: var(${colors.NEUTRAL_90});
  margin: 12px 0 12px;
  padding-left: 5px;
`;
