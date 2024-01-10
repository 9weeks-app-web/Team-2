import React from "react";
import { CardContainer } from "@/components/Card/CardContainer";
import { CardTextContainer } from "@/components/Card/CardTextContainer";
import { colors } from "@/styles/colors";
import { UserCard } from "@/components/User/UserCard";
import { Tag, TagWrapper } from "@/components/Tag";
import styled from "styled-components";
import {
  B1_M_16,
  B2_M_14,
} from "@/styles/stylesComponents/typographyComponents";
import { font_size, font_weight } from "@/styles/typography";
import { dateDiff } from "@/utils/utils";
interface PopularTopicCardProps {
  userName: string;
  userJob: string;
  userImageUrl: string;
  tag: Array<string>;
  heading: string;
  description: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export const PopularTopicCard = ({
  userName,
  userJob,
  userImageUrl,
  tag,
  heading,
  description,
  likes,
  comments,
  createdAt,
}: PopularTopicCardProps) => {
  const convertedDate = dateDiff(createdAt);

  return (
    <CardContainer linkUrl="#" $width="340px" $borderColor={colors.STROKE_10}>
      <CardTextContainer $BgColor={colors.NEUTRAL_WHITE}>
        <UserContainer>
          <UserCard
            avatarSrc={userImageUrl}
            avatarSize={55}
            $flexDirection="row"
            $flexGap="12px"
            userName={<UserName>{userName}</UserName>}
            userJob={<UserJob>{userJob}</UserJob>}
          />
          <TagWrapper style={{ alignItems: "flex-start" }}>
            <Tag $setColor="--Red-500, #FB5151" $setBgColor="--Red-50, #FFEFEF">
              HOT
            </Tag>
          </TagWrapper>
        </UserContainer>
        <TagWrapper>
          {tag.map((el, idx) => (
            <Tag
              key={idx}
              $setBgColor={colors.BACKGROUND_BLUE}
              $setColor={colors.PRIMARY_80}
            >
              {el}
            </Tag>
          ))}
        </TagWrapper>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <FlexContainer>
          <FlexRow>
            <HeartIcon width={16} height={16} stroke="black" />
            <Span>{likes}</Span>
            <CommentIcon style={{ marginLeft: "12px" }} fill="black" />
            <Span>{comments}</Span>
          </FlexRow>
          <DateWrapper>{convertedDate}</DateWrapper>
        </FlexContainer>
      </CardTextContainer>
    </CardContainer>
  );
};
const UserName = styled(B1_M_16)`
  color: var(${colors.NEUTRAL_90});
`;
const UserJob = styled(B2_M_14)`
  color: var(${colors.NEUTRAL_40});
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const FlexContainer = styled.div`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  margin-left: 6px;
  font-size: var(${font_size.FONT_SIZE_12});
  font-weight: var(${font_weight.FONT_WEIGHT_400_R});
`;

const DateWrapper = styled.div`
  color: var(${colors.NEUTRAL_40});
  font-size: var(${font_size.FONT_SIZE_12});
  font-weight: var(${font_weight.FONT_WEIGHT_400_R});
`;
const CardTitle = styled(B1_M_16)`
  color: var(${colors.NEUTRAL_90});
  margin: 8px 0 14px;
`;

const CardDescription = styled.p`
  color: var(${colors.NEUTRAL_40});
  font-size: var(${font_size.FONT_SIZE_14});
  font-weight: var(${font_weight.FONT_WEIGHT_400_R});
  line-height: 140%;
  margin-bottom: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
