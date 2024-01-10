import React from "react";
import styled from "styled-components";

type SelectInputProps = {
  register: any;
  value: string;
  setValue: Function;
};

const SelectBox: React.FC<SelectInputProps> = ({
  register,
  value,
  setValue,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue("emailDomain", e.target.value);
  };

  return (
    <Select
      {...register("emailDomain")}
      value={value}
      onChange={handleOnChange}
    >
      <option value="">직접 입력</option>
      <option value="naver.com">naver.com</option>
      <option value="google.com">google.com</option>
      <option value="kakao.com">kakao.com</option>
    </Select>
  );
};

export default SelectBox;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("/authImg/srr.svg") no-repeat 95% 50%;
  background-size: 15px 15px;
  outline: none;
  min-width: 235px;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
