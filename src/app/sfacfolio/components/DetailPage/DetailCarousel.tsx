"use client";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { colors } from "@/styles/colors";
import Link from "next/link";
import Image from "next/image";
import { H3_SB_18 } from "@/styles/stylesComponents/typographyComponents";
export const DetailCarousel = () => {
  return (
    <CarouselContainer>
      <CarouselInnerContainer>
        <CarouselTitle>김평양님의 다른 작업물을 감상해보세요</CarouselTitle>
        <StyledSwiper
          // onAutoplayPause={(swiper) => swiper.autoplay.resume()}
          // modules={[Autoplay]}
          //   autoplay={{ delay: 3000 }}
          modules={[Navigation]}
          loop
          navigation={{
            nextEl: ".custom-button-next",
            // prevEl: ".custom-button-prev",
          }}
          slidesPerView={"auto"}
        >
          {Array.from({ length: 6 }, () => {}).map((el, idx) => (
            <StyledSwiperSlide key={idx}>
              <Link href={"/"}>
                <Image
                  width={195}
                  height={195}
                  alt="image"
                  src={
                    `/portfolioDetail/detailCarouselImg/carousel-${
                      idx + 1
                    }.png` || `https://placehold.co/195x195/png`
                  }
                />
              </Link>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        {/* <CustomButton className="custom-button-prev">&lt;</CustomButton> */}
        <CustomButton className="custom-button-next">&gt;</CustomButton>
      </CarouselInnerContainer>
    </CarouselContainer>
  );
};

const CarouselTitle = styled(H3_SB_18)`
  text-align: center;
  margin-bottom: 24px;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  margin-right: 12px;
`;

const CarouselInnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: block;
  /* margin: auto; */
  .custom-button-next {
    position: absolute;
    z-index: 3;
    top: 55%;
    right: -5px;
  }
  /* .custom-button-prev {
    position: absolute;
    z-index: 3;
    top: 45%;
    left: -50px;
  } */
`;
const CarouselContainer = styled.section`
  width: 1024px;
  /* margin-bottom: 50px; */
  margin: 0 auto 50px;
`;
const StyledSwiper = styled(Swiper)`
  position: relative;
  .swiper-slide {
    width: fit-content !important;
    /* overflow: hidden !important; */
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
  color: var(${colors.PRIMARY_50});
  font-size: 18px;
  border: 1px solid var(${colors.NEUTRAL_10});
  background-color: var(${colors.NEUTRAL_WHITE});
  cursor: pointer;
`;
