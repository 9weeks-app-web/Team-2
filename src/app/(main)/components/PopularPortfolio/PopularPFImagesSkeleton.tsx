import { Skeleton } from "antd";
import React from "react";
import styled from "styled-components";

export const PopularPFImagesSkeleton = () => {
  return (
    <Container>
      <ImagesContainerMain>
        <ImageSkeletonMain active />
      </ImagesContainerMain>
      <ImagesContainerSub>
        <ImageSkeletonSub active />
        <ImageSkeletonSub active />
        <ImageSkeletonSub active />
        <ImageSkeletonSub active />
        <ImageSkeletonSub active />
        <ImageSkeletonSub active />
      </ImagesContainerSub>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1060px;
`;

const ImageSkeletonMain = styled(Skeleton.Image)`
  width: 379px !important;
  height: 320px !important;
`;

const ImageSkeletonSub = styled(Skeleton.Image)`
  width: 219px !important;
  height: 156px !important;
`;

const ImagesContainerMain = styled.div`
  display: flex;
  margin-right: 8px;
`;

const ImagesContainerSub = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
