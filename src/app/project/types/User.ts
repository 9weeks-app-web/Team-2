import { Member } from "./Member";
import { MyProject } from "./MyProject";

export interface User {
  id: string;
  name: string;
  avatar: string;
  myProjects: MyProject[];
  recruitingMembers: Member[];
}
