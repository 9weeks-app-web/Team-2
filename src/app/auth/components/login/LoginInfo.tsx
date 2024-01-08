import Link from "next/link";
import CheckField from "../CheckField";
import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";

type Props = {};

const LoginInfo = (props: Props) => {
  return (
    <>
      <Logininfo>
        <CheckField
          title="로그인 유지하기"
          name="logincheck"
          id="logincheck"
          color="#666"
          fontWeight="400"
        />
        <FindInfoContainer>
          <Link href="/">아이디 찾기</Link>
          <span></span>
          <Link href="/">비밀번호 찾기</Link>
        </FindInfoContainer>
      </Logininfo>
    </>
  );
};

export default LoginInfo;

const Logininfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FindInfoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: var(${font_size.FONT_SIZE_16});
  font-weight: var(${font_weight.FONT_WEIGHT_400_R});
  color: var(${colors.NEUTRAL_60});
  span {
    display: inline-block;
    width: 1px;
    height: 16px;
    margin: 0px 4px;
    background-color: var(${colors.NEUTRAL_60});
  }
`;
