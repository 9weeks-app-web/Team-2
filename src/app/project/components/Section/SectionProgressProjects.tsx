import React from "react";
import styled from "styled-components";
import BigCard from "../Section1Card";
import SectionHeader from "../../../../components/Section/SectionHeader";
import { _myProjects } from "../../../../constant/_[project]mockup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SectionProgressProjects: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Section1>
      <SectionHeader
        headerText1={`${user.name}님의`}
        headerText2={"진행 중인 프로젝트"}
        seeMoreHref={"#"}
      ></SectionHeader>
      <ContentContainer>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
          slidesPerView={1.3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {_myProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <BigCard project={project}></BigCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentContainer>
    </Section1>
  );
};

export default SectionProgressProjects;

// Section1
const Section1 = styled.section`
  width: 49.25rem;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;
  margin-top: 1.5rem;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
