import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface LoadingProps {
  userName: string;
}
const Loading: React.FC<LoadingProps> = ({ userName }) => {
  return (
    <Container>
      <TitleWrap>
        <H0_SB_32 className="primary80">{userName} 님과</H0_SB_32>
        <H0_SB_32>꼭 맞는 팀원을 찾고있어요.</H0_SB_32>
      </TitleWrap>
      <ImgWrap>
        <Image
          src="/gifs/pj30_finding.gif"
          alt="loading"
          objectFit="cover"
          width={710}
          height={563}
        />
      </ImgWrap>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  ${flexColumn}
  gap: 1.5rem;
`;

const TitleWrap = styled.div`
  ${flexColumn}
  height: 78px;
  gap: 0.875rem;
  justify-content: center;
  align-items: center;
  margin-top: 22.5px;
`;

const H0_SB_32 = styled.p`
  color: var(${colors.NEUTRAL_90});

  /* H0 - SB 32 */
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.04rem;

  &.primary80 {
    color: var(${colors.PRIMARY_80});
  }
`;

const ImgWrap = styled.div`
  margin: 0;
`;
