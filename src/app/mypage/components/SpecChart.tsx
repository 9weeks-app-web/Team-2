import React from "react";
import ChartData from "./ChartData";
import { userInfoState } from "@/state/atom/atom";
import { useRecoilValue } from "recoil";
import { User } from "@/app/project/types/User";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";

import styled from "styled-components";
const SpecChart = () => {
  const userInfo = useRecoilValue(userInfoState) as User;

  return (
    <div>
      <ChartData />
      <UserBox>
        <B2_M_12>일을 완벽하게 마무리하는 {userInfo.name}님!</B2_M_12>
      </UserBox>
    </div>
  );
};

export default SpecChart;

const UserBox = styled.div`
  display: flex;
  margin-top: 18px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Background-Blue, #f5f8ff);
`;
