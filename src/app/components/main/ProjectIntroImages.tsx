import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";

export const ProjectIntroImages = () => {
  return (
    <Container>
      <ImagesContainer>
        <CustomLink href="#">
          <Badge>
            <Div>
              <HeartOutlined style={{ color: "black" }} />
              <Span>123</Span>
            </Div>
            <Div>
              <HeartOutlined style={{ color: "black" }} />
              <Span>123</Span>
            </Div>
          </Badge>
          <HoverableImage
            objectFit="cover"
            width={379}
            height={320}
            alt="image"
            src={"https://placehold.co/379x320/png"}
          />
          <TextContainer>
            <Text1>서비스 기획 | 김미정</Text1>
            <Text2>포트폴리오 아카이빙 서비스, 스팩폴리오</Text2>
          </TextContainer>
        </CustomLink>
      </ImagesContainer>
      <ImagesContainer2>
        <CustomLink href="#">
          <HoverableImage
            width={219}
            height={156}
            alt="image"
            src={"https://placehold.co/219x156/png"}
          />
        </CustomLink>
        <CustomLink href="#">
          <HoverableImage
            width={219}
            height={156}
            alt="image"
            src={"https://placehold.co/219x156/png"}
          />
        </CustomLink>
        <CustomLink href="#">
          <HoverableImage
            width={219}
            height={156}
            alt="image"
            src={"https://placehold.co/219x156/png"}
          />
        </CustomLink>
        <CustomLink href="#">
          <HoverableImage
            width={219}
            height={156}
            alt="image"
            src={"https://placehold.co/219x156/png"}
          />
        </CustomLink>
        <CustomLink href="#">
          <HoverableImage
            width={219}
            height={156}
            alt="image"
            src={"https://placehold.co/219x156/png"}
          />
        </CustomLink>
        <CustomLink href="#">
          <HoverableImage
            width={219}
            height={156}
            alt="image"
            src={"https://placehold.co/219x156/png"}
          />
        </CustomLink>
      </ImagesContainer2>
    </Container>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  margin-right: 8px;
`;

const ImagesContainer2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CustomLink = styled(Link)`
  width: fit-content;
  height: fit-content;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1060px;
`;
const HoverableImage = styled(Image)`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
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

const Span = styled.span`
  margin-left: 6px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 339px;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;
  color: #000;
  right: 20px;
  bottom: 20px;
`;

const Text1 = styled.div`
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 400;
`;

const Text2 = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  left: 20px;
  bottom: 20px;
`;
