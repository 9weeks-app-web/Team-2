// 아톰 작성 페이지
import { atom } from "recoil";
import { User } from "@/app/project/types/User";
export const portFolioCategoryState = atom({
  key: "portFolioCategoryState",
  default: "total",
});

export const projectCategoryState = atom({
  key: "projectCategoryState",
  default: "total",
});

export const todayTermsCategoryState = atom({
  key: "todayTermsCategoryState",
  default: "total",
});

export const RecruitmentCategoryState = atom({
  key: "RecruitmentCategoryState",
  default: "planner",
});

export const pfPageCategoryState = atom({
  key: "pfPageCategoryState",
  default: "total",
});
export const SectionMemberRecommCategoryState = atom({
  key: "SectionMemberRecommCategoryState",
  default: "total",
});

export const SectionAllProjectsCategoryState = atom({
  key: "SectionAllProjectsCategoryState",
  default: "total",
});

// 정렬
export const sortState = atom({
  key: "sortState",
  default: "mating",
});

// 팀원평가 키워드
export const evaluationKeywordTagState = atom<Record<string, string[]>>({
  key: "evaluationKeywordTagState",
  default: {},
});

// 유저 정보
export const userInfoState = atom<User | object>({
  key: "userInfoState",

  default: {},
});

export const recommendKeywordTagState = atom<Record<string, string[]>>({
  key: "recommendKeywordTagState",

  default: {},
});
