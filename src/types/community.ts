export type Comment = {
  id: number;
  comment: string;
};

export type CommunityPost = {
  id: string;
  name: string;
  avatar: string;
  job: string;
  experience: string;
  postTitle: string;
  postContent: string;
  postTime: string;
  comments: Comment[];
  likes: number;
  views: number;
};
