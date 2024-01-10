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
      const response = await fetch(`/api/main/popularproject/${projectValue}`);
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
        linkUrl="#"
      />
      <CategoryWrapper>
        <Category
          categoryInfo={categoryInfo}
          recoilState={projectCategoryState}
        />
      </CategoryWrapper>
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

const CategoryWrapper = styled.div`
  margin-bottom: 24px;
`;

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
