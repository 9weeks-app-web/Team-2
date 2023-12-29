"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
export const StyledNoticeListContainer = styled.section`
  max-width: 1060px;
  margin-top: 80px;
`;
export const StyledLink = styled(Link)`
  width: 340px;
  position: relative;
  display: block;
`;
export const StyledImageWrapper = styled.div`
  width: 100%;
  padding-bottom: calc((188 / 340) * 100%);
  position: relative;
`;
export const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const StyledTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  min-height: 176px;
  border: 1px solid #ededed;
  border-radius: 0px 0px 8px 8px;
`;
export const StyledTextHeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  h2 {
    font-size: var(${font_size.FONT_SIZE_18});
    font-weight: var(${font_weight.FONT_WEIGHT_400_R});
    letter-spacing: -0.36px;
  }
  label {
    font-size: var(${font_size.FONT_SIZE_14});
    font-weight: var(${font_weight.FONT_WEIGHT_500_M});
  }
`;
export const StyledInfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(${font_size.FONT_SIZE_12});
  color: var(${colors.NEUTRAL_30});
  font-weight: var(${font_weight.FONT_WEIGHT_500_M});
`;
export const StyledNoticeListHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  a {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`;

export const StyledNoticeListBody = styled.div`
  display: flex;
  gap: 20px;
`;
