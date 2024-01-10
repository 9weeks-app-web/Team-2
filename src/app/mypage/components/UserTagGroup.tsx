import React from "react";
import styled from "styled-components";
import { Tag } from "@/components/Tag";
import Image from "next/image";
import TagGroup from "./TagGroup"; // Imported TagGroup component
import { colors } from "@/styles/colors";
import { userInfoState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";
import { User } from "@/app/project/types/User";
import { flexColumn } from "@/components/Flex/flexStyle";
const UserTagGroup = () => {
  const userInfo = useRecoilValue(userInfoState) as User;
  const MAX_IMAGE_TAGS = 4;
  const MAX_RENDERED_TAGS = 6;

  const renderTags = (
    data: string[],
    fixImageTags: number,
    maxRenderedTags: number
  ) => {
    const renderedTags = data.slice(0, maxRenderedTags).map((item, index) => {
      const isImageTag = index < fixImageTags;
      return (
        <Tag
          key={index}
          $setBgColor={colors.NEUTRAL_WHITE}
          $setColor={colors.NEUTRAL_70}
          $setBorderColor={colors.STROKE_10}
        >
          {isImageTag && (
            <Image src={"/authImg/pin.svg"} alt="고정" width={12} height={12} />
          )}
          {item}
        </Tag>
      );
    });

    const remainingCount = data.length - maxRenderedTags;
    const remainingTags =
      remainingCount > 0 ? (
        <Tag
          key="remaining-tags"
          $setBgColor={colors.NEUTRAL_WHITE}
          $setColor={colors.NEUTRAL_70}
          $setBorderColor={colors.STROKE_10}
        >
          외 {remainingCount} 개
        </Tag>
      ) : null;

    return [...renderedTags, remainingTags];
  };

  return (
    <Container>
      <TagGroup title="업무 성향">
        <TagGroupStyle>
          {renderTags(
            userInfo.workTendency || [],
            MAX_IMAGE_TAGS,
            MAX_RENDERED_TAGS
          )}
        </TagGroupStyle>
      </TagGroup>

      <TagGroup title="스킬">
        <TagGroupStyle>
          {renderTags(
            (userInfo.skills || []).map(
              (skill) => skill.charAt(0).toUpperCase() + skill.slice(1)
            ),
            0,
            MAX_RENDERED_TAGS
          )}
        </TagGroupStyle>
      </TagGroup>
    </Container>
  );
};

export default UserTagGroup;

const TagGroupStyle = styled.div`
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Container = styled.div`
  ${flexColumn}
  gap: 18px;
  margin-top: 18px;
`;
