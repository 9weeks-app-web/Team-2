"use client";
import React from "react";
import { RoundButton } from "./RoundButton";
import { NewPfButton } from "./NewPfButton";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { usePathname } from "next/navigation";
import PlusIcon from "../../../../../public/Icon/Icon_plus.svg";
export const UploadButton = () => {
  const pathname = usePathname();
  return (
    <>
      {!pathname.startsWith("/sfacfolio/detail") && (
        <Div>
          <Container>
            <HiddenComponent>
              <NewPfButton linkUrl="/" />
            </HiddenComponent>
            <VisibleComponent>
              <RoundButton
                $BgColor={colors.PRIMARY_70}
                $color={colors.NEUTRAL_WHITE}
              >
                <PlusIcon />
              </RoundButton>
            </VisibleComponent>
          </Container>
        </Div>
      )}
    </>
  );
};

const HiddenComponent = styled.div`
  display: none;
`;
const VisibleComponent = styled.div``;

const Div = styled.div`
  position: fixed;
  top: 40%;
  right: 12%;
  z-index: 10;
  &:hover + ${HiddenComponent} {
    display: block;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  &:hover ${HiddenComponent} {
    display: block;
  }
`;
