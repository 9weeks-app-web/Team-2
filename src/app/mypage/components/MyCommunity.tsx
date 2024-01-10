import React from "react";
import { CommunityData } from "@/constant/community";
import CommunityContent from "./CommunityContent";
import styled from "styled-components";
const MyCommunity = () => {
  return (
    <CommunityContainer>
      {CommunityData.map((community) => (
        <div key={community.id}>
          <CommunityContent community={community} />
        </div>
      ))}
    </CommunityContainer>
  );
};

export default MyCommunity;

const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
