import React, { ReactNode } from "react";
import styled from "styled-components";

type TagsContainerProps = {
  children: ReactNode;
};

const TagsContainer: React.FC<TagsContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TagsContainer;

const Container = styled.section`
  display: flex;
  gap: 6px;
  p {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
