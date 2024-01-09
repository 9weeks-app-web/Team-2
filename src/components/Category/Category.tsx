"use client";
import React from "react";
import { colors } from "@/styles/colors";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
import { RecoilState, atom, useRecoilState } from "recoil";
import styled from "styled-components";
interface CartegoryObjProps {
  title: string;
  name: string;
  id: string;
  value: string;
}
interface CartegoryProps {
  categoryInfo: CartegoryObjProps[];
  recoilState: RecoilState<string>;
}

export const Category = ({ categoryInfo, recoilState }: CartegoryProps) => {
  const [selectedValue, setSelectedValue] = useRecoilState(recoilState);
  // const [selectedValue, setSelectedValue] = useState<string>("total");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(() => event.target.value);
  };
  return (
    <RadioContainer>
      {selectedValue &&
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
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
  display: inline-block;
  margin-bottom: 24px;
`;

const Label = styled.label<{ $selected: boolean }>`
  display: inline-block;
  padding: 10px 14px;
  border: 1px solid var(${colors.PRIMARY_50});
  color: ${(props) =>
    props.$selected
      ? `var(${colors.NEUTRAL_WHITE})`
      : `var(${colors.PRIMARY_50})`};
  background: ${(props) =>
    props.$selected
      ? `var(${colors.PRIMARY_70})`
      : `var(${colors.NEUTRAL_WHITE})`};
  text-align: center;
  border-radius: 50px;
  margin-right: 8px;
  cursor: pointer;
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
