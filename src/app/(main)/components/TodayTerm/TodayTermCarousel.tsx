"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import {
  B1_M_16,
  H1_SB_24,
} from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";

interface TodayTermCarouselProps {
  id: string;
  label: string;
  category: string;
  title: string;
  description: string;
}

export const TodayTermCarousel = ({
  termsInfo,
}: {
  termsInfo: TodayTermCarouselProps[];
}) => {
  const [realIndex, setRealIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setRealIndex(swiper.realIndex);
  };
  return (
    <Div>
      <StyledSwiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
        centeredSlides
        loop
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {termsInfo.map((el, index) => (
          <SwiperSlide key={index}>
            <CardContainer
              className="slide-content"
              $index={index}
              $centerindex={realIndex}
            >
              <CardLabel>{el.label}</CardLabel>
              <IconImage
                src={
                  el.label === "개발"
                    ? "/developIcon.svg"
                    : el.label === "기획"
                    ? "/planIcon.svg"
                    : "/designIcon.svg"
                }
                alt="icon"
                width={68}
                height={68}
              />
              <CardTextContainer>
                <CardTitle>{el.title}</CardTitle>
                <CardDescription>{el.description}</CardDescription>
              </CardTextContainer>
            </CardContainer>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <CustomButton className="custom-button-prev">&lt;</CustomButton>
      <CustomButton className="custom-button-next">&gt;</CustomButton>
    </Div>
  );
};
const IconImage = styled(Image)`
  position: absolute;
  right: 28px;
  top: 25%;
`;
const Div = styled.div`
  position: relative;
  .custom-button-next {
    position: absolute;
    z-index: 1;
    top: 50%;
    right: -40px;
  }
  .custom-button-prev {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: -40px;
  }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .swiper-wrapper {
    align-items: center;
  }
`;
const CustomButton = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: var(${colors.NEUTRAL_100});
  font-size: 18px;
  border: 1px solid var(${colors.NEUTRAL_10});
  background-color: var(${colors.NEUTRAL_WHITE});
  cursor: pointer;
`;
const CardContainer = styled.div<{ $index: number; $centerindex: number }>`
  display: flex;
  width: ${(props) =>
    props.$index === props.$centerindex ? "352px" : "330px"};
  height: ${(props) =>
    props.$index === props.$centerindex ? "316px" : "256px"};
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(${colors.NEUTRAL_5});
  border-radius: 8px;
`;

const CardLabel = styled(B1_M_16)`
  width: 100%;
  max-height: 108px;
  min-height: 96px;
  flex-grow: 1;
  padding: 20px;
  background-color: var(${colors.PRIMARY_10});
  border-radius: 8px 8px 0 0;
`;

const CardTextContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 208px;
  min-height: 160px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;
  z-index: 1;
`;

const CardTitle = styled(H1_SB_24)`
  color: var(${colors.NEUTRAL_90});
  margin-bottom: 16px;
`;

const CardDescription = styled.p`
  color: var(${colors.NEUTRAL_70});
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
