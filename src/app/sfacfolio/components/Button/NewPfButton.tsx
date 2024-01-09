import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
export const NewPfButton = ({ linkUrl }: { linkUrl: string }) => {
  return (
    <UploadButton href={linkUrl}>
      <UploadButtTxt>새 포트폴리오 업로드</UploadButtTxt>
    </UploadButton>
  );
};

const UploadButton = styled(Link)`
  width: 165px;
  height: 56px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(${colors.BACKGROUND_BLUE});
  border-radius: 400px;
  border: 1px solid var(${colors.PRIMARY_70});
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
`;

const UploadButtTxt = styled(B2_M_14)`
  width: fit-content;
  color: var(${colors.NEUTRAL_90});
  letter-spacing: -0.28px;
  text-align: center;
  flex-grow: 1;
`;
