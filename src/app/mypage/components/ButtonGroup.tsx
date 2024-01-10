import React from "react";
import { signOut } from "next-auth/react";
import styled from "styled-components";

import InterestButton from "@/app/auth/components/InterestButton";
type Props = {};

const ButtonGroup = (props: Props) => {
  return (
    <BtnGroupContainer>
      <InterestButton
        $borderRadius="10"
        size="m"
        variant="default"
        label=" 로그아웃"
        onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
      />
      <InterestButton
        $borderRadius="10"
        size="m"
        variant="default"
        label="프로필 설정"
      />
    </BtnGroupContainer>
  );
};

export default ButtonGroup;

const BtnGroupContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 26px;
  button {
    width: 100%;
  }
`;
