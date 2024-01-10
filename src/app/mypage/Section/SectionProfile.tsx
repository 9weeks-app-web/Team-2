import React from "react";
import SideContainer from "../components/SideContainer";
import ButtonGroup from "../components/ButtonGroup";
import ProfileHeader from "../components/ProfileHeader";
import SocialTags from "../components/SocialTags";
import TabMenu from "@/components/TabMenu";
type Props = {};

export const SectionProfile: React.FC<Props> = () => {
  const tabData = [
    {
      title: "프로필",
      content: (
        <>
          <ProfileHeader />
          <SocialTags />
          <ButtonGroup />
        </>
      ),
    },
    {
      title: "알림 설정",
      content: <div>알림 설정~</div>,
    },
  ];
  return (
    <SideContainer $width="520px" $borderColor>
      <TabMenu tabs={tabData} $padding="8px 4px" $gap="12px" $border />
    </SideContainer>
  );
};

export default SectionProfile;
