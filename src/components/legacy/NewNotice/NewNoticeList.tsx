import { NewNoticeItem } from "./NewNoticeItem";
import { SectionTitle } from "../Section/SectionTitle";
import { SectionContainer } from "../Section/SectionContainer";
import styled from "styled-components";
type Props = {};

export const NewNoticeList = (props: Props) => {
  const notices = [
    {
      label: "News",
      heading: "실시간 해외주식 정보제공 서비스,“장전” 정식 오픈",
      paragraph: "와이엠에스닷코",
      time: "2023-12-21",
      imageUrl: "image-url-1",
      imageAlt: "Image 1",
    },
    {
      label: "Project",
      heading: "네이버쇼핑 쿠폰북 프로모션 디자인",
      paragraph: "스튜디오 제이티",
      time: "2023-12-22",
      imageUrl: "image-url-2",
      imageAlt: "Image 2",
    },
    {
      label: "Service",
      heading: "카카오클라우드,AWD 협업 확대로 클라우드 고도화",
      paragraph: "카카오엔터프라이즈",
      time: "2023-12-23",
      imageUrl: "image-url-3",
      imageAlt: "Image 3",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle
        titleA="기업 · 에이전시 NEW 소식"
        titleB="관심있는 곳의 최신 경향을 확인해 보세요!"
        linkPath="#"
      />
      <Body>
        {notices.map((notice, index) => (
          <NewNoticeItem key={index} {...notice} />
        ))}
      </Body>
    </SectionContainer>
  );
};
const Body = styled.div`
  display: flex;
  gap: 20px;
`;
