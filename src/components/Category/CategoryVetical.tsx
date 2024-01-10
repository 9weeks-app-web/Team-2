import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import React, { useEffect, useState } from "react";
import { RecoilState, useRecoilState } from "recoil";
import styled from "styled-components";
interface CartegoryObjProps {
  title: string;
  name: string;
  id: string;
  value: string;
}
interface CartegoryProps {
  categoryInfo: CartegoryObjProps[];
  recoilState?: RecoilState<string>;
}

export const CategoryVetical = ({
  categoryInfo,
  recoilState,
}: CartegoryProps) => {
  const [selectedValue, setSelectedValue] = useRecoilState(recoilState!);
  // const [selectedValue, setSelectedValue] = useState<string>("planner");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(() => event.target.value);
  };
  return (
    <RadioButtonContainer>
      {categoryInfo &&
        categoryInfo.map((el) => (
          <Label
            key={el.id}
            htmlFor={el.id}
            $selected={selectedValue === `${el.value}`}
          >
            <B2_M_14>{el.title}</B2_M_14>
            <RadioButton
              id={el.id}
              name={el.name}
              value={el.value}
              onChange={handleRadioChange}
            />
          </Label>
        ))}
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  height: 178px;
  justify-content: space-between;
`;
const Label = styled.label<{ $selected: boolean }>`
  text-align: center;
  display: inline-block;
  width: 110px;
  padding: 10px 14px;
  border-radius: 4px;
  color: ${(props) =>
    props.$selected ? `var(${colors.PRIMARY_5})` : `var(${colors.NEUTRAL_50})`};
  background: ${(props) =>
    props.$selected ? `var(${colors.PRIMARY_70})` : "inherit"};
  cursor: pointer;
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
