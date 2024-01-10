import React from "react";
import { User } from "@/app/project/types/User";
import { colors } from "@/styles/colors";
import { flexColumn } from "@/components/Flex/flexStyle";
import { userInfoState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";
import {
  B2_G_14,
  H1_SB_24,
  B2_R_12,
} from "@/styles/stylesComponents/typographyComponents";
import SideContainer from "../../components/SideContainer";
import { Tag } from "@/components/Tag";
import styled from "styled-components";
type Props = {
  user: User;
};
export const SectionFeedBack: React.FC<{}> = () => {
  const userInfo = useRecoilValue(userInfoState) as User;

  return (
    <Container>
      <SideContainer $width="250px" $boxshadow>
        <Header>
          <B2_G_14>
            포트폴리오
            <br /> 피드백
          </B2_G_14>
          <Tag
            $setBgColor={colors.BACKGROUND_BLUE}
            $setColor={colors.PRIMARY_80}
          >
            New
          </Tag>
        </Header>
        <Body>
          <H1_SB_24>52</H1_SB_24> <B2_R_12>개</B2_R_12>
        </Body>
      </SideContainer>
      <SideContainer $width="250px" $boxshadow>
        <B2_G_14>
          팀원이 남겨준 <br />
          업무 성향
        </B2_G_14>
        <Body>
          <H1_SB_24>{userInfo.workTendency?.length}</H1_SB_24>
          <B2_R_12>개</B2_R_12>
        </Body>
      </SideContainer>
    </Container>
  );
};
const Container = styled.section`
  ${flexColumn}
  gap: 18px;
  span {
    color: var(${colors.NEUTRAL_40});
  }
`;
const Header = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;
const Body = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 11px;
`;

export default SectionFeedBack;
