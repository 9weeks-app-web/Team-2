import { RecoilState } from "recoil";

export interface PopularPortfolioImagesObjProps {
  id: string;
  likes: number;
  bookmark: number;
  category: string;
  label: string;
  userName: string;
  title: string;
  src: string;
}

export interface PopularPortfolioImagesProps {
  imagesInfo: PopularPortfolioImagesObjProps[];
}

export interface PopularProjectCardProps {
  tag: Array<string>;
  heading: string;
  category: string;
  description: string;
  recruitmentMembers: Array<string>;
  imageUrl: string;
}

export interface PopularRecruitmentObjProps {
  id: string;
  deadline: string;
  title: string;
  position: string;
  company: string;
  category: string;
  views: number;
}

export interface NewsCardProps {
  imageUrl: string;
  label: string;
  heading: string;
  company: string;
  time: string;
}

export interface PopularTopicCardProps {
  userName: string;
  userJob: string;
  userImageUrl: string;
  tag: Array<string>;
  heading: string;
  description: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export interface UserCardProps {
  onlyAvatar?: boolean;
  userName?: React.ReactElement;
  userJob?: React.ReactElement;
  avatarSrc: string;
  avatarSize: number;
  $flexDirection?: "row" | "column";
  $flexGap?: string;
}

export interface TodayTermCarouselProps {
  id: string;
  label: string;
  category: string;
  title: string;
  description: string;
}

export interface PortfolioProps {
  id: string;
  likes: number;
  bookmark: number;
  category: string;
  label: string;
  username: string;
  title: string;
  src: string;
  avatarSrc: string;
}
