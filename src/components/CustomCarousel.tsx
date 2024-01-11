"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import styled from "styled-components";
export const CustomCarousel = () => {
  const onChange = (currentSlide: number) => {};
  return (
    <CarouseWrapper afterChange={onChange} autoplay>
      {Array.from({ length: 4 }, () => {}).map((el, idx) => (
        <div key={idx}>
          <Image
            unoptimized
            width={1060}
            height={160}
            src={`/mainCarouselImg/mainCarousel-${idx + 1}.png`}
            alt={`배너 이미지 ${idx + 1}`}
          />
        </div>
      ))}
    </CarouseWrapper>
  );
};

const CarouseWrapper = styled(Carousel)`
  width: 1060px;
  margin: auto;
  margin-bottom: 36px;
`;
