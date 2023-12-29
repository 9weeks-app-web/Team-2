import React, { useState, useEffect } from "react";
import styled from "styled-components";

const categoryInfo = [
  {
    title: "전체",
    name: "Category",
    id: "radioButton1",
    value: "total",
  },
  {
    title: "카테고리1",
    name: "Category",
    id: "radioButton2",
    value: "category",
  },
];

export const Category = () => {
  const [selectedValue, setSelectedValue] = useState<string>("total");
  useEffect(() => {
    const fetchFn = async () => {
      console.log(selectedValue);
      //fetch => 상태관리-> 데이터 동적으로 렌더링
    };
    fetchFn();
  }, [selectedValue]);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(() => event.target.value);
  };
  return (
    <RadioButtonContainer>
      <div>{selectedValue}</div>
      <Label htmlFor="myRadioButton1" $selected={selectedValue === "total"}>
        전체
        <StyledRadioButton
          id="myRadioButton1"
          name="Category"
          onChange={handleRadioChange}
          value="total"
        />
      </Label>

      <Label htmlFor="myRadioButton2" $selected={selectedValue === "category1"}>
        카테고리1
        <StyledRadioButton
          id="myRadioButton2"
          name="Category"
          onChange={handleRadioChange}
          value="category1"
        />
      </Label>

      <Label htmlFor="myRadioButton3" $selected={selectedValue === "category2"}>
        카테고리2
        <StyledRadioButton
          id="myRadioButton3"
          name="Category"
          onChange={handleRadioChange}
          value="category2"
        />
      </Label>

      <Label htmlFor="myRadioButton4" $selected={selectedValue === "category3"}>
        카테고리3
        <StyledRadioButton
          id="myRadioButton4"
          name="Category"
          onChange={handleRadioChange}
          value="category3"
        />
      </Label>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div`
  display: inline-block;
  margin: 26px 0 24px;
`;

const Label = styled.label<{ $selected: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ededed;
  color: ${(props) => (props.$selected ? "#000" : "#b3b3b3")};
  background: ${(props) => (props.$selected ? "#ededed" : "transparent")};
  text-align: center;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
`;

const StyledRadioButton = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
