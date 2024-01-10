"use client";
import React from "react";
import Image from "next/image";
import InterestButton from "../../components/InterestButton";
import { useRouter } from "next/navigation";
import {
  H1_SB_24,
  H2_M_20,
} from "@/styles/stylesComponents/typographyComponents";
import styled from "styled-components";

export default function Login() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.replace("/auth/login");
  };

  return (
    <Container>
      <Image
        src={"/authImg/bg.svg"}
        alt="회원가입 완료!"
        width={330}
        height={276}
      />
      <H1_SB_24>회원가입이 완료되었습니다!</H1_SB_24>
      <H2_M_20>지금 바로 다양한 작업들을 감상해보세요.</H2_M_20>
      <InterestButton
        variant="active"
        $margin="80px 0px 217px 0px"
        size="lg"
        label="로그인 하기"
        $borderRadius="10"
        onClick={handleButtonClick}
      />
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0;
    margin-bottom: 18px;
  }

  img {
    display: block;
    margin: 60px 0px 23px 0px;
  }
`;
