import PopTopicsItem from "./PopTopicsItem";
import {
  StyledPopTopicList,
  StyledSubtitle,
  StyledPopTopicListContainer,
} from "./PopTopicsStyled";
import { StyledCustomHeader } from "../Title/Title";
const Toptopics = [
  {
    id: 1,
    username: "김철수",
    occupation: "개발자",
    profileImage: "",
    tag: "기술",
    title:
      "리액트 훅 사용법에 대해 궁금합니다.리액트 훅 사용법에 대해 궁금합니다.",
    description:
      "리액트 훅을 사용하면서 어려움을 겪고 있어요. 도와주세요!리액트 훅을 사용하면서 어려움을 겪고 있어요. 도와주세요!",
    likes: 128,
    views: 1054,
    createdAt: "2023-12-28T10:30:00",
  },
  {
    id: 2,
    username: "박영희",
    occupation: "디자이너",
    profileImage: "",
    tag: "디자인",
    title: "UI 디자인에 관한 팁을 공유합니다.",
    description:
      "UI 디자인 작업 중에 알게 된 팁을 공유하고자 합니다.UI 디자인 작업 중에 알게 된 팁을 공유하고자 합니다.",
    likes: 87,
    views: 702,
    createdAt: "2023-12-28T09:45:00",
  },
  {
    id: 3,
    username: "이민호",
    occupation: "마케터",
    profileImage: "",
    tag: "마케팅",
    title: "SNS 마케팅에 대한 고민입니다.",
    description: "SNS 마케팅 전략에 대해 고민 중입니다. 도와주세요!",
    likes: 213,
    views: 1568,
    createdAt: "2023-12-29T11:15:00",
  },
];

export const PopTopicList = () => {
  return (
    <StyledPopTopicListContainer>
      <StyledSubtitle>커뮤니티</StyledSubtitle>
      <StyledCustomHeader title="실시간 인기 토픽" linkPath="" />
      <StyledPopTopicList>
        {Toptopics.map((topic, index) => (
          <PopTopicsItem
            key={topic.id}
            username={topic.username}
            occupation={topic.occupation}
            profileImage={topic.profileImage}
            tag={topic.tag}
            title={topic.title}
            description={topic.description}
            likes={topic.likes}
            views={topic.views}
            createdAt={topic.createdAt}
          />
        ))}
      </StyledPopTopicList>
    </StyledPopTopicListContainer>
  );
};
