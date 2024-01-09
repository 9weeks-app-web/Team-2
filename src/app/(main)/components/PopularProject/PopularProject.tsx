"use client";
import { Category } from "@/components/Category/Category";
import { SectionTitle } from "@/components/Section/SectionTitle";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PopularProjectCard } from "./PopularProjectCard";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { projectCategoryState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";
import { PopularProjectCardProps } from "@/types";
import { PopularProjectCardSkeleton } from "./PopularProjectCardSkeleton";
import { Skeleton } from "antd";

export const PopularProject = () => {
  const [projectInfo, setProjectInfo] = useState<PopularProjectCardProps[]>();
  const projectValue = useRecoilValue(projectCategoryState);

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch(
        `http://localhost:3000/api/main/popularproject/${projectValue}`
      );
      if (!response.ok) {
        throw Error("something went wrong, please check again portfolio value");
      }
      const result = await response.json();
      setProjectInfo(result.result);
    };
    fetchFn();
  }, [projectValue]);
  return (
    <SectionContainer>
      <SectionTitle
        titleA="곧 마감!"
        titleB="실시간 인기 프로젝트"
        linkPath="#"
      />
      <Category
        categoryInfo={categoryInfo}
        recoilState={projectCategoryState}
      />
      <Body>
        {!projectInfo && (
          <>
            <PopularProjectCardSkeleton />
            <PopularProjectCardSkeleton />
            <PopularProjectCardSkeleton />
          </>
        )}
        {projectInfo &&
          projectInfo.map((info, index) => (
            <PopularProjectCard key={index} {...info} />
          ))}
      </Body>
    </SectionContainer>
  );
};

export const Body = styled.div`
  display: flex;
  gap: 20px;
`;
const categoryInfo = [
  {
    title: "전체",
    name: "prjCategory",
    id: "prjRadio1",
    value: "total",
  },
  {
    title: "디자인",
    name: "prjCategory",
    id: "prjRadio2",
    value: "design",
  },
  {
    title: "UX/UI",
    name: "prjCategory",
    id: "prjRadio3",
    value: "uxui",
  },
  {
    title: "개발",
    name: "prjCategory",
    id: "prjRadio4",
    value: "develop",
  },
  {
    title: "기획",
    name: "prjCategory",
    id: "prjRadio5",
    value: "plan",
  },
  {
    title: "기타",
    name: "prjCategory",
    id: "prjRadio6",
    value: "etc",
  },
];

const projectInfoMock = [
  {
    tag: ["D-17", "6주"],
    heading: "GEN AI 해커톤 참가",
    category: "develop",
    label: "개발",
    description:
      "경력 상관없이 인공지능 관심 있으신 분들, 책임감 있으신 분들 같이 6주 동안 해커톤 준비해봐요~!",
    recruitmentMembers: ["개발자 3"],
    imageUrl: "image-url-1",
    deadline: "2024-02-01",
  },
  {
    tag: ["D-17", "6주"],
    heading: "메타버스 브랜딩 프로젝트",
    category: "UXUI",
    label: "UX/UI",
    description:
      "MZ 세대를 타깃으로 메타버스 플랫폼 브랜딩 해 주실 기획자 분, 기획서 디자인 해주실 디자이너 분들 모십니다!",
    recruitmentMembers: ["기획자 3", "디자이너 5"],
    imageUrl: "image-url-1",
    deadline: "2024-02-01",
  },
  {
    tag: ["D-17", "6주"],
    heading: "웹 서비스 디자인 프로젝트",
    category: "design",
    label: "기획",
    description:
      "5주 동안 웹 서비스 기획하고 디자인 같이 해서 포트폴리오 제작하는 프로젝트입니다.",
    recruitmentMembers: ["기획자 3", "디자이너 5"],
    imageUrl: "image-url-1",
    deadline: "2024-02-01",
  },
];
