import { colors } from "@/styles/colors";
import { B1_M_16 } from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const Tools = () => {
  return (
    <Container>
      <Text>사용 툴</Text>
      <FlexRow>
        <StyledImage
          width={75}
          height={75}
          src={"/sidebarImg/figma.png"}
          alt="figma image"
        />
        <StyledImage
          width={75}
          height={75}
          src={"/sidebarImg/illustrator.png"}
          alt="illustrator image"
        />
        <StyledImage
          width={75}
          height={75}
          src={"/sidebarImg/photoshop.png"}
          alt="photoshop image"
        />
      </FlexRow>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 358px;
  height: 168px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 11;
  background-color: var(${colors.NEUTRAL_WHITE});
  border-radius: 28px;
  right: 120px;
  /* border: 1px solid var(${colors.NEUTRAL_10}); */
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
const FlexRow = styled.div`
  top: 10%;
  display: flex;
  flex-direction: row;
  gap: 28px;
  justify-content: center;
`;

const Text = styled(B1_M_16)`
  color: var(${colors.NEUTRAL_90});

  text-align: center;
`;
