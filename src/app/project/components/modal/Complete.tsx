import { flexColumn } from "@/components/Flex/flexStyle";
import { colors } from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { H2_M_20 } from "@/styles/stylesComponents/typographyComponents";
interface LoadingProps {
  userName: string;
}
const Complete: React.FC<LoadingProps> = ({ userName }) => {
  return (
    <Container>
      <TitleWrap>
        <H0_SB_32 className="primary80">성향 테스트 완료!</H0_SB_32>
        <TextBox>
          <H2_M_20>{userName}님과 꼭 맞는 팀원을 찾았어요</H2_M_20>
          <InfoText>
            <H2_M_20>지금 바로 추천 팀원을</H2_M_20>
            <H2_M_20>확인해 보세요!</H2_M_20>
          </InfoText>
        </TextBox>
      </TitleWrap>
      <ImgWrap>
        <Image
          src="/gifs/pj30_end.gif"
          alt="loading"
          objectFit="cover"
          width={710}
          height={440}
        />
      </ImgWrap>
    </Container>
  );
};

export default Complete;
const Container = styled.div`
  ${flexColumn}

  gap: 1.5rem;
`;

const TitleWrap = styled.div`
  ${flexColumn}
  margin-top: 70px;
  margin-bottom: 37px;
  justify-content: center;
  align-items: center;
`;

const H0_SB_32 = styled.p`
  color: var(${colors.NEUTRAL_90});
  margin-bottom: 21px;

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

const TextBox = styled.div`
  ${flexColumn}
  gap: 14px;
`;

const InfoText = styled.div`
  ${flexColumn}
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const ImgWrap = styled.div`
  margin: 0;
`;
