export type InterestCategory = "design" | "planning" | "development";

type InterestsData = {
  [key in InterestCategory]: string[];
};
export const interestsData = {
  design: [
    "그래픽 디자인",
    "제품 디자인",
    "산업 디자인",
    "시각 디자인",
    "패션 디자인",
    "웹 디자인",
    "UXUI 디자인",
    "3D 디자인",
    "영상 디자인",
    "인터렉션 디자인",
    "광고 디자인",
    "일러스트레이션",
    "브랜딩 디자인",
  ],
  planning: [
    "경영·비즈니스기획",
    "웹기획",
    "마케팅 기획",
    "PL·PM·PO",
    "컨설턴트",
    "CEO·COO·CTO",
  ],
  development: [
    "백엔드개발자",
    "프론트앤드개발자",
    "웹개발자",
    "앱개발자",
    "네트워크 엔지니어",
    "소프트웨어 엔지니어",
    "게임 개발자",
    "하드웨어 개발자",
    "머신러닝 엔지니어",
    "데이터 엔지니어",
    "클라우드 엔지니어",
    "IT 컨설팅",
  ],
};
