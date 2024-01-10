import styled from "styled-components";
import Link from "next/link";

import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
import { H3_R_18 } from "@/styles/stylesComponents/typographyComponents";
const StyledDiv = styled.div`
  display: flex;
  width: 520px;
  height: 71px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-bottom: 60px;
  background: var(${colors.BACKGROUND_BLUE});
`;

const SignUpLink = styled.span`
  color: var(${colors.PRIMARY_80});
  font-size: var(${font_size.FONT_SIZE_18});
  font-weight: var(${font_weight.FONT_WEIGHT_600_SB});
`;

const SignUpSection = () => {
  return (
    <StyledDiv>
      <H3_R_18>스팩폴리오가 처음이신가요?</H3_R_18>
      <Link href="/auth/signup/terms">
        <SignUpLink>가입하기</SignUpLink>
      </Link>
    </StyledDiv>
  );
};

export default SignUpSection;
