import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";
import {
  B1_M_16,
  B2_R_12,
  B2_M_14,
  B2_R_14,
  H3_M_18,
} from "@/styles/stylesComponents/typographyComponents";
import { colors } from "@/styles/colors";
import { PopularPortfolioImagesProps } from "@/types";

export const PopularPortfolioImages = ({
  imagesInfo,
}: PopularPortfolioImagesProps) => {
  return (
    <Container>
      {imagesInfo &&
        imagesInfo.slice(0, 1).map((el, idx) => {
          return (
            <ImagesContainer key={idx}>
              <CustomLinkMain href="/sfacfolio/detail/a1b1">
                <Badge>
                  <Div>
                    <HeartOutlined style={{ color: "white" }} />
                    <Span>{el.likes}</Span>
                  </Div>
                  <Div>
                    <HeartOutlined style={{ color: "white" }} />
                    <Span>{el.bookmark}</Span>
                  </Div>
                </Badge>
                <BlurredImage>
                  <HoverableImage
                    quality={100}
                    // unoptimized
                    width={379}
                    height={320}
                    alt="image"
                    src={el.src}
                    onError={(e) =>
                      (e.currentTarget.src = "https://placehold.co/379x320/png")
                    }
                  />
                </BlurredImage>
                <TextContainer>
                  <LabelMain>
                    {el.label} | {el.userName}
                  </LabelMain>
                  <TitleMain>{el.title}</TitleMain>
                </TextContainer>
              </CustomLinkMain>
            </ImagesContainer>
          );
        })}

      <ImagesContainerSub>
        {imagesInfo &&
          imagesInfo.slice(1).map((el, idx) => (
            <CustomLink href="/sfacfolio/detail/a1b1" key={idx}>
              <BadgeSub>
                <DivSub>
                  <HeartOutlined style={{ color: "white" }} />
                  <SpanSub>{el.likes}</SpanSub>
                </DivSub>
                <DivSub>
                  <HeartOutlined style={{ color: "white" }} />
                  <SpanSub>{el.bookmark}</SpanSub>
                </DivSub>
              </BadgeSub>
              <BlurredImage>
                <HoverableImage
                  quality={100}
                  // unoptimized
                  width={219}
                  height={156}
                  alt="image"
                  src={el.src}
                  onError={(e) =>
                    (e.currentTarget.src = "https://placehold.co/219x156/png")
                  }
                />
              </BlurredImage>
              <TextContainerSub>
                <LabelSub>
                  {el.label} | {el.userName}
                </LabelSub>
                <TitleSub>{el.title}</TitleSub>
              </TextContainerSub>
            </CustomLink>
          ))}
      </ImagesContainerSub>
    </Container>
  );
};

//public
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1060px;
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
  width: 379px;
  height: 320px;
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

//subImage

const ImagesContainerSub = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TextContainerSub = styled.div`
  position: absolute;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;
  left: 14px;
  bottom: 14px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const LabelSub = styled(B2_R_12)`
  width: fit-content;
  color: var(${colors.NEUTRAL_WHITE});
`;

const TitleSub = styled(B1_M_16)`
  color: var(${colors.NEUTRAL_WHITE});
  width: 100%;
  left: 20px;
  bottom: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const BadgeSub = styled.div`
  position: absolute;
  display: flex;
  width: max-content;
  right: 14px;
  top: 14px;
  z-index: 1;
  gap: 6px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const DivSub = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;

const SpanSub = styled(B2_R_12)`
  color: var(${colors.NEUTRAL_WHITE});
  margin-left: 4px;
`;
const CustomLink = styled(Link)`
  width: 219px;
  height: 156px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  &:hover {
    ${TextContainerSub} {
      opacity: 1;
    }
    ${BadgeSub} {
      opacity: 1;
    }
  }
`;
