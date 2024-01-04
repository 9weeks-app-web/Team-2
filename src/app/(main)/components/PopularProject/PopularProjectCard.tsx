import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Tag, TagWrapper } from "@/components/Tag";
import {
  B2_M_12,
  H3_M_18,
} from "@/styles/stylesComponents/typographyComponents";
import { colors } from "@/styles/colors";
import { CardContainer } from "@/components/Card/CardContainer";
import { CardTextContainer } from "@/components/Card/CardTextContainer";
import { PopularProjectCardProps } from "@/types";

export const PopularProjectCard = ({
  tag,
  heading,
  category,
  description,
  recruitmentMembers,
  imageUrl,
}: PopularProjectCardProps) => {
  return (
    <CardContainer linkPath="#" $width="340px" $borderColor={colors.STROKE_5}>
      <StyledImage
        width={339}
        height={185}
        src={imageUrl}
        onError={(e) =>
          (e.currentTarget.src = "https://placehold.co/340x185/png")
        }
        alt="image"
      />
      <CardTextContainer $BgColor={colors.NEUTRAL_WHITE}>
        <TagWrapper>
          {tag &&
            tag.map((el, idx) => (
              <Tag
                key={idx}
                $setColor={colors.PRIMARY_80}
                $setBgColor={colors.BACKGROUND_BLUE}
              >
                {el}
              </Tag>
            ))}
        </TagWrapper>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <RecruitmentTitle>모집인원</RecruitmentTitle>
        <TagWrapper>
          {recruitmentMembers &&
            recruitmentMembers.map((el, idx) => (
              <Tag
                key={idx}
                $setColor={colors.NEUTRAL_70}
                $setBorderColor={colors.STROKE_10}
              >
                {el}
              </Tag>
            ))}
        </TagWrapper>
      </CardTextContainer>
    </CardContainer>
  );
};

const StyledImage = styled(Image)`
  border-radius: 8px 8px 0 0;
`;

const CardTitle = styled(H3_M_18)`
  color: var(${colors.NEUTRAL_90});
  margin: 12px 0 12px;
`;

//추후 수정예정, 디자인시스템에 없는 스타일
const CardDescription = styled.p`
  color: var(${colors.NEUTRAL_50});
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
`;

const RecruitmentTitle = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_50});
  margin: 18px 0 8px;
`;
