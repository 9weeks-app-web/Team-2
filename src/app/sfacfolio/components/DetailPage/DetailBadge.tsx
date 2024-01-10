import { colors } from "@/styles/colors";
import { D_M_10 } from "@/styles/stylesComponents/typographyComponents";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import CommentIcon from "../../../../../public/Icon/Icon_comments.svg";
export const DetailBadge = () => {
  return (
    <Container>
      <IconContainer>
        <Image
          width={16}
          height={16}
          alt="views icon"
          src={"/Icon/Icon_views.svg"}
        />
        <D_M_10 style={{ color: `var(${colors.NEUTRAL_30})` }}>375</D_M_10>
      </IconContainer>
      <IconContainer>
        <Image
          width={16}
          height={16}
          alt="views icon"
          src={"/Icon/Icon_heartGrey.svg"}
        />
        <D_M_10 style={{ color: `var(${colors.NEUTRAL_30})` }}>85</D_M_10>
      </IconContainer>
      <IconContainer>
        {/* <Image
          width={16}
          height={16}
          alt="views icon"
          src={"/Icon/Icon_comments.svg"}
        /> */}
        <CommentIcon fill="#B3B3B3" />
        <D_M_10 style={{ color: `var(${colors.NEUTRAL_30})` }}>12</D_M_10>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 9px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
