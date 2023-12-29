"use client";
import React from "react";
import styled from "styled-components";
export const CategoryVetical = () => {
  return (
    <RadioButtonContainer>
      <StyledRadioButton id="RadioButton1" name="Category2" defaultChecked />
      <label htmlFor="RadioButton1">서비스 기획자</label>

      <StyledRadioButton id="RadioButton2" name="Category2" />
      <label htmlFor="RadioButton2">디자이너</label>

      <StyledRadioButton id="RadioButton3" name="Category2" />
      <label htmlFor="RadioButton3">프론트 개발자</label>

      <StyledRadioButton id="RadioButton4" name="Category2" />
      <label htmlFor="RadioButton4">백엔드 개발자</label>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRadioButton = styled.input.attrs({ type: "radio" })`
  /* Hide the default radio button */
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  /* Style the custom button appearance */
  + label {
    display: inline-block;
    width: 110px;
    padding: 10px 14px;
    font-size: 14px;
    font-weight: 500;
    color: #b3b3b3;
    border-radius: 4px;
    margin-bottom: 14px;
    background-color: inherit;
    cursor: pointer;
  }

  /* Style when the radio button is checked */
  &:checked + label {
    color: #000;
    background: #ededed;
  }
`;
