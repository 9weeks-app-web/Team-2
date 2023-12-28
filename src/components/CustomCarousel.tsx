"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import styled from "styled-components";
export const CustomCarousel = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <CarouseWrapper afterChange={onChange}>
      <div>
        <Image
          width={1060}
          height={160}
          src={"https://placehold.co/1060x160/png"}
          alt="image"
        />
      </div>
      <div>
        <Image
          width={1060}
          height={160}
          src={"https://placehold.co/1060x160/png"}
          alt="image"
        />
      </div>
      <div>
        <Image
          width={1060}
          height={160}
          src={"https://placehold.co/1060x160/png"}
          alt="image"
        />
      </div>
    </CarouseWrapper>
  );
};

const CarouseWrapper = styled(Carousel)`
  width: 1060px;
  margin: auto;
  margin-top: 36px;
  margin-bottom: 36px;
`;
