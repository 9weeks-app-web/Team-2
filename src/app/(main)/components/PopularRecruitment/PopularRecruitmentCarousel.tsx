import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { PopularRecruitmentCard } from "./PopularRecruitmentCard";
import { Autoplay } from "swiper/modules";
import { PopularRecruitmentObjProps } from "@/types";

export const PopularRecruitmentCarousel = ({
  recruitmentInfo,
}: {
  recruitmentInfo: PopularRecruitmentObjProps[];
}) => {
  return (
    <StyledSwiper
      onAutoplayPause={(swiper) => swiper.autoplay.resume()}
      modules={[Autoplay]}
      loop
      autoplay={{ delay: 3000 }}
      slidesPerView={"auto"}
    >
      {recruitmentInfo.map((el) => (
        <SwiperSlide key={el.id}>
          <div style={{ marginRight: "20px" }}>
            <PopularRecruitmentCard {...el} />
          </div>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  position: relative;
  .swiper-slide {
    width: fit-content !important;
  }
`;
