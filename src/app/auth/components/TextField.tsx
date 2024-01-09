"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { font_size, font_weight } from "@/styles/typography";
import { colors } from "@/styles/colors";
import Image from "next/image";

interface IProps {
  text?: string;
  name: string;
  inputType?: string;
  register: any;
  errorMsg?: string;
  id: string;
  placeholder?: string;
  error?: boolean;
  border?: boolean;
  eye?: boolean;
  borderRadius?: string;
  pattern?: RegExp;
}

const Input = styled.input<IProps>`
  position: relative;
  width: 100%;
  font-size: var(${font_size.FONT_SIZE_16});
  height: 50px;
  border: ${({ border }) => (border ? "1px solid 4D4D4D" : "none")};
  border-radius: ${({ borderRadius }) => ({ borderRadius })};
  transition: border-color 0.3s;
  border-bottom: ${({ error }) =>
    error
      ? `1px solid var(${colors.SYSTEM_WARNING})`
      : ` 1px solid var(${colors.NEUTRAL_70})`};
  &::placeholder {
    color: ${({ error }) =>
      error ? `var(${colors.SYSTEM_WARNING})` : `var(${colors.NEUTRAL_20})`};
  }
  outline: none;
`;

const Label = styled.label`
  font-size: var(${font_size.FONT_SIZE_18});
  margin-bottom: 12px;
`;
const EyeBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 29px;
`;
const ErrorMsg = styled.span`
  color: var(${colors.SYSTEM_WARNING});
`;

const TextField: React.FC<IProps> = ({
  text,
  name,
  id,
  inputType = "text",
  register,
  errorMsg,
  placeholder,
  error,
  eye,
  borderRadius,
  pattern,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const getPattern = () => {
    if (name === "email") {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    } else if (name === "password") {
      return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    }
    return pattern || /^[A-Za-z]+$/;
  };
  console.log(error);
  console.log(errorMsg);
  return (
    <>
      <Label htmlFor={name}>{text}</Label>
      <Input
        id={id}
        type={showPassword ? text : inputType}
        {...register(name, {
          required: true,
          pattern: getPattern(),
          message: errorMsg,
        })}
        placeholder={placeholder}
        error={error}
        borderRadius={borderRadius}
      />
      {eye && (
        <EyeBtn type="button" onClick={togglePasswordVisibility}>
          <Image
            width={24}
            height={24}
            src={showPassword ? "/authImg/eye.svg" : "/authImg/closeEye.svg"}
            alt={showPassword ? "비밀번호 보기" : "비밀번호 숨기기"}
          />
        </EyeBtn>
      )}
      {error && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </>
  );
};

export default TextField;
// {...register("passwordConfirm", {
//             required: "비밀번호를 입력해주세요",
//             validate: (value) =>
//               value === password || "비밀번호가 일치하지 않습니다.",
//           })}
