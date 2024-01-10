import { Member } from "./Member";

export interface MyProject {
  id: string;
  title: string;
  coverImg: string;
  teamName: string;
  members: Member[];
}
