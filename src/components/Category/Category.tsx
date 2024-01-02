import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Category = ({ categoryList }: CategoryProps) => {
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
      {categoryList.map((category) => {
        return (
          <Label
            htmlFor={category.id}
            $selected={selectedValue === category.value}
            key={category.id}
          >
            {category.title}
            <StyledRadioButton
              id={category.id}
              name={category.name}
              onChange={handleRadioChange}
              value={category.value}
            />
          </Label>
        );
      })}
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
