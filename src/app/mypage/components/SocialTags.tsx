import React from "react";
import { Tag } from "@/components/Tag";
import Image from "next/image";
import { colors } from "@/styles/colors";
import styled from "styled-components";
import TagsContainer from "./TagContainer";
const SocialTags = () => {
  return (
    <TagsContainer>
      <Tag $setBgColor={colors.BACKGROUND_5} $setColor={colors.NEUTRAL_70}>
        <Image
          src={"/authImg/social1.svg"}
          alt="소셜 이미지"
          width={12}
          height={12}
        ></Image>
        spec123
      </Tag>
      <Tag $setBgColor={colors.BACKGROUND_5} $setColor={colors.NEUTRAL_70}>
        <Image
          src={"/authImg/social2.svg"}
          alt="소셜 이미지"
          width={12}
          height={12}
        ></Image>
        spec
      </Tag>
    </TagsContainer>
  );
};

export default SocialTags;
