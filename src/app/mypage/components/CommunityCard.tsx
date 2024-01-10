import React from "react";
import Image from "next/image";
import styled from "styled-components";
import {
  B1_M_16,
  B1_R_16,
  H3_SB_18,
} from "@/styles/stylesComponents/typographyComponents";
import { CommunityPost } from "@/types/community";
import { dateDiff } from "@/utils/utils";
import BookmarkIcon from "../../../../public/Icon/Icon_sidebar/Icon_bookmark.svg";
type CommunityCardContentProps = {
  community: CommunityPost;
  showMore: boolean;
  toggleShowMore: () => void;
};

export const CommunityCard: React.FC<CommunityCardContentProps> = ({
  community,
  showMore,
  toggleShowMore,
}) => {
  return (
    <>
      <Header>
        <UserInfo>
          <B1_M_16>{community.name}</B1_M_16>
          <B1_R_16 className="gray">
            {community.job} | {community.experience}
          </B1_R_16>
        </UserInfo>
        <BookmarkIcon width={20} height={20} fill="black" />
      </Header>
      <Contents>
        <H3_SB_18>{community.postTitle}</H3_SB_18>
        <Emm $showMore={showMore}>
          <B1_R_16 className={showMore ? "show" : "ell"}>
            {community.postContent}
          </B1_R_16>
          {!showMore && (
            <ShowButton onClick={toggleShowMore}>
              <B1_R_16 className="gray">더 보기</B1_R_16>
            </ShowButton>
          )}
        </Emm>
      </Contents>
      <Bottom>
        <Info>
          <FlexRow>
            <ImageContainer>
              <Image
                src={"community/view1.svg"}
                width={24}
                height={24}
                alt="게시물"
              />
              <B1_R_16>{community.views}</B1_R_16>
            </ImageContainer>
            <ImageContainer>
              <B1_R_16>{community.likes}</B1_R_16>
            </ImageContainer>
          </FlexRow>
          <ImageContainer>
            <Image
              src={"community/comment.svg"}
              width={24}
              height={24}
              alt="댓글 수"
            />
            <B1_R_16>{community.comments.length}</B1_R_16>
          </ImageContainer>
        </Info>
        <B1_R_16 className="gray">{dateDiff(community.postTime)}</B1_R_16>
      </Bottom>
    </>
  );
};

const ShowButton = styled.button`
  margin-top: 12px;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Emm = styled.div<{ $showMore: boolean }>`
  .ell {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 622px;
  }

  .show {
    white-space: normal;
  }
`;
