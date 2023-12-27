import Input from "@/components/Input";
import React from "react";
import styled from "styled-components";

export const InputBox = ({ label }: { label: string }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input></Input>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Label = styled.label`
  margin-bottom: 15px;
`;
