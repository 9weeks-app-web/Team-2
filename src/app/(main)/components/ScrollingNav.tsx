import { colors } from "@/styles/colors";
import { B2_M_12 } from "@/styles/stylesComponents/typographyComponents";
import React from "react";
import styled from "styled-components";

export const ScrollingNav = () => {
  return (
    <Container>
      <FlexCol>
        <Bar />
        <Bar />
      </FlexCol>

      <Label htmlFor="radio1">
        <StyledRadio id="radio1" name="scroll" defaultChecked />
        <Title>BEST 스팩폴리오</Title>
      </Label>

      <Label htmlFor="radio2">
        <StyledRadio id="radio2" name="scroll" />
        <Title>직무별 인기 프로젝트</Title>
      </Label>

      <Label htmlFor="radio3">
        <StyledRadio id="radio3" name="scroll" />
        <Title>오늘의 직무 용어</Title>
      </Label>

      <Label htmlFor="radio4">
        <StyledRadio id="radio4" name="scroll" />
        <Title>실시간 인기 토픽</Title>
      </Label>

      <Label htmlFor="radio5">
        <StyledRadio id="radio5" name="scroll" />
        <Title>직무별 인기 채용 공고</Title>
      </Label>

      <Label htmlFor="radio6">
        <StyledRadio id="radio6" name="scroll" />
        <Title>기업·에이전시 소식</Title>
      </Label>
    </Container>
  );
};
const Container = styled.div`
  z-index: 10;
  width: 138px;
  height: 191px;
  position: fixed;
  top: 40%;
  right: 2%;
  background-color: var(${colors.NEUTRAL_WHITE});
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 15px 10px 20px 10px;
  gap: 12px;
  border: 2px solid var(${colors.PRIMARY_5});
  border-radius: 8px;
`;

const StyledRadio = styled.input.attrs({ type: "radio" })`
  // 공통 스타일
  width: 12px; // 라디오 버튼 크기 조절
  height: 12px;
  border-radius: 50%;

  &:checked {
    border: 2px solid var(${colors.PRIMARY_80});
    background-color: var(${colors.PRIMARY_80});
  }

  &:not(:checked) {
    visibility: hidden;
  }
`;

const Title = styled(B2_M_12)`
  padding-top: 3px;
  margin-left: 6px;
  color: var(${colors.NEUTRAL_50});
`;

const Label = styled.label`
  height: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & input[type="radio"]:checked + ${Title} {
    color: var(${colors.PRIMARY_80});
  }
`;

const Bar = styled.div`
  width: 16px;
  border-radius: 50px;
  border: 1px solid var(${colors.NEUTRAL_10});
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: auto;
`;
