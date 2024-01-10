// 섹션 2 팀원추천 페이지에 필요한 카테고리 목업 데이터
import { v4 as uuidv4 } from "uuid";
export const SectionMemberRecommCategoryList = [
  {
    title: "전체",
    name: "SectionMemberRecommCategory",
    id: uuidv4(),
    value: "total",
  },
  {
    title: "기획자",
    name: "SectionMemberRecommCategory",
    id: uuidv4(),
    value: "productManager",
  },
  {
    title: "디자이너",
    name: "SectionMemberRecommCategory",
    id: uuidv4(),
    value: "designer",
  },
  {
    title: "프론트 개발자",
    name: "SectionMemberRecommCategory",
    id: uuidv4(),
    value: "FEdeveloper",
  },
  {
    title: "백엔드 개발자",
    name: "SectionMemberRecommCategory",
    id: uuidv4(),
    value: "BEdeveloper",
  },
];

// 섹션3 전체 프로젝트 공고 카테고리
export const SectionAllProjectsCategoryList = [
  {
    title: "전체",
    name: "SectionAllProjectsCategory",
    id: uuidv4(),
    value: "total",
  },
  {
    title: "기획자",
    name: "SectionAllProjectsCategory",
    id: uuidv4(),
    value: "productManager",
  },
  {
    title: "디자이너",
    name: "SectionAllProjectsCategory",
    id: uuidv4(),
    value: "designer",
  },
  {
    title: "프론트 개발자",
    name: "SectionAllProjectsCategory",
    id: uuidv4(),
    value: "FEdeveloper",
  },
  {
    title: "백엔드 개발자",
    name: "SectionAllProjectsCategory",
    id: uuidv4(),
    value: "BEdeveloper",
  },
];

export const categoryPfPageList = [
  {
    title: "전체",
    name: "pfPageCategory",
    id: "pfPageId1",
    value: "total",
  },
  {
    title: "기획",
    name: "pfPageCategory",
    id: "pfPageId2",
    value: "serviceplan",
  },
  {
    title: "디자인",
    name: "pfPageCategory",
    id: "pfPageId3",
    value: "design",
  },
];

export const popularPortfolioCategoryList = [
  {
    title: "전체",
    name: "pfCategory",
    id: "pfRadio1",
    value: "total",
  },
  {
    title: "서비스 기획",
    name: "pfCategory",
    id: "pfRadio2",
    value: "serviceplan",
  },
  {
    title: "웹 기획",
    name: "pfCategory",
    id: "pfRadio3",
    value: "webplan",
  },
  {
    title: "앱 기획",
    name: "pfCategory",
    id: "pfRadio4",
    value: "appplan",
  },
  {
    title: "웹 디자인",
    name: "pfCategory",
    id: "pfRadio5",
    value: "webdesign",
  },
  {
    title: "앱 디자인",
    name: "pfCategory",
    id: "pfRadio6",
    value: "appdesign",
  },
];

export const JobcategoryVerticalList = [
  {
    id: "verticalButton1",
    name: "verticalCategory",
    title: "서비스 기획자",
    value: "planner",
  },
  {
    id: "verticalButton2",
    name: "verticalCategory",
    title: "디자이너",
    value: "designer",
  },
  {
    id: "verticalButton3",
    name: "verticalCategory",
    title: "프론트 개발자",
    value: "frontend",
  },
  {
    id: "verticalButton4",
    name: "verticalCategory",
    title: "백엔드 개발자",
    value: "backend",
  },
];
