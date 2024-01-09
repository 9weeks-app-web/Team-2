"use client";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { colors } from "@/styles/colors";
import { HotCreatorCard } from "./HotCreatorCard";
import { hotCreatorCarouselData } from "@/constant/mock";
export const HotCreatorCarousel = () => {
  return (
    <CarouselContainer>
      <CarouselInnerContainer>
        <CarouselTitle>실시간 HOT 크리에이터</CarouselTitle>
        <StyledSwiper
          // onAutoplayPause={(swiper) => swiper.autoplay.resume()}
          // modules={[Autoplay]}
          //   autoplay={{ delay: 3000 }}
          modules={[Navigation]}
          loop
          navigation={{
            nextEl: ".custom-button-next",
            prevEl: ".custom-button-prev",
          }}
          slidesPerView={"auto"}
        >
          {hotCreatorCarouselData &&
            hotCreatorCarouselData.map((el) => (
              <StyledSwiperSlide key={el.id}>
                <HotCreatorCard {...el} />
              </StyledSwiperSlide>
            ))}
        </StyledSwiper>
        <CustomButton className="custom-button-prev">&lt;</CustomButton>
        <CustomButton className="custom-button-next">&gt;</CustomButton>
      </CarouselInnerContainer>
    </CarouselContainer>
  );
};

const CarouselTitle = styled.div`
  color: var(${colors.NEUTRAL_WHITE});
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 26px;
  text-align: center;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  margin-right: 20px;
`;

const CarouselInnerContainer = styled.div`
  position: relative;
  width: 1060px;
  display: block;
  margin: auto;
  .custom-button-next {
    position: absolute;
    z-index: 3;
    top: 45%;
    right: -50px;
  }
  .custom-button-prev {
    position: absolute;
    z-index: 3;
    top: 45%;
    left: -50px;
  }
`;
const CarouselContainer = styled.section`
  width: 100%;
  border-radius: 4px;
  padding: 36px 0 36px 0;
  background-color: var(${colors.NEUTRAL_90});
  margin: 80px 0 80px;
`;
const StyledSwiper = styled(Swiper)`
  position: relative;
  .swiper-slide {
    width: fit-content !important;
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
  color: var(${colors.NEUTRAL_WHITE});
  font-size: 18px;
  background-color: var(${colors.PRIMARY_70});
  cursor: pointer;
`;
