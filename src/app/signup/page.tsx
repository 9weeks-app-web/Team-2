"use client";
import React from "react";
import styled from "styled-components";
import { SignupForm } from "./components/SignupForm";

export const SignUp = () => {
  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      <SignupForm />
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
const Title = styled.div`
  padding: 30px;
  background-color: white;
`;
