"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import google from "../../../../public/authImg/google.svg";
import naver from "../../../../public/authImg/naver.svg";
import kakao from "../../../../public/authImg/kakao.svg";
import { H3_SB_18 } from "@/styles/stylesComponents/typographyComponents";
import { colors } from "@/styles/colors";

import styled from "styled-components";
const LoginButton = () => {
  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider, { redirect: true, callbackUrl: "/" });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <SnsBtnContainer>
      <H3_SB_18>SNS로 간편하게 시작하기</H3_SB_18>
      <div>
        <button onClick={() => handleSignIn("kakao")}>
          <Image src={kakao} alt="카카오톡 로그인" />
        </button>
        <button onClick={() => handleSignIn("naver")}>
          <Image src={naver} alt="네이버 로그인" />
        </button>
        <button onClick={() => handleSignIn("google")}>
          <Image src={google} alt="구글 로그인" />
        </button>
      </div>
    </SnsBtnContainer>
  );
};

const SnsBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 32px 0px 74px 0px;
  h3 {
    color: var(${colors.NEUTRAL_70});
  }
  div {
    display: flex;
    gap: 12px;
  }
`;
export default LoginButton;
