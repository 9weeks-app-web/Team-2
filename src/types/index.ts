export interface PopularPortfolioImagesObjProps {
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
