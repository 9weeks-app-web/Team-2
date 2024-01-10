import { UserCard } from "@/components/UserCard/UserCard";
import { colors } from "@/styles/colors";
import {
  B2_M_14,
  B2_R_12,
} from "@/styles/stylesComponents/typographyComponents";
import { HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import HeartIcon from "../../../../../public/Icon/Icon_heart.svg";
import BookmarkIcon from "../../../../../public/Icon/Icon_sidebar/Icon_bookmark.svg";
import { PortfolioProps } from "@/types";
//temp 사용 x
interface temp {
  id: string;
  imageUrl: string;
  title: string;
  userName: string;
  userJob: string;
  likes: number;
  bookmark: number;
  category: string;
  makingTool: string;
  keyword: Array<string>;
  mainImageUrl: string;
}

export const PortfolioCard = ({
  avatarSrc,
  bookmark,
  category,
  id,
  label,
  likes,
  src,
  title,
  username,
}: PortfolioProps) => {
  return (
    <Container href={"/sfacfolio/detail/abc"}>
      <BlurredImage>
        <HoverableImage
          quality={100}
          // unoptimized
          width={250}
          height={230}
          alt="image"
          src={src || "https://placehold.co/250x230/png"}
        />
        <PortfolioTitle>{title}</PortfolioTitle>
      </BlurredImage>
      <CardInfoContainer>
        <UserCard
          avatarSize={28}
          avatarSrc={avatarSrc}
          $flexDirection="row"
          $flexGap="4px"
          userName={<UserName>{username}</UserName>}
        />
        <FlexBox>
          <HeartIcon width={16} height={16} fill="white" stroke="black" />
          <Span>{likes}</Span>
          <BookmarkIcon width={16} height={16} fill="black" />
          <Span>{bookmark}</Span>
        </FlexBox>
      </CardInfoContainer>
    </Container>
  );
};

const UserName = styled(B2_R_12)`
  color: var(${colors.NEUTRAL_90});
`;

const Container = styled(Link)`
  display: inline-block;
  width: fit-content;
  height: 270px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const HoverableImage = styled(Image)`
  transition: transform 0.3s ease-in-out;
  object-fit: cover;
`;

const BlurredImage = styled.div`
  width: 250px;
  height: 230px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
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

const PortfolioTitle = styled(B2_M_14)`
  position: absolute;
  left: 14px;
  bottom: 20px;
  color: var(${colors.STROKE_5});
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  z-index: 2;
  width: 80%;
`;

const CardInfoContainer = styled.div`
  display: flex;
  height: 28px;
  justify-content: space-between;
  padding: 0 1px 0 1px;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Span = styled(B2_R_12)`
  color: var(${colors.NEUTRAL_50});
`;
