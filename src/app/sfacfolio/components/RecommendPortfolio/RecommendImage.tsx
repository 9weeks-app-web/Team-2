import { colors } from "@/styles/colors";
import {
  B2_M_14,
  B2_R_14,
  H3_M_18,
} from "@/styles/stylesComponents/typographyComponents";
import { HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import HeartIcon from "../../../../../public/Icon/Icon_heart.svg";
import BookmarkIcon from "../../../../../public/Icon/Icon_sidebar/Icon_bookmark.svg";
import { PopularPortfolioImagesObjProps } from "@/types";

export const RecommendImage = ({
  likes,
  bookmark,
  label,
  userName,
  title,
  src,
}: PopularPortfolioImagesObjProps) => {
  return (
    <CustomLinkMain href="/sfacfolio/detail/a1b1">
      <Badge>
        <Div>
          <HeartIcon width={20} height={20} stroke="white" />
          <Span>{likes}</Span>
        </Div>
        <Div>
          <BookmarkIcon width={20} height={20} fill="white" />
          <Span>{bookmark}</Span>
        </Div>
      </Badge>
      <BlurredImage>
        <HoverableImage
          quality={100}
          // unoptimized
          width={340}
          height={260}
          alt="image"
          src={src || "https://placehold.co/340x260/png"}
        />
      </BlurredImage>
      <TextContainer>
        <LabelMain>
          {label} | {userName}
        </LabelMain>
        <TitleMain>{title}</TitleMain>
      </TextContainer>
    </CustomLinkMain>
  );
};

const Test = styled.div`
  width: 20px;
  height: 20px;
`;

const HoverableImage = styled(Image)`
  transition: transform 0.3s ease-in-out;
  object-fit: cover;
`;
const BlurredImage = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${HoverableImage} {
    transform: scale(1.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.05) 25%,
      rgba(20, 20, 20, 0.1) 50%,
      rgba(20, 20, 20, 0.3) 75%,
      rgba(20, 20, 20, 0.5) 100%
    );
    z-index: 1;
  }

  img {
    width: 100%;
    display: block;
  }
`;

//mainImage

const ImagesContainer = styled.div`
  display: flex;
  margin-right: 8px;
`;

const CustomLinkMain = styled(Link)`
  width: 340px;
  height: 260px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
`;

const Badge = styled.div`
  position: absolute;
  display: flex;
  width: max-content;
  right: 20px;
  top: 20px;
  z-index: 1;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-left: 12px;
`;

const Span = styled(B2_M_14)`
  color: var(${colors.NEUTRAL_WHITE});
  margin-left: 6px;
`;

const LabelMain = styled(B2_R_14)`
  color: var(${colors.NEUTRAL_WHITE});
`;

const TitleMain = styled(H3_M_18)`
  color: var(${colors.NEUTRAL_WHITE});
  left: 20px;
  bottom: 20px;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;
  left: 20px;
  bottom: 20px;
`;
