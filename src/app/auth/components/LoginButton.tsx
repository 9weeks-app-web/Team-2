"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
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
          <Image
            src={"/authImg/kakao.svg"}
            alt="카카오톡 로그인"
            width={58}
            height={58}
          />
        </button>
        <button onClick={() => handleSignIn("naver")}>
          <Image
            src={"/authImg/naver.svg"}
            alt="네이버 로그인"
            width={58}
            height={58}
          />
        </button>
        <button onClick={() => handleSignIn("google")}>
          <Image
            src={"/authImg/google.svg"}
            alt="구글 로그인"
            width={58}
            height={58}
          />
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
  padding: 32px 0px;
  border-bottom: 1px solid #f3f3f3;
  h3 {
    color: var(${colors.NEUTRAL_70});
  }
  div {
    display: flex;
    gap: 12px;
  }
`;
export default LoginButton;
