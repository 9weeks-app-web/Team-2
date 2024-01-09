import React from "react";
import { CardContainer } from "@/components/Card/CardContainer";
import { Tag } from "@/components/Tag";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { CardTextContainer } from "@/components/Card/CardTextContainer";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import { getDDay } from "@/utils/utils";
import { PopularRecruitmentObjProps } from "@/types";

export const PopularRecruitmentCard = ({
  id,
  category,
  company,
  deadline,
  position,
  title,
}: PopularRecruitmentObjProps) => {
  return (
    <CardContainer linkUrl="#" $width={`190px`}>
      <CardTextContainer $BgColor={colors.NEUTRAL_WHITE}>
        <Tag $setBgColor={colors.BACKGROUND_BLUE} $setColor={colors.PRIMARY_80}>
          {getDDay(deadline)}
        </Tag>
        <CardTitle>{title}</CardTitle>
        <CardPosition># {position}</CardPosition>
        <CardCompany>{company}</CardCompany>
      </CardTextContainer>
    </CardContainer>
  );
};

const CardTitle = styled.div`
  color: var(${colors.NEUTRAL_90});
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  margin: 8px 0 8px;
`;

const CardPosition = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_90});
`;

const CardCompany = styled(B2_M_12)`
  margin-top: auto;
  color: var(${colors.NEUTRAL_30});
`;
