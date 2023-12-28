import React from "react";
import styled from "styled-components";
export const Category = () => {
  return (
    <RadioButtonContainer>
      <StyledRadioButton id="myRadioButton1" name="Category" defaultChecked />
      <label htmlFor="myRadioButton1">전체</label>

      <StyledRadioButton id="myRadioButton2" name="Category" />
      <label htmlFor="myRadioButton2">카테고리1</label>

      <StyledRadioButton id="myRadioButton3" name="Category" />
      <label htmlFor="myRadioButton3">카테고리2</label>

      <StyledRadioButton id="myRadioButton4" name="Category" />
      <label htmlFor="myRadioButton4">카테고리3</label>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div`
  display: inline-block;
  margin: 26px 0 24px;
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
    padding: 10px 20px;
    border: 1px solid #ededed;
    color: #b3b3b3;
    text-align: center;
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;
  }

  /* Style when the radio button is checked */
  &:checked + label {
    color: #000;
    background: #ededed;
  }
`;
