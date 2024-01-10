import { colors } from "@/styles/colors";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";
import CaptureIcon from "../../../../../../public/Icon/Icon_sidebar/Icon_capture.svg";
export const CaptureButton = () => {
  return (
    <Button>
      <CaptureIcon stroke="white" />
      <ButtonText>부분 스크랩</ButtonText>
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  top: 120px;
  left: 1%;
  width: 98px;
  height: 32px;
  border-radius: 50px;
  opacity: 0.3;
  background-color: var(${colors.NEUTRAL_90});
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ButtonText = styled(B2_M_12)`
  color: var(${colors.NEUTRAL_WHITE});
  margin-left: 4px;
`;
