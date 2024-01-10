import React from "react";
import InterestButton from "@/app/auth/components/InterestButton";
import { H1_SB_24 } from "@/styles/stylesComponents/typographyComponents";
import styled from "styled-components";
import Image from "next/image";
type TabHeaderProps = {
  title?: string;
};
const TabHeader = ({ title }: TabHeaderProps) => {
  return (
    <PortfolioHeader>
      <Title>
        <H1_SB_24>내 {title}</H1_SB_24>
        <Image
          src={"/authImg/arrow.svg"}
          alt="자세히 보기"
          width={24}
          height={24}
        />
      </Title>
      <InterestButton
        label="업로드"
        variant="active"
        size="ss"
        $borderRadius="10"
        imagePath="/authImg/write.svg"
        imageSize="14"
      />
    </PortfolioHeader>
  );
};

export default TabHeader;

const PortfolioHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
  button {
    display: flex;
    gap: 4px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
