import React from "react";
import styled from "styled-components";

export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  width: 1060px;
  margin: 0 auto 40px;
`;
