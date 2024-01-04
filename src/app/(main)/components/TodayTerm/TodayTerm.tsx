"use client";
import { SectionContainer } from "@/components/Section/SectionContainer";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { H1_SB_24 } from "@/styles/stylesComponents/typographyComponents";
import { colors } from "@/styles/colors";
import { Category } from "@/components/Category/Category";
import { TodayTermCarousel } from "./TodayTermCarousel";
import { todayTermsCategoryState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";

export const TodayTerm = () => {
  const [terms, setTerms] = useState(termsInfo);
  const todayTermsValue = useRecoilValue(todayTermsCategoryState);

  useEffect(() => {
    if (todayTermsValue === "total") {
      setTerms(() => termsInfo);
    } else if (todayTermsValue === "plan") {
      const filteredArray = termsInfo.filter((el) => el.category === "plan");
      console.log("plan =", filteredArray);
      setTerms(() => filteredArray);
    } else if (todayTermsValue === "design") {
      const filteredArray = termsInfo.filter((el) => el.category === "design");
      console.log("design =", filteredArray);
      setTerms(() => filteredArray);
    } else if (todayTermsValue === "develop") {
      const filteredArray = termsInfo.filter((el) => el.category === "develop");
      console.log("develop =", filteredArray);
      setTerms(() => filteredArray);
    }
  }, [todayTermsValue, setTerms]);
  return (
    <SectionContainer>
      <SectionTitle>오늘의 직무 용어</SectionTitle>
      <FlexRowCenter>
        <Category
          categoryInfo={categoryInfo}
          recoilState={todayTermsCategoryState}
        />
      </FlexRowCenter>
      <TodayTermCarousel termsInfo={terms} />
    </SectionContainer>
  );
};

const SectionTitle = styled(H1_SB_24)`
  color: var(${colors.NEUTRAL_90});
  text-align: center;
  margin-bottom: 26px;
`;

const FlexRowCenter = styled.div`
  display: flex;
  justify-content: center;
`;
const categoryInfo = [
  {
    title: "전체",
    name: "termCategory",
    id: "termRadio1",
    value: "total",
  },
  {
    title: "기획",
    name: "termCategory",
    id: "termRadio2",
    value: "plan",
  },
  {
    title: "디자인",
    name: "termCategory",
    id: "termRadio3",
    value: "design",
  },
  {
    title: "개발",
    name: "termCategory",
    id: "termRadio4",
    value: "develop",
  },
];
const termsInfo = [
  {
    id: "term1",
    category: "plan",
    label: "기획",
    title: "페르소나",
    description:
      "고객이나 타겟 대상 그룹을 더 잘 이해하고 그들의 요구를 파악하는 데 도움이 되는 가상의 사용자 프로필이다.",
  },
  {
    id: "term2",
    category: "design",
    label: "디자인",
    title: "반응형 웹",
    description:
      "정해진 해상도에 맞춰 제작한 내용에 따라 화면이 구성되는 기술로 반응형 웹과 달리 브라우저가 미리 정해놓은 범위 사이즈에 따라 레이아웃이 맞춰져서 보인다.",
  },
  {
    id: "term3",
    category: "develop",
    label: "개발",
    title: "API",
    description:
      "어떤 프로그램이 다른 프로그램의 동작 코드에 접근하여 상호작용하거나 데이터를 주고받을 수 있는 규약이다.",
  },
  {
    id: "term4",
    label: "기획",
    category: "plan",
    title: "와이어프레임",
    description:
      "웹 사이트나 앱의 기본 구조와 레이아웃을 시각적으로 표현한 것입니다.",
  },
  {
    id: "term5",
    label: "기획",
    category: "plan",
    title: "유저 인터페이스",
    description:
      "웹 사이트나 앱의 사용자가 상호 작용하는 화면을 디자인하는 프로세스와 해당 디자인 자체를 나타냅니다.",
  },
  {
    id: "term6",
    label: "디자인",
    category: "design",
    title: "컬러 팔레트",
    description:
      "디자인에서 사용되는 일련의 색상을 나타냅니다. 적절한 컬러 팔레트는 브랜드 아이덴티티를 강화하고 사용자에게 긍정적인 인상을 전달하는 데 기여합니다.",
  },
  {
    id: "term7",
    label: "디자인",
    category: "design",
    title: "반응형 디자인",
    description:
      "반응형 디자인은 웹 사이트나 앱을 여러 디바이스와 화면 크기에 맞게 자동으로 조절되도록 하는 디자인 접근 방식입니다.",
  },
  {
    id: "term8",
    label: "개발",
    category: "develop",
    title: "오픈 소스",
    description:
      "오픈 소스는 소스 코드가 공개되어 누구나 접근하고 사용할 수 있는 소프트웨어를 의미합니다.",
  },
  {
    id: "term9",
    label: "개발",
    category: "develop",
    title: "버전 관리",
    description:
      "버전 관리는 소프트웨어 개발 과정에서 코드의 변경 사항을 추적하고 관리하는 도구를 사용하는 프로세스를 의미합니다.",
  },
  {
    id: "term10",
    category: "plan",
    label: "기획",
    title: "스토리보드",
    description:
      "영상이나 애니메이션을 만들기 전에 각 장면을 그림으로 표현한 것으로, 시각적인 이야기 흐름을 나타냅니다.",
  },
  {
    id: "term11",
    category: "design",
    label: "디자인",
    title: "픽셀 아트",
    description:
      "디지털 그래픽 디자인의 한 형태로, 작은 정사각형 또는 픽셀을 사용하여 이미지를 만드는 예술적 기법입니다.",
  },
  {
    id: "term12",
    category: "develop",
    label: "개발",
    title: "코딩 컨벤션",
    description:
      "코드 작성 시 일관된 스타일과 구조를 유지하기 위한 규칙의 집합으로, 코드 가독성과 협업을 촉진합니다.",
  },
];
