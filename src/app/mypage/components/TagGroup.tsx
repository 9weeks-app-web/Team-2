import React from "react";
import styled from "styled-components";
import { B2_G_14 } from "@/styles/stylesComponents/typographyComponents";

interface TagGroupProps {
  title: string;
  children: React.ReactNode;
}

const TagGroup: React.FC<TagGroupProps> = ({ title, children }) => {
  return (
    <TagsContainer>
      <B2_G_14>{title}</B2_G_14>
      {children}
    </TagsContainer>
  );
};

export default TagGroup;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
