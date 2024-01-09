import React from "react";
import styled from "styled-components";
import { CardContainer } from "@/components/Card/CardContainer";
import { ConfigProvider, Skeleton } from "antd";
import { CardTextContainer } from "@/components/Card/CardTextContainer";
import { colors } from "@/styles/colors";

export const PopularProjectCardSkeleton = () => {
  return (
    <CardContainer $width="340px" $borderColor={colors.STROKE_5}>
      <ImageSkeletonMain active />
      <CardTextContainer $BgColor={colors.NEUTRAL_WHITE}>
        {/* <ConfigProvider
          theme={{
            token: {
              controlHeight: 30,
            },
          }}
        > */}
        <CardSkeltonContainer>
          <CardTitle>
            <Skeleton
              title={false}
              paragraph={{ rows: 1, width: 100 }}
              active
            />
          </CardTitle>
          <Skeleton title={false} paragraph={{ rows: 1, width: 150 }} active />
          <Skeleton title={false} paragraph={{ rows: 1, width: 200 }} active />
          <Skeleton title={false} paragraph={{ rows: 1, width: 50 }} active />
          <Skeleton title={false} paragraph={{ rows: 1, width: 50 }} active />
        </CardSkeltonContainer>
      </CardTextContainer>
    </CardContainer>
  );
};
const ImageSkeletonMain = styled(Skeleton.Image)`
  width: 340px !important;
  height: 185px !important;
`;

const CardSkeltonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px !important;
`;

const CardTitle = styled.div`
  margin: 12px 0 12px;
`;
