import React from "react";
import { CardContainer } from "@/components/Card/CardContainer";
import { CardTextContainer } from "@/components/Card/CardTextContainer";
import { colors } from "@/styles/colors";
import styled from "styled-components";
import Image from "next/image";
import {
  B2_M_12,
  B2_M_14,
} from "@/styles/stylesComponents/typographyComponents";
import { NewsCardProps } from "@/types";

export const NewsCard = ({
  imageUrl,
  label,
  heading,
  company,
  time,
}: NewsCardProps) => {
  return (
    <CardContainer linkUrl={"#"} $width="340px" $borderColor={colors.PRIMARY_5}>
      <div>
        <StyledImage
          unoptimized
          src={imageUrl}
          width={339}
          height={185}
          alt="Image"
          onError={(e) =>
            (e.currentTarget.src = "https://placehold.co/340x185/png")
          }
        />
      </div>
      <CardTextContainer $BgColor={colors.PRIMARY_5}>
        <CardLabel>{label}</CardLabel>
        <CardTitle>{heading}</CardTitle>
        <CardFlexRow>
          <CardCompany>{company}</CardCompany>
          <CardTime>{time}</CardTime>
        </CardFlexRow>
      </CardTextContainer>
    </CardContainer>
  );
};
const StyledImage = styled(Image)`
  border-radius: 8px 8px 0 0;
`;

const CardLabel = styled(B2_M_14)`
  color: var(${colors.NEUTRAL_90});
  margin-bottom: 12px;
`;

//추후 수정예정, 디자인시스템에 없는 스타일
const CardTitle = styled.p`
  color: var(${colors.NEUTRAL_90});
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 25px;
`;
const CardCompany = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_70});
`;

const CardTime = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_30});
`;

const CardFlexRow = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;
