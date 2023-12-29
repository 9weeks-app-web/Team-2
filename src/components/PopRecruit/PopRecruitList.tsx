import PopRecruitItem from "./PopRecruitItem";
import { StyledCustomHeader } from "../Title/Title";
import {
  StyledRecruitList,
  StyledRecruitListContainer,
  StyledRecruit,
} from "./PopRecruitStyled";
export const PopRecruitList = () => {
  const recruitData = [
    {
      id: 1,
      endDate: new Date("2023-12-31"),
      title: "[스팩폴리오] 웹 개발자 채용",
      position: "웹 개발자",
      company: "주식회사 열정",
    },
    {
      id: 2,
      endDate: new Date("2024-01-15"),
      title: "[스팩폴리오] 백엔드 엔지니어 모집",
      position: "백엔드 엔지니어",
      company: "행복주식회사",
    },
    {
      id: 3,
      endDate: new Date("2024-01-20"),
      title: "[스팩폴리오] 프론트엔드 디자이너 모집",
      position: "프론트엔드 디자이너",
      company: "파란하늘 기업",
    },
    {
      id: 4,
      endDate: new Date("2024-01-20"),
      title: "[스팩폴리오] 프론트엔드 디자이너 모집",
      position: "프론트엔드 디자이너",
      company: "파란하늘 기업",
    },

    {
      id: 5,
      endDate: new Date("2024-01-03"),
      title: "[스팩폴리오] 소프트웨어 엔지니어 모집",
      position: "소프트웨어 엔지니어",
      company: "테크넷 주식회사",
    },
    {
      id: 6,
      endDate: new Date("2024-01-10"),
      title: "[스팩폴리오] 데이터 분석가 채용",
      position: "데이터 분석가",
      company: "블루웨이 기술",
    },
    {
      id: 7,
      endDate: new Date("2024-01-05"),
      title: "[스팩폴리오] AI 기술자 모집",
      position: "AI 기술자",
      company: "로보테크 주식회사",
    },
    {
      id: 8,
      endDate: new Date("2024-01-08"),
      title: "[스팩폴리오] 시스템 엔지니어 채용",
      position: "시스템 엔지니어",
      company: "네트웨이 주식회사",
    },
    {
      id: 9,
      endDate: new Date("2024-01-01"),
      title: "[스팩폴리오] 풀스택 개발자 채용",
      position: "풀스택 개발자",
      company: "스마트테크 기술",
    },
    {
      id: 10,
      endDate: new Date("2023-12-28"),
      title: "[스팩폴리오] 모바일 앱 디자이너 모집",
      position: "모바일 앱 디자이너",
      company: "스토리픽 주식회사",
    },
  ];

  return (
    <StyledRecruit>
      <StyledRecruitListContainer>
        <StyledCustomHeader
          title="직무별 인기 채용 공고"
          linkPath="#"
        ></StyledCustomHeader>
        <StyledRecruitList>
          {recruitData.map((item) => (
            <PopRecruitItem key={item.id} item={item} />
          ))}
        </StyledRecruitList>
      </StyledRecruitListContainer>
    </StyledRecruit>
  );
};
