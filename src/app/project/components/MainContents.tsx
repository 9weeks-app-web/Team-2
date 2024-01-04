import { flexColumn } from "@/components/Flex/flexStyle";

import React from "react";
import styled from "styled-components";
import BigCard from "./Section1Card";
import SectionHeader from "../../../components/Section/SectionHeader";
import SectionProgressProjects from "./Section/SectionProgressProjects";
import SectionMemberRecomm from "./Section/SectionMemberRecomm";
import SectionAllProjects from "./Section/SectionAllProjects";

export const MainContents: React.FC<{ user: User }> = ({ user }) => {
  return (
    <MainConainer>
      <SectionProgressProjects />
      <SectionMemberRecomm />
      <SectionAllProjects />
    </MainConainer>
  );
};
export default MainContents;

const MainConainer = styled.div`
  flex: 3;
  ${flexColumn}
  gap : 5rem;
`;
