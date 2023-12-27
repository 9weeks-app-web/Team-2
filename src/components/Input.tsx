import React from "react";
import styled from "styled-components";

interface InputProps {
  width?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  width = "100%",
  type = "text",
  placeholder = "입력해주세요",
  value,
  onChange,
}: InputProps) {
  return (
    <InputContainer
      width={width}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

const InputContainer = styled.input`
  height: 70px;
  width: ${({ width }) => width};
`;
