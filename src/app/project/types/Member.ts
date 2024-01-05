interface Member {
  id: number;
  avatarImage: string;
  coverImage?: string;
  name?: string;
  type?: string; // "프로 리더형" | "예리한 분석가형" | "행동대장형";
  role?: string; // "개발자" | "디자이너" | "기획자";
  workTendency?: string[]; // "통찰력있는" | "계획적인" | "주도적인" | "관찰력이뛰어난"
  skills?: string[]; // "notion" | "slack"
}


