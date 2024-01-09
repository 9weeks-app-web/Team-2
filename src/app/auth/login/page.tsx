"use client";
import React, { useState } from "react";
import LoginButton from "../components/LoginButton";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextField from "../components/TextField";
import LoginInfo from "../components/login/LoginInfo";
import MessageComponent from "../components/Message";
import InterestButton from "../components/InterestButton";
import SignUpSection from "../components/login/SignUpSection";
import { signIn } from "next-auth/react";
interface FormValue {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>({ mode: "onChange" });
  //로그인 회원정보 찾아서 없으면 에러처리
  const [isError, setIsError] = useState<boolean>(false);
  const watchAll = Object.values(watch());

  const onSubmit = async (data: any) => {
    // console.log(setValue);
    setIsError(false);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    });
    if (res?.status === 401) {
      setIsError(true);
    } else {
      await signIn("credentials", {
        redirect: true,
        callbackUrl: "/",
      });
    }
  };

  // const onInvalid = (errors: any) => {
  //   console.log("실패");
  //   setIsError(true);
  //   console.log(errors);
  // };
  return (
    <>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper>
          <TextField
            id="email"
            text="이메일"
            name="email"
            register={register}
            placeholder="이메일을 입력해주세요"
            // errorMsg={errors.email ? errors.email.message : ""}
            error={!!errors.email}
            borderRadius="none"
          />
        </FieldWrapper>

        <FieldWrapper>
          <TextField
            id="password"
            text="비밀번호"
            name="password"
            inputType="password"
            register={register}
            placeholder="비밀번호를 입력해주세요"
            // errorMsg={errors.password ? errors.password.message : ""}
            error={!!errors.password}
            eye
            borderRadius="none"
          />
          {isError && (
            <MessageComponent>
              잘못된 이메일 혹은 비밀번호입니다. 다시 입력해주세요.
            </MessageComponent>
          )}
        </FieldWrapper>
        <LoginInfo />
        <InterestButton label="로그인" size="lg" variant="active" />
      </LoginForm>
      <LoginButton />
      <SignUpSection />
    </>
  );
};

export default Login;

const FieldWrapper = styled.div`
  margin-bottom: 27px;
  position: relative;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
