interface Project {
  id: string;
  title: string;
  description: string;
  recruitmentStatus?: Date; // "모집시 마감"과 같은 상태 문자열
  recruitmentPeriod: string; // "1주"와 같은 모집 기간 문자열
  memberQuota: {
    [role: string]: number; // 각 역할에 대한 모집 인원 (예: {'프론트': 2, '디자이너': 2})
  };
  currentMemberCount: number; // 현재 인원 수
  totalMemberCount: number; // 전체 필요 인원 수
  workTendencyMatchingRate: number; // 업무성향 매칭률
}
