import React, { useState } from "react";
// import styled from "styled-components";
import { InputBox } from "./InputBox";
import styled from "styled-components";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { atom, useRecoilState } from "recoil";
import { CarrierButton } from './CarrierButton';

// Recoil 상태 정의
const phoneNumberState = atom({
  key: "phoneNumberState",
  default: "",
});

const selectedCarrierState = atom({
  key: "selectedCarrierState",
  default: null,
});

export const SignupForm = () => {
  const carriers = ["SKT", "KT", "LG", "알뜰폰"];
  const [isCarrierSelect, setIsCarrierSelect] = useState<boolean[]>(
    Array(carriers.length).fill(false)
  );
  // const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  // const [selectedCarrier, setSelectedCarrier] =
  //   useRecoilState(selectedCarrierState);
  // const isPhoneNumberEntered = phoneNumber.length > 0;

  const handleClick = (idx: number) => {
    const newArr = Array(carriers.length).fill(false);
    newArr[idx] = true;
    setIsCarrierSelect(newArr);
  };
  return (
    <Container>
      <InputBox label="이름" />
      <InputBox label="이메일" />
      <InputBox label="비밀번호" />
      <InputBox label="비밀번호 확인" />
      <p>휴대폰 인증</p>
      <CarrierGroup>
        {carriers.map((item, index) => {
          return (
            <CarrierButton key={index}
              handleClick={handleClick}
              isSeleted={ isCarrierSelect[index]}
              
            >{item}</CarrierButton>
          );
        })}
        
      </CarrierGroup>
      <AuthGroup>
        <Input width={"70%"} />
        <Button title={"인증요청"} width={"30%"} />
      </AuthGroup>
      <Input />
      <Button title={"다음"} width={"100%"} />
    </Container>
  );
};
const Container = styled.div`
  width: 700px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CarrierGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;


const AuthGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
