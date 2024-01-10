import React from "react";
import { User } from "@/app/project/types/User";
import SideContainer from "../components/SideContainer";
import { colors } from "@/styles/colors";
import styled from "styled-components";
import { Tag } from "@/components/Tag";
import Image from "next/image";
import { flexColumn } from "@/components/Flex/flexStyle";

import InterestButton from "@/app/auth/components/InterestButton";
import {
  B2_R_14,
  B2_G_14,
  H1_SB_24,
  B1_M_16,
  B2_R_12,
} from "@/styles/stylesComponents/typographyComponents";
import SpecChart from "../components/SpecChart";
import { userInfoState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";
import UserTagGroup from "../components/UserTagGroup";

const SectionSpecCard = () => {
  return (
    <SideContainer $width="250px" $borderColor>
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
