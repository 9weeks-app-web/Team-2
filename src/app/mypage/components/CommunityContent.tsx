"use client";
import React, { useState } from "react";
import { CommunityPost } from "@/types/community";
import SideContainer from "./SideContainer";
import { CommunityCard } from "./CommunityCard";

const CommunityContent: React.FC<{ community: CommunityPost }> = ({
  community,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <SideContainer $width="100" $borderColor>
      <CommunityCard
        community={community}
        showMore={showMore}
        toggleShowMore={toggleShowMore}
      />
    </SideContainer>
  );
};

export default CommunityContent;
