import React from "react";
import SideContainer from "../../components/SideContainer";
import styled from "styled-components";
import Image from "next/image";
import { flexColumn } from "@/components/Flex/flexStyle";
import InterestButton from "@/app/auth/components/InterestButton";
import {
  B1_M_16,
  B2_R_12,
} from "@/styles/stylesComponents/typographyComponents";
import SpecChart from "../../components/SpecChart";
import UserTagGroup from "../../components/UserTagGroup";

type Props = {};

const SectionSpecCard = (props: Props) => {
  return (
    <SideContainer $width="250px" $borderColor $height="630px">
      <SpecCard>
        <Header>
          <Title>
            <Image
              src={"/authImg/spec.svg"}
              alt="이미지"
              width={17}
              height={16}
            />
            <B1_M_16>나의 스팩카드</B1_M_16>
          </Title>
          <B2_R_12 className="gray">자세히 보기</B2_R_12>
        </Header>
        <SpecChart />
        <UserTagGroup />
        <InterestButton
          size="default"
          $borderRadius="10"
          variant="default"
          label="편집하기"
        />
      </SpecCard>
    </SideContainer>
  );
};

export default SectionSpecCard;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  gap: 4px;
`;

const SpecCard = styled.div`
  ${flexColumn}
  gap: 18px;
`;
