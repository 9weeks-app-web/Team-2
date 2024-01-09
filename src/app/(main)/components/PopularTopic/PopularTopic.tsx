"use client";
import React from "react";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { SectionTitle } from "@/components/Section/SectionTitle";
import styled from "styled-components";
import { PopularTopicCard } from "./PopularTopicCard";
export const PopularTopic = () => {
  const topics = [
    {
      id: 1,
      userName: "오유석",
      userJob: "서비스 기획자",
      userImageUrl: "/mainPageImg/avatar-mainTopic-1.png",
      tag: ["#개발", "#디자인", "#협업"],
      heading: "개발자와 디자이너 소통 방식 질문",
      description:
        "이번 프로젝트에서 개발자와 처음으로 협업을 하게 되었어요. 팀원이 많다 보니까 개발 팀이랑 디자인 팀 간 소통이 힘드네요. 경험 많으신 분의 조언을 얻고 싶어요 ㅜㅜ",
      likes: 128,
      comments: 1054,
      createdAt: "2023-12-28T10:30:00",
    },
    {
      id: 2,
      userName: "박영희",
      userJob: "디자이너",
      userImageUrl: "/mainPageImg/avatar-mainTopic-2.png",
      tag: ["#정보 공유", "#취업", "#디자인", "#UX"],
      heading: "바닥부터 시작한 프로덕트 디자이너 취업 과정",
      description:
        "본격적으로 잡헌팅을 시작한 지 네 달만에, 목표하던 기업의 첫 인터뷰 오퍼가 들어왔어요. 프로덕트 디자이너로 이직을을",
      likes: 87,
      comments: 702,
      createdAt: "2023-12-28T09:45:00",
    },
    {
      id: 3,
      userName: "이민호",
      userJob: "마케터",
      userImageUrl: "/mainPageImg/avatar-mainTopic-3.png",
      tag: ["#상식", "#정보 공유", "#업무"],
      heading: "내가 올린 보고서는 왜 상사에게 반려당할까?",
      description:
        "회사에서 지낸 시간을 돌아보면, 전부 회의와 보고서의 연속이었네요. 한 달 간 진행했던 프로젝트의 진행 사항을 열열",
      likes: 213,
      comments: 1568,
      createdAt: "2023-12-29T11:15:00",
    },
  ];
  return (
    <SectionContainer>
      <SectionTitle linkUrl="#" titleA="커뮤니티" titleB="실시간 인기 토픽" />
      <Body>
        {topics.map((el, idx) => (
          <PopularTopicCard key={idx} {...el} />
        ))}
      </Body>
    </SectionContainer>
  );
};

export const Body = styled.div`
  display: flex;
  gap: 20px;
`;
