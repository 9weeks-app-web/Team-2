"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import InterestButton from "../../components/InterestButton";
import { useRouter } from "next/navigation";
import MessageComponent from "../../components/Message";
import Input from "../../components/signup/Input";
import StyledLabel from "../../components/signup/Label";
import SelectBox from "../../components/SelectBox";
type SignUpInputs = {
  nickname: string;
  email: string;
  name: string;
  birthdate: string;
  address: string;
  password: string;
  passwordConfirm: string;
  firstNum: number;
  secondNum: number;
  thirdNum: number;
  emailLocal: string;
  emailDomain: string;
  detailAddress: string;
  year: number;
  month: number;
  day: number;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>({ mode: "onChange" });

  const [showPasswordCriteria, setShowPasswordCriteria] =
    useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const password = watch("password", "");
  const passwordConfirm = watch("passwordConfirm", "");
  const emailLocal = watch("emailLocal") || "";
  const emailDomain = watch("emailDomain") || "";
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    if (password) {
      const regex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setShowPasswordCriteria(!regex.test(password));
    }
    setPasswordMatch(password === passwordConfirm);
  }, [password, passwordConfirm]);
  const watchAll = Object.values(watch());

  useEffect(() => {
    if (watchAll.every((el) => el)) {
      if (passwordMatch && passwordConfirm) {
        setIsActive(true);
      }
    } else {
      setIsActive(false);
    }
  }, [watchAll]);
  console.log(isActive);
  const router = useRouter();
  const handleButtonClick = () => {
    router.replace("/auth/signup/interest");
  };
  const onSubmit = async (data: SignUpInputs) => {
    try {
      const {
        firstNum,
        secondNum,
        thirdNum,
        emailDomain,
        emailLocal,
        year,
        month,
        day,
        address,
        detailAddress,
        ...rest
      } = data;
      const Address = `${address}${detailAddress}`;
      const Phone = `${firstNum}${secondNum}${thirdNum}`;
      const FullEmail = `${emailLocal}@${emailDomain}`;
      const Birthdate = `${year}-${month}-${day}`;
      const Data = {
        ...rest,
        Phone,
        Birthdate,
        FullEmail,
        Address,
      };
      console.log(Data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleNonNumericInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const numericRegex = /^[0-9\b]+$/;

    if (!numericRegex.test(keyValue)) {
      event.preventDefault();
    }
  };

  return (
    <SignupForm onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <StyledLabel>
          닉네임 *
          <InputBtn>
            <Input
              {...register("nickname")}
              required
              placeholder="닉네임을 입력해주세요"
            />
            <InterestButton
              label="중복확인"
              variant="active"
              $borderRadius="4"
              size="sm"
              $fontWeight
            />
          </InputBtn>
        </StyledLabel>
        {errors.nickname && <p>{errors.nickname.message}</p>}
      </InputContainer>
      <InputContainer>
        <StyledLabel>
          비밀번호 *
          <Input
            required
            placeholder="비밀번호를 입력해주세요"
            type="password"
            {...register("password", {
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
          />
        </StyledLabel>
        {errors.password && <p>{errors.password.message}</p>}
        {showPasswordCriteria && (
          <MessageComponent>
            *8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해주세요.
          </MessageComponent>
        )}
      </InputContainer>
      <InputContainer>
        <StyledLabel>
          비밀번호 확인 *
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            required
            {...register("passwordConfirm")}
          />
        </StyledLabel>
        {!passwordMatch && passwordConfirm && (
          <MessageComponent>*새 비밀번호가 일치하지 않습니다.</MessageComponent>
        )}
        {passwordMatch && passwordConfirm && !errors.password && (
          <MessageComponent isSuccess>
            *새 비밀번호와 일치합니다.
          </MessageComponent>
        )}
      </InputContainer>
      <Line></Line>

      <InputContainer>
        <StyledLabel>
          이름 *
          <Input
            {...register("name")}
            required
            placeholder="이름을 입력해주세요"
          />
        </StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledLabel>
          생년월일 *
          <InputBtn>
            <Input
              type="text"
              maxLength={4}
              required
              placeholder="년"
              onKeyDown={handleNonNumericInput}
              {...register("year", {
                // pattern: {
                //   value: /^\d{4}$/,
                //   message: "올바른 년도 형식을 입력하세요 (예: 2023)",
                // },
              })}
            />
            <Input
              type="text"
              placeholder="월"
              maxLength={2}
              required
              onKeyDown={handleNonNumericInput}
              {...register("month", {
                // pattern: {
                //   value: /^(0?[1-9]|1[0-2])$/,
                //   message: "올바른 월 형식을 입력하세요 (1 ~ 12 사이)",
                // },
              })}
            />
            <Input
              type="text"
              placeholder="일"
              maxLength={2}
              required
              onKeyDown={handleNonNumericInput}
              {...register("day", {
                // pattern: {
                //   value: /^(0?[1-9]|[1-2][0-9]|3[0-1])$/,
                //   message: "올바른 일 형식을 입력하세요 (1 ~ 31 사이)",
                // },
              })}
            />
          </InputBtn>
        </StyledLabel>
      </InputContainer>

      <InputContainer>
        <StyledLabel>
          휴대폰 번호 *
          <InputBtn>
            <Input
              {...register("firstNum")}
              type="text"
              maxLength={3}
              required
              onKeyDown={handleNonNumericInput}
            />
            <Input
              {...register("secondNum")}
              type="text"
              maxLength={4}
              required
              onKeyDown={handleNonNumericInput}
            />
            <Input
              {...register("thirdNum")}
              type="text"
              maxLength={4}
              required
              onKeyDown={handleNonNumericInput}
            />
          </InputBtn>
        </StyledLabel>
      </InputContainer>
      <InputContainer>
        <StyledLabel>
          이메일 *
          <InputBtn>
            <Input
              type="text"
              {...register("emailLocal")}
              required
              value={emailLocal}
              onChange={(e) => setValue("emailLocal", e.target.value)}
            />
            <span>@</span>
            <SelectBox
              register={register}
              value={emailDomain}
              setValue={setValue}
            />

            {/* <select
              {...register("emailDomain")}
              value={emailDomain}
              onChange={(e) => setValue("emailDomain", e.target.value)}
            >
              <option value="">직접 입력</option>
              <option value="naver.com">naver.com</option>
              <option value="google.com">google.com</option>
              <option value="kakao.com">kakao.com</option>
            </select> */}
          </InputBtn>
          <RBox>
            <Input
              type="text"
              {...register("emailDomain")}
              required
              value={emailDomain}
              onChange={(e) => setValue("emailDomain", e.target.value)}
            />
          </RBox>
        </StyledLabel>
      </InputContainer>

      <InputContainer>
        <StyledLabel>
          주소 *
          <InputBtn>
            <Input type="text" {...register("address")} required />
            <InterestButton
              size="m"
              label="우편번호 찾기"
              variant="active"
              $borderRadius="4"
              $fontWeight
            />
          </InputBtn>
          <Input
            type="text"
            placeholder="상세주소를 입력하세요"
            {...register("detailAddress")}
            required
          />
        </StyledLabel>
      </InputContainer>

      <InterestButton
        label="다음으로"
        size="lg"
        $fontWeight
        variant={isActive ? "active" : "disable"}
        $borderRadius="10"
        $margin="44px 0px 150px 0px"
        onClick={handleButtonClick}
      />
    </SignupForm>
  );
};

export default SignUp;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 36px;
`;

const InputContainer = styled.div`
  span {
    padding: 0px 3px 0px 5px;
    color: var(${colors.NEUTRAL_40});
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e6e6e6;
`;

const InputBtn = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const RBox = styled.div`
  display: flex;

  justify-content: end;
  input {
    width: 235px;
  }
`;
